import * as Sentry from '@sentry/node';
import { RewriteFrames } from '@sentry/integrations';

export default class SentryClient {
    /**
     * Create a new sentry client instance.
     *
     * @return {void}
     */
    constructor() {
        this.dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
        this.release = process.env.NEXT_PUBLIC_COMMIT_SHA;
    }

    /**
     * Determine if the Sentry client is enabled.
     *
     * @return {bool}
     */
    enabled() {
        return false;
    }

    /**
     * Initializes the Sentry Node SDK.
     *
     * @return {void}
     */
    static init() {
        let instance = new SentryClient();

        Sentry.init({
            enabled: instance.enabled(),
            integrations: instance.integrations(),
            dsn: instance.dsn,
            release: instance.release,
        });
    }

    /**
     * Get the Sentry client's integrated services.
     *
     * @return {Array}
     */
    integrations() {
        return [this.rewriteFramesIntegration()].filter(Boolean);
    }

    /**
     * For Node.js, rewrite Error.stack to use relative paths, so that source maps
     * starting with ~/_next map to files in Error.stack with path app:///_next
     *
     * @return {import('@sentry/integrations').RewriteFrames|void}
     */
    rewriteFramesIntegration() {
        if (process.env.NEXT_IS_SERVER !== 'true') {
            return;
        }

        if (!process.env.NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR) {
            return;
        }

        return new RewriteFrames({
            iteratee: (frame) => {
                frame.filename = frame.filename.replace(
                    process.env.NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR,
                    'app:///',
                );

                frame.filename = frame.filename.replace('.next', '_next');

                return frame;
            },
        });
    }
}
