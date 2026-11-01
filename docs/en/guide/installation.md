---
title: Installation
---

# Installing Chroma

This guide assumes you already have a working MediaWiki. If not, start with the [MediaWiki installation guide](https://www.mediawiki.org/wiki/Manual:Installation_guide).

## What you need

- MediaWiki **1.43 LTS**, **1.45** or **1.46**;
- the matching PHP version (1.43: 8.1+, 1.45: 8.2+, 1.46: 8.3+);
- file access to your wiki directory (FTP, SSH or a file manager);
- permission to edit `LocalSettings.php` in the wiki root.

You do not need Node.js, npm or a compiler. Release ZIPs contain compiled CSS and JS.

## Step 1: Download the right package

Open `Special:Version` to confirm your MediaWiki version, then download:

| Your MediaWiki | Download |
|---|---|
| 1.43 LTS | [v0.5.2-REL1_43](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases/tag/v0.5.2-REL1_43) |
| 1.45 | [v0.5.2-REL1_45](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases/tag/v0.5.2-REL1_45) |
| 1.46 | [v0.5.2-REL1_46](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases/tag/v0.5.2-REL1_46) |

The file is named `Chroma-v0.5.2-REL1_xx.zip`.

## Step 2: Put it in skins/Chroma

In the wiki root, find the `skins` directory (next to `LocalSettings.php` and `includes`).

1. Create `skins/Chroma`;
2. Extract the files **inside** the ZIP into that folder;
3. The final path must be:

```text
your-wiki/
├── LocalSettings.php
├── includes/
├── skins/
│   └── Chroma/
│       ├── skin.json
│       ├── includes/
│       ├── templates/
│       ├── resources/
│       └── i18n/
```

::: warning Do not nest the folder
If you get `skins/Chroma/Chroma/skin.json`, MediaWiki cannot find the skin. `skin.json` must be directly inside `skins/Chroma/`.
:::

## Step 3: Enable it

Open `LocalSettings.php` in the wiki root and add this at the **end** of the file:

```php
wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';
```

Save and refresh the wiki. It should switch immediately.

If the file ends with `?>`, put these lines before `?>`; better yet, remove the closing `?>` to avoid stray whitespace output.

## Nothing changed?

Check in order:

1. **Path**: is `skins/Chroma/skin.json` present? Not `skins/Chroma/Chroma/skin.json`;
2. **Config**: are both lines in `LocalSettings.php`, with the correct case?
3. **Permissions**: can the PHP process read `skins/Chroma`?
4. **Cache**: refresh, or run `php maintenance/run.php purgeParserCache --age 0`;
5. **Error log**: check PHP/Apache/Nginx logs; they usually say what is wrong.

You can also open `Special:Version` and look for **Chroma** in the skin list.

## Optional: mobile with MobileFrontend

To use Chroma on mobile as well:

1. Install [MobileFrontend](https://www.mediawiki.org/wiki/Extension:MobileFrontend);
2. Add:

```php
wfLoadExtension( 'MobileFrontend' );
$wgDefaultMobileSkin = 'chroma';
```

Mobile browsers then use Chroma's responsive layout instead of MinervaNeue. See [Mobile](mobile.md).

## Updating

1. Back up `skins/Chroma` and `LocalSettings.php`;
2. download the new ZIP for the same branch;
3. overwrite `skins/Chroma`;
4. purge caches and refresh;
5. check the version on `Special:Version`.

## Uninstalling

1. Remove from `LocalSettings.php`:

```php
wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';
```

2. Set `$wgDefaultSkin` back to another skin such as `vector`;
3. delete `skins/Chroma`.

## Still stuck?

Open an issue with:

- MediaWiki version;
- PHP version;
- Chroma version/branch;
- a screenshot of the error;
- the relevant PHP error-log lines.

https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/issues
