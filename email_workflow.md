# Arnold's Personal Email-Automation 🚀

Hier ist dein finales Paket für den E-Mail-Versand. Ich habe die Dateinamen für dich bereits "URL-freundlich" angepasst (keine Leerzeichen oder Sonderzeichen), damit Vercel und n8n sie perfekt verarbeiten können.

## 1. Deine Live-Links 🔗

Da die Dateien in deinem `public/img` Ordner liegen, sind sie nach dem nächsten Deploy (Vercel) unter diesen Links erreichbar:

- **Logo**: `https://ki-kanzlei.at/img/logo-premium.png`
- **PDF**: `https://ki-kanzlei.at/img/ki-roadmap.pdf`

*(Hinweis: Falls deine Domain noch nicht aktiv ist, nutzt du einfach die von Vercel bereitgestellte URL, z.B. `dein-projekt.vercel.app/img/...`)*

---

## 2. Exakte Feld-Zuordnung (n8n Outlook Node)

| Feld | Wert (Expression) |
| :--- | :--- |
| **To** | `{{ $json.body.email }}` |
| **Subject** | `{{ $json.body.firstName }}, hier ist deine KI‑Roadmap! 🚀✨` |
| **Message Type**| `HTML` |

---

## 3. Arnold's Personal Template (HTML) 📩

Kopiere diesen Code in das **Message**-Feld von n8n (Modus: **Expression**):

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
        .wrapper { width: 100%; table-layout: fixed; background-color: #f8fafc; padding: 40px 0; }
        .main { background-color: #ffffff; width: 100%; max-width: 600px; margin: 0 auto; border-radius: 32px; overflow: hidden; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0; }
        .header { background: #ffffff; padding: 40px; text-align: center; border-bottom: 1px solid #f1f5f9; }
        .logo { max-width: 120px; height: auto; }
        .content { padding: 50px 40px; color: #1e293b; line-height: 1.8; }
        .button-wrapper { text-align: center; padding: 40px 0; }
        .button { background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%); color: #ffffff !important; padding: 20px 40px; border-radius: 16px; text-decoration: none; font-weight: bold; font-size: 18px; display: inline-block; box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3); }
        .footer { text-align: center; padding: 30px; color: #94a3b8; font-size: 13px; }
        p { margin-bottom: 24px; font-size: 17px; color: #475569; }
        .highlight { color: #3B82F6; font-weight: 700; }
        .signature { margin-top: 40px; padding-top: 30px; border-top: 1px solid #f1f5f9; }
        .signature-name { font-weight: 800; color: #1e293b; font-size: 18px; margin: 0; }
        .signature-title { color: #64748b; font-size: 14px; margin: 4px 0 0 0; }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="main">
            <div class="header">
                <img src="https://ki-kanzlei.at/img/logo-premium.png" alt="KI Kanzlei" class="logo">
            </div>
            <div class="content">
                <p>Hey <strong class="highlight">{{ $json.body.firstName }}</strong>,</p>
                
                <p>Arnold hier von der KI Kanzlei. 🙏</p>
                
                <p>Mega, dass du dir die Zeit nimmst! Wie versprochen schicke ich dir direkt den Deep-Dive in unsere KI-Roadmap für Unternehmen in Österreich 🇦🇹.</p>
                
                <p>Ich zeige dir darin ganz offen, wie wir echte Prozesse (Voice, Chat, Workflows) implementieren – ohne das ganze Marketing-Bla-Bla.</p>

                <div class="button-wrapper">
                    <a href="https://ki-kanzlei.at/img/ki-roadmap.pdf" class="button" target="_blank">Roadmap jetzt öffnen 🚀</a>
                </div>

                <p><strong>Kurze Frage an dich:</strong><br>
                Welcher Bereich brennt bei dir aktuell am meisten? Schreib mir einfach kurz auf diese Mail zurück, ich lese das persönlich. 📩</p>
                
                <div class="signature">
                    <p class="signature-name">Arnold Freissling</p>
                    <p class="signature-title">Gründer & KI-Experte @ KI Kanzlei</p>
                </div>
            </div>
        </div>
        <div class="footer">
            &copy; 2026 KI Kanzlei &bull; Wien, Österreich<br>
            <a href="https://ki-kanzlei.at/impressum" style="color: #94a3b8; text-decoration: none;">Impressum</a> &bull; <a href="https://ki-kanzlei.at/datenschutz" style="color: #94a3b8; text-decoration: none;">Datenschutz</a>
        </div>
    </div>
</body>
</html>
```
