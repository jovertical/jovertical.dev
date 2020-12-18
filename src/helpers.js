import remark from 'remark'
import html from 'remark-html'
import highlight from 'remark-highlight.js'

export async function markdownToHtml(markdown) {
  const result = await remark().use(highlight).use(html).process(markdown)
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
