Google Sheets Contact Form Setup

1. Open https://script.google.com and create a new project.
2. Replace the default code with the contents of contact-form-webhook.gs.
3. Save the project.
4. Click Deploy > New deployment.
5. Select type: Web app.
6. Execute as: Me.
7. Who has access: Anyone.
8. Deploy and copy the Web app URL ending in /exec.

Vite environment setup

1. In project root, create a .env file.
2. Add this line:

VITE_GOOGLE_SHEETS_WEBHOOK_URL=PASTE_YOUR_WEB_APP_EXEC_URL

3. Restart the dev server or rebuild.

Expected sheet columns

Timestamp
Name
Email
Enquiry Type
Message
Source

Notes

- The website already sends data in this format.
- If webhook URL is missing or submission fails, the form falls back to opening an email draft.
