---
title: Contributing
---

# Contributing

## Pull requests

- one thing per PR;
- state the affected MediaWiki versions (1.43 / 1.45 / 1.46);
- include screenshots for UI changes (light + dark, mobile when relevant);
- run `php -l` for PHP changes;
- do not commit token drift, `node_modules` or build output.

## Style

- tabs in CSS; prefer tokens for color/radius/spacing;
- four spaces in PHP, MediaWiki style;
- JS stays a progressive-enhancement IIFE with no build dependency;
- keep templates body-only.

## License

Contributions are accepted under GPL-3.0-or-later; third-party assets must be recorded in NOTICE.
