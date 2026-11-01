---
title: Themes & color
---

# Themes & color

## For visitors: change colors

Log in and open:

```text
Special:Preferences#mw-prefsection-rendering
```

Under Appearance you can choose:

- theme color: Teal / Blue / Green / Violet;
- scheme: system / light / dark;
- layout and reading mode.

The top-bar **Display options** menu has the same switches.

## For admins: change the site default

In `LocalSettings.php`:

```php
$wgChromaDefaultSeed = '#0061A4'; // blue
```

Presets:

| Preset | Value | Feel |
|---|---|---|
| Teal | `#006A6A` | default, neutral |
| Blue | `#0061A4` | formal / corporate |
| Green | `#386A20` | natural / community |
| Violet | `#6750A4` | creative |

Arbitrary colors are not supported; unknown values fall back to Teal. See [Configuration](configuration.md) for all options.

## Dark mode

Dark mode remaps the same semantic color roles onto dark surfaces; it is not a black overlay.

Set the default:

```php
$wgChromaDefaultScheme = 'dark'; // system | light | dark
```

Visitors can still switch from the top bar. Dark colors are tuned for WCAG AA contrast.

## Advanced: color tokens

Chroma components use `--md-sys-*` variables:

```css
--md-sys-color-primary
--md-sys-color-on-primary
--md-sys-color-surface
--md-sys-color-surface-container
--md-sys-color-outline
```

Override a role in `MediaWiki:Chroma.css`:

```css
:root {
  --md-sys-color-primary: #005a5a;
  --md-sys-color-on-primary: #ffffff;
}
```

Change `primary` and `on-primary` together so contrast stays valid.

## Advanced: regenerate the palette

From the skin repository:

```bash
npm install
npm run tokens
```

This updates `resources/styles/tokens.css` and `tokens.json`. See [Design tokens](../dev/tokens.md).

## Fonts

The default stack uses system fonts with a Roboto Flex fallback; no external font CDN is requested. Override `--md-sys-typescale-font-family` to change it.

## Avoid

- editing generated `tokens.css`;
- expecting an arbitrary seed to generate a palette;
- mass `!important` layout overrides; prefer tokens or site CSS.
