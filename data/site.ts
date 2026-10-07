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
    'Building Eternal Love for my brother, with a storefront and owner dashboard for his hand-forged metal roses.',
    'Developing DuckRelay, with rubber-duck passports, shared journeys, and a mobile companion.',
    'Improving Enterprise VectorDNS monitoring, analytics, and operational reporting.',
  ],
  recent: [
    {
      date: '2026-10-07',
      text: 'Hardened checkout, uploads, and public endpoints for Eternal Love, the metal-rose shop I built for my brother.',
      href: '/projects/eternal-love',
      label: 'Eternal Love',
    },
    {
      date: '2026-10-05',
      text: 'Updated Ternix after rebuilding config generation around a Nix parser and tightening imports.',
      href: '/projects/ternix',
      label: 'Ternix',
    },
    {
      date: '2026-09-30',
      text: 'Made Enterprise VectorDNS show the latest observed certificate state, including broken scans.',
      href: '/projects/enterprise-vectordns',
      label: 'Enterprise VectorDNS',
    },
    {
      date: '2026-09-29',
      text: 'Added tag-free duck registration and passkeys to DuckRelay, and prepared the iOS app for review.',
      href: '/projects/duckrelay',
      label: 'DuckRelay',
    },
    {
      date: '2026-09-15',
      text: 'Added profile pictures and phone layouts to Back2Paper after deploying the site and rebuilding its printable books.',
      href: '/projects/back2paper',
      label: 'Back2Paper',
    },
    {
      date: '2026-09-14',
      text: 'Added App Store and Android download links to Roadrunner after building its store screenshot pipeline.',
      href: '/projects/roadrunner',
      label: 'Roadrunner',
    },
  ] as RecentEntry[],
  copyrightYears: '2026',
  contactNote: 'Find me on LinkedIn or explore my work on GitHub.',
};

export type Site = typeof site;
