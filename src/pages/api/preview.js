export default async (req, res) => {
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.DATOCMS_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Check if a slug is provided
  if (!req.query.slug) {
    res.status(404).json({ message: 'Slug is not provided' })
  }

  // Model lookup table
  let queries = {
    articles: require('@/queries/article'),
    // Add other queries here
  }

  // Given query `?slug=/articles/my-first-article`: [my-first-article, articles]
  let [slug, type] = req.query.slug.split('/').reverse()

  // Check if model type exists in the lookup table
  if (!queries[type]) {
    return res.status(404).json({ message: 'Invalid slug' })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  let content = await queries[type].showPreview(slug)

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!content) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched model
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/${type}/${content.slug}` })
  res.end()
}
