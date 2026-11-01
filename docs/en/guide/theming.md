---
title: Themes & color
---

# Themes & color

## Tokens

Chroma organizes color, type, shape, elevation and motion with `--md-sys-*` variables:

```css
--md-sys-color-primary
--md-sys-color-on-primary
--md-sys-color-surface
--md-sys-color-surface-container
--md-sys-typescale-body-large-size
--md-sys-shape-corner-large
--md-sys-elevation-2
--md-sys-motion-easing-emphasized
```

Components consume tokens; site CSS may override variables, but should avoid hard-coding component colors.

## Four presets

| Preset | Seed |
|---|---|
| teal | `#006A6A` |
| blue | `#0061A4` |
| green | `#386A20` |
| violet | `#6750A4` |

Users can choose in `Special:Preferences#mw-prefsection-rendering`; admins set the site default with `$wgChromaDefaultSeed`.

## Dark mode

- `data-chroma-theme="light"` / `"dark"` / `"system"`;
- CSS switches tokens, not an inversion filter;
- `prefers-color-scheme` is respected.

## Custom colors

Override semantic roles:

```css
:root {
  --md-sys-color-primary: #005a5a;
  --md-sys-color-on-primary: #ffffff;
}
```

To generate a complete palette, use the repository token tooling:

```bash
npm install
npm run tokens
```

See [Design tokens](../dev/tokens.md).

## Fonts

The default stack uses system CJK fonts with a Roboto Flex fallback for Latin; no external font CDN is requested. Override `--md-sys-typescale-font-family` to change it.

## Avoid

- editing `resources/styles/tokens.css` (generated);
- expecting an arbitrary seed to generate a full palette (only four presets are supported);
- mass `!important` overrides; prefer tokens and component classes.
