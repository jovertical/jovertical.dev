import dynamic from 'next/dynamic'
import classnames from 'classnames'
import 'nprogress/nprogress.css'
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

const Progress = dynamic(() => import('@/components/Progress'), { ssr: false })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Progress />
      <Component {...pageProps} />
    </>
  )
}
