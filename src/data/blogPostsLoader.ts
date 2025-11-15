/**
 * Blog Posts Loader
 * 
 * Diese Datei lädt Blog-Posts entweder aus:
 * 1. Statischen Daten (blogPosts.ts)
 * 2. CMS/Webflow-Daten (aus einer JSON-Datei oder API)
 * 
 * Für n8n: Die Daten sollten als JSON-Datei in /public/data/blogPosts.json gespeichert werden
 */

import { blogPosts as staticBlogPosts } from "./blogPosts";
import { mapCMSResponseToBlogPosts, CMSBlogResponse } from "./cmsBlogTypes";

let cachedBlogPosts: typeof staticBlogPosts | null = null;

/**
 * Lädt Blog-Posts aus verschiedenen Quellen
 */
export async function loadBlogPosts(): Promise<typeof staticBlogPosts> {
  // Wenn bereits gecacht, zurückgeben
  if (cachedBlogPosts) {
    return cachedBlogPosts;
  }

  try {
    // Versuche CMS-Daten zu laden (von n8n generiert)
    const response = await fetch('/data/blogPosts.json');
    
    if (response.ok) {
      const cmsData: CMSBlogResponse = await response.json();
      const mappedPosts = mapCMSResponseToBlogPosts(cmsData);
      
      if (mappedPosts.length > 0) {
        cachedBlogPosts = mappedPosts;
        return mappedPosts;
      }
    }
  } catch (error) {
    console.warn('CMS-Daten konnten nicht geladen werden, verwende statische Daten:', error);
  }

  // Fallback: Statische Daten
  cachedBlogPosts = staticBlogPosts;
  return staticBlogPosts;
}

/**
 * Synchroner Zugriff auf Blog-Posts (für SSR oder initial load)
 * Gibt statische Daten zurück, bis CMS-Daten geladen sind
 */
export function getBlogPostsSync(): typeof staticBlogPosts {
  return cachedBlogPosts || staticBlogPosts;
}



