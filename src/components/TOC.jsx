import cx from 'classnames'

let linkClass =
  'block mt-3 text-sm text-tertiary hover:text-accent dark:text-tertiary-dark dark:hover:text-accent-dark'

export default function TOC({ headings }) {
  return (
    <aside className="sticky top-16 hidden lg:block max-w-xs ml-6 mt-8 h-screen">
      <nav className="text-tertiary">
        <h2 className="mb-2 font-normal text-accent dark:text-accent-dark tracking-widest">
          TABLE OF CONTENTS
        </h2>

        <a href="#introduction" className={linkClass}>
          Introduction
        </a>

        {headings.map((heading, key) => (
          <a
            key={'heading-' + key}
            href={heading.target}
            className={cx(linkClass, {
              [`ml-${(heading.depth - 1) * 3}`]: heading.depth > 1,
            })}
          >
            {heading.name}
          </a>
        ))}
      </nav>
    </aside>
  )
}
