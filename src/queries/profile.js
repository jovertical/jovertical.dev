import query from '@/queries/_query'

export async function get() {
  const data = await query(`
    {
      profile {
        about
        twitterUrl
        githubUrl
        linkedinUrl
      }
    }
  `)

  return data?.profile || null
}
