import Link from 'next/link'
import * as query from '@/queries/article'

export default function Articles({ articles }) {
  return (
    <div>
      <h1>Articles</h1>

      <div>
        {articles.map((article) => (
          <article key={article.id}>
            <h1>
              <Link as={`/articles/${article.slug}`} href="/articles/[slug]">
                <a>{article.title}</a>
              </Link>
            </h1>

            <div>{article.body}</div>
          </article>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const articles = await query.getAll()

  return {
    props: { articles },
  }
}
