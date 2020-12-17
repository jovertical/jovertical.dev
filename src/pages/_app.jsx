import dynamic from 'next/dynamic'
import * as React from 'react'
import ThemeContext from '@/contexts/ThemeContext'
import '@/helpers'
import 'nprogress/nprogress.css'
import '@/styles/app.css'

const Progress = dynamic(() => import('@/components/Progress'), { ssr: false })

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = React.useState({
    darkmode: false,
  })

  function toggleDarkmode() {
    setTheme({ darkmode: !theme.darkmode })
  }

  React.useEffect(() => {
    if (theme.darkmode) {
      return document.querySelector('html').classList.add('dark')
    }

    document.querySelector('html').classList.remove('dark')
  }, [theme.darkmode])

  return (
    <>
      <ThemeContext.Provider value={{ ...theme, toggleDarkmode }}>
        <Progress />
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </>
  )
}
