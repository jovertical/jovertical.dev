import unified from 'unified'
import markdown from 'remark-parse'
import stringify from 'remark-stringify'

export default async function estimateMinuteRead(content) {
  let result = await unified().use(markdown).use(stringify).process(content)
  let characterCount = result.toString().length

  return Math.round(characterCount / 400)
}
