# Changelog

All notable changes to this product. Format: `X.XX.XXX` (display, see the workspace `versioning.md`); stays `0.x` while pre-1.0. Tag every release.

## [0.01.001] · 2026-09-15

### Fixed
- Home page no longer scrolls horizontally. The decorative image of the "Microscopía Virtual en la Sala de Clases" section (`right: -4%`) widened the document to 1498 px at a 1440 px viewport, and the section's slide-in images widened it on phones before the section was revealed. `.section-shell__atmosphere` now clips its decorative images and `.home-microscopy` clips horizontally (`overflow-x: clip`). Verified at 1440, 1024, 768, 390 and 360 px on all routes, at load and after scrolling.

### Changed
- Rewrite `Readme.md` in English with the live URL first, the page map, local scripts, project layout and the build and release notes.
- Align `package.json` and `package-lock.json` `version` with `VERSION` in semver form (was the Vite default `0.0.0`; `0.1.1` for this release).

## [0.01.000] · 2026-07-03

### Added
- Adopt the `X.XX.XXX` versioning scheme: a `VERSION` file as the single source of truth, this `CHANGELOG`, and the first git tag. Baseline documenting the current shipped state; later changes are versioned by nature (major/minor/patch).
