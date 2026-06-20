# Haifa Khan Afridi — Portfolio

A React + Vite portfolio site. Warm/earthy palette (terracotta, cream, sage), built around
the idea that the projects are documented like specs, not just listed like a gallery.

## Editing content

Almost everything you'll want to change lives in **one file**: `src/content.js`.
- `profile` — name, email, phone, social links
- `education`, `experience`, `projects`, `skills`, `credentials`

To edit text (a project description, a job bullet point, your email), just edit the
values in that file and save. You don't need to touch any component files for text changes.

To add a new project, copy one of the existing objects inside the `projects` array in
`content.js` and fill in your own `problem`, `approach`, `constraints`, and `stack`.

## Running locally

```bash
npm install
npm run dev
```

This starts a local server (usually at `http://localhost:5173`) that live-reloads as you edit.

## Building for production

```bash
npm run build
```

This creates a `dist/` folder with the final static site.

## Deploying

### Option A: Vercel (recommended, easiest)
1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub.
3. Click "Add New Project", select your repo.
4. Leave all settings as default (Vercel auto-detects Vite) and click Deploy.
5. You'll get a live URL like `your-name.vercel.app` in about a minute.

### Option B: Netlify
1. Push this folder to a GitHub repo.
2. Go to [netlify.com](https://netlify.com), sign in with GitHub.
3. "Add new site" → "Import an existing project" → pick your repo.
4. Build command: `npm run build`, Publish directory: `dist`.
5. Deploy.

Either option is free for a personal portfolio and gives you a custom domain option later
if you want one (e.g. `haifaafridi.com`).

## Project structure

```
src/
  content.js       <- all your text content (edit this most)
  App.jsx          <- page layout (which sections appear, in order)
  App.css          <- all styling
  index.css        <- global resets and color/font variables
  components/
    Header.jsx     <- top nav bar
    Hero.jsx        <- intro / headline section
    Projects.jsx    <- project cards
    About.jsx       <- experience, education, skills
    Contact.jsx     <- footer with contact links
    icons.jsx       <- small inline icon set (no external icon library needed)
```

## Colors (if you want to tweak the palette later)

Defined as CSS variables at the top of `src/index.css`:
- `--bg` — page background (warm cream)
- `--ink` — main text color
- `--terracotta` — primary accent (buttons, links, highlights)
- `--sage` — secondary accent (labels)
- `--amber` — tertiary accent (used sparingly)
