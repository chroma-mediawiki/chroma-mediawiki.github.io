---
title: Branches & versions
---

# Branches & versions

| Branch | MediaWiki | `requires.MediaWiki` | Menu keys |
|---|---|---|---|
| `REL1_43` | 1.43 LTS | `>=1.43 <1.44` | legacy: `namespaces` / `personal` |
| `REL1_45` | 1.45 | `>=1.45 <1.46` | new menu keys |
| `REL1_46` | 1.46 | `>=1.46 <1.47` | new menu keys |
| `main` | development | wide range | new menu keys |

## Rules

- fix compatibility per branch; do not merge 1.46 workarounds into 1.43;
- the 1.43 template uses `data-namespaces` / `data-personal`;
- 1.45 / 1.46 use `data-associated-pages` / `data-user-menu`;
- tags look like `v0.5.2-REL1_43`, `v0.5.2-REL1_45`, `v0.5.2-REL1_46`;
- `release.yml` builds one ZIP per tag.

## Adding a version line

1. branch from `main`;
2. set `requires.MediaWiki` in `skin.json`;
3. adjust `menus`, Codex/OOUI bridge and minimum PHP;
4. verify install, edit, history, Preferences and mobile on the real version;
5. update this page and the skin repo's `docs/COMPAT-MATRIX.md`.
