const BASE_URL = 'https://jovertical.vercel.app'

function generateItem(article) {
  return `
    <item>
      <guid>${BASE_URL}/articles/${article.id}</guid>
      <title>${article.title}</title>
      <link>${BASE_URL}/articles/${article.slug}</link>
      <description>${article.excerpt}</description>
      <pubDate>${article._publishedAt}</pubDate>
    </item>
  `
}

export default function generate(articles) {
  return `
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Articles - Jovert Palonpon</title>
        <link>${BASE_URL}/articles</link>
        <description>
          My personal thoughts on web development and programming
        </description>
        <language>en</language>
        <lastBuildDate>${articles.first()._publishedAt}</lastBuildDate>
        <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
        ${articles.map(generateItem).join('')}
      </channel>
    </rss>
  `
}
