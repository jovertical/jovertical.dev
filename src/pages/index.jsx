import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import { markdownToHtml } from '@/helpers'
import * as query from '@/queries/profile'

export default function Home({ profile }) {
  return (
    <Layout>
      <article className="prose dark:prose-dark lg:prose-lg">
        <header>
          <SEO
            title="Jovert Palonpon"
            description="Jovert Palonpon is a Full Stack web developer"
          />
        </header>

        <div dangerouslySetInnerHTML={{ __html: profile.about }} />
      </article>
    </Layout>
  )
}

export async function getStaticProps() {
  const profile = await query.get()

  return {
    props: {
      profile: {
        ...profile,
        about: await markdownToHtml(profile.about),
      },
    },
  }
}
