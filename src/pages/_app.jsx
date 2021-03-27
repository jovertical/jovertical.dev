import '@/bootstrap'
import useTracking from '@/hooks/useTracking'
import '@/styles/app.css'

if (process.env.TEST_ENV === 'integration') {
  require('@/mocks')
}

export default function App({ Component, pageProps }) {
  useTracking()

  return <Component {...pageProps} />
}
