// ─────────────────────────────────────────────────────────────────────────────
// EmailJS Configuration
// Follow the setup guide below to fill in your keys.
//
// SETUP STEPS:
// 1. Go to https://www.emailjs.com and create a FREE account
// 2. Click "Add New Service" → choose Gmail → connect wearemec@gmail.com
//    → Copy the SERVICE ID (looks like: service_xxxxxxx)
// 3. Click "Email Templates" → "Create New Template"
//    → Use the template content shown in the README below
//    → Copy the TEMPLATE ID (looks like: template_xxxxxxx)
// 4. Click your profile → "Account" → copy the PUBLIC KEY (looks like: xxxxxxxxxxxx)
// 5. Paste all three values below and save.
// ─────────────────────────────────────────────────────────────────────────────

export const EMAILJS_CONFIG = {
  SERVICE_ID:  'YOUR_SERVICE_ID',   // e.g. 'service_abc1234'
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // e.g. 'template_xyz5678'
  PUBLIC_KEY:  'YOUR_PUBLIC_KEY',  // e.g. 'AbCdEfGhIjKlMnOp'
};

// ─────────────────────────────────────────────────────────────────────────────
// EMAIL TEMPLATE (paste this into EmailJS Template editor):
//
// Subject:  New Enquiry from {{from_name}} – MEC Technology Website
//
// Body:
// You have received a new enquiry from the MEC Technology website contact form.
//
// Name:     {{from_name}}
// Company:  {{company}}
// Phone:    {{phone}}
// Email:    {{from_email}}
// Product:  {{product}}
//
// Message:
// {{message}}
//
// ---
// This message was sent via mectechnology.co.in contact form.
// ─────────────────────────────────────────────────────────────────────────────
