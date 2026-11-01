---
title: FAQ
---

# FAQ

## Nothing changed after installation

Check that these two lines are in the root `LocalSettings.php`:

```php
wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';
```

and that this file exists:

```text
skins/Chroma/skin.json
```

not `skins/Chroma/Chroma/skin.json`. Refresh; if it still fails, check the PHP error log and `Special:Version`.

## Do I need PHP or Node.js?

No. Installation only requires editing two lines in `LocalSettings.php`. Node.js is only needed if you modify the skin source or regenerate tokens.

## Why is there no logo?

Chroma shows a logo only when a real `$wgLogos` is configured. Without it, Chroma shows the site name and never generates an initial-letter placeholder. See [Configuration](configuration.md).

## Why only preset theme colors?

This release has eight generated presets: Teal, Blue, Green, Violet, Rose, Amber, Indigo and Lime. Arbitrary seeds are not implemented; other values fall back to Teal.

## Mobile still shows MinervaNeue

Confirm:

```php
$wgDefaultMobileSkin = 'chroma';
```

and that MobileFrontend is loaded. Clear cookies/cache and check `Special:Version`.

## Where did the edit button go?

There is no floating edit button. Edit, edit source and history are in the toolbar below the page title; mobile shows them as a row of icons.

## Where is the TOC on long pages?

On desktop it is sticky on the right. It is hidden on mobile, in reading layout and in reading mode. Switch layout from the top-bar **Display options**.

## Is MediaWiki 1.44 supported?

No. Maintained lines are 1.43 LTS, 1.45 and 1.46; 1.44 has no separate branch.

## Will it break extensions?

Chroma does not change extension HTML logic; it only adds styling. Most extensions use the base typography. Tested extensions are listed in [Compatibility](compatibility.md). Report any styling issue with the extension name/version.

## How do I back up or upgrade?

Back up `skins/Chroma` and `LocalSettings.php`; overwrite `skins/Chroma` with the new ZIP from the same branch; purge caches; check `Special:Version`.

## Can I use it commercially?

**Yes.**

GPL-3.0-or-later permits commercial use: internal company wikis, client projects, hosted services, paid deployment or customization. You do not need to pay Chroma or ask permission.

The distinction is **use vs. distribution**:

- **Running it yourself / on your own servers**, including a paid SaaS, does not by itself require publishing modifications;
- **Distributing Chroma or a modified version to customers or the public** requires providing the corresponding source under the GPL, keeping copyright/license notices, and licensing the derivative under the GPL;
- You may not remove `LICENSE` / `NOTICE` or claim endorsement by Google or Chroma;
- Provided as-is, without warranty.

Distributing a modified Chroma in a **closed-source** product is not allowed by the GPL directly; get legal review or separate permission. Third-party components have their own licenses; see `NOTICE`.
