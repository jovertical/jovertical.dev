import dayjs from 'dayjs'
import Layout from '@/components/Layout'
import Link from '@/components/Link'
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

        <h1
          className="text-4xl font-extrabold text-accent dark:text-accent-dark"
          data-cy="title"
        >
          Articles
        </h1>

        <p
          className="text-lg text-secondary dark:text-secondary-dark leading-loose mt-6"
          data-cy="description"
        >
          My personal thoughts on web development and programming. Being a full
          stack software engineer, I encounter a lot of problems and I just love
          sharing how I solved these problems, so I write it down here.
        </p>
      </header>

      <div className="mt-6">
        {articles.map((article) => (
          <article className="mt-8" key={article.id}>
            <h1 className="text-lg text-primary dark:text-primary-dark font-bold no-underline">
              <Link as={`/articles/${article.slug}`} href="/articles/[slug]">
                {article.title}
              </Link>
            </h1>

            <p className="mt-2 text-sm text-secondary dark:text-secondary-dark">
              {dayjs(article._publishedAt).format('MMMM D, YYYY')}
            </p>

            <p className="mt-4 text-tertiary dark:text-tertiary-dark leading-relaxed max-w-xl">
              {article.excerpt}
            </p>

            <div className="mt-6">
              <Link
                className="text-accent dark:text-accent-dark hover:underline"
                as={`/articles/${article.slug}`}
                href="/articles/[slug]"
              >
                Read more →
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
