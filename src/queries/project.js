import query from '@/queries/_query'

export async function all() {
  let { allProjects } = await query(`
    query GetAllProjects {
      allProjects {
        id
        name
        slug
        description
        websiteLink
        githubLink
        _publishedAt
      }
    }
  `)

  return allProjects || []
}
