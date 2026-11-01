---
title: Repository layout
---

# Repository layout

```text
skin.json                skin registration, ResourceLoader, hooks
includes/
  SkinChroma.php         extends SkinMustache; injects site name/logo/search/edit data
  Hooks.php              Preferences fields, body data-* attributes
templates/skin.mustache  body-only Mustache template
resources/
  styles/tokens.css      generated MD3 tokens (light/dark/auto)
  styles/tokens-presets.css
  styles/base.css        layout and components
  styles/extensions.css  extension / special-page overrides
  styles/codex-bridge.css
  scripts/chroma.js      drawer, theme, layout, reading mode, scroll-spy, snackbar
i18n/                    en / qqq / zh-hans / zh-hant
tools/                   token and preset generators
```

## Rendering flow

1. MediaWiki calls `SkinChroma::getTemplateData()`;
2. `SkinChroma` adds `sitename`, `link-search`, `has-logo`, `is-editable` and `link-edit`;
3. `templates/skin.mustache` outputs body content only; `<head>` belongs to MediaWiki core;
4. `Hooks::onOutputPageBodyAttributes()` writes user preferences as `data-chroma-*`;
5. `resources/scripts/chroma.js` only provides progressive enhancement.

## Do not

- output `<html>`, `<head>` or `<body>` from the template;
- put modules with `dependencies` in the skin `styles` option (ClientHtml drops them);
- hard-code colors instead of `--md-sys-*`;
- merge `requires` / `menus` across branches.
