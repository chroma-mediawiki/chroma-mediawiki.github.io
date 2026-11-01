---
title: Interface & navigation
---

# Interface & navigation

## Top bar

From left to right:

| Area | Purpose |
|---|---|
| ☰ Menu | Open/close the left navigation |
| Site name | Back to the main page; shows a logo if configured |
| Search | Type a title, use suggestions, press Enter |
| Display options | Layout, light/dark, reading mode |
| Account | Personal tools, login/create account |

On mobile, search collapses to a magnifier icon.

## Below the title

The page toolbar contains:

- **Page / Discussion** tabs;
- **Read / Edit / Edit source / View history** actions.

On mobile these actions become a row of icon buttons.

## Left navigation

Always visible on desktop; on narrow screens it opens as an overlay from the ☰ button. It is grouped into navigation / participate / tools, and the current page is highlighted.

## Table of contents

Long pages get a right-hand TOC:

- nested sections;
- current section highlighted while scrolling;
- sticky on desktop;
- hidden on mobile, in reading layout and in reading mode.

## App vs. reading layout

| Layout | Looks like |
|---|---|
| App | Left navigation + content + right TOC |
| Reading | No navigation or TOC, centered content |

Switch from the top bar's **Display options** or Preferences.

## Reading mode

Reading mode also hides page actions, leaving only content. It can combine with the reading layout.

## Search

The search box uses MediaWiki's core search suggestions; submitting opens `Special:Search`.

## Special pages

Login, history, diffs and Preferences use Chroma styling; extension pages keep MediaWiki's base typography and will not break because of the skin.

## Common questions

- **Where is the edit button?** In the toolbar below the title, not a floating button.
- **Why no logo?** Without `$wgLogos` Chroma shows the site name only; see [Configuration](configuration.md).
- **Why isn't mobile MinervaNeue?** With MobileFrontend, Chroma takes over; see [Mobile](mobile.md).
