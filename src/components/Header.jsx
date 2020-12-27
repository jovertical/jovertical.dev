import HeaderLink from '@/components/HeaderLink'
import MobileNavigation from '@/components/MobileNavigation'
import ThemeFlipper from '@/components/ThemeFlipper'

export default function Header() {
  return (
    <div>
      <MobileNavigation />

      <header className="container max-w-7xl m-auto px-5 sm:px-12 md:px-24 lg:px-32 h-32 overflow-hidden">
        <nav
          className="h-full flex items-center justify-center md:justify-start space-x-6 text-sm"
          aria-label="Main Navigation"
        >
          <span className="hidden sm:flex flex-grow items-center space-x-6">
            <HeaderLink href="/">Home</HeaderLink>
            <HeaderLink href="/articles">Articles</HeaderLink>
            <HeaderLink href="/projects">Projects</HeaderLink>
            <HeaderLink href="/about">About</HeaderLink>
          </span>

          <ThemeFlipper className="hidden md:block" />
        </nav>
      </header>
    </div>
  )
}
