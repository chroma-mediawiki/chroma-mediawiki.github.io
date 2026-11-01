---
title: Getting started
---

# New to Chroma?

Chroma is a MediaWiki skin. Once installed, your wiki gets:

- an app-like interface with a top bar, search, navigation drawer and table of contents;
- a reading layout for long articles;
- light and dark themes with four color presets;
- a mobile layout that replaces MinervaNeue.

You do not need to know PHP or Node.js. Installation is three steps:

1. Download the package that matches your MediaWiki version;
2. Put the files in `skins/Chroma`;
3. Add two lines to `LocalSettings.php`.

## Check your MediaWiki version

Log in and open `Special:Version`. Look at the **MediaWiki** version.

| Your MediaWiki | Download |
|---|---|
| 1.43.x | [v0.6.0-REL1_43](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases/tag/v0.6.0-REL1_43) |
| 1.45.x | [v0.6.0-REL1_45](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases/tag/v0.6.0-REL1_45) |
| 1.46.x | [v0.6.0-REL1_46](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases/tag/v0.6.0-REL1_46) |

Do not mix branches: a 1.46 package will not work on 1.43.

## Where to go next

| I want to… | Read |
|---|---|
| Install | [Installation](installation.md) |
| Change colors / dark mode | [Themes & color](theming.md) |
| Change the default layout | [Configuration](configuration.md) |
| Learn the interface | [Interface & navigation](usage.md) |
| Use it on mobile | [Mobile](mobile.md) |
| Fix an install problem | [FAQ](faq.md) |

## About the version

This documentation targets **v0.6.0**. Chroma maintains three lines:

- MediaWiki **1.43 LTS** → `REL1_43`
- MediaWiki **1.45** → `REL1_45`
- MediaWiki **1.46** → `REL1_46`

Each branch pins its compatible MediaWiki range in `skin.json`.

## Is it “full Material 3”?

Chroma uses Material 3-style **design tokens** (color roles, type scale, shape, elevation, motion) and implements some Expressive patterns. It is not an official Google skin and not a complete Material 3 component library.

It changes how the wiki looks and reads; it does not change MediaWiki's pages, editing, history or extensions.
