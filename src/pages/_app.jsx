import '@/bootstrap';
import useTracking from '@/hooks/useTracking';
import '@/styles/app.css';
import SentryClient from '@/support/SentryClient';

if (process.env.TEST_ENV === 'integration') {
    require('@/mocks');
}

SentryClient.init();

export default function App({ Component, pageProps }) {
    useTracking();

    return <Component {...pageProps} />;
}
