---
title: Quick start
---

# Quick start

## 1. Pick a branch

Choose only the branch matching your MediaWiki version:

| MediaWiki | Branch |
|---|---|
| 1.43 LTS | `REL1_43` |
| 1.45 | `REL1_45` |
| 1.46 | `REL1_46` |

## 2. Put it in skins

Download the ZIP and extract it to `skins/Chroma`. Confirm:

```text
skins/Chroma/skin.json
```

## 3. Enable

In `LocalSettings.php`:

```php
wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';
```

## 4. Open Preferences

After logging in, visit:

```text
Special:Preferences#mw-prefsection-rendering
```

You can set:

- color scheme: system / light / dark;
- layout: app / reading;
- reading mode: on / off;
- seed: teal / blue / green / violet.

## 5. Try the top bar

The top bar has two menus:

- **Display options**: layout, color scheme and reading mode;
- **Account**: personal tools, login and account creation.

Below the page title are page tabs (Page / Discussion) and page actions (Read / Edit / History).

## Next

- [Configuration](configuration.md)
- [Interface & navigation](usage.md)
- [Themes & color](theming.md)
- [Mobile](mobile.md)
