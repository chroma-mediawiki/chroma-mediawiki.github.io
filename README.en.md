<p align="center">
  <img src="logo.svg" width="88" height="88" alt="Chroma logo">
</p>

<h1 align="center">Chroma Docs</h1>

<p align="center">
  <strong>The official documentation and website for Chroma</strong><br>
  <sub>Chinese by default · English available</sub>
</p>

<p align="center">
  <a href="README.md">简体中文</a> ·
  <a href="https://chroma-mediawiki.github.io/en/">English site</a> ·
  <a href="https://chroma-mediawiki.github.io/">Chinese site</a> ·
  <a href="https://github.com/chroma-mediawiki/mediawiki-skins-Chroma">Skin repository</a> ·
  <a href="https://qm.qq.com/q/zSaZRWS4eY">QQ</a> ·
  <a href="https://b23.tv/QiGlLcm">Bilibili</a>
</p>

<p align="center">
  <a href="https://chroma-mediawiki.github.io/en/"><img src="https://img.shields.io/badge/site-GitHub%20Pages-006a6a.svg" alt="Site"></a>
  <a href="https://github.com/chroma-mediawiki/chroma-mediawiki.github.io/actions/workflows/pages.yml"><img src="https://github.com/chroma-mediawiki/chroma-mediawiki.github.io/actions/workflows/pages.yml/badge.svg" alt="Deploy docs"></a>
  <a href="https://github.com/chroma-mediawiki/chroma-mediawiki.github.io/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-GPL--3.0--or--later-blue.svg" alt="License"></a>
  <a href="https://vitepress.dev/"><img src="https://img.shields.io/badge/built%20with-VitePress-006a6a.svg" alt="VitePress"></a>
  <a href="https://qm.qq.com/q/zSaZRWS4eY"><img src="https://img.shields.io/badge/QQ-join-12B7F5.svg" alt="QQ"></a>
  <a href="https://b23.tv/QiGlLcm"><img src="https://img.shields.io/badge/Bilibili-follow-00A1D6.svg" alt="Bilibili"></a>
</p>

<p align="center">
  <img src="docs/public/screenshots/banner.svg" alt="Chroma banner" width="100%">
</p>

## Eight presets

| Teal | Blue | Green | Violet |
|---|---|---|---|
| <img src="docs/public/screenshots/preset-teal-en.png" width="240" alt="Teal"> | <img src="docs/public/screenshots/preset-blue-en.png" width="240" alt="Blue"> | <img src="docs/public/screenshots/preset-green-en.png" width="240" alt="Green"> | <img src="docs/public/screenshots/preset-violet-en.png" width="240" alt="Violet"> |
| **Rose** | **Amber** | **Indigo** | **Lime** |
| <img src="docs/public/screenshots/preset-rose-en.png" width="240" alt="Rose"> | <img src="docs/public/screenshots/preset-amber-en.png" width="240" alt="Amber"> | <img src="docs/public/screenshots/preset-indigo-en.png" width="240" alt="Indigo"> | <img src="docs/public/screenshots/preset-lime-en.png" width="240" alt="Lime"> |

## What this repository is

This repository contains the **documentation site** for Chroma, not the skin code.
The skin, release packages and extension matrix live in
[mediawiki-skins-Chroma](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma).

- English site: https://chroma-mediawiki.github.io/en/
- Chinese site: https://chroma-mediawiki.github.io/
- Language detection: Chinese browsers open the Chinese site; every other language opens English.

## Documentation map

| I want to… | Go to |
|---|---|
| Install Chroma | [Installation](https://chroma-mediawiki.github.io/en/guide/installation) |
| Change theme/layout | [Configuration](https://chroma-mediawiki.github.io/en/guide/configuration) |
| Learn the interface | [Interface & navigation](https://chroma-mediawiki.github.io/en/guide/usage) |
| Use MobileFrontend | [Mobile](https://chroma-mediawiki.github.io/en/guide/mobile) |
| Change tokens / release | [Development](https://chroma-mediawiki.github.io/en/dev/) |
| Check extension support | [Compatibility](https://chroma-mediawiki.github.io/en/guide/compatibility) |

## Local development

```bash
npm install --include=dev
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

Pushes to `main` deploy through `.github/workflows/pages.yml` to GitHub Pages.

## Layout

```text
docs/
  .vitepress/        VitePress config + custom theme
  guide/             Chinese guide
  dev/               Chinese development docs
  en/                English site
  public/            logo, screenshots, robots.txt
internal/docs/       reference docs moved out of the skin repository
```

## License

Documentation and site code: GPL-3.0-or-later. Chroma is an independent community project, not affiliated with Google.
