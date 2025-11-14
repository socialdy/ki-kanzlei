# Setup-Anleitung: n8n → GitHub Blog Integration

## 📋 Übersicht

Diese Anleitung zeigt dir Schritt für Schritt, wie du:
1. Umgebungsvariablen in Vercel setzt
2. GitHub Personal Access Token erstellst
3. n8n Workflow konfigurierst (Blog-Posts + Bilder)

---

## 🔐 Schritt 1: GitHub Personal Access Token erstellen

### 1.1 Gehe zu GitHub Settings

1. Öffne [GitHub.com](https://github.com)
2. Klicke auf dein Profilbild (oben rechts)
3. Klicke auf **Settings**

### 1.2 Navigiere zu Developer Settings

1. Scrolle nach unten im linken Menü
2. Klicke auf **Developer settings** (ganz unten)

### 1.3 Erstelle Personal Access Token

1. Klicke auf **Personal access tokens** → **Tokens (classic)**
2. Klicke auf **Generate new token** → **Generate new token (classic)**
3. Gib einen Namen ein: z.B. `Vercel Blog API`
4. Setze die Ablaufzeit (z.B. `No expiration` oder `90 days`)
5. **WICHTIG:** Aktiviere die Berechtigung:
   - ✅ **repo** (Full control of private repositories)
     - Dies gibt Zugriff auf alle Repository-Operationen
6. Scrolle nach unten und klicke auf **Generate token**
7. **WICHTIG:** Kopiere den Token sofort! Du siehst ihn nur einmal.
   - Format: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

---

## 🌐 Schritt 2: Umgebungsvariablen in Vercel setzen

### 2.1 Öffne Vercel Dashboard

1. Gehe zu [vercel.com](https://vercel.com)
2. Logge dich ein
3. Wähle dein Projekt aus (oder erstelle ein neues)

### 2.2 Navigiere zu Settings

1. Klicke auf dein Projekt
2. Klicke auf den Tab **Settings** (oben in der Navigation)
3. Klicke auf **Environment Variables** (im linken Menü)

### 2.3 Füge Umgebungsvariablen hinzu

Für jede Variable:

1. Klicke auf **Add New**
2. Gib den **Name** ein (siehe unten)
3. Gib den **Value** ein
4. Wähle **Environment**: 
   - ✅ Production
   - ✅ Preview
   - ✅ Development
5. Klicke auf **Save**

#### Variablen die du hinzufügen musst:

| Name | Value | Beschreibung |
|------|-------|--------------|
| `N8N_API_SECRET` | `dein-super-geheimer-token` | Erstelle einen sicheren Token (z.B. mit `openssl rand -hex 32`) |
| `GITHUB_TOKEN` | `ghp_xxxxxxxxxxxx` | Der GitHub Token den du in Schritt 1 erstellt hast |
| `GITHUB_OWNER` | `dein-github-username` | Dein GitHub Username (z.B. `marku`) |
| `GITHUB_REPO` | `ki-kanzlei` | Der Name deines Repositories |
| `GITHUB_BRANCH` | `main` | Der Branch Name (meist `main` oder `master`) |

**Beispiel:**
```
N8N_API_SECRET = a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
GITHUB_TOKEN = ghp_1234567890abcdefghijklmnopqrstuvwxyz
GITHUB_OWNER = marku
GITHUB_REPO = ki-kanzlei
GITHUB_BRANCH = main
```

### 2.4 Redeploy nach Änderungen

Nach dem Hinzufügen der Variablen:
1. Gehe zum Tab **Deployments**
2. Klicke auf die drei Punkte (⋯) beim letzten Deployment
3. Klicke auf **Redeploy**
4. Wähle **Use existing Build Cache** (optional)
5. Klicke auf **Redeploy**

**WICHTIG:** Die Umgebungsvariablen sind nur nach einem Redeploy aktiv!

---

## 🔧 Schritt 3: N8N_API_SECRET Token generieren

Du kannst einen sicheren Token mit einem dieser Methoden erstellen:

### Option A: Online Generator
- Gehe zu [randomkeygen.com](https://randomkeygen.com)
- Nutze einen "CodeIgniter Encryption Keys" (256-bit)

### Option B: Terminal/Command Line
```bash
# Linux/Mac
openssl rand -hex 32

# Windows (PowerShell)
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 64 | % {[char]$_})
```

### Option C: Node.js
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Kopiere den generierten Token und füge ihn als `N8N_API_SECRET` in Vercel ein.

---

## 🔄 Schritt 4: n8n Workflow konfigurieren

### 4.1 Öffne n8n

1. Öffne dein n8n Dashboard
2. Erstelle einen neuen Workflow oder öffne einen bestehenden

### 4.2 Füge HTTP Request Node hinzu

1. Ziehe einen **HTTP Request** Node in den Workflow
2. Verbinde ihn mit deinem vorherigen Node (z.B. Webflow Trigger)

### 4.3 Konfiguriere HTTP Request Node

#### **Method:**
- Wähle: **POST**

#### **URL:**
```
https://deine-domain.vercel.app/api/blog/create
```
**WICHTIG:** Ersetze `deine-domain` mit deiner tatsächlichen Vercel-Domain!
- Beispiel: `https://ki-kanzlei.vercel.app/api/blog/create`
- Oder: `https://www.ki-kanzlei.at/api/blog/create` (wenn Custom Domain)

#### **Authentication:**
- Wähle: **Generic Credential Type**
- **Name:** `Authorization`
- **Value:** `Bearer {{ $env.N8N_API_SECRET }}`
  - Oder direkt: `Bearer dein-token-hier` (wenn du den Token direkt eintragen willst)

#### **Headers:**
Füge manuell hinzu:
- **Name:** `Content-Type`
- **Value:** `application/json`

#### **Body:**
- Wähle: **JSON**
- Füge das JSON ein (siehe Format unten)

### 4.4 JSON Body Format

Das JSON sollte im Format sein, das dein n8n Workflow bereits generiert. Beispiel:

```json
{
  "items": [
    {
      "id": "{{ $json.id }}",
      "cmsLocaleId": "{{ $json.cmsLocaleId }}",
      "lastPublished": "{{ $json.lastPublished }}",
      "lastUpdated": "{{ $json.lastUpdated }}",
      "createdOn": "{{ $json.createdOn }}",
      "isArchived": {{ $json.isArchived }},
      "isDraft": {{ $json.isDraft }},
      "fieldData": {
        "create-date": "{{ $json.fieldData['create-date'] }}",
        "read-estimation": {{ $json.fieldData['read-estimation'] }},
        "name": "{{ $json.fieldData.name }}",
        "description": "{{ $json.fieldData.description }}",
        "content": "{{ $json.fieldData.content }}",
        "author": "{{ $json.fieldData.author }}",
        "category": "{{ $json.fieldData.category }}",
        "slug": "{{ $json.fieldData.slug }}",
        "thumbnail": {
          "fileId": "{{ $json.fieldData.thumbnail.fileId }}",
          "url": "{{ $json.fieldData.thumbnail.url }}",
          "alt": "{{ $json.fieldData.thumbnail.alt }}"
        }
      }
    }
  ]
}
```

**Oder für einzelne Posts:**
```json
{
  "id": "{{ $json.id }}",
  "fieldData": {
    "slug": "{{ $json.fieldData.slug }}",
    "name": "{{ $json.fieldData.name }}",
    "description": "{{ $json.fieldData.description }}",
    "content": "{{ $json.fieldData.content }}",
    "create-date": "{{ $json.fieldData['create-date'] }}",
    "read-estimation": {{ $json.fieldData['read-estimation'] }},
    "author": "{{ $json.fieldData.author }}",
    "category": "{{ $json.fieldData.category }}",
    "lastUpdated": "{{ $json.lastUpdated }}",
    "createdOn": "{{ $json.createdOn }}",
    "isArchived": false,
    "isDraft": false
  }
}
```

### 4.5 Teste den Workflow

1. Klicke auf **Execute Workflow** (Test-Modus)
2. Prüfe die Response:
   - **200 OK** = Erfolg
   - **401 Unauthorized** = Falscher Token
   - **500 Error** = Server-Fehler (prüfe Vercel Logs)

---

## ✅ Schritt 5: Verifizierung

### 5.1 Prüfe Vercel Logs

1. Gehe zu Vercel Dashboard
2. Klicke auf **Deployments**
3. Klicke auf das neueste Deployment
4. Klicke auf **Functions** Tab
5. Klicke auf `/api/blog/create`
6. Prüfe die Logs auf Fehler

### 5.2 Prüfe GitHub

1. Gehe zu deinem GitHub Repository
2. Prüfe ob `public/data/blogPosts.json` aktualisiert wurde
3. Prüfe die Commit-Historie für "Add blog post: ..." Commits

### 5.3 Prüfe Website

1. Öffne deine Website
2. Gehe zu `/blog`
3. Prüfe ob neue Posts angezeigt werden

---

## 🐛 Troubleshooting

### Problem: 401 Unauthorized

**Lösung:**
- Prüfe ob `N8N_API_SECRET` in Vercel gesetzt ist
- Prüfe ob der Bearer Token im n8n Header korrekt ist
- Prüfe ob du nach dem Setzen der Variablen geredeployed hast

### Problem: 500 GitHub configuration missing

**Lösung:**
- Prüfe ob alle GitHub Variablen gesetzt sind:
  - `GITHUB_TOKEN`
  - `GITHUB_OWNER`
  - `GITHUB_REPO`
- Prüfe ob der GitHub Token die `repo` Berechtigung hat
- Prüfe ob Repository-Name und Owner korrekt sind

### Problem: 500 Failed to create blog post

**Lösung:**
- Prüfe Vercel Logs für Details
- Prüfe ob das Repository existiert
- Prüfe ob der GitHub Token Zugriff auf das Repository hat
- Prüfe ob der Branch-Name korrekt ist

### Problem: Posts werden nicht angezeigt

**Lösung:**
- Prüfe ob `blogPosts.json` in GitHub aktualisiert wurde
- Prüfe ob Vercel nach dem GitHub Commit gedeployed hat
- Prüfe Browser Console auf Fehler
- Leere Browser Cache

---

## 📞 Support

Bei Problemen:
1. Prüfe Vercel Logs
2. Prüfe GitHub Repository
3. Prüfe n8n Workflow Execution Logs
4. Prüfe Browser Console

---

## 🖼️ Schritt 6: Automatischer Bild-Upload

### 6.1 Funktionsweise

Die Bild-Upload-Funktionalität ist direkt in `/api/blog/create` integriert:

- Wenn du einen Blog-Post mit `thumbnail.url` sendest, wird das Bild **automatisch** heruntergeladen
- Das Bild wird zu `public/img/blog/[slug].[extension]` committed
- Die `thumbnail.url` wird automatisch durch die lokale URL ersetzt

### 6.2 Bild-Speicherort

**Lokaler Pfad im Repository:**
```
public/img/blog/[slug].[extension]
```

**Beispiel:**
```
public/img/blog/ki-wissensdatenbank-rag-modell.jpg
```

**Öffentliche URL:**
```
https://deine-domain.vercel.app/img/blog/[slug].[extension]
```

**Beispiel:**
```
https://ki-kanzlei.vercel.app/img/blog/ki-wissensdatenbank-rag-modell.jpg
```

### 6.3 n8n Workflow

Du musst **nichts extra machen** für Bilder:

1. Sende Blog-Post mit `thumbnail.url` (externe URL) → `/api/blog/create`
2. API lädt Bild automatisch herunter
3. API committed Bild zu GitHub
4. API ersetzt URL automatisch
5. Fertig! ✅

**Beispiel Request:**
```json
{
  "items": [{
    "fieldData": {
      "slug": "mein-blog-post",
      "name": "Mein Blog Post",
      "thumbnail": {
        "url": "https://example.com/externes-bild.jpg"
      }
    }
  }]
}
```

Nach dem Request ist das Bild unter `public/img/blog/mein-blog-post.jpg` und die URL ist automatisch ersetzt.

---

## 🎉 Fertig!

Wenn alles funktioniert:
- ✅ n8n sendet automatisch neue Blog-Posts
- ✅ n8n lädt automatisch Blog-Bilder hoch
- ✅ GitHub wird automatisch aktualisiert
- ✅ Vercel deployt automatisch
- ✅ Website zeigt neue Posts mit Bildern an

Viel Erfolg! 🚀

