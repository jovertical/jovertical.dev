import query from '@/queries/_query'

export async function getAll() {
  const data = await query(`
    {
      allArticles {
        id
        title
        slug
        body
        _publishedAt
      }
    }
  `)

  return data?.allArticles || []
}

export async function show(slug, preview = false) {
  const data = await query(
    `
      query ArticleBySlug($slug: String) {
        article(filter: { slug: { eq: $slug } }) {
          title
          slug
          body
        }
      }
    `,
    {
      preview,
      variables: {
        slug,
      },
    }
  )

  return data?.article || null
}

export async function showPreview(slug) {
  return show(slug, true)
}
