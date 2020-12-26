import cheerio from 'cheerio'

export default function generateTOC(content) {
  let $ = cheerio.load(content)

  return $('h2, h3')
    .toArray()
    .map((node) => ({
      name: node.children[1]?.data,
      target: node.children[0]?.attribs?.href,
      depth: parseInt(node.name.replace('h', '')) - 1,
    }))
}
