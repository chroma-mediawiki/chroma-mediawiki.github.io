---
title: Overview
---

# What is Chroma

Chroma is a MediaWiki skin built around Material Design 3-style **design tokens**: color roles, type scale, shape, elevation, motion and state layers. On top of MediaWiki's server-rendered structure it adds an app layout, a reading layout and a mobile takeover.

It is not a complete Material 3 component library, and it does not replace MediaWiki's content model. Pages, talk pages, history, editors and extensions remain powered by MediaWiki; the skin owns presentation, hierarchy and reading rhythm.

## Why it exists

- Default MediaWiki skins are utilitarian, with limited hierarchy and reading comfort;
- colors, type, radii and dark mode are scattered across the UI;
- mobile usually falls back to MinervaNeue, so desktop and mobile speak different visual languages.

Chroma collects color, type, shape and state into one token set, then applies it through two layouts and a mobile takeover.

## What you get

| Capability | Details |
|---|---|
| MD3 tokens | Seed `#006A6A` by default; four presets; light, dark and system modes |
| Two layouts | App (top bar + drawer) and reading layout |
| Reading mode | Hides the drawer, TOC and page actions; centers content |
| Mobile | MobileFrontend full takeover; mobile UAs use Chroma directly |
| Extensions | 31 Tier 1 extensions configured on 1.46; 30 on 1.43 and 1.45 |
| Search | Core `mediawiki.searchSuggest` suggestions |
| Special pages | Login, history, diff and Preferences share Material surfaces |

## Quick start

```php
wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';

// Optional: MobileFrontend takeover
$wgDefaultMobileSkin = 'chroma';
```

Start with [Installation](installation.md), then read [Configuration](configuration.md) and [Theming](theming.md).

## Versions

This documentation targets **v0.5.2**. Three maintained lines:

- MediaWiki 1.43 LTS → `REL1_43`
- MediaWiki 1.45 → `REL1_45`
- MediaWiki 1.46 → `REL1_46`

Each branch pins `requires.MediaWiki` in `skin.json`; do not mix branches.
