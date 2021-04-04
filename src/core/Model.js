import Query from '@/core/Query';

export default class Model {
    constructor(attributes = {}) {
        this.attributes = attributes;
    }

    static query(preview = false) {
        return this.newQuery(null, preview);
    }

    static queryPreview() {
        return this.query(true);
    }

    static async get(filter = null) {
        return this.newQuery().get(filter);
    }

    static append(keys = []) {
        return this.newQuery().append(keys);
    }

    static newModel(attributes = {}) {
        return Reflect.construct(this, [attributes]);
    }

    static newQuery(model = null, preview) {
        return new Query(model || this.newModel(), preview);
    }

    async load(keys) {
        for (let key of keys || []) {
            this.attributes[key] = await this[key];
        }

        return this;
    }

    clone(attributes = {}) {
        return Jovertical.clone(this, { attributes });
    }

    get attributeMapping() {
        return [this.keyName];
    }

    get keyName() {
        return 'slug';
    }
}
