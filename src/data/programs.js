/**
 * ARMS 88.4 FM - Programs Data Store
 * Official programming lineup for African Radio Mindset Set, Nyaruntuntu, Ntungamo, Uganda.
 */

export const programs = [
  {
    id: 'bwasheesha-buta',
    slug: 'bwasheesha-buta',
    title: 'Bwasheesha Buta',
    category: 'Community & Entertainment',
    tagline: 'Lively morning conversation & community focus',
    description:
      'An engaging ARMS program bringing listeners lively conversation, entertainment and community-focused content.',
    fullDescription:
      'Bwasheesha Buta is an engaging ARMS 88.4 FM program bringing listeners lively conversation, entertainment and community-focused content. Tailored to start your day with genuine energy, the program connects people across Nyaruntuntu, Ntungamo, and neighboring communities.',
    iconName: 'SunMedium',
    accentColor: 'from-amber-500/20 to-yellow-500/5',
  },
  {
    id: 'freezone',
    slug: 'freezone',
    title: 'Freezone',
    category: 'Entertainment & Lifestyle',
    tagline: 'Relaxed radio with engaging discussion',
    description:
      'A relaxed radio experience featuring engaging conversations and entertainment.',
    fullDescription:
      'Freezone is a relaxed radio experience on ARMS 88.4 FM featuring engaging conversations and entertainment. Designed as an open platform for modern lifestyle reflections, music, and thought-provoking exchange.',
    iconName: 'Radio',
    accentColor: 'from-amber-500/20 to-amber-700/5',
  },
  {
    id: 'akagwe',
    slug: 'akagwe',
    title: 'Akagwe',
    category: 'Community Connection',
    tagline: 'Connecting ARMS directly with its listeners',
    description:
      'Community-focused programming designed to connect ARMS with its listeners.',
    fullDescription:
      'Akagwe is dedicated community-focused programming designed to connect ARMS 88.4 FM with its listeners. The program provides a trusted platform for dialogue, listener perspectives, and grass-roots community voices across Ntungamo and beyond.',
    iconName: 'Users',
    accentColor: 'from-red-500/20 to-amber-500/5',
  },
  {
    id: 'sports',
    slug: 'sports',
    title: 'Sports',
    category: 'Sports & Analysis',
    tagline: 'Comprehensive updates for passionate fans',
    description:
      'Sports updates, discussions and analysis for passionate listeners.',
    fullDescription:
      'ARMS Sports brings comprehensive updates, in-depth discussions, and passionate analysis to sports enthusiasts in the region. Covering local, national, and international sports with authentic commentary.',
    iconName: 'Trophy',
    accentColor: 'from-yellow-500/20 to-amber-600/5',
  },
  {
    id: 'evening-drive',
    slug: 'evening-drive',
    title: 'Evening Drive',
    category: 'Drive Time & Music',
    tagline: 'Keeping you company through the evening',
    description:
      'Entertainment, conversation and updates to keep you company through the evening.',
    fullDescription:
      'Evening Drive delivers smooth entertainment, balanced conversation, and essential updates to keep you company through the evening transition. Tune in on 88.4 FM as we wrap up the workday together.',
    iconName: 'Moon',
    accentColor: 'from-amber-500/20 to-red-600/5',
  },
  {
    id: 'kinyarwanda',
    slug: 'kinyarwanda',
    title: 'Kinyarwanda',
    category: 'Cultural & Regional',
    tagline: 'Dedicated programming for Kinyarwanda speakers',
    description:
      'Programming serving Kinyarwanda-speaking listeners with engaging radio content.',
    fullDescription:
      'ARMS Kinyarwanda is dedicated programming serving Kinyarwanda-speaking listeners across our broadcasting footprint with culturally rich, informative, and engaging radio content.',
    iconName: 'Languages',
    accentColor: 'from-red-600/20 to-yellow-500/5',
  },
];

export function getProgramBySlug(slug) {
  return programs.find((p) => p.slug === slug);
}
