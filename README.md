# Kait Huerta Website

Website for Kait Huerta, built with Astro and Tailwind CSS. The project is structured as a single-page brand and partnership experience focused on creator storytelling, content strategy, and conversion-driven UGC messaging.

## Overview

This site is composed of section-based Astro components that build a polished landing page experience:

- Hero section with brand positioning and core value highlights
- About section introducing Kait as a UGC creator
- Content showcase and content-building framework sections
- Creative process breakdown for how projects are developed
- Partnership call-to-action section for brand collaboration
- Footer and navigation components for page structure and discoverability

The content emphasizes authentic storytelling, family-focused messaging, and measurable brand impact.

## Tech Stack

- Astro 6
- Tailwind CSS 4
- TypeScript
- Lucide icons via `@lucide/astro`
- PNPM for package management

## Requirements

- Node.js `>=22.12.0`
- PNPM installed globally or available through Corepack

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Create a production build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

Run Astro CLI commands directly:

```bash
pnpm astro -- --help
```

## Project Structure

```text
/
├── public/                 # Static assets served as-is
├── src/
│   ├── assets/             # Local project assets
│   ├── components/         # Section-based Astro UI components
│   │   ├── aboutMe/
│   │   ├── contentShowCase/
│   │   ├── creativeProcess/
│   │   ├── footer/
│   │   ├── hero/
│   │   ├── howToBuild/
│   │   ├── navbar/
│   │   └── partnership/
│   ├── data/               # Copy and structured content for sections
│   ├── layouts/            # Shared page layout wrapper
│   ├── pages/              # Route entry points
│   └── styles/             # Global styles and theme tokens
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Content Architecture

Most editable marketing copy is stored in `src/data`, which keeps the page content separate from the section markup.

Key content files include:

- `src/data/heroData.ts` for hero highlights
- `src/data/aboutMeData.ts` for creator positioning points
- `src/data/buildContent.ts` for the content creation framework
- `src/data/partnershipData.ts` for partnership messaging
- `src/data/footerNavData.ts` and `src/data/navbarData.ts` for navigation

This separation makes it easier to update messaging without restructuring components.

## Design Notes

The visual system is defined in `src/styles/global.css` and includes:

- Custom brand color tokens
- League Spartan and Parisienne typography
- Tailwind-driven utility styling
- A soft neutral surface palette with green and rose accents

## Main Page Composition

The homepage lives in `src/pages/index.astro` and renders the site in this order:

1. Navbar
2. Hero
3. About Me
4. Content Showcase
5. How To Build
6. Creative Process
7. Partnership
8. Footer

## Customization Guide

For common updates:

- Change text and card content in `src/data`
- Adjust section layout and markup in `src/components`
- Update global fonts, colors, and theme tokens in `src/styles/global.css`
- Modify page-level metadata and shared document structure in `src/layouts/Layout.astro`
