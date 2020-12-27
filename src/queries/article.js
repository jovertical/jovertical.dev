import query from '@/helpers/query'

export async function all(preview = false, variables = {}) {
  let { allArticles } = await query(
    `
      query GetAllArticles($featured: BooleanType) {
        allArticles(filter: { featured: { eq: $featured } }) {
          id
          title
          slug
          excerpt
          body
          featured
          _publishedAt
        }
      }
    `,
    {
      preview,
      variables,
    }
  )

  return allArticles || []
}

export async function allPreview(variables = {}) {
  return all(true, variables)
}

export async function allFeatured(preview = false) {
  return all(preview, { featured: true })
}

export async function show(slug, preview = false) {
  let { article } = await query(
    `
      query ArticleBySlug($slug: String) {
        article(filter: { slug: { eq: $slug } }) {
          title
          slug
          excerpt
          body
          featured
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

  return article || null
}

export async function showPreview(slug) {
  return show(slug, true)
}
