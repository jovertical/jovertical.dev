import * as React from 'react'
import Icon from '@/components/Icon'
import MoonIcon from '@/components/icons/Moon'
import SunIcon from '@/components/icons/Sun'
import { ThemeContext } from '@/contexts/themeContext'

export default function ThemeFlipper() {
  const theme = React.useContext(ThemeContext)

  return (
    <button
      className="block text-secondary dark:text-secondary-dark hover:text-accent dark:hover:text-accent-dark font-bold px-2 md:px-4 lg:px-6 focus:outline-none transform transition-colors duration-200"
      title={`Switch to ${theme.dark ? 'Light mode' : 'Dark mode'}`}
      onClick={theme.flip}
    >
      <Icon variant="outlined" size="large">
        {theme.dark ? <MoonIcon /> : <SunIcon />}
      </Icon>
    </button>
  )
}
