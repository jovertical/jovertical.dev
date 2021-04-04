import * as faker from 'faker';

class ArticleFactory {
    createBody() {
        return Array.from({ length: _.range(5, 10) })
            .map((value, i) => {
                let headingType = Array.from({
                    length: i === 0 ? 2 : _.range(2, 3),
                })
                    .map(() => '#')
                    .join('');

                return [
                    `${headingType} ${faker.lorem.words().ucwords()}`,
                    faker.lorem.paragraphs(_.range(1, 10)),
                ].join('\n');
            })
            .join('\n');
    }

    definition() {
        return {
            id: faker.datatype.number(99999),
            title: faker.lorem.words().ucwords(),
            excerpt: faker.lorem.paragraph(),
            body: this.createBody(),
            slug: faker.lorem.slug(),
            _publishedAt: faker.date.past(),
        };
    }
}

export default new ArticleFactory();
