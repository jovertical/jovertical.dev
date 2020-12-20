import * as React from 'react'
import { ls } from '@/helpers'

export const ThemeContext = React.createContext()

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = React.useState(ls('theme'))
  let dark = theme === 'dark'
  let otherTheme = dark ? 'light' : 'dark'

  function toggle() {
    setTheme(otherTheme)
  }

  React.useEffect(() => {
    let el = document.querySelector('html')

    el.classList.remove(otherTheme)
    el.classList.add(theme)

    ls().put('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
