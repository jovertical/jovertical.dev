import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import remarkHtml from 'remark-html'

export async function markdownToHtml(markdown) {
  let transformer = unified()
    .use(remarkParse)
    .use(remarkStringify)

  if (typeof window === 'undefined') {
    transformer.use(require('remark-prism'))
  }

  transformer.use(remarkHtml)
  
  let result = await transformer.process(markdown)

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
