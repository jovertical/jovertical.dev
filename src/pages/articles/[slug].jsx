import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import * as query from '@/queries/article'
import { markdownToHtml } from '@/helpers'

export default function Article({ article }) {
  const router = useRouter()

  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div>
      {router.isFallback ? (
        <p>Loading...</p>
      ) : (
        <article
          className="prose lg:prose-lg"
          dangerouslySetInnerHTML={{ __html: article.body }}
        />
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
