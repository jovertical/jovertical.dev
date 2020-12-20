import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import remarkHtml from 'remark-html'

export async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(remarkHtml)
    .process(markdown)

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
    put: (key, value) => localStorage.setItem(key, value),
    remove: (key) => localStorage.removeItem(key),
  }
}
