import estimateMinuteRead from '@/helpers/estimateMinuteRead'
import formatMarkdown from '@/helpers/formatMarkdown'
import generateTOC from '@/helpers/generateTOC'
import Model from '@/models/Model'

export default class Article extends Model {
  get bodyMarkup() {
    return formatMarkdown(this.attributes?.body)
  }

  get minuteRead() {
    return estimateMinuteRead(this.attributes?.body)
  }

  get headings() {
    return generateTOC(this.attributes?.bodyMarkup)
  }

  get modelName() {
    return 'article'
  }

  get listName() {
    return 'allArticles'
  }

  get attributeMapping() {
    return [
      'id',
      'title',
      'excerpt',
      'body',
      'featured',
      'slug',
      '_publishedAt',
    ]
  }

  static featuredCollection() {
    return this.query().get(
      `
        query articleList($featured: BooleanType) {
          allArticles(filter: { featured: { eq: $featured } }) {
            id
            title
            slug
            excerpt
            body
            featured
            _publishedAt
          }
        }
      `,
      { featured: true }
    )
  }
}
