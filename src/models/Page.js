import Content from '@/models/Content'

export default class Page extends Content {
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
