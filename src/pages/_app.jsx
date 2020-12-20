import dynamic from 'next/dynamic'
import * as React from 'react'
import 'nprogress/nprogress.css'
import { ThemeProvider } from '@/contexts/themeCtx'
import '@/styles/app.css'

let Progress = dynamic(() => import('@/components/Progress'), { ssr: false })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Progress />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
