---
title: Interface & navigation
---

# Interface & navigation

## Top bar

The top app bar contains:

- drawer toggle;
- site name (a logo when a custom `$wgLogos` is configured; otherwise text only);
- search (collapsed to an icon on mobile, using core search suggestions);
- **Display options**: layout, color scheme, reading mode;
- **Account**: personal tools, login and registration.

## Page header

The title comes first, followed by:

- page tabs (Page / Discussion) with icons;
- page actions (Read / Edit / Edit source / View history) with icons;
- on mobile, actions become 44px icon buttons in a single row.

## Drawer

Permanent on desktop, an overlay on narrow screens. It is grouped into navigation / participate / tools, and the current page is highlighted.

## Table of contents

- nested sections;
- current-section highlighting (scroll-spy);
- sticky on desktop;
- hidden on narrow screens, in reading layout and in reading mode.

## Reading layout and reading mode

| Mode | Behavior |
|---|---|
| App layout | drawer + content + TOC |
| Reading layout | hides drawer and TOC, centers content |
| Reading mode | also hides page actions and TOC, constrains content |

Reading layout and reading mode can be combined.

## Search

The search box uses MediaWiki's core `mediawiki.searchSuggest`; suggestions use Chroma surfaces. Submitting goes to `Special:Search`.

## Mobile

See [Mobile](mobile.md). Mobile UAs use Chroma's responsive layout by default, without `?useskin=chroma`.

## Special pages

Login (Codex forms), history, diffs and Preferences use consistent Material surfaces, radii and spacing; extension pages inherit the base prose, table and form styles.
