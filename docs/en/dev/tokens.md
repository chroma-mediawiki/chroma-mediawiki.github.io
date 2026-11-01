---
title: Design tokens
---

# Design tokens

## Generate

```bash
npm install
npm run tokens
npm run presets
```

- `tools/generate-tokens.mjs` uses `@material/material-color-utilities` to generate color roles, type scale, shape, elevation, motion and state layers from a seed;
- output: `resources/styles/tokens.css` and `tokens.json` at the repository root;
- `tools/generate-presets.mjs` writes the four preset palettes to `resources/styles/tokens-presets.css`.

CI's `tokens` job regenerates and checks drift:

```bash
npm run tokens
npm run presets
git diff --exit-code -- resources/styles/tokens.css resources/styles/tokens-presets.css tokens.json
```

## Naming

```css
--md-sys-color-*
--md-sys-typescale-*-size / line / weight
--md-sys-shape-corner-*
--md-sys-elevation-*
--md-sys-motion-duration-* / easing-*
--md-sys-state-*-opacity
```

## Adding a preset

1. Add a name and seed in `tools/generate-presets.mjs`;
2. run `npm run presets`;
3. add the value to `SEEDS` in `Hooks.php` and the language files;
4. update the [theming](/en/guide/theming) page and this page;
5. check light/dark contrast.

Do not hand-edit generated CSS; CI detects drift.
