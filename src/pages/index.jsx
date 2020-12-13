import Layout from '@/components/Layout'
import SEO from '@/components/SEO'

export default function Home() {
  return (
    <Layout>
      <article className="prose lg:prose-lg">
        <header>
          <SEO
            title="Jovert Palonpon"
            description="Jovert Palonpon is a Full Stack web developer"
          />
        </header>

        <h3>Lorem ipsum dolor sit amet</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          inventore aspernatur illum ex impedit nulla earum incidunt consectetur
          dolor? Qui, veritatis ipsa! Dignissimos neque tempore harum sint
          explicabo. Exercitationem, sequi.
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          obcaecati dolor saepe tempora quos perspiciatis esse. Nisi, at
          exercitationem, molestias ad natus.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis,
          aperiam explicabo, pariatur asperiores?
        </p>
      </article>
    </Layout>
  )
}
