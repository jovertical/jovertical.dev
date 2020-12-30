import '@/bootstrap'
import '@/styles/app.css'

if (process.env.TEST_ENV === 'integration') {
  require('@/mocks')
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
