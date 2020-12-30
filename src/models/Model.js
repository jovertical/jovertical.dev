export default class Model {
  constructor(attributes = {}) {
    this.attributes = attributes
  }

  static query(preview = false) {
    return this.newQuery(null, preview)
  }

  static queryPreview() {
    return this.query(true)
  }

  static async get() {
    return this.newQuery().get()
  }

  static withAttribute(keys = []) {
    return this.newQuery().withAttribute(keys)
  }

  static newModel(attributes = {}) {
    return Reflect.construct(this, [attributes])
  }

  static newQuery(model = null) {
    return new Query(model || this.newModel())
  }

  async loadAttributes(keys) {
    for (let key of keys || []) {
      this.attributes[key] = await this[key]
    }

    return this
  }

  clone(attributes = {}) {
    return Jovertical.clone(this, { attributes })
  }

  get attributeMapping() {
    return [this.keyName]
  }

  get keyName() {
    return 'slug'
  }
}

class Query {
  constructor(model, preview = false) {
    this.model = model
    this.preview = preview
  }

  withAttribute(keys = []) {
    this.loadableAttributes = keys
    return this
  }

  async find(key) {
    let { modelName, keyName } = this.model

    let query = `
      query ${modelName}By ($${keyName}: String) {
        ${modelName} (filter: { ${keyName}: { eq: $${keyName} } }) {
          ${this.model.attributeMapping.join('\n\t')}
        }
      }
    `

    let response = await this.run(query, { [keyName]: key })
    let attributes = response[modelName]

    if (!attributes) {
      return null
    }

    return (await this.prepare(attributes))?.first() || null
  }

  async get() {
    let response = await this.run(`
      query ${this.model.modelName}List {
        ${this.model.listName} {
          ${this.model.attributeMapping.join('\n\t')}
        }
      }
    `)

    return this.prepare(response[this.model.listName] || [])
  }

  async prepare(collection) {
    let models = await Promise.all(
      [].concat(collection).map((item) => {
        return this.model.clone(item).loadAttributes(this.loadableAttributes)
      })
    )

    return models.map((model) => model.attributes)
  }

  async run(query, variables = {}) {
    let res = await fetch(
      'https://graphql.datocms.com' + (this.preview ? '/preview' : ''),
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      }
    )

    let json = await res.json()

    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }

    return json.data
  }
}
