import formatMarkdown from '@/helpers/formatMarkdown'
import Model from '@/models/Model'

export default class Page extends Model {
  get bodyMarkup() {
    return formatMarkdown(this.attributes?.body)
  }

  get modelName() {
    return 'page'
  }

  get listName() {
    return 'allPages'
  }

  get attributeMapping() {
    return ['id', 'name', 'body', 'slug', '_publishedAt']
  }
}
