import query from '@/queries/_query'

export async function all(preview = false) {
  const data = await query(
    `
      query GetAllArticles {
        allArticles {
          id
          title
          slug
          excerpt
          body
          _publishedAt
        }
      }
    `,
    { preview }
  )

  return data?.allArticles || []
}

export async function allPreview() {
  return all(true)
}

export async function show(slug, preview = false) {
  const data = await query(
    `
      query ArticleBySlug($slug: String) {
        article(filter: { slug: { eq: $slug } }) {
          title
          slug
          excerpt
          body
          _publishedAt
          author {
            name
            bio
            twitterUrl
            avatar {
              url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
            }
          }
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
