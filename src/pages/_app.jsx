import dynamic from 'next/dynamic'
import 'nprogress/nprogress.css'
import * as helpers from '@/helpers'
import '@/styles/app.css'

if (helpers.inServer()) {
  global.Jovertical = helpers
}

if (!helpers.inServer()) {
  window.Jovertical = helpers
}

if (process.env.TEST_ENV === 'integration') {
  require('@/mocks')
}

const Progress = dynamic(() => import('@/components/Progress'), { ssr: false })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Progress />
      <Component {...pageProps} />
    </>
  )
}
