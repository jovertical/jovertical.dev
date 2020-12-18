import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import cx from 'classnames'
import ThemeContext from '@/contexts/ThemeContext'

export default function Layout({ children }) {
  const router = useRouter()
  const theme = React.useContext(ThemeContext)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <nav className="navbar">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between h-20 md:24 lg:h-32">
            <Link href="/">
              <a className="flex items-center text-gray-900 dark:text-gray-100">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>

                <span className="hidden md:block md:ml-3 text-lg font-bold">
                  JOVERTICAL.DEV
                </span>
              </a>
            </Link>

            <div className="flex items-center">
              <Link href="/articles">
                <a
                  className={cx(
                    'block font-bold px-2 md:px-4 lg:px-6 focus:outline-none transform transition-colors duration-200',
                    {
                      'text-gray-900 dark:text-gray-100':
                        router.pathname === '/articles',
                      'text-gray-500 hover:text-gray-900 dark:hover:text-gray-100':
                        router.pathname !== '/articles',
                    }
                  )}
                >
                  Articles
                </a>
              </Link>

              <Link href="/">
                <a
                  className={cx(
                    'block font-bold px-2 md:px-4 lg:px-6 focus:outline-none transform transition-colors duration-200',
                    {
                      'text-gray-900 dark:text-gray-100':
                        router.pathname === '/projects',
                      'text-gray-500 hover:text-gray-900 dark:hover:text-gray-100':
                        router.pathname !== '/projects',
                    }
                  )}
                >
                  Projects
                </a>
              </Link>

              <button
                className="block text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 font-bold px-2 md:px-4 lg:px-6 focus:outline-none transform transition-colors duration-200"
                title="Copy URL to clipboard"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </button>

              <button
                className="block text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 font-bold px-2 md:px-4 lg:px-6 focus:outline-none transform transition-colors duration-200"
                title={`Switch to ${
                  theme.darkmode ? 'Light mode' : 'Dark mode'
                }`}
                onClick={theme.toggleDarkmode}
              >
                {theme.darkmode ? (
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto mt-4 md:mt-6 lg:mt-10 px-6 sm:px-10 lg:px-16">
        {children}
      </div>
    </div>
  )
}
