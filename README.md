# 🇵🇹 Portugal Family Trip 2026

A travel guide website for a family of four visiting Porto, Lisbon & Aveiro in August 2026.

Built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Pages

- `/` — Trip overview, route, and family travel tips
- `/porto/` — 5 nights: hotels, restaurants & day-by-day itinerary
- `/lisbon/` — 5 nights: hotels, restaurants & day-by-day itinerary
- `/aveiro/` — 3 nights: hotels, restaurants & day-by-day itinerary

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
  site: 'https://YOUR_USERNAME.github.io',
  base: '/portugal-trip', // change to match your repo name
});
```

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source** and select **GitHub Actions**
3. The `.github/workflows/deploy.yml` workflow triggers on every push to `main`
4. Your site goes live at `https://YOUR_USERNAME.github.io/portugal-trip/`

## Editing content

All trip data is in `src/data/`:
- `porto.ts` — Porto hotels, restaurants, and daily itinerary
- `lisbon.ts` — Lisbon hotels, restaurants, and daily itinerary
- `aveiro.ts` — Aveiro hotels, restaurants, and daily itinerary

Edit those files and the pages update automatically.
