# Blog Posts JSON Format

Diese Datei beschreibt das Format für `blogPosts.json`, das von n8n/Webflow generiert wird.

## Dateipfad

Die JSON-Datei muss hier gespeichert werden: `/public/data/blogPosts.json`

## JSON-Struktur

```json
{
  "items": [
    {
      "id": "69158a59b76aed6e07dde5f6",
      "cmsLocaleId": "68d11e421e4829ec1356ebfe",
      "lastPublished": null,
      "lastUpdated": "2025-11-13T07:35:53.106Z",
      "createdOn": "2025-11-13T07:35:53.106Z",
      "isArchived": false,
      "isDraft": false,
      "fieldData": {
        "create-date": "2025-11-13T07:35:51.392Z",
        "read-estimation": 3,
        "name": "Artikel Titel",
        "description": "Kurze Beschreibung / Excerpt",
        "content": "<h2>Titel</h2>\n\n<p>Inhalt...</p>",
        "author": "68d12dfef1817bcd39dcd054",
        "category": "68d11f3af0df2d0ebdf0288f",
        "slug": "artikel-slug",
        "thumbnail": {
          "fileId": "69158a58b76aed6e07dde5e5",
          "url": "https://cdn.prod.website-files.com/.../image.png",
          "alt": "Alt-Text für Bild"
        }
      }
    }
  ]
}
```

## Kategorien-Mapping

Die folgenden Webflow Category IDs werden zu Blog-Kategorien gemappt:

**1. KI Grundlagen:**
- `68d11f6745d19de0034ef001` → "KI Grundlagen"

**2. KI Anwendungen:**
- `68d11f6745d19de0034ef002` → "KI Anwendungen"

**3. KI Tools & Technologien:**
- `68d11f5b5810331c260bf001` → "KI Tools & Technologien"

**4. KI Strategien für Unternehmen:**
- `68d11f5137d370b2c0c62001` → "KI Strategien für Unternehmen"

**5. Automatisierung & KI-Agenten:**
- `68d11f3af0df2d0ebdf02001` → "Automatisierung & KI-Agenten"

**6. Generative KI:**
- `68d11f6745d19de0034ef003` → "Generative KI"

**7. Prompt Engineering:**
- `68d11f5b5810331c260bf002` → "Prompt Engineering"

**8. Case Studies:**
- `68d11f5137d370b2c0c62002` → "Case Studies"

**9. KI Trends & News:**
- `68d11f6745d19de0034ef004` → "KI Trends & News"

**10. Ethik & Sicherheit in KI:**
- `68d11f5b5810331c260bf003` → "Ethik & Sicherheit in KI"

**11. KI für Marketing:**
- `68d11f5137d370b2c0c62003` → "KI für Marketing"

**12. KI für Unternehmen / KMU:**
- `68d11f3af0df2d0ebdf02002` → "KI für Unternehmen / KMU"

**Legacy IDs (werden weiterhin unterstützt):**
- `68d11f6745d19de0034ef069` → "KI Anwendungen"
- `68d11f5b5810331c260bf4c4` → "KI Anwendungen"
- `68d11f5137d370b2c0c6217e` → "Automatisierung & KI-Agenten"
- `68d11f3af0df2d0ebdf0288f` → "Automatisierung & KI-Agenten"

**Verfügbare Kategorien:**
1. **KI Grundlagen** - Wissen, Erklärungen, Basics
2. **KI Anwendungen** - Use Cases, Praxisbeispiele
3. **KI Tools & Technologien** - Software, Modelle, Vergleiche
4. **KI Strategien für Unternehmen** - Business, Digitalisierung, Transformation
5. **Automatisierung & KI-Agenten** - Workflows, Bots, Prozesse
6. **Generative KI** - Text, Bild, Video, Audio
7. **Prompt Engineering** - Tipps, Prompts, Best Practices
8. **Case Studies** - Praxisbeispiele & Erfolge
9. **KI Trends & News** - Aktuelle Entwicklungen
10. **Ethik & Sicherheit in KI** - Datenschutz, Sicherheit, Governance
11. **KI für Marketing** - Social Media, Ads, Content
12. **KI für Unternehmen / KMU** - Optimierung, Automatisierung, Effizienz

## Wichtige Hinweise

1. **Nur veröffentlichte Posts**: Posts mit `isArchived: true` oder `isDraft: true` werden ignoriert
2. **Content-Format**: Der `content` sollte HTML sein, `\n` wird automatisch zu Zeilenumbrüchen konvertiert
3. **Datum**: `create-date` wird automatisch zu `YYYY-MM-DD` formatiert
4. **Bild**: `thumbnail.url` wird als `image` verwendet, falls vorhanden

## n8n Workflow

### Option A: GitHub API Integration (Empfohlen)

Der n8n-Agent sendet einen POST Request an die Vercel API-Route:

**URL:** `https://deine-domain.vercel.app/api/blog/create`

**Headers:**
```
Authorization: Bearer dein-n8n-api-secret
Content-Type: application/json
```

**Body:** Siehe `/api/blog/create.README.md` für Details

Die API-Route:
1. Validiert die Authentifizierung
2. Lädt bestehende `blogPosts.json` von GitHub
3. Merged neue/aktualisierte Posts
4. Committed automatisch zu GitHub
5. Vercel deployt automatisch nach GitHub Push

### Option B: Manuelles Committen

Falls du die API-Route nicht nutzen möchtest:
1. Daten von Webflow/CMS abrufen
2. In das obige Format konvertieren
3. Als `blogPosts.json` nach `/public/data/blogPosts.json` committen/pushen

Die Website lädt diese Datei automatisch beim ersten Seitenaufruf.

## Setup-Anleitung

Siehe `/api/blog/create.README.md` für vollständige Setup-Anleitung.

