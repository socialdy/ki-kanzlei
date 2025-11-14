# Blog Post API - n8n Integration

Diese API-Route ermöglicht es n8n, Blog-Posts direkt in das Repository zu committen.

## 📖 Vollständige Setup-Anleitung

**Siehe `SETUP_GUIDE.md` im Root-Verzeichnis für eine detaillierte Schritt-für-Schritt-Anleitung!**

## Quick Setup

### 1. Umgebungsvariablen in Vercel setzen

Gehe zu deinem Vercel Dashboard → Project Settings → Environment Variables:

```
N8N_API_SECRET=dein-super-geheimer-token-hier
GITHUB_TOKEN=ghp_dein_github_personal_access_token
GITHUB_OWNER=dein-github-username
GITHUB_REPO=ki-kanzlei (oder dein repo-name)
GITHUB_BRANCH=main (optional, default: main)
```

**WICHTIG:** Nach dem Setzen der Variablen musst du das Projekt **redeployen**!

### 2. GitHub Personal Access Token erstellen

1. Gehe zu GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Erstelle einen neuen Token mit folgenden Berechtigungen:
   - `repo` (Full control of private repositories)
3. Kopiere den Token und füge ihn als `GITHUB_TOKEN` in Vercel ein

### 3. n8n Workflow konfigurieren

#### HTTP Request Node:

**URL:**
```
https://deine-domain.vercel.app/api/blog/create
```

**Method:** `POST`

**Headers:**
```
Authorization: Bearer dein-super-geheimer-token-hier
Content-Type: application/json
```

**Body (JSON):**
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

**Oder für einzelne Posts:**
```json
{
  "id": "...",
  "fieldData": {
    "slug": "...",
    "name": "...",
    ...
  }
}
```

## Funktionsweise

1. **n8n sendet POST Request** → API-Route empfängt Daten
2. **Authentifizierung** → Prüft `Authorization: Bearer` Token
3. **Bild-Upload** → Lädt Thumbnails automatisch herunter und committed sie zu GitHub
4. **URL-Ersetzung** → Ersetzt externe URLs durch lokale URLs
5. **GitHub API** → Lädt bestehende `blogPosts.json`
6. **Merge** → Fügt neue Posts hinzu oder aktualisiert bestehende
7. **Commit** → Committed die aktualisierte Datei zu GitHub
8. **Vercel Deploy** → Vercel deployt automatisch nach GitHub Push

### Automatischer Bild-Upload

Wenn ein Blog-Post ein `thumbnail.url` Feld hat:
- Das Bild wird automatisch von der URL heruntergeladen
- Das Bild wird zu `public/img/blog/[slug].[extension]` committed
- Die `thumbnail.url` wird durch die lokale URL ersetzt
- Externe URLs werden automatisch durch lokale URLs ersetzt

**Bild-Speicherort:**
- **Repository-Pfad:** `public/img/blog/[slug].[extension]`
- **Öffentliche URL:** `https://deine-domain.vercel.app/img/blog/[slug].[extension]`

**Beispiel:**
- Slug: `ki-wissensdatenbank-rag-modell`
- Repository: `public/img/blog/ki-wissensdatenbank-rag-modell.jpg`
- URL: `https://ki-kanzlei.vercel.app/img/blog/ki-wissensdatenbank-rag-modell.jpg`

## Response

**Erfolg (200):**
```json
{
  "success": true,
  "message": "Add blog post: Artikel Titel",
  "added": 1,
  "total": 5,
  "imagesUploaded": 1,
  "newPosts": [
    {
      "slug": "artikel-slug",
      "title": "Artikel Titel",
      "thumbnail": "https://deine-domain.vercel.app/img/blog/artikel-slug.jpg"
    }
  ]
}
```

**Fehler (401):**
```json
{
  "error": "Unauthorized"
}
```

**Fehler (500):**
```json
{
  "error": "Failed to create blog post",
  "message": "Error details..."
}
```

## Sicherheit

- ✅ Bearer Token Authentifizierung
- ✅ GitHub Token nur für Repository-Zugriff
- ✅ Nur POST Requests erlaubt
- ✅ Validierung aller Eingabedaten

## Testing

Teste die API lokal mit curl:

```bash
curl -X POST https://deine-domain.vercel.app/api/blog/create \
  -H "Authorization: Bearer dein-token" \
  -H "Content-Type: application/json" \
  -d '{
    "items": [{
      "id": "test-123",
      "fieldData": {
        "slug": "test-post",
        "name": "Test Post",
        "description": "Test",
        "content": "<p>Test</p>",
        "create-date": "2025-01-20T00:00:00Z",
        "read-estimation": 5,
        "author": "test",
        "category": "68d11f3af0df2d0ebdf0288f",
        "lastUpdated": "2025-01-20T00:00:00Z",
        "createdOn": "2025-01-20T00:00:00Z",
        "isArchived": false,
        "isDraft": false
      }
    }]
  }'
```

## Troubleshooting

**401 Unauthorized:**
- Prüfe ob `N8N_API_SECRET` in Vercel gesetzt ist
- Prüfe ob der Bearer Token im Header korrekt ist

**500 GitHub configuration missing:**
- Prüfe ob alle GitHub Umgebungsvariablen gesetzt sind
- Prüfe ob der GitHub Token die richtigen Berechtigungen hat

**500 Failed to create blog post:**
- Prüfe die Vercel Logs für Details
- Prüfe ob das Repository existiert und der Token Zugriff hat

