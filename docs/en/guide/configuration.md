---
title: Configuration
---

# Configuration

All settings live in `LocalSettings.php`. Chroma does not write to the database and does not require extra extensions.

## Defaults

```php
// Default seed used to generate the palette
$wgChromaDefaultSeed = '#006A6A';

// 'system' | 'light' | 'dark'
$wgChromaDefaultScheme = 'system';

// 'app' | 'reading'
$wgChromaDefaultLayout = 'app';

// Default reading mode (content pages only)
$wgChromaDefaultReadingMode = false;

// Allow users to override these in Preferences
$wgChromaAllowUserColor = true;
$wgChromaAllowUserLayout = true;
$wgChromaAllowUserReadingMode = true;
```

## `$wgChromaDefaultSeed`

Four presets are supported:

| Value | Name |
|---|---|
| `#006A6A` | teal (default) |
| `#0061A4` | blue |
| `#386A20` | green |
| `#6750A4` | violet |

Arbitrary seeds are **not** supported: an unknown value falls back to teal. Preset palettes are generated at build time into `resources/styles/tokens-presets.css`.

## `$wgChromaDefaultScheme`

- `system`: follow `prefers-color-scheme`;
- `light`: light;
- `dark`: dark.

The choice is written to `data-chroma-theme`, and CSS switches the palette through tokens.

## `$wgChromaDefaultLayout`

- `app`: top bar, drawer and content/TOC;
- `reading`: hides the drawer and TOC, centers the content.

Users can switch from the top-bar display options or Preferences.

## `$wgChromaDefaultReadingMode`

When `true`, content pages start in reading mode: TOC and page actions are hidden and the content is constrained. Special pages are unaffected.

## User overrides

The three `$wgChromaAllowUser*` flags control whether Preferences may override the defaults. When `false`, saved user values are ignored and the site defaults apply.

::: tip Recommendation
Public wikis usually let users choose theme and layout; internal wikis may lock the visual defaults.
:::

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

// MobileFrontend takeover
// $wgDefaultMobileSkin = 'chroma';
```

## Logo

Chroma shows a logo only when a real custom `$wgLogos` is configured:

```php
$wgLogos = [
    '1x' => "$wgResourceBasePath/resources/assets/logo.png",
    'icon' => "$wgResourceBasePath/resources/assets/icon.png",
];
```

Without a custom `$wgLogos`, Chroma shows the site name and never generates an initial-letter placeholder. `$wgFavicon` remains handled by MediaWiki core.

## Site CSS

Use `MediaWiki:Chroma.css` or site CSS for extra overrides:

```css
:root {
  --md-sys-color-primary: #005a5a;
}
```

Do not edit generated files in `resources/styles/`; they are overwritten when tokens are regenerated.
