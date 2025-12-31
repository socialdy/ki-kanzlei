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
      // Use word boundaries to avoid matching inside other words (e.g. "rag" in "Beitrags")
      const regex = new RegExp(`\\b${keywordEscaped}\\b`, 'gi');

      let match;
      while ((match = regex.exec(processedContent)) !== null) {
        const index = match.index;

        if (!isInsideLink(processedContent, index)) {
          // Ersetze nur das erste Vorkommen pro Keyword-Gruppe
          processedContent =
            processedContent.substring(0, index) +
            `<a href="${mapping.url}" class="text-primary hover:underline font-medium">${mapping.anchorText}</a>` +
            processedContent.substring(index + match[0].length);

          usedLinks.add(mapping.url);
          // Break out of the keyword loop to move to the next mapping group
          break;
        }
      }

      // If we replaced something (checked by seeing if the keyword loop was broken? 
      // No, we need a flag or check if usedLinks has it)
      if (usedLinks.has(mapping.url)) {
        break; // Break the keywords loop if a link was added for this mapping
      }
    }
  }

  return processedContent;
}

