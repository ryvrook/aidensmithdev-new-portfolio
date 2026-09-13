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
  socials: [
    { label: 'github', href: 'https://github.com/ryvrook' },
    { label: 'linkedin', href: 'https://www.linkedin.com/in/aidensmithdev/' },
  ],
  avatar: 'https://avatars.githubusercontent.com/u/29802327?v=4' as string | null,
  bio: 'Full-stack developer building useful software, from motorcycle ownership tools to domain monitoring and connected business platforms.',
  now: [
    'Getting Roadrunner ready for its iOS release, with work on photo uploads, personal parts lists, and community moderation.',
    'Developing Presentelle, an experimental workspace for turning physical boards into a lasting, reviewable working record.',
    'Connecting the Corvid products and improving DNS, certificate, and WHOIS monitoring in Enterprise VectorDNS.',
  ],
  recent: [
    {
      date: '2026-09-10',
      text: 'Finished the local build of Back2Paper, with 233 reviewed lessons across nine tracks and three printable level books.',
      href: '/projects/back2paper',
      label: 'Back2Paper',
    },
    {
      date: '2026-09-05',
      text: 'Polished Roadrunner on mobile with personal parts lists, iPhone photo uploads, and fixes for stalled requests.',
      href: '/projects/roadrunner',
      label: 'Roadrunner',
    },
    {
      date: '2026-09-03',
      text: 'Added calendar exports for Roadrunner reminders, Apple and Facebook sign-in, and controls for hiding guides and blocking authors.',
      href: '/projects/roadrunner',
      label: 'Roadrunner',
    },
    {
      date: '2026-09-01',
      text: 'Built out the septic services directory from acquisition through curation, publishing 142 reviewed listings.',
      href: '/projects/flock-directories',
      label: 'septic services directory',
    },
    {
      date: '2026-08-31',
      text: 'Joined the Corvid product network into one operator platform with shared workflows, jobs, leads, mappings, and deployment views.',
      href: '/projects/corvid-platform',
      label: 'Corvid product network',
    },
    {
      date: '2026-08-31',
      text: 'Hardened the Enterprise VectorDNS scanners so DNS, certificate, and WHOIS history records real changes instead of noise.',
      href: '/projects/enterprise-vectordns',
      label: 'Enterprise VectorDNS',
    },
  ] as RecentEntry[],
  copyrightYears: '2026',
  contactNote: 'Find me on LinkedIn or explore my work on GitHub.',
};

export type Site = typeof site;
