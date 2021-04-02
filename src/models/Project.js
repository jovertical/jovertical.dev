import Model from '@/models/Model';

export default class Project extends Model {
    get modelName() {
        return 'project';
    }

    get listName() {
        return 'allProjects';
    }

    get attributeMapping() {
        return [
            'id',
            'name',
            'slug',
            'description',
            'websiteLink',
            'githubLink',
            '_publishedAt',
        ];
    }
}
