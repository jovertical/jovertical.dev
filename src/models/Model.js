export default class Model {
  static query(preview = false) {
    return this.newQuery(null, preview)
  }

  static queryPreview() {
    return this.query(true)
  }

  static async get() {
    return this.newQuery().get()
  }

  static newModel() {
    return Reflect.construct(this, [])
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

  raw(attributes) {
    this.attributes = attributes
    return this
  }

  toObject() {
    return this.attributes
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

    if (!response[modelName]) {
      return null
    }

    let model = await this.model
      .raw(response[modelName])
      .loadAttributes(this.loadableAttributes)

    return model.toObject()
  }

  async get(query = null, variables = {}) {
    if (query === null) {
      query = `
        query ${this.model.modelName}List {
          ${this.model.listName} {
            ${this.model.attributeMapping.join('\n\t')}
          }
        }
      `
    }

    let response = await this.run(query, variables)

    return this.toArray(response[this.model.listName] || [])
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

  async toArray(collection) {
    let modifiedCollection = await Promise.all(
      collection.map((item) => this.model.raw(item).loadAttributes())
    )

    return modifiedCollection.map((model) => model.toObject())
  }
}
