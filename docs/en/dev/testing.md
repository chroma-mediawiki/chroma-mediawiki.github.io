---
title: Testing
---

# Testing

There is currently no automated unit or Playwright suite. CI only runs:

- PHP lint (`includes/`);
- JSON validation (`skin.json`, `package.json`, i18n);
- required-file checks;
- token / preset generation and drift checks.

## Manual testing

### Install

1. Prepare the matching MediaWiki version with SQLite;
2. symlink the skin to `skins/Chroma`;
3. `wfLoadSkin( 'Chroma' )` and set the default skin;
4. check the main page, edit, history, diff, Preferences, login and `Special:Version`.

### Extension matrix

Use a page with `<ref>`, `<math>`, `<syntaxhighlight>`, parser functions, `<poem>` and `<inputbox>` and check:

- HTTP 200;
- no PHP or browser-console errors;
- no horizontal overflow;
- key controls present.

### Mobile

- a Pixel 7-class mobile UA;
- MobileFrontend installed with `$wgDefaultMobileSkin = 'chroma'`;
- drawer, search, section expansion and toolbar icons.

### Accessibility

There is no automated axe check. Manually check:

- keyboard reachability;
- visible focus;
- menu/drawer ARIA;
- `prefers-reduced-motion`.

## Before committing

```bash
npm run lint
php -l includes/*.php
```

Run all three version lines before a release; see [Releasing](releasing.md).
