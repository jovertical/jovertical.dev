import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import TOC from '@/components/TOC'
import Article from '@/models/Article'

export default function ArticlePage({ article }) {
  let router = useRouter()

  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      {router.isFallback ? (
        <p>Loading...</p>
      ) : (
        <div className="flex justify-between relative">
          <article className="pb-12 min-w-0 max-w-none">
            <SEO
              title={article.title + ' - Jovert Palonpon'}
              description={article.excerpt}
            />

            <header className="max-w-xl md:max-w-3xl" data-cy="header">
              <div className="text-sm text-tertiary dark:text-tertiary-dark tracking-normal">
                {article._publishedAt ? (
                  <time dateTime={article._publishedAt} data-cy="publish-date">
                    {dayjs(article._publishedAt).format('MMMM DD, YYYY')}
                  </time>
                ) : (
                  <span>Unpublished</span>
                )}

                {article.minuteRead > 0 && (
                  <span data-cy="minute-read">
                    {` • ${article.minuteRead} minute read`}
                  </span>
                )}
              </div>

              <h1
                id="introduction"
                className="text-primary dark:text-primary-dark text-4xl leading-tight md:text-5xl md:leading-none font-bold"
                data-cy="title"
              >
                {article.title}
              </h1>
            </header>

            <div
              className="mt-4 md:mt-8 prose dark:prose-dark lg:prose-lg"
              dangerouslySetInnerHTML={{ __html: article.bodyMarkup }}
              data-cy="body"
            />
          </article>

          <TOC
            headings={article.headings}
            defaultTarget={'#' + router.asPath.split('#').reverse().first()}
          />
        </div>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  return {
    props: {
      preview,
      article: await Article.query(preview)
        .withAttribute(['bodyMarkup', 'minuteRead', 'headings'])
        .find(params?.slug),
    },
  }
}

export async function getStaticPaths() {
  let articles = await Article.queryPreview().get()

  return {
    paths: articles?.map((article) => `/articles/${article.slug}`),
    fallback: true,
  }
}
