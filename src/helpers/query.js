let API_URL = 'https://graphql.datocms.com'
let API_TOKEN = process.env.DATOCMS_API_TOKEN

export default async (query, { variables, preview } = {}) => {
  let res = await fetch(API_URL + (preview ? '/preview' : ''), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  let json = await res.json()

  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}
