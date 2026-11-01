---
title: Quick start
---

# Five-minute install

## 1. Check your version

Open `Special:Version` and note whether MediaWiki is 1.43, 1.45 or 1.46.

## 2. Download the matching ZIP

- 1.43 LTS → `v0.6.0-REL1_43`
- 1.45 → `v0.6.0-REL1_45`
- 1.46 → `v0.6.0-REL1_46`

Download from [Releases](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases).

## 3. Put it in skins/Chroma

Extract the ZIP so that:

```text
skins/Chroma/skin.json
```

exists — not `skins/Chroma/Chroma/skin.json`.

## 4. Enable it in LocalSettings.php

Add at the end:

```php
wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';
```

Save and refresh.

## 5. Open Preferences

Log in and visit:

```text
Special:Preferences#mw-prefsection-rendering
```

Under Appearance you can change:

- theme color: teal / blue / green / violet / rose / amber / indigo / lime;
- scheme: system / light / dark;
- layout: app / reading;
- reading mode.

The top-bar **Display options** menu has the same quick switches.

## Next

- [Installation](installation.md): full steps and troubleshooting
- [Configuration](configuration.md): change defaults
- [Themes & color](theming.md): colors
- [Interface & navigation](usage.md): what each control does
