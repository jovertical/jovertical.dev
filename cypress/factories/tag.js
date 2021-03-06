import * as faker from 'faker';

class TagFactory {
    definition() {
        return {
            id: faker.datatype.number(99999),
            name: faker.lorem.word().ucwords(),
            description: faker.lorem.paragraph(),
        };
    }
}

export default new TagFactory();
