import * as React from 'react'

export default function TOC({ headings, defaultTarget }) {
  let [target, setTarget] = React.useState()

  function scrollEventListener() {
    for (let t of headings.map((h) => h.target)) {
      let targetPosition = document.querySelector(t).getBoundingClientRect().top

      if (targetPosition >= 0 && targetPosition <= 400) {
        setTarget(t)
      }
    }
  }

  React.useEffect(() => {
    setTarget(defaultTarget)

    window.addEventListener('scroll', scrollEventListener)

    return () => {
      window.removeEventListener('scroll', scrollEventListener)
    }
  }, [])

  return (
    <aside
      className="sticky top-16 hidden lg:block max-w-xs ml-6 mt-8 h-screen"
      data-cy="toc"
    >
      <nav className="text-tertiary">
        <h2 className="mb-2 font-normal text-accent dark:text-accent-dark tracking-widest">
          TABLE OF CONTENTS
        </h2>

        {headings.map((heading, key) => (
          <a
            key={'heading-' + key}
            href={heading.target}
            className={cx('block mt-3 text-sm', {
              [`ml-${(heading.depth - 1) * 3}`]: heading.depth > 1,
              'text-tertiary hover:text-accent dark:text-tertiary-dark dark:hover:text-accent-dark':
                target !== heading.target,
              'text-accent dark:text-accent-dark': target === heading.target,
            })}
            data-cy={`heading-${key}-${heading.depth}`}
            onClick={() => setTarget(heading.target)}
          >
            {heading.name}
          </a>
        ))}
      </nav>
    </aside>
  )
}
