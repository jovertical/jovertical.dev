import Link from 'next/link'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import * as query from '@/queries/article'
import { markdownToHtml } from '@/helpers'

export default function Article({ article }) {
  const router = useRouter()

  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div className="px-5">
      {router.isFallback ? (
        <p>Loading...</p>
      ) : (
        <div className="max-w-2xl lg:max-w-3xl mx-auto mt-16 mb-12">
          <article>
            <header>
              <p className="text-xl text-gray-800 leading-tight">
                <Link as="/articles" href="/articles">
                  <a>
                    «{' '}
                    <span className="text-blue-500 hover:underline">back</span>
                  </a>
                </Link>

                <span className="whitespace-nowrap"> — written by</span>

                <a
                  className="ml-1 text-blue-500 hover:underline whitespace-nowrap"
                  href="https://twitter.com/Jovertical"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jovert Palonpon
                </a>
                <span className="ml-1">
                  on {dayjs(article._publishedAt).format('MMMM D, YYYY')}
                </span>
              </p>

              <h1 className="mt-12 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                {article.title}
              </h1>
            </header>

            <div
              className="mt-6 prose lg:prose-lg xl:prose-xl"
              dangerouslySetInnerHTML={{ __html: article.body }}
            />
          </article>
        </div>
      )}
    </div>
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
