# Lion Industries

The company website for Lion Industries: David van Leeuwen’s independent
company for useful apps, curious experiments, and occasional hardware.

The visual language shares the plain-spoken, monospace character of
[davidvanleeuwen.nl](https://davidvanleeuwen.nl), but gives Lion Industries its
own industrial amber identity and more room for products.

## What is included

- a complete, responsive homepage
- an honest “in development” product section
- dedicated `/support/` and `/privacy/` pages
- social sharing metadata and a custom Open Graph image
- accessible keyboard states and reduced-motion support
- a GitHub Pages deployment workflow

## Run locally

Node.js 22 or newer is recommended.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Check the production version

```bash
npm test
```

The site is a static Next.js export. A successful build creates the deployable
site in `out/`.

## Publish with GitHub Pages

The workflow in `.github/workflows/pages.yml` builds and publishes the site
whenever `main` changes. In the GitHub repository, choose **Settings → Pages →
Source → GitHub Actions** once. Future pushes to `main` will deploy
automatically.

## Before the app ships

Replace the temporary product copy with the final:

1. app name and one-sentence description
2. App Store link and icon
3. release status
4. exact product-specific privacy disclosure

The current privacy page is accurate for this website and explicit that the app
is still in development. It should not be used as the app’s final App Store
privacy policy until the app’s actual data behavior is documented.
