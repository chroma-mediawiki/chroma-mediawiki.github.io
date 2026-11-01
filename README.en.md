<p align="right"><a href="README.md">简体中文</a> · <strong>English</strong></p>

<img src="logo.svg" width="72" height="72" align="right" alt="Chroma logo">

# Chroma docs

The official documentation and website for the Chroma MediaWiki skin, built with VitePress and deployed to GitHub Pages.

- English site: https://chroma-mediawiki.github.io/chroma-docs/en/
- Chinese site: https://chroma-mediawiki.github.io/chroma-docs/
- Skin repository: https://github.com/chroma-mediawiki/mediawiki-skins-Chroma
- The site detects the browser language: Chinese browsers open the Chinese site; every other language opens English.

## Local development

```bash
npm install --include=dev
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Push to `main`; `.github/workflows/pages.yml` builds and publishes the site to GitHub Pages.
