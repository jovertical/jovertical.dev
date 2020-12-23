import unified from 'unified'
import markdown from 'remark-parse'
import slug from 'remark-slug'
import headings from 'remark-autolink-headings'
import stringify from 'remark-stringify'
import html from 'remark-html'

Array.prototype.first = function () {
  return this.length > 0 ? this[0] : null
}

export async function markdownToHtml(content) {
  let transformer = unified()
    .use(markdown)
    .use(slug)
    .use(headings)
    .use(stringify)

  if (typeof window === 'undefined') {
    transformer.use(require('remark-prism'))
  }

  transformer.use(html)

  let result = await transformer.process(content)

  return result.toString()
}

export function ls(key = null, defaultValue = null) {
  if (typeof window === 'undefined') {
    return null
  }

  if (key !== null) {
    return localStorage.getItem(key) || defaultValue
  }

  return {
    put: (...args) => localStorage.setItem(...args),
  }
}

export function inServer() {
  return typeof window === 'undefined'
}
