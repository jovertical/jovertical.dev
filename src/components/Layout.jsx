import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'classnames'

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white">
      <nav className="navbar">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between h-20 md:24 lg:h-32">
            <Link href="/">
              <a className="flex items-center">
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
                    'block font-bold px-2 md:px-4 lg:px-6 transform transition-colors duration-200',
                    {
                      'text-black': router.pathname === '/articles',
                      'text-gray hover:text-black':
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
                    'block font-bold px-2 md:px-4 lg:px-6 transform transition-colors duration-200',
                    {
                      'text-black': router.pathname === '/projects',
                      'text-gray hover:text-black':
                        router.pathname !== '/projects',
                    }
                  )}
                >
                  Projects
                </a>
              </Link>

              <button
                className="block text-gray hover:text-black font-bold px-2 md:px-4 lg:px-6 transform transition-colors duration-200"
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
                className="block text-gray hover:text-black font-bold px-2 md:px-4 lg:px-6 transform transition-colors duration-200"
                title="Turn on dark mode"
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
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
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
