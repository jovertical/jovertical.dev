export default class Query {
  constructor(model, preview = false) {
    this.model = model
    this.preview = preview
  }

  append(keys = []) {
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
        return this.model.clone(item).load(this.loadableAttributes)
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
