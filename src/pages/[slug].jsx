import Error from 'next/error'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import PageModel from '@/models/Page'

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
          dangerouslySetInnerHTML={{ __html: page?.bodyMarkup }}
        />
      </article>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  return {
    props: {
      preview,
      page: await PageModel.query(preview)
        .withAttribute(['bodyMarkup'])
        .find(params?.slug),
    },
  }
}

export async function getStaticPaths() {
  let pages = await PageModel.queryPreview().get()

  return {
    paths: pages?.map((page) => `/${page.slug}`),
    fallback: true,
  }
}
