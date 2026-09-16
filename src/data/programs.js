/**
 * ARMS 88.4 FM - Programs Data Store
 * Official programming lineup for African Radio Mindset Set, Nyaruntuntu, Ntungamo, Uganda.
 */

export const programs = [
  {
    id: 'bwasheesha-buta',
    slug: 'bwasheesha-buta',
    title: 'Bwashesha Buta',
    time: '6:00 AM – 10:00 AM',
    moderator: 'Moderator Robert',
    category: 'Morning & Community',
    tagline: 'Lively morning conversation & community focus',
    description:
      'An engaging ARMS program bringing listeners lively conversation, entertainment and community-focused content.',
    fullDescription:
      'Bwashesha Buta is an engaging ARMS 88.4 FM morning program hosted by Moderator Robert from 6:00 AM to 10:00 AM. Tailored to start your day with vibrant energy, the program brings listeners lively conversation, entertainment, and essential community-focused content across Nyaruntuntu, Ntungamo, and neighboring communities.',
    iconName: 'SunMedium',
    accentColor: 'from-amber-500/20 to-yellow-500/5',
  },
  {
    id: 'freezone',
    slug: 'freezone',
    title: 'Free Zone',
    time: '10:00 AM – 1:00 PM',
    moderator: 'Moderator Olivia & Jajawaza',
    category: 'Entertainment & Lifestyle',
    tagline: 'Relaxed radio with engaging discussion',
    description:
      'A relaxed radio experience featuring engaging conversations and entertainment.',
    fullDescription:
      'Free Zone is a relaxed mid-morning to afternoon radio experience on ARMS 88.4 FM hosted by Moderator Olivia and Jajawaza from 10:00 AM to 1:00 PM. Designed as an open platform for modern lifestyle reflections, captivating music, and thought-provoking exchange.',
    iconName: 'Radio',
    accentColor: 'from-amber-500/20 to-amber-700/5',
  },
  {
    id: 'akagwe',
    slug: 'akagwe',
    title: 'Akagwe',
    time: '1:00 PM – 2:00 PM',
    moderator: 'Moderator Henry Mzee Nvzana',
    category: 'Community Connection',
    tagline: 'Connecting ARMS directly with its listeners',
    description:
      'Community-focused programming designed to connect ARMS with its listeners.',
    fullDescription:
      'Akagwe is dedicated community-focused programming hosted by Moderator Henry Mzee Nvzana from 1:00 PM to 2:00 PM. The program provides a trusted platform for dialogue, listener perspectives, and grass-roots community voices across Ntungamo and beyond.',
    iconName: 'Users',
    accentColor: 'from-red-500/20 to-amber-500/5',
  },
  {
    id: 'sports',
    slug: 'sports',
    title: 'Sports',
    time: '2:15 PM – 3:00 PM',
    moderator: 'Sports Lecture Jajawaza',
    category: 'Sports & Analysis',
    tagline: 'Comprehensive updates for passionate fans',
    description:
      'Sports updates, discussions and analysis for passionate listeners.',
    fullDescription:
      'ARMS Sports brings comprehensive updates, in-depth discussions, and passionate analysis hosted by Sports Lecture Jajawaza from 2:15 PM to 3:00 PM. Covering local, national, and international sports with authentic commentary.',
    iconName: 'Trophy',
    accentColor: 'from-yellow-500/20 to-amber-600/5',
  },
  {
    id: 'kinyarwanda',
    slug: 'kinyarwanda',
    title: 'Kinyarwanda',
    time: '3:00 PM – 4:00 PM',
    moderator: 'ARMS Broadcast Team',
    category: 'Cultural & Regional',
    tagline: 'Dedicated programming for Kinyarwanda speakers',
    description:
      'Programming serving Kinyarwanda-speaking listeners with engaging radio content.',
    fullDescription:
      'ARMS Kinyarwanda is dedicated programming broadcasting from 3:00 PM to 4:00 PM, serving Kinyarwanda-speaking listeners across our footprint with culturally rich, informative, and engaging radio content.',
    iconName: 'Languages',
    accentColor: 'from-red-600/20 to-yellow-500/5',
  },
  {
    id: 'evening-drive',
    slug: 'evening-drive',
    title: 'Evening Drive',
    time: '4:00 PM – 6:00 PM',
    moderator: 'Julius',
    category: 'Drive Time & Music',
    tagline: 'Keeping you company through the evening',
    description:
      'Entertainment, conversation and updates to keep you company through the evening.',
    fullDescription:
      'Evening Drive with Julius airs weekdays from 4:00 PM to 6:00 PM on ARMS 88.4 FM, delivering smooth entertainment, balanced conversation, and essential updates to keep you company through the evening transition.',
    iconName: 'Moon',
    accentColor: 'from-amber-500/20 to-red-600/5',
  },
  {
    id: 'akavera',
    slug: 'akavera',
    title: 'Akavera',
    time: '6:00 PM – 7:00 PM',
    moderator: 'Olivia',
    category: 'Evening Feature',
    tagline: 'Evening engagement and community dialogue',
    description:
      'An engaging evening ARMS program bringing listeners thoughtful discussion and entertainment.',
    fullDescription:
      'Akavera is an engaging evening broadcast on ARMS 88.4 FM hosted by Olivia from 6:00 PM to 7:00 PM. The show features captivating conversations, thoughtful discussions, and great radio entertainment to wrap up your day.',
    iconName: 'Mic',
    accentColor: 'from-red-500/20 to-amber-600/5',
  },
];

export function getProgramBySlug(slug) {
  return programs.find((p) => p.slug === slug);
}
