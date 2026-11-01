---
title: FAQ
---

# FAQ

## The skin did not change after install

Check:

```php
wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';
```

and confirm `skins/Chroma/skin.json` exists. Purge caches and reload.

## Why is there no logo?

Chroma shows a logo only when a real custom `$wgLogos` is configured. MediaWiki's default `change-your-logo` asset is treated as "no logo"; the skin then shows only the site name and never generates an initial-letter placeholder.

## Why only four theme colors?

This release uses build-time generated presets (teal, blue, green, violet). Arbitrary seeds are not implemented; unknown values fall back to teal.

## Mobile still shows MinervaNeue

Set:

```php
$wgDefaultMobileSkin = 'chroma';
```

and confirm MobileFrontend is loaded and old cookies are cleared.

## Where did the edit button go?

Chroma has no floating edit FAB. Edit, edit source and history are in the page toolbar below the title; on mobile they are icon buttons.

## Where is the TOC on a long page?

Desktop shows a sticky TOC on the right; it is hidden on narrow screens, in reading layout and in reading mode. Switch layout from the top-bar display options.

## Is 1.44 supported?

No. Maintained lines are 1.43 LTS, 1.45 and 1.46; 1.44 is not an LTS and has no separate branch.

## Can I use it commercially?

**Yes.**

GPL-3.0-or-later permits commercial use: internal company wikis, client projects, hosted services, and paid deployment or customization. You do not need to pay Chroma or ask for permission.

The important distinction is **use vs. distribution**:

- **Running it yourself / on your own servers** — including a paid SaaS — does not by itself require you to publish your modifications;
- **Distributing Chroma or a modified version to customers or the public** — you must provide the corresponding source under the GPL, keep copyright and license notices, and license the derivative work under the GPL;
- You may not remove `LICENSE` / `NOTICE` or imply endorsement by Google or Chroma;
- The software is provided as-is, without warranty.

If you need to distribute a modified Chroma inside a **closed-source** product, the GPL does not allow that directly; get legal review or separate permission. Third-party components have their own licenses; see `NOTICE`.
