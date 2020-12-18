import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import * as query from '@/queries/article'
import { markdownToHtml } from '@/helpers'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'

export default function Article({ article }) {
  const router = useRouter()

  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      {router.isFallback ? (
        <p>Loading...</p>
      ) : (
        <div className="mt-16">
          <article className="pb-12">
            <SEO
              title={article.title + ' - Jovert Palonpon'}
              description={article.excerpt}
            />

            <header className="max-w-xl lg:max-w-3xl mx-auto px-6 sm:px-10 lg:px-0">
              <h1 className="text-gray-900 dark:text-gray-100 text-2xl leading-snug sm:text-3xl md:text-4xl lg:text-5xl lg:leading-tight font-bold">
                {article.title}
              </h1>

              <div className="mt-2 md:mt-4">
                {article.author && (
                  <a
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 text-lg sm:text-xl font-bold"
                    href={article.author?.twitterUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {article.author?.name}
                  </a>
                )}
              </div>
            </header>

            <div
              className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 max-w-2xl lg:max-w-4xl mx-auto prose dark:prose-dark lg:prose-lg xl:prose-xl"
              dangerouslySetInnerHTML={{ __html: article.body }}
            />
          </article>
        </div>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const article = await query.show(params.slug, preview)

  return {
    props: {
      preview,
      article: {
        ...article,
        body: await markdownToHtml(article.body),
      },
    },
  }
}

export async function getStaticPaths() {
  const articles = await query.getAll()

  return {
    paths: articles?.map((article) => `/articles/${article.slug}`),
    fallback: true,
  }
}
