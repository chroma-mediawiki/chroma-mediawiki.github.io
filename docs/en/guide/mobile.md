---
title: Mobile
---

# Mobile & MobileFrontend

## Full takeover

Install [MobileFrontend](https://www.mediawiki.org/wiki/Extension:MobileFrontend), then:

```php
wfLoadExtension( 'MobileFrontend' );
$wgDefaultMobileSkin = 'chroma';
```

Mobile UAs use Chroma directly instead of MinervaNeue.

## Behavior

- the drawer becomes an overlay;
- search collapses to an icon;
- page tabs and page actions share one toolbar row;
- actions are 44×44 icon buttons;
- MobileFrontend sections are expanded by default, so the article is not collapsed to headings;
- the TOC is hidden on narrow screens.

## `?useskin=chroma` is no longer needed

Mobile UAs already get Chroma. `?useskin=chroma` is only useful for forcing desktop-UAs into Chroma while debugging.

## Without MobileFrontend

Chroma is responsive on its own; narrow screens still read well. MobileFrontend only adds mobile detection and mobile-specific features.

## Troubleshooting

If mobile still shows MinervaNeue:

1. confirm `$wgDefaultMobileSkin = 'chroma';` is active in `LocalSettings.php`;
2. clear browser cookies and cache;
3. check `Special:Version` for Chroma registration;
4. check whether another MobileFrontend setting overrides `DefaultMobileSkin`.
