/**
 * ARMS 88.4 FM - News Data Store
 * Editorial news feed for African Radio Mindset Set, Nyaruntuntu, Ntungamo, Uganda.
 */

export const newsArticles = [
  {
    id: 'omama-toro',
    slug: 'omama-toro',
    title: 'ARMS Following Developments Concerning Omama Toro',
    category: 'Community Notice',
    dateLabel: 'Latest Update',
    summary:
      'ARMS is following developments concerning the reported death of Omama Toro. Further verified information will be published as it becomes available.',
    content: [
      'ARMS is following developments concerning the reported death of Omama Toro. Further verified information will be published as it becomes available.',
      'Our editorial team is in the process of confirming details from official authorities and family representatives before releasing additional findings.',
      'Listeners and readers are advised that verified updates regarding this situation will be broadcast directly over ARMS 88.4 FM and published on this official portal as verified facts are established.',
      'Editorial notice: ARMS adheres to strict broadcasting ethics and avoids speculation. Complete coverage will be presented as confirmed by reliable sources.',
    ],
    featured: true,
  },
];

export function getArticleBySlug(slug) {
  return newsArticles.find((article) => article.slug === slug);
}
