# Aiden Smith portfolio

Personal portfolio for aidensmith.dev, adapted from the ryv-site codebase. Next.js App Router, Tailwind, IBM Plex Mono, and a fully static export.

## Develop

```sh
bun install --frozen-lockfile
bun run dev
```

`bun run build` validates the site and generates `out/`. No deployment is configured for the live domain by this adaptation. The Cloudflare worker name is separate from ryv-site.

## Content

- `data/site.ts`: identity, contact links, and current work. Email is omitted until an address is supplied.
- `app/page.tsx`: introduction, selected work, and personal background.
- `data/projects.ts`: full project catalog, development statuses, writeups, and changelogs.
- `content/posts/`: existing technical writing in Markdown. The unpublished example is retained in `docs/post-template.md`.
- `public/projects/`: existing project logos and screenshots.

Routes: `/`, `/projects`, `/projects/[slug]`, `/blog`, `/blog/[slug]`, `/contact`, `/feed.xml`, and `/sitemap.xml`.

The About section follows the specific theRandomizr entry on https://aidensmith.dev/projects: built in 2012 with an unordered list and vanilla JavaScript, as an introduction to web development from Aiden’s father. The old homepage instead says 2010; the project-specific account is used here. Historical employer and community affiliations are not presented as current. Project descriptions come from the existing catalog, with the homepage curated for a professional audience.

The new repository is independent. Changes here do not sync to ryv-site automatically.
