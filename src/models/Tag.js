import Model from '@/models/Model';

export default class Tag extends Model {
    get modelName() {
        return 'tag';
    }

    get listName() {
        return 'allTags';
    }

    get attributeMapping() {
        return ['id', 'name', 'description'];
    }
}
