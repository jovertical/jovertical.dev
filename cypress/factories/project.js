import * as faker from 'faker'

class ProjectFactory {
  definition() {
    return {
      id: faker.random.number(99999),
      name: faker.lorem.words().ucwords(),
      description: faker.lorem.paragraph(),
      slug: faker.lorem.slug(),
      websiteLink: faker.internet.url(),
      githubLink: faker.internet.url(),
      _publishedAt: faker.date.past(),
    }
  }
}

export default new ProjectFactory()
