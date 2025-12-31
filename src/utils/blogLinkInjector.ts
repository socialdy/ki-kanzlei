/**
 * Injiziert automatisch interne Links zu KI Kanzlei-Seiten in Blog-Content
 */

interface LinkMapping {
  keywords: string[];
  url: string;
  anchorText: string;
}

const linkMappings: LinkMapping[] = [
  {
    keywords: ['KI Kanzlei', 'KI-Kanzlei', 'ki kanzlei', 'ki-kanzlei'],
    url: '/',
    anchorText: 'KI Kanzlei'
  },
  {
    keywords: ['Psychotherapeuten', 'Psychotherapie', 'psychotherapeuten', 'psychotherapie'],
    url: '/ki-loesungen-psychotherapeuten',
    anchorText: 'KI-Lösungen für Psychotherapeuten'
  },
  {
    keywords: ['Hotels', 'Hotel', 'hotels', 'hotel'],
    url: '/ki-loesungen-hotels',
    anchorText: 'KI-Lösungen für Hotels'
  },
  {
    keywords: ['Voice Agent', 'Voice-Agent', 'voice agent', 'voice-agent', 'KI-Abendrezeptionist', 'KI Abendrezeptionist'],
    url: '/ki-loesungen-hotels#loesungen',
    anchorText: 'KI-Abendrezeptionist'
  },
  {
    keywords: ['RAG', 'RAG-Modell', 'Wissensdatenbank', 'wissensdatenbank'],
    url: '/#loesungen',
    anchorText: 'KI Wissensdatenbank'
  },
  {
    keywords: ['Workflow-Automatisierung', 'Workflow Automatisierung', 'workflow-automatisierung'],
    url: '/#loesungen',
    anchorText: 'Workflow-Automatisierung'
  },
  {
    keywords: ['KI-Integration', 'KI Integration', 'ki-integration'],
    url: '/#loesungen',
    anchorText: 'KI-Integration'
  },
];

/**
 * Prüft, ob ein Text bereits in einem Link ist
 */
function isInsideLink(content: string, index: number): boolean {
  const beforeText = content.substring(0, index);
  const lastOpenTag = beforeText.lastIndexOf('<a');
  const lastCloseTag = beforeText.lastIndexOf('</a>');

  // Wenn ein <a> Tag gefunden wurde und kein </a> danach kommt, ist es in einem Link
  if (lastOpenTag !== -1 && (lastCloseTag === -1 || lastCloseTag < lastOpenTag)) {
    return true;
  }

  return false;
}

/**
 * Ersetzt Keywords im Content durch Links (maximal 1x pro Keyword-Gruppe)
 * DEAKTIVIERT: Returns content unchanged to prevent incorrect replacements
 */
export function injectInternalLinks(content: string): string {
  // Automatische Link-Replacements deaktiviert, da sie Wortteile fälschlicherweise ersetzen
  // Der n8n AI Agent erstellt bereits korrekte Links im Content
  return content;
}
