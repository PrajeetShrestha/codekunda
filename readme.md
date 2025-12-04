# Jekyll Conversion for new_branding

This repository now uses Jekyll (>= 4.x) to generate the site under the `new_branding` base URL while maintaining identical visuals, URLs, and behavior.

## Structure
- `_layouts/` — Base HTML layout wrapper.
- `_includes/` — Reusable components (head, header, sections, footer, scripts).
- `_data/` — Data files used to populate services and products.
- `_sass/` — SCSS partials. The original CSS is converted into `_styles.scss`.
- `new_branding/css/styles.scss` — Compiles to `new_branding/css/styles.css` to preserve the original path.
- `new_branding/js/main.js` — Original JavaScript preserved.
- `index.html` — Home page rendering includes; outputs at `/new_branding/`.

## Development
1. Ensure Ruby and Bundler are installed.
2. Install dependencies:
   - `bundle install`
3. Run locally:
   - `bundle exec jekyll serve`
   - Open `http://localhost:4000/new_branding/`

## Content Updates
- Services: edit `_data/services.yml`.
- Products: edit `_data/products.yml`.
- Sections: update the files inside `_includes/` if structural changes are needed.

## Notes
- SCSS compiles automatically during build. Styling and responsive behavior are identical to the original.
- JavaScript loading and CDN libraries mirror the original HTML.
- Permalinks are set to `pretty` and base URL is `/new_branding` to match existing paths.

