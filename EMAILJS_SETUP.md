# 📧 EmailJS Setup Guide — MEC Technology Contact Form

Follow these steps once to make the contact form send real emails to **wearemec@gmail.com**.

---

## Step 1 — Create Free EmailJS Account

1. Go to **https://www.emailjs.com**
2. Click **"Sign Up"** — it's free (200 emails/month on free plan)
3. Verify your email and log in

---

## Step 2 — Connect Gmail (wearemec@gmail.com)

1. In the EmailJS dashboard, click **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose **Gmail**
4. Click **"Connect Account"** and sign in with **wearemec@gmail.com**
5. Click **"Create Service"**
6. **Copy the Service ID** — it looks like `service_abc1234`

---

## Step 3 — Create Email Template

1. Click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Set the **Subject** to:
   ```
   New Enquiry from {{from_name}} – MEC Technology Website
   ```
4. Set the **Body** to:
   ```
   You have received a new enquiry from the MEC Technology website.

   Name:     {{from_name}}
   Company:  {{company}}
   Phone:    {{phone}}
   Email:    {{from_email}}
   Product:  {{product}}

   Message:
   {{message}}

   ---
   Sent via mectechnology.co.in contact form
   ```
5. Set **"To Email"** → `wearemec@gmail.com`
6. Click **"Save"**
7. **Copy the Template ID** — it looks like `template_xyz5678`

---

## Step 4 — Get Your Public Key

1. Click your profile icon (top right) → **"Account"**
2. Go to the **"General"** tab
3. Under **"API Keys"**, copy your **Public Key** — it looks like `AbCdEfGhIjKlMnOp`

---

## Step 5 — Paste Keys Into the Project

Open this file:
```
src/emailjsConfig.js
```

Replace the placeholder values:
```js
export const EMAILJS_CONFIG = {
  SERVICE_ID:  'service_abc1234',   // ← paste your Service ID
  TEMPLATE_ID: 'template_xyz5678', // ← paste your Template ID
  PUBLIC_KEY:  'AbCdEfGhIjKlMnOp', // ← paste your Public Key
};
```

Save the file, then run:
```bash
npm run build
```

---

## Step 6 — Test It

1. Open the website and go to the Contact section
2. Fill in the form and click **"Send Enquiry"**
3. Check **wearemec@gmail.com** inbox — the message should arrive within seconds ✅

---

## ✅ What Happens When Someone Submits

```
User fills form → Clicks Send
       ↓
EmailJS receives the data (browser-side, no server needed)
       ↓
EmailJS sends formatted email
       ↓
wearemec@gmail.com receives the message instantly
```

**No server. No backend. No hosting required.**

---

## Free Plan Limits

| Feature | Free Plan |
|---------|-----------|
| Emails/month | 200 |
| Templates | Unlimited |
| Services | 2 |

200 emails/month is plenty for a business contact form. If you need more, paid plans start at $9/month for 1,000 emails.

---

## 🆘 Troubleshooting

**"Failed to Send" error appears:**
- Double-check all 3 keys are correct in `emailjsConfig.js`
- Make sure Gmail is properly connected in the EmailJS dashboard
- Try sending a test email from the EmailJS template editor

**Email goes to spam:**
- In Gmail, mark the EmailJS email as "Not Spam"
- Add emailjs.com to your contacts

