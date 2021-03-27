import Icon from '@/components/Icon'
import MoonIcon from '@/components/icons/Moon'
import SunIcon from '@/components/icons/Sun'
import { ThemeContext } from '@/contexts/themeContext'

export default function ThemeFlipper({ className }) {
  let theme = React.useContext(ThemeContext)

  return (
    <button
      className={cx(
        'block text-secondary dark:text-secondary-dark hover:text-accent dark:hover:text-accent-dark font-bold focus:outline-none transform transition-colors duration-200',
        className
      )}
      title={`Switch to ${theme.dark ? 'Light mode' : 'Dark mode'}`}
      onClick={theme.flip}
    >
      <Icon variant="outlined" size="large">
        {theme.dark ? <SunIcon /> : <MoonIcon />}
      </Icon>
    </button>
  )
}
