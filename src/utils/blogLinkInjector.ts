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
 */
export function injectInternalLinks(content: string): string {
  let processedContent = content;
  const usedLinks = new Set<string>();

  // Sortiere nach Länge (längere Keywords zuerst), um spezifischere Matches zu priorisieren
  const sortedMappings = [...linkMappings].sort((a, b) => {
    const aMaxLength = Math.max(...a.keywords.map(k => k.length));
    const bMaxLength = Math.max(...b.keywords.map(k => k.length));
    return bMaxLength - aMaxLength;
  });

  for (const mapping of sortedMappings) {
    // Überspringe, wenn dieser Link bereits verwendet wurde
    if (usedLinks.has(mapping.url)) continue;

    for (const keyword of mapping.keywords) {
      const keywordEscaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      // Use word boundaries to prevent matching keywords inside other words (e.g., "RAG" in "Beitrags")
      const regex = new RegExp(`\\b${keywordEscaped}\\b`, 'gi');

      // Use regex.exec() to find actual match positions (respects word boundaries)
      let foundIndex = -1;
      let matchLength = 0;
      let execResult: RegExpExecArray | null;

      // Reset regex lastIndex
      regex.lastIndex = 0;

      while ((execResult = regex.exec(processedContent)) !== null) {
        const index = execResult.index;

        if (!isInsideLink(processedContent, index)) {
          foundIndex = index;
          matchLength = execResult[0].length;
          break;
        }
      }

      if (foundIndex !== -1) {
        // Ersetze nur das erste Vorkommen
        processedContent =
          processedContent.substring(0, foundIndex) +
          `<a href="${mapping.url}" class="text-primary hover:underline font-medium">${mapping.anchorText}</a>` +
          processedContent.substring(foundIndex + matchLength);

        usedLinks.add(mapping.url);
        break; // Weiter zur nächsten Mapping-Gruppe
      }
    }
  }

  return processedContent;
}
