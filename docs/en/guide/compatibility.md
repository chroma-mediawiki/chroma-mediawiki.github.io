---
title: Compatibility
---

# Compatibility

## Supported MediaWiki versions

| MediaWiki | Branch | Notes |
|---|---|---|
| 1.43 LTS | `REL1_43` | long-term support |
| 1.45 | `REL1_45` | stable |
| 1.46 | `REL1_46` | current |

Use the matching release package. Do not install a 1.46 package on 1.43 or vice versa.

MediaWiki 1.44 is not supported (not an LTS; no separate branch).

## Extension support

Chroma changes presentation only; it does not alter extension output. Tested with:

- **Cite**: `<ref>`, reference lists, footnotes;
- **Math**: `<math>`;
- **SyntaxHighlight**: code blocks;
- **ParserFunctions**: `#if` and friends;
- **Poem**: `<poem>`;
- **InputBox**, **CategoryTree**;
- login, history, diffs, Preferences;
- VisualEditor / DiscussionTools on the 1.46 test environment.

The 1.46 environment configures 31 Tier 1 extensions; 1.43 and 1.45 each install 30. Not every community extension is verified; report issues with the extension name and version.

## Known limitations

- **AbuseFilter**: the test environment lacks `Wikimedia\Equivset`, so it is disabled; not a skin issue.
- **Math**: the local environment uses native MathML; `mathml` mode requires RESTBase/Mathoid.
- **Arbitrary colors**: four presets only.
- **Full Material 3**: Chroma is an MD3-style token layer plus selected Expressive patterns, not a complete Material 3 component library.
- **Automation**: there is no per-extension automated suite; the matrix is manual.

## Browsers

Current Chrome, Edge, Firefox and Safari; no IE.

## Reporting a compatibility issue

Include:

- MediaWiki version;
- Chroma version/branch;
- PHP version;
- extension names and versions;
- the page URL or a screenshot;
- browser console and PHP error-log output.

Open an issue: https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/issues
