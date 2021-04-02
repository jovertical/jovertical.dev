import { inServer } from '@/helpers';

export default function expose(helpers) {
    for (let [key, value] of Object.entries(helpers)) {
        if (inServer()) {
            global[key] = value;
        }

        if (!inServer()) {
            window[key] = value;
        }
    }
}
