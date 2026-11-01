---
title: Mobile
---

# Mobile

## What mobile visitors get

Without MobileFrontend, Chroma is still responsive: narrow screens collapse the left navigation and constrain content.

With MobileFrontend and Chroma as the default mobile skin, mobile visitors get:

- ☰ navigation overlay;
- search collapsed to a magnifier;
- page tabs and actions in one toolbar row;
- no TOC on narrow screens;
- MobileFrontend sections expanded by default.

## Setup

1. Install [MobileFrontend](https://www.mediawiki.org/wiki/Extension:MobileFrontend);
2. Add to `LocalSettings.php`:

```php
wfLoadExtension( 'MobileFrontend' );
$wgDefaultMobileSkin = 'chroma';
```

3. Visit on a phone, or switch the browser UA, and check the styling.

## Relationship with MinervaNeue

Chroma does not depend on MinervaNeue. With `$wgDefaultMobileSkin = 'chroma';`, mobile uses Chroma instead.

MinervaNeue may stay installed; it does not conflict.

## Do I still need `?useskin=chroma`?

No. Mobile UAs use Chroma by default. `?useskin=chroma` is only for forcing Chroma on a desktop UA.

## Still seeing the old mobile skin?

1. Confirm `$wgDefaultMobileSkin = 'chroma';` is active;
2. confirm MobileFrontend is loaded;
3. clear cookies and cache;
4. check `Special:Version` for Chroma;
5. check whether another MobileFrontend setting overrides the default skin.

## Without MobileFrontend

Chroma works responsively on its own; MobileFrontend only adds mobile detection and mobile-specific features.

## Related

- [Interface & navigation](usage.md)
- [Configuration](configuration.md)
- [FAQ](faq.md)
