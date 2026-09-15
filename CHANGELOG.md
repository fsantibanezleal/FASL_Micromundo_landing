# Changelog

All notable changes to this product. Format: `X.XX.XXX` (display, see the workspace `versioning.md`); stays `0.x` while pre-1.0. Tag every release.

## [Unreleased]

### Changed
- Rewrite `Readme.md` in English with the live URL first, the page map, local scripts, project layout and the build and release notes.
- Align `package.json` and `package-lock.json` `version` with `VERSION` (`0.1.0` is the semver form of `0.01.000`).

## [0.01.000] · 2026-07-03

### Added
- Adopt the `X.XX.XXX` versioning scheme: a `VERSION` file as the single source of truth, this `CHANGELOG`, and the first git tag. Baseline documenting the current shipped state; later changes are versioned by nature (major/minor/patch).
