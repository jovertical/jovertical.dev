import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import TOC from '@/components/TOC'
import formatMarkdown from '@/helpers/formatMarkdown'
import generateTOC from '@/helpers/generateTOC'
import * as query from '@/queries/article'

export default function Article({ article }) {
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
              {article._publishedAt && (
                <div className="text-sm text-tertiary dark:text-tertiary-dark tracking-normal">
                  <time dateTime={article._publishedAt} data-cy="publish-date">
                    {dayjs(article._publishedAt).format('MMMM DD, YYYY')}
                  </time>
                </div>
              )}

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
              dangerouslySetInnerHTML={{ __html: article.body }}
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
  let article = await query.show(params.slug, preview)
  let body = await formatMarkdown(article?.body)
  let headings = generateTOC(body)

  return {
    props: {
      preview,
      article: Object.assign(article || {}, {
        body,
        headings: [
          { name: 'Introduction', target: '#introduction', depth: 1 },
          ...headings,
        ],
      }),
    },
  }
}

export async function getStaticPaths() {
  let articles = await query.allPreview()

  return {
    paths: articles?.map((article) => `/articles/${article.slug}`),
    fallback: true,
  }
}
