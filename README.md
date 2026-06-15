# Furkan Eskil Personal Website

Bilingual static personal website deployed with GitHub Pages.

## Structure

- `index.html`: page structure and English fallback content
- `style.css`: responsive layout and light/dark themes
- `script.js`: translations, theme persistence, and panel navigation
- `assets/`: local profile image and font files
- `scripts/validate.mjs`: lightweight content and navigation checks

The site uses plain HTML, CSS, and vanilla JavaScript. It has no framework,
package dependencies, or build step.

Source Serif 4 and Inter are stored locally under `assets/fonts/`. Their license
files are included in the same directory.

## Validation

```sh
node --check script.js
node scripts/validate.mjs
```
