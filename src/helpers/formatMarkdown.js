import unified from 'unified'
import markdown from 'remark-parse'
import slug from 'remark-slug'
import headings from 'remark-autolink-headings'
import stringify from 'remark-stringify'
import prism from 'remark-prism'
import html from 'remark-html'

export default async function formatMarkdown(content) {
  let result = await unified()
    .use(markdown)
    .use(slug)
    .use(headings)
    .use(stringify)
    .use(prism)
    .use(html)
    .process(content)

  return result.toString()
}
