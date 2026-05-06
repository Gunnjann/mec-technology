# MEC Technology Machines (I) Pvt Ltd — Website

> **ISO 9001:2015 Certified** | Bandsaw & Circular Saw Machine Manufacturers since 2009 | Indore, India

A fully redesigned, production-ready industrial website built with **React + Vite + Tailwind CSS + Framer Motion**.

---

## 🌐 Live Demo

Deployed on Vercel → [mectechnology.vercel.app](https://mectechnology-git-main-gunnjanns-projects.vercel.app)

---

## 📁 Project Structure

```
mec-technology/
│
├── public/
│   ├── favicon.svg              # MEC branded amber favicon
│   └── robots.txt               # SEO robots file
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky glass navbar with dropdown
│   │   ├── Hero.jsx              # Full-screen hero with particle canvas
│   │   ├── About.jsx             # Split layout about section (homepage)
│   │   ├── Products.jsx          # 8-card product grid (all link to detail pages)
│   │   ├── Services.jsx          # 6-card services section
│   │   ├── WhyUs.jsx             # Animated counters + reasons
│   │   ├── Clients.jsx           # Auto-scrolling logo slider + testimonials
│   │   ├── Contact.jsx           # EmailJS-powered contact form
│   │   ├── Footer.jsx            # 4-column footer with all links
│   │   ├── Loader.jsx            # Animated loading screen
│   │   │
│   │   ├── AboutPage.jsx         # Full About Us page (/about)
│   │   ├── Gallery.jsx           # Exhibition gallery with lightbox (/gallery)
│   │   ├── Videos.jsx            # YouTube video player (/videos)
│   │   ├── Blog.jsx              # 5 articles with full reader (/blog)
│   │   │
│   │   ├── ProductPageTemplate.jsx  # Reusable product detail template
│   │   ├── QuoteModal.jsx           # EmailJS quote modal (used everywhere)
│   │   ├── SemiAutoPage.jsx         # Semi Auto Double Column Bandsaw (7 models)
│   │   ├── SwingTypePage.jsx        # Swing Type Bandsaw (5 models)
│   │   ├── AutoBandsawPage.jsx      # Automatic Bandsaw (4 models)
│   │   ├── CircularSawPage.jsx      # High Speed Circular Saw (3 models)
│   │   ├── VerticalBandsawPage.jsx  # Vertical Bandsaw (3 models)
│   │   ├── BandsawBladesPage.jsx    # Bandsaw Blades (M42, M51)
│   │   ├── MiterBandsawPage.jsx     # Miter Cutting Bandsaw (2 models)
│   │   └── SparePartsPage.jsx       # Spare Parts page
│   │
│   ├── App.jsx                  # Root component with all routing
│   ├── main.jsx                 # React entry point
│   ├── index.css                # Global styles + Tailwind + animations
│   └── emailjsConfig.js         # ← EmailJS keys go here
│
├── index.html                   # SEO meta, OG tags, Schema.org, fonts
├── vercel.json                  # Vercel deployment config
├── vite.config.js               # Vite config
├── tailwind.config.js           # Tailwind theme (custom fonts, colors)
├── postcss.config.js            # PostCSS config
├── package.json                 # Dependencies + Node engine requirement
├── .gitignore                   # Git ignore rules
├── .npmrc                       # npm config for Vercel compatibility
├── EMAILJS_SETUP.md             # Step-by-step EmailJS guide
└── README.md                    # This file
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js **18+**
- npm **8+**

### Install & Run

```bash
# 1. Extract the project
tar -xzf mec-technology-vercel-fix.tar.gz
cd mec-technology

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# → Open http://localhost:5173
```

### Build for Production

```bash
npm run build
# Output in /dist folder

npm run preview
# Preview the production build locally
```

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Amber (Primary) | `#f59e0b` | Buttons, accents, highlights |
| Amber Light | `#fbbf24` | Hover states, gradient text |
| Carbon 900 | `#0a0a0a` | Page background |
| Carbon 800 | `#111111` | Section alternates |
| Carbon 700 | `#1a1a1a` | Cards |
| Steel 300 | `#9fb3c8` | Body text |
| Steel 400 | `#829ab1` | Muted text |
| Steel 500 | `#627d98` | Labels, placeholders |

### Typography

| Font | Usage | Weight |
|------|-------|--------|
| **Bebas Neue** | Display headings (HERO, section titles) | 400 |
| **Rajdhani** | Sub-headings, nav links, labels | 400–700 |
| **DM Sans** | Body text, descriptions, paragraphs | 300–600 |
| **JetBrains Mono** | Section labels, model codes, tech specs | 400–500 |

### Key CSS Utilities (in `index.css`)

```css
.gradient-text      /* Amber gradient text */
.section-label      /* Monospace uppercase amber label */
.card-dark          /* Dark card with hover lift effect */
.glow-border        /* Amber glow on hover */
.grid-bg            /* Subtle amber grid background */
.industrial-stripe  /* 45° amber stripe pattern */
.btn-primary        /* Amber gradient button */
.btn-outline        /* Amber outline button */
.input-float        /* Floating label input */
.logo-scroll-track  /* Auto-scrolling logo strip */
```

---

## 📄 Pages & Routes

The project uses **client-side routing via state** (no React Router needed):

| Page Key | URL (after deploy) | Description |
|----------|--------------------|-------------|
| `home` | `/` | Full homepage with all sections |
| `about` | `/` (state) | Full About Us page |
| `gallery` | `/` (state) | Exhibition gallery with lightbox |
| `videos` | `/` (state) | YouTube video player |
| `blog` | `/` (state) | 5 technical blog articles |
| `semi-auto` | `/` (state) | Semi Auto Double Column Bandsaw (7 models) |
| `swing-type` | `/` (state) | Swing Type Bandsaw (5 models) |
| `auto-bandsaw` | `/` (state) | Automatic Bandsaw (4 models) |
| `circular-saw` | `/` (state) | High Speed Circular Saw (3 models) |
| `vertical-bandsaw` | `/` (state) | Vertical Bandsaw (3 models) |
| `bandsaw-blades` | `/` (state) | Bandsaw Blades (M42, M51) |
| `miter-bandsaw` | `/` (state) | Miter Cutting Bandsaw (2 models) |
| `spare-parts` | `/` (state) | Spare Parts page |

---

## 📧 EmailJS Setup (Contact Form)

The contact form sends messages **directly to wearemec@gmail.com**. To activate:

### 1. Get Your Keys (10 minutes)

1. Sign up free at **[emailjs.com](https://www.emailjs.com)** (200 emails/month free)
2. Connect Gmail → `wearemec@gmail.com` → copy **Service ID**
3. Create email template → copy **Template ID**
4. Account page → copy **Public Key**

### 2. Paste Keys

Open `src/emailjsConfig.js`:

```js
export const EMAILJS_CONFIG = {
  SERVICE_ID:  'service_xxxxxxx',   // ← paste here
  TEMPLATE_ID: 'template_xxxxxxx', // ← paste here
  PUBLIC_KEY:  'xxxxxxxxxxxx',      // ← paste here
};
```

### 3. Email Template

In EmailJS, set the template body to:

```
Subject: New Enquiry from {{from_name}} – MEC Technology Website

Name:     {{from_name}}
Company:  {{company}}
Phone:    {{phone}}
Email:    {{from_email}}
Product:  {{product}}

Message:
{{message}}
```

> Full step-by-step guide in `EMAILJS_SETUP.md`

---

## ☁️ Deploy to Vercel

### Option A — GitHub (Recommended)

```bash
# 1. Push project to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/mec-technology.git
git push -u origin main

# 2. Go to vercel.com → New Project → Import from GitHub
# 3. Vercel auto-detects settings from vercel.json
# 4. Click Deploy ✅
```

### Option B — Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts — Vercel reads vercel.json automatically
```

### Vercel Settings (if needed manually)

| Setting | Value |
|---------|-------|
| Framework Preset | `Vite` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Node.js Version | `18.x` |

### Environment Variables on Vercel (optional)

If you prefer not to hardcode EmailJS keys, add them as environment variables:

```
VITE_EMAILJS_SERVICE_ID   = service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID  = template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY   = xxxxxxxxxxxx
```

Then update `emailjsConfig.js`:
```js
export const EMAILJS_CONFIG = {
  SERVICE_ID:  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY:  import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3 | UI framework |
| Vite | 5.3 | Build tool & dev server |
| Tailwind CSS | 3.4 | Utility-first styling |
| Framer Motion | 11.3 | Animations & transitions |
| EmailJS Browser | 4.4 | Contact form email sending |
| Lucide React | 0.383 | Icon library |

---

## ✨ Features

### Homepage Sections
- ✅ **Loading screen** — animated progress bar with MEC logo
- ✅ **Sticky Navbar** — glass blur effect, shrinks on scroll, full dropdown for products
- ✅ **Hero** — particle canvas background, floating stat cards, animated entrance
- ✅ **About** — split layout, image grid, company highlights
- ✅ **Products** — 8-card grid, every card links to its own detail page
- ✅ **Services** — 6-card icon grid with hover effects
- ✅ **Why Us** — animated counters (15+ years, 500+ clients etc.)
- ✅ **Clients** — dual auto-scrolling logo tracks + 4 testimonials
- ✅ **Contact** — floating label form → sends email to wearemec@gmail.com
- ✅ **Footer** — 4-column with all page links

### Inner Pages
- ✅ **About Us** — full page with ISO cert, directors, infrastructure, 8-milestone timeline, catalog downloads
- ✅ **Gallery** — 5 exhibitions, 15 photos, lightbox with prev/next + caption counter
- ✅ **Videos** — 4 categories, YouTube embed player, pulsing play button
- ✅ **Blog** — 5 articles, tag filter, full in-app article reader

### Product Detail Pages (8 pages, 30+ models total)
Each page has:
- ✅ Breadcrumb navigation
- ✅ Hero section with category intro
- ✅ Model cards with 3 tabs: Features / Tech Specs / Description
- ✅ "Request a Quote" button → EmailJS modal → wearemec@gmail.com
- ✅ Comparison table (where applicable)
- ✅ CTA banner at bottom

---

## 🔧 Customization

### Change Company Info

**Phone / Email / Address** → `src/components/Contact.jsx` and `src/components/Footer.jsx`

### Add a New Product Model

Open the relevant page file (e.g. `src/components/SemiAutoPage.jsx`) and add a new object to the `models` array:

```js
{
  name: 'MODEL NAME',
  badge: 'BADGE TEXT', badgeCls: 'bg-amber-500 text-black',
  subtitle: 'Model subtitle',
  img: 'https://...image-url...',
  desc: 'Description text...',
  features: ['Feature 1', 'Feature 2', ...],
  specs: [
    ['Cutting Capacity', '300 mm'],
    ['Saw Motor', '5 HP'],
    // ...
  ],
}
```

### Change Colors

Open `tailwind.config.js` and modify the `amber` or `carbon` color tokens.

### Change Fonts

In `index.html`, update the Google Fonts URL. In `tailwind.config.js`, update `fontFamily`.

---

## 📞 Contact

**MEC Technology Machines (I) Pvt Ltd**
306-A-1, Sector E, Sanwer Road Industrial Area
Indore, Madhya Pradesh 452015

📞 +0731 4975540 | +91 93016 65275
📧 wearemec@gmail.com
🌐 [mectechnology.co.in](https://mectechnology.co.in)

---

## 📝 License

This website was custom built for MEC Technology Machines (I) Pvt Ltd.
All product information, images, and content © MEC Technology Machines (I) Pvt Ltd.
