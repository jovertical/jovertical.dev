Array.prototype.first = function () {
    return this.length > 0 ? this[0] : null;
};

export function inServer() {
    return typeof window === 'undefined';
}

export function sleep(ms = 1000) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function clone(object, properties = {}) {
    return Object.create(
        Object.getPrototypeOf(object),
        Object.getOwnPropertyDescriptors({ ...object, ...properties }),
    );
}

export function toQuery(value) {
    // Make sure we don't alter integers.
    if (typeof value === 'number') {
        return value;
    }

    if (Array.isArray(value)) {
        const props = value.map((value) => `${toQuery(value)}`).join(',');
        return `[${props}]`;
    }

    if (typeof value === 'object') {
        const props = Object.keys(value)
            .map((key) => `${key}:${toQuery(value[key])}`)
            .join(',');

        return `{${props}}`;
    }

    return JSON.stringify(value);
}
