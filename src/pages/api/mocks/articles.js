let fs = require('fs')

export default async (req, res) => {
  if (req.method === 'POST') {
    let articles = JSON.stringify(req.body)

    fs.writeFile('mocks/data/data.json', articles, () => {})

    return res.end(articles)
  }

  res.end()
}
