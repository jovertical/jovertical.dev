import dayjs from 'dayjs'
import Header from '@/components/Header'
import Icon from '@/components/Icon'
import Layout from '@/components/Layout'
import Link from '@/components/Link'
import ArrowRightIcon from '@/components/icons/ArrowRight'
import * as query from '@/queries/article'

export default function Articles({ articles }) {
  return (
    <Layout>
      <Header
        title="Articles"
        description="My personal thoughts on web development and programming. Being a full stack software engineer, I encounter a lot of problems and I just love sharing how I solved these problems, so I write it down here."
      />

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
                className="inline-flex items-center text-accent dark:text-accent-dark"
                as={`/articles/${article.slug}`}
                href="/articles/[slug]"
              >
                <span>Read more</span>

                <Icon size="small" className="ml-1">
                  <ArrowRightIcon />
                </Icon>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const articles = await query.all()

  return {
    props: { articles },
  }
}
