import Error from 'next/error'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import formatMarkdown from '@/helpers/formatMarkdown'
import * as query from '@/queries/page'

export default function Page({ page }) {
  let router = useRouter()

  if (!router.isFallback && !page?.slug) {
    return <Error statusCode={404} />
  }

  return (
    <Layout>
      <article>
        <SEO title={page?.name + ' - Jovert Palonpon'} />

        <div
          className="prose dark:prose-dark lg:prose-lg"
          dangerouslySetInnerHTML={{ __html: page?.body }}
        />
      </article>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  let page = await query.show(params.slug, preview)
  let body = await formatMarkdown(page?.body)

  return {
    props: {
      preview,
      page: Object.assign(page || {}, { body }),
    },
  }
}

export async function getStaticPaths() {
  let pages = await query.allPreview()

  return {
    paths: pages?.map((page) => `/${page.slug}`),
    fallback: true,
  }
}
