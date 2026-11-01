---
title: Development overview
---

# Development overview

Chroma is a MediaWiki skin repository; it can be installed without a build step because release ZIPs include CSS, JS and i18n.

These pages are for people changing the skin itself.

## Commands

```bash
git clone https://github.com/chroma-mediawiki/mediawiki-skins-Chroma.git
cd mediawiki-skins-Chroma

npm install
npm run tokens    # regenerate tokens.css / tokens.json
npm run presets   # regenerate preset palettes
npm run lint      # JS + CSS
```

## Pages

- [Repository layout](architecture.md)
- [Design tokens](tokens.md)
- [Branches & versions](branches.md)
- [Testing](testing.md)
- [Releasing](releasing.md)
- [Contributing](contributing.md)

## Current version

This documentation targets **v0.5.2**. Maintained branches: `REL1_43`, `REL1_45`, `REL1_46`.
