# 🇵🇹 Portugal Family Trip 2026

A travel guide website for a family of four visiting Porto, Lisbon & Aveiro in August 2026.

Built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Pages

- `/` — Trip overview, route, and travel tips
- `/porto/` — 5 nights: hotels, restaurants, map & day-by-day itinerary
- `/lisbon/` — 5 nights: hotels, restaurants, map & day-by-day itinerary
- `/aveiro/` — 4 nights: hotels, restaurants, map & day-by-day itinerary
- `/checklist/` — Planning checklist with progress tracking
- `/about/` — How this site was built with AI

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Configuration

Before deploying, edit `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://mariatta.github.io',
  base: '/portugal-trip', // change to match your repo name
});
```

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source** and select **GitHub Actions**
3. The `.github/workflows/deploy.yml` workflow triggers on every push to `main`
4. Your site goes live at `https://mariatta.github.io/portugal-trip/`

## Editing content

All trip data is in `src/data/`:
- `porto.ts` — Porto hotels, restaurants, and daily itinerary
- `lisbon.ts` — Lisbon hotels, restaurants, and daily itinerary
- `aveiro.ts` — Aveiro hotels, restaurants, and daily itinerary

Edit those files and the pages update automatically.
