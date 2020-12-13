import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'classnames'

export default function Layout({ children }) {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <div className="py-8 lg:py-16 px-6 md:px-16 lg:px-24">
      <div className="relative z-20 flex justify-between items-center">
        <div className="flex md:block lg:flex items-center max-w-full">
          <div className="mb-0 md:mb-4 lg:mb-0 flex flex-no-shrink pr-4 md:pr-6 lg:pr-12">
            <Link as="/" href="/">
              <a className="flex items-center no-underline">
                <img
                  className="h-10 w-10 md:h-12 md:w-12 lg:h-20 lg:w-20 rounded-full"
                  src="https://avatars0.githubusercontent.com/u/42484695?s=460&u=42cf87c7688fe8fe80b227cca6a0931db6fe08ce&v=4"
                  alt=""
                />
              </a>
            </Link>
          </div>

          <div>
            <Link as="/" href="/">
              <a className="block text-black no-underline font-bold text-xl lg:text-3xl leading-none lg:leading-tight">
                Jovert Palonpon
              </a>
            </Link>

            <div className="hidden md:flex mt-3 lg:mt-4 uppercase tracking-wide text-xs">
              <Link as="/articles" href="/articles">
                <a
                  className={cx('font-bold no-underline', {
                    'text-blue-500': router.pathname === '/articles',
                    'text-gray-500 hover:text-black':
                      router.pathname !== '/articles',
                  })}
                >
                  Articles
                </a>
              </Link>

              <Link as="/" href="/">
                <a className="text-gray-500 hover:text-black font-bold no-underline ml-6">
                  Projects
                </a>
              </Link>

              <Link as="/" href="/">
                <a className="text-gray-500 hover:text-black font-bold no-underline ml-6">
                  Experiences
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <button
            className="block focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className={cx('h-8 w-8', { hidden: menuOpen, block: !menuOpen })}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden={menuOpen}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              className={cx('h-8 w-8', { hidden: !menuOpen, block: menuOpen })}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden={!menuOpen}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={cx('block md:hidden z-10 bg-white fixed inset-0 pt-24', {
          block: menuOpen,
          hidden: !menuOpen,
        })}
      >
        <div className="overflow-y-auto pt-6 pb-8 px-12 max-h-full">
          <Link as="/articles" href="/articles">
            <a className="block mb-8 text-black font-bold no-underline">
              Articles
            </a>
          </Link>

          <Link as="/projects" href="/projects">
            <a className="block mb-8 text-black font-bold no-underline">
              Projects
            </a>
          </Link>

          <Link as="/" href="/">
            <a className="block mb-8 text-black font-bold no-underline">
              Experiences
            </a>
          </Link>
        </div>
      </div>

      <div className="lg:pl-32 mt-12">
        <div className="max-w-2xl">{children}</div>
      </div>
    </div>
  )
}
