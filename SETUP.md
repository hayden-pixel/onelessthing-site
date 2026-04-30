# One Less Thing — Site Setup Guide

## Prerequisites
- Node.js 20+ installed on your machine
- A GitHub account (already have one)
- Your domain `onelessthing.us` on GoDaddy

---

## Step 1 — Install dependencies (run once on your machine)

```bash
cd site
npm install
```

---

## Step 2 — Run locally to preview

```bash
npm run dev
```

Open `http://localhost:4321` in your browser.

---

## Step 3 — Create a GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `onelessthing-site` (or anything you prefer)
3. Set to **Public** (required for free GitHub Pages)
4. Do not initialize with a README

---

## Step 4 — Push the site to GitHub

In your terminal, from inside the `site/` folder:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/onelessthing-site.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## Step 5 — Enable GitHub Pages

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The `deploy.yml` workflow will run automatically on every push to `main`

After the first push, the site will deploy to `https://YOUR_USERNAME.github.io/onelessthing-site` within ~2 minutes.

---

## Step 6 — Connect your custom domain (GoDaddy)

### In GoDaddy DNS settings, add these records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 1 hour |
| A | @ | 185.199.109.153 | 1 hour |
| A | @ | 185.199.110.153 | 1 hour |
| A | @ | 185.199.111.153 | 1 hour |
| CNAME | www | YOUR_USERNAME.github.io | 1 hour |

### In GitHub repo settings:
1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter `onelessthing.us`
3. Check **Enforce HTTPS** (available after DNS propagates, usually within 1–24 hours)

The `public/CNAME` file in this repo already contains `onelessthing.us` — GitHub Pages reads it automatically.

---

## Step 7 — Add your Beehiiv embed

1. Log into [beehiiv.com](https://beehiiv.com) and get your embed code
2. Open `src/components/NewsletterSignup.astro`
3. Replace `REPLACE_WITH_YOUR_BEEHIIV_EMBED_ID` with your actual Beehiiv publication ID
4. Do the same in `src/pages/newsletter.astro`
5. Commit and push — the site redeploys automatically

---

## Step 8 — Set up email (Zoho Mail, free)

1. Go to [zoho.com/mail](https://zoho.com/mail) → Free plan → Add your domain
2. Follow Zoho's DNS verification steps (add a TXT record in GoDaddy)
3. Add the MX records Zoho provides to GoDaddy DNS
4. Add SPF, DKIM, and DMARC records (Zoho walks you through this)
5. Create `hayden@onelessthing.us` as your mailbox

**Do this before sending the first newsletter — missing SPF/DKIM = spam folder.**

---

## Publishing a new article

1. Create a new `.mdx` file in `src/content/articles/`
2. Copy the frontmatter from an existing article and update all fields
3. Write the article body in Markdown (MDX components like `<StateCallout />` are available)
4. Commit and push — the site rebuilds and deploys automatically within ~2 minutes

---

## File structure reference

```
site/
├── src/
│   ├── content/articles/    ← Add new articles here (.mdx files)
│   ├── components/          ← Reusable UI components
│   ├── layouts/             ← Base and Article layouts
│   ├── pages/               ← Site pages and routes
│   └── styles/global.css    ← Design tokens and base styles
├── public/
│   ├── CNAME                ← Custom domain (do not edit)
│   └── favicon.svg
└── .github/workflows/
    └── deploy.yml           ← Auto-deploy on push to main
```
