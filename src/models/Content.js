import formatMarkdown from '@/helpers/formatMarkdown'
import Model from '@/models/Model'

export default class Content extends Model {
  get bodyMarkup() {
    return formatMarkdown(this.attributes?.body)
  }
}
