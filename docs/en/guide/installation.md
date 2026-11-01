---
title: Installation
---

# Installing Chroma

## Requirements

- MediaWiki **1.43 LTS**, **1.45** or **1.46**;
- the PHP version required by that MediaWiki release (1.43: 8.1+, 1.45: 8.2+, 1.46: 8.3+);
- write access to `skins/` and `LocalSettings.php`;
- Node.js is not required to install; release ZIPs contain compiled CSS and JS.

## Download

Download the ZIP for your MediaWiki version from [GitHub Releases](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases):

| MediaWiki | Release |
|---|---|
| 1.43 LTS | [v0.5.2-REL1_43](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases/tag/v0.5.2-REL1_43) |
| 1.45 | [v0.5.2-REL1_45](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases/tag/v0.5.2-REL1_45) |
| 1.46 | [v0.5.2-REL1_46](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases/tag/v0.5.2-REL1_46) |

Extract it so the layout is:

```text
skins/
└── Chroma/
    ├── skin.json
    ├── includes/
    ├── templates/
    ├── resources/
    └── i18n/
```

::: warning Do not nest the folder
If you end up with `skins/Chroma/Chroma/skin.json`, MediaWiki will not find the skin. `skin.json` must be at `skins/Chroma/skin.json`.
:::

## Enable

Add this to the end of `LocalSettings.php`:

```php
wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';
```

Refresh the page. If the skin does not apply:

- verify `skins/Chroma/skin.json` exists;
- check the PHP error log;
- make sure `LocalSettings.php` does not return before `wfLoadSkin`;
- run `php maintenance/run.php rebuildLocalisationCache` (or `rebuildMessages`) and reload.

## Optional: MobileFrontend takeover

Install [MobileFrontend](https://www.mediawiki.org/wiki/Extension:MobileFrontend), then set:

```php
wfLoadExtension( 'MobileFrontend' );
$wgDefaultMobileSkin = 'chroma';
```

Mobile UAs then use Chroma's responsive layout directly instead of MinervaNeue. See [Mobile](mobile.md).

## Updating

1. Back up `skins/Chroma` and `LocalSettings.php`;
2. overwrite `skins/Chroma` with the new ZIP for your branch;
3. purge caches (`php maintenance/run.php purgeParserCache --age 0`);
4. check `Special:Version` for the skin version.

## Uninstall

Remove these lines from `LocalSettings.php`:

```php
wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';
```

Switch `$wgDefaultSkin` back to another skin such as `vector`, then delete `skins/Chroma`.
