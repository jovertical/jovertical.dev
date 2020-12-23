import * as faker from 'faker'

class ArticleFactory {
  get resourceName() {
    return 'articles'
  }

  definition() {
    return {
      id: faker.random.number(99999),
      title: faker.lorem
        .words()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' '),
      excerpt: faker.lorem.paragraph(),
      body: faker.lorem.paragraphs(),
      slug: faker.lorem.slug(),
      _publishedAt: faker.date.past(),
    }
  }
}

export default new ArticleFactory()
