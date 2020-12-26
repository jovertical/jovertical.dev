import query from '@/helpers/query'

export async function all(preview = false) {
  let { allPages } = await query(
    `
      query GetAllPages {
        allPages {
          id
          name
          body
          slug
          _publishedAt
        }
      }
    `,
    { preview }
  )

  return allPages || []
}

export async function allPreview() {
  return all(true)
}

export async function show(slug, preview = false) {
  let { page } = await query(
    `
      query PageBySlug($slug: String) {
        page(filter: { slug: { eq: $slug } }) {
          name
          body
          slug
          _publishedAt
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

  return page || null
}

export async function showPreview(slug) {
  return show(slug, true)
}
