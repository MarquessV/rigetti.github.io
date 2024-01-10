# Rigetti Open Source 

This repo contains the source for the **[Rigetti Open Source Homepage](https://rigetti.github.io)**.

# Getting Started

This site is built with [Astro](https://astro.build/) and [tailwindcss](https://tailwindcss.com/), starting from the [AstroWind Template](https://github.com/onwidget/astrowind).

This project uses [pnpm](https://pnpm.io/) to manage dependencies. You can install the dependencies with:

```sh
pnpm install
```

Then you can deploy a local development version of the website with:

```sh
pnpm run dev
```

## Configuration

You can configure the template using `./src/config.yaml`. For simplicity, most modules are disabled.

## Styling

This project uses mostly vanilla ``tailwindcss`` for styling. [The tailwindcss documentation](https://tailwindcss.com/docs) should be a good primary reference.

We only extend the default tailwind theme to set the default font and to use colors from the Rigetti palette. The theme can be configured via `./tailwind.config.js`. Note that it also uses some globally defined CSS in `./src/components/CustomStyles.astro`

## Content

Astro uses [file-based routing](https://docs.astro.build/en/core-concepts/astro-pages/#file-based-routing) and makes every file `./src/pages` an endpoint on the site. Generally, a file `./src/pages/route.astro` will be accessible at `rigetti.gihub.com/route`. One special exception to this is `index.astro`, which gets served as the root.

### Layouts

Related to how an individual page gets rendered are [Layouts](https://docs.astro.build/en/core-concepts/layouts/). These structure the UI and can provide common elements that should be shared across pages. 

Layouts are defined in `./src/layouts` and for this site mostly provide metadata and global CSS.

### Components

A variety of components are available for re-use in `./src/components`. These components can be re-used in many pages, so changes to any individual component should be done with care, since it will impact every page that uses the component. 
