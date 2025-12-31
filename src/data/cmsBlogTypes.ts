/**
 * CMS/Webflow Blog Post Datenstruktur
 * Diese Struktur entspricht dem Format, das von n8n/Webflow kommt
 */

export interface CMSThumbnail {
  fileId: string;
  url: string;
  alt: string;
}

export interface CMSFieldData {
  "create-date": string;
  "read-estimation": number;
  name: string;
  description: string;
  content: string;
  author: string;
  category: string;
  slug: string;
  thumbnail?: CMSThumbnail;
}

export interface CMSBlogItem {
  id: string;
  cmsLocaleId?: string;
  lastPublished?: string | null;
  lastUpdated: string;
  createdOn: string;
  isArchived: boolean;
  isDraft: boolean;
  fieldData: CMSFieldData;
}

export interface CMSBlogResponse {
  items: CMSBlogItem[];
}

/**
 * Kategorien-Mapping: Webflow Category IDs zu Blog-Kategorien
 * Diese IDs müssen mit den tatsächlichen Webflow-Kategorien-IDs übereinstimmen
 */
export const categoryMapping: Record<string, "KI Grundlagen" | "KI Anwendungen" | "KI Tools & Technologien" | "KI Strategien für Unternehmen" | "Automatisierung & KI-Agenten" | "Generative KI" | "Prompt Engineering" | "Case Studies" | "KI Trends & News" | "Ethik & Sicherheit in KI" | "KI für Marketing" | "KI für Unternehmen / KMU"> = {
  // 1. KI Grundlagen
  "68d11f6745d19de0034ef001": "KI Grundlagen",

  // 2. KI Anwendungen
  "68d11f6745d19de0034ef002": "KI Anwendungen",

  // 3. KI Tools & Technologien
  "68d11f5b5810331c260bf001": "KI Tools & Technologien",

  // 4. KI Strategien für Unternehmen
  "68d11f5137d370b2c0c62001": "KI Strategien für Unternehmen",

  // 5. Automatisierung & KI-Agenten
  "68d11f3af0df2d0ebdf02001": "Automatisierung & KI-Agenten",

  // 6. Generative KI
  "68d11f6745d19de0034ef003": "Generative KI",

  // 7. Prompt Engineering
  "68d11f5b5810331c260bf002": "Prompt Engineering",

  // 8. Case Studies
  "68d11f5137d370b2c0c62002": "Case Studies",

  // 9. KI Trends & News
  "68d11f6745d19de0034ef004": "KI Trends & News",

  // 10. Ethik & Sicherheit in KI
  "68d11f5b5810331c260bf003": "Ethik & Sicherheit in KI",

  // 11. KI für Marketing
  "68d11f5137d370b2c0c62003": "KI für Marketing",

  // 12. KI für Unternehmen / KMU
  "68d11f3af0df2d0ebdf02002": "KI für Unternehmen / KMU",

};

/**
 * Konvertiert CMS-Daten in BlogPost-Format
 */
export function mapCMSItemToBlogPost(item: CMSBlogItem): import("./blogPosts").BlogPost | null {
  const { fieldData } = item;

  // Kategorie mappen (Fallback zu "KI Grundlagen" wenn unbekannt)
  const category = categoryMapping[fieldData.category] || "KI Grundlagen";
  if (!categoryMapping[fieldData.category]) {
    console.warn(`Unbekannte Kategorie-ID: ${fieldData.category}, verwende Fallback "KI Grundlagen"`);
  }

  // Datum formatieren (von ISO-String zu YYYY-MM-DD)
  const createDate = new Date(fieldData["create-date"]);
  const formattedDate = createDate.toISOString().split('T')[0];

  // Content formatieren für bessere Lesbarkeit
  let formattedContent = fieldData.content.replace(/\\n/g, '\n'); // \n zu echten Zeilenumbrüchen

  // Entferne überflüssige Whitespace zwischen Tags
  formattedContent = formattedContent.replace(/>\s+</g, '><');

  // Füge Abstände zwischen Elementen hinzu für bessere Lesbarkeit
  formattedContent = formattedContent
    // Abstände nach Überschriften
    .replace(/(<\/h[1-6]>)(<)/g, '$1\n\n$2')
    // Abstände vor Überschriften
    .replace(/(>)(<h[1-6])/g, '$1\n\n$2')
    // Abstände nach Absätzen
    .replace(/(<\/p>)(<)/g, '$1\n\n$2')
    // Abstände vor Absätzen (außer nach anderen Absätzen)
    .replace(/(>)(<p>)/g, '$1\n$2')
    // Abstände nach Listen
    .replace(/(<\/ul>|<\/ol>)(<)/g, '$1\n\n$2')
    // Abstände vor Listen
    .replace(/(>)(<ul>|<ol>)/g, '$1\n\n$2')
    // Abstände nach List-Items
    .replace(/(<\/li>)(<)/g, '$1\n$2')
    // Abstände nach Blockquotes
    .replace(/(<\/blockquote>)(<)/g, '$1\n\n$2')
    // Normalisiere mehrfache Zeilenumbrüche
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  // Link injection removed - n8n AI agent already creates correct links in content
  // The previous injection code was causing bugs like "Beitrags" → "Beit<a>KI Wissensdatenbank</a>s"
  // because it matched "rag" inside "Beitrags" without word boundaries

  return {
    slug: fieldData.slug,
    title: fieldData.name,
    excerpt: fieldData.description,
    content: formattedContent,
    date: formattedDate,
    category: category,
    image: fieldData.thumbnail?.url,
    readTime: fieldData["read-estimation"],
  };
}

/**
 * Konvertiert ein Array von CMS-Items zu BlogPosts
 */
export function mapCMSResponseToBlogPosts(response: CMSBlogResponse): import("./blogPosts").BlogPost[] {
  return response.items
    .filter(item => !item.isArchived && !item.isDraft) // Nur veröffentlichte Posts
    .map(item => mapCMSItemToBlogPost(item))
    .filter((post): post is import("./blogPosts").BlogPost => post !== null);
}

