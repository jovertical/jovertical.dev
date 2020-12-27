import classnames from 'classnames'
import * as helpers from '@/helpers'
import expose from '@/helpers/expose'
import '@/styles/app.css'

expose({
  Jovertical: helpers,
  cx: classnames,
})

if (process.env.TEST_ENV === 'integration') {
  require('@/mocks')
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
