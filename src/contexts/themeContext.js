import * as React from 'react'

export const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(_.ls('theme'))
  let dark = theme === 'dark'
  let otherTheme = dark ? 'light' : 'dark'

  function flip() {
    setTheme(otherTheme)
  }

  React.useEffect(() => {
    let el = document.querySelector('html')

    el.classList.remove(otherTheme)
    el.classList.add(theme)

    _.ls().put('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ dark, flip }}>
      {children}
    </ThemeContext.Provider>
  )
}
