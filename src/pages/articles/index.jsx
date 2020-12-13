import Link from 'next/link'
import dayjs from 'dayjs'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import * as query from '@/queries/article'

export default function Articles({ articles }) {
  return (
    <Layout>
      <header>
        <SEO
          title="Articles - Jovert Palonpon"
          description="My personal thoughts on web development and programming"
        />

        <h1 className="text-2xl font-extrabold text-black">Articles</h1>

        <p className="text-lg mt-6">
          Here you can read the articles I've written myself
        </p>
      </header>

      <div className="mt-6">
        {articles.map((article) => (
          <article className="mt-8" key={article.id}>
            <h1 className="text-lg font-bold no-underline">
              <Link as={`/articles/${article.slug}`} href="/articles/[slug]">
                <a>{article.title}</a>
              </Link>
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              {dayjs(article._publishedAt).format('MMMM D, YYYY')}
            </p>

            <div className="mt-4 prose prose:lg">{article.excerpt}</div>

            <div className="mt-6">
              <Link as={`/articles/${article.slug}`} href="/articles/[slug]">
                <a className="inline-flex items-center text-blue-500 hover:underline">
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
