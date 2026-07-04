# SHOVE — Shrinking Arena Sumo Duel

A browser sumo-duel game. All game data (stats, streaks, coins, settings) is
stored client-side in `localStorage` — there is no database and no server-side
state.

## Project structure

- `public/game.html` — the entire game (canvas, styles, logic) as a single
  self-contained static HTML file.
- `app/page.js` — thin Next.js wrapper that full-screens `game.html`.
- `app/layout.js` — root layout / page metadata.

## Deploying to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. In Vercel, click **Add New… → Project** and import the repository.
3. Vercel will auto-detect the **Next.js** framework — leave all build
   settings on their defaults (Build Command `next build`, Output uses the
   default `.next` directory, Install Command `npm install`).
4. **Environment variables: none required.** Just click **Deploy**.

That's it — no database, no API keys, no manual configuration needed.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.
