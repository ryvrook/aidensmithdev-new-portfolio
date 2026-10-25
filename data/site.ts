export type RecentEntry = {
  date: string;
  text: string;
  href?: string;
  label?: string;
};

export const site = {
  url: 'https://aidensmith.dev',
  name: 'Aiden Smith',
  handle: '@ryvrook',
  role: 'full-stack developer',
  email: '' as string,
  github: 'https://github.com/ryvrook',
  linkedin: 'https://www.linkedin.com/in/aidensmithdev/',
  resume: '/Aiden-Smith-Resume.pdf',
  socials: [
    { label: 'github', href: 'https://github.com/ryvrook' },
    { label: 'linkedin', href: 'https://www.linkedin.com/in/aidensmithdev/' },
  ],
  avatar: 'https://avatars.githubusercontent.com/u/29802327?v=4' as string | null,
  bio: 'Full-stack developer building useful software, from motorcycle ownership tools to domain monitoring and connected business platforms.',
  now: [
    'Building ItemForge and StackSize, two small Hytale mods for custom items and stack limits, after Schematic Blueprints reached CurseForge.',
    'Maintaining my fifteen Hytale server mods and their wiki at mods.ryvrook.com, with Polyglot next for CurseForge.',
    'Developing DuckRelay, with sticker tag packs, moderation tools, and a mobile companion.',
  ],
  recent: [
    {
      date: '2026-10-25',
      text: 'Built ItemForge, a Hytale mod that turns any held item into a custom item with its own stats and perks, as the suite reached 694 downloads on CurseForge.',
      href: '/projects/hytale-mods',
      label: 'Hytale mods',
    },
    {
      date: '2026-10-24',
      text: 'Imported the full product catalog, 48 photos and nine 360 videos, into Eternal Love and rebuilt its pages from the CMS.',
      href: '/projects/eternal-love',
      label: 'Eternal Love',
    },
    {
      date: '2026-10-23',
      text: 'Released Feats 1.10.0, TrackerAPI 1.3.0, and Chronicle Stats 1.6.1, adding achievement tabs, bindings, and records for fourteen mods by other authors.',
      href: '/projects/hytale-mods',
      label: 'Hytale mods',
    },
    {
      date: '2026-10-22',
      text: 'Rebuilt the McKay Used Books site as a static Cloudflare Worker with an owner admin, keeping every old URL.',
      href: '/projects/mckay-used-books',
      label: 'McKay Used Books',
    },
    {
      date: '2026-10-19',
      text: 'Published Workbench Chest Link, the eleventh of my Hytale mods on CurseForge, and built the Apollo Coffee site over three days.',
      href: '/projects/hytale-mods',
      label: 'Hytale mods',
    },
    {
      date: '2026-10-16',
      text: 'Launched mods.ryvrook.com, a wiki covering every command, permission, and setting across my Hytale mods.',
      href: '/projects/hytale-mods',
      label: 'Hytale mods',
    },
  ] as RecentEntry[],
  copyrightYears: '2026',
  contactNote: 'Find me on LinkedIn or explore my work on GitHub.',
};

export type Site = typeof site;
