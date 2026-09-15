# FASL Micromundo Landing

**Live:** https://micromundo.digital

[![License](https://img.shields.io/github/license/fsantibanezleal/FASL_Micromundo_landing)](LICENSE)
[![Version](https://img.shields.io/github/v/tag/fsantibanezleal/FASL_Micromundo_landing?label=version)](CHANGELOG.md)

Static landing site for **Micromundo**, a science-outreach project on virtual microscopy and low-cost
3D-printed microscopes for schools. It reimplements the frontend of the original `micromundo.team` WordPress
site as a React + TypeScript + Vite single-page app, with no WordPress, no plugins and no admin panel.

The site content is in Spanish, for its audience of Chilean schools and teachers; the code and documentation are
in English.

## What it keeps from the original site

- Brand identity (logo, palette, the navy hero and mountain-shaped section transitions)
- Multi-page structure, with the original URL slugs so existing links keep working
- Local search over pages, courses and team members
- Lightweight animations
- Course and team catalogs, including a profile page per team member
- Contact, complementary resources and privacy pages
- Links into the Micromundo virtual microscopy app (`micromundo.app`: library and classrooms)

## Pages

| Path | Page |
|---|---|
| `/` | Home |
| `/about-us` | About Micromundo |
| `/courses` | Courses catalog |
| `/Equipo/:slug` | Team member profile |
| `/material-complementario` | Complementary resources |
| `/contact-us` | Contact |
| `/politicas-de-privacidad` | Privacy policy |
| any other path | Not found |

Routing is client-side (`BrowserRouter`), so a static host must fall back to `index.html` for unknown paths.

## Stack

- React 19 and React Router 7
- TypeScript 6
- Vite 8
- lucide-react icons
- ESLint 9 with typescript-eslint

## Getting started

Prerequisites: Node.js (22 LTS recommended) and npm.

PowerShell:

```powershell
npm install
.\scripts\local.ps1 dev       # dev server with hot reload at http://localhost:5173
.\scripts\local.ps1 check     # eslint + TypeScript type check
.\scripts\local.ps1 preview   # production build + preview at http://localhost:4173
.\scripts\local.ps1 stop      # stop any dev or preview server
```

bash:

```bash
npm install
./scripts/local.sh dev
./scripts/local.sh check
./scripts/local.sh preview
./scripts/local.sh stop
```

Plain npm scripts: `npm run dev`, `npm run lint`, `npm run build` (`tsc -b && vite build`), `npm run preview`.

## Project layout

```
src/
  main.tsx              router mount
  App.tsx               routes
  index.css             styles
  data/siteData.ts      all site content, typed (navigation, courses, team, FAQ, resources, search index)
  pages/                one component per page
  components/           header, footer, hero, cards, accordion, search overlay
public/media/           images, logos and decorative SVGs
dist/                   production build, committed
scripts/                local.ps1 / local.sh helpers
```

To change text, courses, team members or resources, edit `src/data/siteData.ts`. Static assets go in
`public/media/`.

## Build and release

`npm run build` writes the production site to `dist/`. The build output is committed: rebuild `dist/` and commit
it in the same pull request as the source change it reflects. Releases are cut from `main`, versioned as
`X.XX.XXX` in `VERSION` and `CHANGELOG.md`, and tagged `vX.XX.XXX`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) (branch from `develop`, pull requests into `develop`),
[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) and [SECURITY.md](SECURITY.md).

## License

[Apache-2.0](LICENSE).
