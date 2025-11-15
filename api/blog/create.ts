/**
 * Vercel Serverless Function für n8n Blog-Post Integration
 * 
 * Diese API-Route empfängt Blog-Posts von n8n und:
 * 1. Validiert die Authentifizierung
 * 2. Konvertiert die Daten ins richtige Format
 * 3. Committed die Datei über GitHub API
 * 
 * URL: https://deine-domain.vercel.app/api/blog/create
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Octokit } from '@octokit/rest';

interface CMSBlogItem {
  id: string;
  cmsLocaleId?: string;
  lastPublished?: string | null;
  lastUpdated: string;
  createdOn: string;
  isArchived: boolean;
  isDraft: boolean;
  fieldData: {
    'create-date': string;
    'read-estimation': number;
    name: string;
    description: string;
    content: string;
    author: string;
    category: string;
    slug: string;
    thumbnail?: {
      fileId: string;
      url: string;
      alt: string;
    };
  };
}

interface CMSBlogResponse {
  items: CMSBlogItem[];
}

/**
 * Aktualisiert die Sitemap automatisch mit allen Blog-Posts
 */
async function updateSitemap(
  octokit: Octokit,
  owner: string,
  repo: string,
  branch: string,
  blogItems: CMSBlogItem[]
): Promise<void> {
  const sitemapPath = 'public/sitemap.xml';
  const baseUrl = 'https://ki-kanzlei.at';
  const today = new Date().toISOString().split('T')[0];

  // Statische Seiten (immer in der Sitemap)
  const staticPages = [
    { loc: '/', lastmod: today, changefreq: 'weekly', priority: '1.0' },
    { loc: '/ki-loesungen-psychotherapeuten', lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: '/ki-loesungen-hotels', lastmod: today, changefreq: 'weekly', priority: '0.8' },
    { loc: '/blog', lastmod: today, changefreq: 'weekly', priority: '0.7' },
    { loc: '/impressum', lastmod: '2024-12-19', changefreq: 'monthly', priority: '0.3' },
    { loc: '/datenschutz', lastmod: '2024-12-19', changefreq: 'monthly', priority: '0.3' },
  ];

  // Erstelle Blog-Post URLs
  const blogUrls = blogItems
    .filter(item => !item.isArchived && !item.isDraft)
    .map(item => {
      const lastmod = new Date(item.fieldData['create-date']).toISOString().split('T')[0];
      return {
        loc: `/blog/${item.fieldData.slug}`,
        lastmod: lastmod,
        changefreq: 'monthly',
        priority: '0.6',
      };
    });

  // Kombiniere alle URLs
  const allUrls = [...staticPages, ...blogUrls];

  // Generiere XML
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const urlsetClose = '</urlset>';

  const urlEntries = allUrls.map(url => {
    return `  <url>\n    <loc>${baseUrl}${url.loc}</loc>\n    <lastmod>${url.lastmod}</lastmod>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>`;
  }).join('\n');

  const sitemapXml = xmlHeader + urlsetOpen + urlEntries + '\n' + urlsetClose;

  // Lade aktuelle Sitemap SHA (falls vorhanden)
  let sha: string | undefined;
  try {
    const { data: fileData } = await octokit.repos.getContent({
      owner,
      repo,
      path: sitemapPath,
      ref: branch,
    });
    if ('sha' in fileData) {
      sha = fileData.sha;
    }
  } catch (error: any) {
    if (error.status !== 404) {
      throw error;
    }
  }

  // Committe aktualisierte Sitemap
  await octokit.repos.createOrUpdateFileContents({
    owner,
    repo,
    path: sitemapPath,
    message: `Update sitemap: ${blogUrls.length} blog posts`,
    content: Buffer.from(sitemapXml).toString('base64'),
    branch,
    sha,
    committer: {
      name: 'n8n Blog Agent',
      email: 'n8n@ki-kanzlei.at',
    },
    author: {
      name: 'n8n Blog Agent',
      email: 'n8n@ki-kanzlei.at',
    },
  });

  console.log(`Sitemap updated with ${blogUrls.length} blog posts`);
}

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // Nur POST erlauben
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 1. Authentifizierung prüfen
    const authHeader = request.headers.authorization;
    const expectedToken = process.env.N8N_API_SECRET;

    if (!expectedToken) {
      console.error('N8N_API_SECRET ist nicht gesetzt');
      return response.status(500).json({ 
        error: 'Server configuration error' 
      });
    }

    if (authHeader !== `Bearer ${expectedToken}`) {
      return response.status(401).json({ error: 'Unauthorized' });
    }

    // 2. Daten validieren
    const data: CMSBlogResponse | CMSBlogItem = request.body;

    if (!data) {
      return response.status(400).json({ 
        error: 'No data provided',
        message: 'Request body is empty or invalid'
      });
    }

    // Normalisiere zu Array-Format
    const items: CMSBlogItem[] = 'items' in data && Array.isArray(data.items)
      ? data.items 
      : [data as CMSBlogItem];

    if (!items || items.length === 0) {
      return response.status(400).json({ 
        error: 'No items provided' 
      });
    }

    // Validiere dass alle Items fieldData haben
    for (const item of items) {
      if (!item.fieldData) {
        return response.status(400).json({
          error: 'Invalid item structure',
          message: `Item ${item.id || 'unknown'} is missing fieldData`,
          receivedItem: JSON.stringify(item, null, 2)
        });
      }
      if (!item.fieldData.slug || !item.fieldData.name) {
        return response.status(400).json({
          error: 'Invalid fieldData',
          message: `Item ${item.id || 'unknown'} is missing required fields (slug, name)`,
          receivedFieldData: JSON.stringify(item.fieldData, null, 2)
        });
      }
    }

    // 3. GitHub Client initialisieren
    const githubToken = process.env.GITHUB_TOKEN;
    const githubOwner = process.env.GITHUB_OWNER;
    const githubRepo = process.env.GITHUB_REPO;
    const githubBranch = process.env.GITHUB_BRANCH || 'main';

    if (!githubToken || !githubOwner || !githubRepo) {
      console.error('GitHub credentials fehlen:', {
        hasToken: !!githubToken,
        hasOwner: !!githubOwner,
        hasRepo: !!githubRepo,
      });
      return response.status(500).json({ 
        error: 'GitHub configuration missing' 
      });
    }

    const octokit = new Octokit({ auth: githubToken });

    // 3.1 Teste Repository-Zugriff
    try {
      await octokit.repos.get({
        owner: githubOwner,
        repo: githubRepo,
      });
    } catch (error: any) {
      console.error('GitHub Repository Zugriff fehlgeschlagen:', {
        owner: githubOwner,
        repo: githubRepo,
        status: error.status,
        message: error.message,
      });
      
      if (error.status === 404) {
        return response.status(500).json({
          error: 'Repository not found',
          message: `Repository ${githubOwner}/${githubRepo} wurde nicht gefunden. Prüfe GITHUB_OWNER und GITHUB_REPO.`,
          details: {
            owner: githubOwner,
            repo: githubRepo,
            branch: githubBranch,
          }
        });
      }
      
      if (error.status === 401 || error.status === 403) {
        return response.status(500).json({
          error: 'GitHub token has no access',
          message: `Der GitHub Token hat keinen Zugriff auf das Repository ${githubOwner}/${githubRepo}. Prüfe ob der Token die 'repo' Berechtigung hat.`,
          details: {
            owner: githubOwner,
            repo: githubRepo,
            hint: 'Der Token muss die Berechtigung "repo" (Full control of private repositories) haben.'
          }
        });
      }
      
      return response.status(500).json({
        error: 'GitHub access error',
        message: error.message || 'Unbekannter Fehler beim Zugriff auf GitHub',
        details: {
          owner: githubOwner,
          repo: githubRepo,
          status: error.status,
        }
      });
    }

    // 4. Verarbeite und lade Bilder hoch (falls vorhanden)
    const processThumbnails = async (items: CMSBlogItem[]): Promise<void> => {
      for (const item of items) {
        if (item.fieldData.thumbnail?.url) {
          try {
            const thumbnailUrl = item.fieldData.thumbnail.url;
            
            // Prüfe ob es bereits eine lokale URL ist
            if (thumbnailUrl.includes('/img/blog/') || thumbnailUrl.includes('vercel.app/img/blog/')) {
              continue; // Bereits lokal, überspringe
            }

            // Lade Bild herunter
            const imageResponse = await fetch(thumbnailUrl);
            if (!imageResponse.ok) {
              console.warn(`Failed to download image: ${thumbnailUrl}`);
              continue;
            }

            const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());
            const contentType = imageResponse.headers.get('content-type') || 'image/jpeg';
            
            // Bestimme Dateiname
            const slug = item.fieldData.slug;
            const extension = contentType.split('/')[1] || 'jpg';
            const filename = `${slug}.${extension}`;
            const imagePath = `public/img/blog/${filename}`;

            // Prüfe ob Datei bereits existiert
            let sha: string | undefined;
            try {
              const { data: fileData } = await octokit.repos.getContent({
                owner: githubOwner,
                repo: githubRepo,
                path: imagePath,
                ref: githubBranch,
              });
              if ('sha' in fileData) {
                sha = fileData.sha;
              }
            } catch (error: any) {
              if (error.status !== 404) {
                throw error;
              }
            }

            // Committe Bild zu GitHub
            await octokit.repos.createOrUpdateFileContents({
              owner: githubOwner,
              repo: githubRepo,
              path: imagePath,
              message: `Add blog image: ${filename}`,
              content: imageBuffer.toString('base64'),
              branch: githubBranch,
              sha: sha,
              committer: {
                name: 'n8n Blog Agent',
                email: 'n8n@ki-kanzlei.at',
              },
              author: {
                name: 'n8n Blog Agent',
                email: 'n8n@ki-kanzlei.at',
              },
            });

            // Ersetze URL mit lokaler URL
            const publicUrl = process.env.VERCEL_URL 
              ? `https://${process.env.VERCEL_URL}/img/blog/${filename}`
              : `https://raw.githubusercontent.com/${githubOwner}/${githubRepo}/${githubBranch}/${imagePath}`;
            
            item.fieldData.thumbnail.url = publicUrl;
            
            console.log(`Image uploaded: ${filename} -> ${publicUrl}`);
          } catch (error: any) {
            console.error(`Error uploading image for ${item.fieldData.slug}:`, error.message);
            // Fehler beim Bild-Upload blockiert nicht den Post-Upload
          }
        }
      }
    };

    // 5. Lade aktuelle blogPosts.json
    let existingData: CMSBlogResponse = { items: [] };
    
    try {
      const { data: fileData } = await octokit.repos.getContent({
        owner: githubOwner,
        repo: githubRepo,
        path: 'public/data/blogPosts.json',
        ref: githubBranch,
      });

      if ('content' in fileData && fileData.content) {
        const decodedContent = Buffer.from(fileData.content, 'base64').toString('utf-8');
        existingData = JSON.parse(decodedContent);
      }
    } catch (error: any) {
      // Datei existiert noch nicht, das ist okay
      if (error.status !== 404) {
        console.warn('Fehler beim Laden der bestehenden Datei:', error.message);
      }
    }

    // 6. Verarbeite Thumbnails (lade Bilder hoch)
    await processThumbnails(items);

    // 7. Merge neue Posts mit bestehenden
    const existingItems = existingData.items || [];
    const existingSlugs = new Set(existingItems.map(item => item.fieldData.slug));
    
    // Filtere nur neue oder aktualisierte Posts
    const newItems = items.filter(item => {
      if (!existingSlugs.has(item.fieldData.slug)) {
        return true; // Neuer Post
      }
      
      // Prüfe ob aktualisiert
      const existingItem = existingItems.find(
        existing => existing.fieldData.slug === item.fieldData.slug
      );
      
      if (existingItem) {
        const existingDate = new Date(existingItem.lastUpdated);
        const newDate = new Date(item.lastUpdated);
        return newDate > existingDate; // Nur wenn neuer
      }
      
      return false;
    });

    if (newItems.length === 0) {
      return response.status(200).json({ 
        success: true,
        message: 'No new or updated posts',
        skipped: items.length
      });
    }

    // Aktualisiere bestehende Posts (nur wenn tatsächlich neuer)
    const updatedItems = existingItems.map(existing => {
      const newItem = items.find(
        item => item.fieldData.slug === existing.fieldData.slug
      );
      
      if (newItem) {
        // Prüfe ob das neue Item tatsächlich neuer ist
        const existingDate = new Date(existing.lastUpdated);
        const newDate = new Date(newItem.lastUpdated);
        if (newDate > existingDate) {
          return newItem; // Nur aktualisieren wenn neuer
        }
      }
      
      return existing; // Behalte bestehendes Item
    });

    // Füge neue Posts hinzu (die noch nicht existieren)
    const newItemsToAdd = newItems.filter(item => !existingSlugs.has(item.fieldData.slug));

    // Kombiniere: bestehende (aktualisierte oder unveränderte) + neue
    const allItems = [
      ...updatedItems,
      ...newItemsToAdd
    ];

    // 8. Erstelle JSON-Content
    const jsonContent: CMSBlogResponse = {
      items: allItems
    };

    const jsonString = JSON.stringify(jsonContent, null, 2);

    // 9. Committe zu GitHub
    let sha: string | undefined;
    
    try {
      const { data: fileData } = await octokit.repos.getContent({
        owner: githubOwner,
        repo: githubRepo,
        path: 'public/data/blogPosts.json',
        ref: githubBranch,
      });

      if ('sha' in fileData) {
        sha = fileData.sha;
      }
    } catch (error: any) {
      if (error.status !== 404) {
        throw error;
      }
    }

    const commitMessage = newItems.length === 1
      ? `Add blog post: ${newItems[0].fieldData.name}`
      : `Update blog posts: ${newItems.length} new/updated posts`;

    await octokit.repos.createOrUpdateFileContents({
      owner: githubOwner,
      repo: githubRepo,
      path: 'public/data/blogPosts.json',
      message: commitMessage,
      content: Buffer.from(jsonString).toString('base64'),
      branch: githubBranch,
      sha: sha,
      committer: {
        name: 'n8n Blog Agent',
        email: 'n8n@ki-kanzlei.at',
      },
      author: {
        name: 'n8n Blog Agent',
        email: 'n8n@ki-kanzlei.at',
      },
    });

    // 9.1 Aktualisiere Sitemap automatisch
    try {
      await updateSitemap(octokit, githubOwner, githubRepo, githubBranch, allItems);
    } catch (error: any) {
      console.warn('Fehler beim Aktualisieren der Sitemap:', error.message);
      // Fehler beim Sitemap-Update blockiert nicht den Erfolg
    }

    // 10. Erfolgreiche Antwort
    return response.status(200).json({
      success: true,
      message: commitMessage,
      added: newItems.length,
      total: allItems.length,
      newPosts: newItems.map(item => ({
        slug: item.fieldData.slug,
        title: item.fieldData.name,
        thumbnail: item.fieldData.thumbnail?.url, // Bereits lokale URL nach Upload
      })),
      imagesUploaded: newItems.filter(item => item.fieldData.thumbnail?.url).length,
    });

  } catch (error: any) {
    console.error('Error creating blog post:', error);
    
    return response.status(500).json({
      error: 'Failed to create blog post',
      message: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    });
  }
}

