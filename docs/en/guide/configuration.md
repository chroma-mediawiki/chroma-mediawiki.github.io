---
title: Configuration
---

# Configuration

Every Chroma setting lives in `LocalSettings.php` in the wiki root. Save, refresh — no database change or server restart.

## Most likely changes

| I want to… | Setting | Values |
|---|---|---|
| Change the default color | `$wgChromaDefaultSeed` | `#006A6A`, `#0061A4`, `#386A20`, `#6750A4` |
| Default to dark | `$wgChromaDefaultScheme` | `dark`, `light`, `system` |
| Default to reading layout | `$wgChromaDefaultLayout` | `reading`, `app` |
| Start articles in reading mode | `$wgChromaDefaultReadingMode` | `true`, `false` |
| Prevent users changing color | `$wgChromaAllowUserColor` | `false` |
| Prevent users changing layout | `$wgChromaAllowUserLayout` | `false` |
| Prevent users changing reading mode | `$wgChromaAllowUserReadingMode` | `false` |

## Change the default color

```php
$wgChromaDefaultSeed = '#0061A4'; // blue
```

Only four presets exist:

| Color | Value |
|---|---|
| Teal (default) | `#006A6A` |
| Blue | `#0061A4` |
| Green | `#386A20` |
| Violet | `#6750A4` |

Any other value falls back to Teal. For deeper customization, see [Themes & color](theming.md).

## Default light/dark scheme

```php
$wgChromaDefaultScheme = 'dark';
```

- `system`: follow the visitor's OS;
- `light`: light;
- `dark`: dark.

This is only a default; if user overrides are enabled, visitors can still switch from the top bar or Preferences.

## Default layout

```php
$wgChromaDefaultLayout = 'reading';
```

- `app`: top bar, left drawer, right TOC;
- `reading`: no drawer or TOC, centered content.

Users can switch from the top bar's **Display options**.

## Default reading mode

```php
$wgChromaDefaultReadingMode = true;
```

When `true`, article pages start in reading mode: the TOC and page actions are hidden and content is constrained. `Special:` pages are unaffected.

## Allow or block user overrides

```php
$wgChromaAllowUserColor = true;
$wgChromaAllowUserLayout = true;
$wgChromaAllowUserReadingMode = true;
```

When `false`, values saved by users are ignored and the site default wins.

Public wikis usually keep these `true`; internal wikis can lock the visuals.

## Full example

```php
wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';

$wgChromaDefaultSeed = '#006A6A';
$wgChromaDefaultScheme = 'system';
$wgChromaDefaultLayout = 'app';
$wgChromaDefaultReadingMode = false;

$wgChromaAllowUserColor = true;
$wgChromaAllowUserLayout = true;
$wgChromaAllowUserReadingMode = true;
```

## Logo and favicon

Chroma shows a logo only when a real `$wgLogos` is configured:

```php
$wgLogos = [
    '1x' => "$wgResourceBasePath/resources/assets/logo.png",
    'icon' => "$wgResourceBasePath/resources/assets/icon.png",
];
```

Without `$wgLogos`, Chroma shows the site name only and never generates an initial-letter placeholder.

The favicon is controlled by MediaWiki core:

```php
$wgFavicon = "$wgResourceBasePath/favicon.ico";
```

## Small CSS overrides

Use `MediaWiki:Chroma.css`:

```css
:root {
  --md-sys-color-primary: #005a5a;
}
```

Do not edit files in `skins/Chroma/resources/styles/`; updates overwrite them.

## Changes not applying?

1. Confirm you edited the root `LocalSettings.php`;
2. check for PHP syntax errors (a missing semicolon can white-screen the site);
3. purge caches and refresh;
4. if you set `$wgChromaAllowUser* = false`, old user preferences may still be cached; log out/in or clear cache.

## Related

- [Themes & color](theming.md)
- [Interface & navigation](usage.md)
- [Mobile](mobile.md)
