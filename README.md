# as-ai-lab

A React + TypeScript web app built with **Vite**, **Tailwind CSS**, and **shadcn/ui**.

This repository was originally bootstrapped via Lovable. It has been converted to a standard, self-managed codebase you can edit freely and deploy from GitHub.

## Quick start

Prereqs: Node.js 18+.

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

- `src/` – application source
- `index.html` – document metadata + entry point
- `vite.config.ts` – Vite configuration

## Deployment (pick one)

### Option A: Vercel
1. Push this repo to GitHub.
2. In Vercel: **Add New → Project → Import** the repo.
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

Custom domain:
- In Vercel project settings → **Domains** → add your domain.
- Follow Vercel’s DNS instructions (usually a CNAME for subdomains, or A records for apex).

### Option B: Netlify
1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project**.
3. Build command: `npm run build`
4. Publish directory: `dist`

Custom domain:
- Site settings → **Domain management** → add domain → follow DNS prompts.

### Option C: Cloudflare Pages
1. Push this repo to GitHub.
2. In Cloudflare Pages: **Create a project → Connect to Git**.
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Build output: `dist`

Custom domain:
- Pages → **Custom domains** → add domain.

## Notes for maintainers

- Any Lovable-only tooling has been removed (e.g. `lovable-tagger` and the `.lovable/` planning folder).
- If you previously relied on Lovable’s “Publish” button, use one of the GitHub-based hosts above instead.

