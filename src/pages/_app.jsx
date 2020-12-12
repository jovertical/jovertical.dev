import dynamic from 'next/dynamic'
import '@/helpers'
import 'nprogress/nprogress.css'
import '@/styles/app.css'

const Progress = dynamic(() => import('@/components/Progress'), { ssr: false })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Progress />
      <Component {...pageProps} />
    </>
  )
}
