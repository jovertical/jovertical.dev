if (typeof window === 'undefined') {
    let { server } = require('@/mocks/server');
    server.listen();
} else {
    let { worker } = require('@/mocks/browser');
    worker.start();
}
