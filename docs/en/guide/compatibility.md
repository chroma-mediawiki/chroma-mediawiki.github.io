---
title: Compatibility
---

# Compatibility

## MediaWiki versions

Chroma maintains a separate branch per MediaWiki line:

| MediaWiki | Branch | Minimum PHP |
|---|---|---|
| 1.43 LTS | `REL1_43` | 8.1 |
| 1.45 | `REL1_45` | 8.2 |
| 1.46 | `REL1_46` | 8.3 |

`requires.MediaWiki` is pinned per branch; do not install a 1.46 branch on 1.43.

## Extensions

### 1.46

The local 1.46.0 harness configures 31 Tier 1 extensions (AbuseFilter is not enabled because of its Equivset dependency) and verifies UI for Cite, Math, SyntaxHighlight, InputBox, CategoryTree, Poem, ParserFunctions, Echo, Linter and more.

### 1.43 / 1.45

Each installs 30 Tier 1 extensions. The matrix covers:

- `<ref>` / reference lists;
- `<math>` (native MathML);
- `<syntaxhighlight>`;
- parser functions;
- `<poem>`;
- `<inputbox>`.

The full extension list and limitations are in the skin repository's [COMPATIBILITY.md](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/blob/main/docs/COMPATIBILITY.md).

## Known limitations

- **AbuseFilter**: the test environment lacks `Wikimedia\Equivset`, so it is disabled; this is not a skin bug.
- **VisualEditor / DiscussionTools**: require the VisualEditor `lib/ve` submodule assets; fully verified only in the 1.46 harness.
- **Math**: the local harness uses `native` MathML; `mathml` mode needs RESTBase/Mathoid.
- **Extension automation**: there is no per-extension Playwright suite; the matrix is manual.
- **Arbitrary seeds**: only four presets are supported.
- **Full MD3**: Chroma is an MD3-style token layer plus some Expressive patterns, not a complete Material 3 component library.

## Browsers

Current versions of Chrome, Edge, Firefox and Safari; no IE.

## Reporting issues

Include MediaWiki version, Chroma version/branch, PHP version, extension versions, the page, a screenshot, browser console output and the PHP error log.
