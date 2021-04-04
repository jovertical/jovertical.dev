import estimateMinuteRead from '@/helpers/estimateMinuteRead';
import generateTOC from '@/helpers/generateTOC';
import Content from '@/models/Content';
import Tag from '@/models/Tag';

export default class Article extends Content {
    get minuteRead() {
        return estimateMinuteRead(this.attributes?.body);
    }

    get headings() {
        return generateTOC(this.attributes?.bodyMarkup);
    }

    get modelName() {
        return 'article';
    }

    get listName() {
        return 'allArticles';
    }

    get attributeMapping() {
        return [
            'id',
            'title',
            'excerpt',
            'body',
            'featured',
            'slug',
            '_publishedAt',
        ];
    }

    get relations() {
        return {
            tags: new Tag(),
        };
    }
}
