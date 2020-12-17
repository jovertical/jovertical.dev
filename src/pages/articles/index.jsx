import Link from 'next/link'
import dayjs from 'dayjs'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import * as query from '@/queries/article'

export default function Articles({ articles }) {
  return (
    <Layout>
      <header className="max-w-3xl">
        <SEO
          title="Articles - Jovert Palonpon"
          description="My personal thoughts on web development and programming"
        />

        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          Articles
        </h1>

        <p className="text-lg text-gray-900 dark:text-gray-100 leading-loose mt-6">
          My personal thoughts on web development and programming. When I solved
          a particular problem and I thought others will encounter those also,
          I'll write those down here.
        </p>
      </header>

      <div className="mt-6">
        {articles.map((article) => (
          <article className="mt-8" key={article.id}>
            <h1 className="text-lg text-gray-900 dark:text-gray-100 font-bold no-underline">
              <Link as={`/articles/${article.slug}`} href="/articles/[slug]">
                <a>{article.title}</a>
              </Link>
            </h1>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {dayjs(article._publishedAt).format('MMMM D, YYYY')}
            </p>

            <p className="mt-4 text-gray-900 dark:text-gray-100 leading-relaxed max-w-xl">
              {article.excerpt}
            </p>

            <div className="mt-6">
              <Link as={`/articles/${article.slug}`} href="/articles/[slug]">
                <a className="text-gray-900 dark:text-gray-100 hover:underline">
                  Read more →
                </a>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const articles = await query.getAll()

  return {
    props: { articles },
  }
}
