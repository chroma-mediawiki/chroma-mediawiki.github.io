---
title: Releasing
---

# Releasing

1. Update `version` in `skin.json` and `package.json`;
2. update `CHANGELOG.md`;
3. sync the change into all three branches, preserving their `menus` / `requires`;
4. smoke-test 1.43 / 1.45 / 1.46;
5. tag each branch head:

```bash
v0.5.2-REL1_43
v0.5.2-REL1_45
v0.5.2-REL1_46
```

6. `release.yml` builds ZIPs and creates GitHub Releases;
7. update the README download table, site version and release links;
8. verify the ZIP layout:

```text
skin.json
includes/
templates/
resources/
i18n/
docs/
screenshots/   # README images
LICENSE
NOTICE
```

## Versioning

- patch: fixes, styling, compatibility;
- minor: new layouts/components/extension matrix;
- major: incompatible template or configuration changes.
