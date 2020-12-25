import * as React from 'react'
import SEO from '@/components/SEO'

export default function Header({ title, description }) {
  return (
    <header className="max-w-xl md:max-w-3xl" data-cy="header">
      <SEO title={title + ' - Jovert Palonpon'} description={description} />

      <h1
        className="text-4xl font-extrabold text-accent dark:text-accent-dark"
        data-cy="title"
      >
        {title}
      </h1>

      <p
        className="text-lg text-secondary dark:text-secondary-dark leading-loose mt-6"
        data-cy="description"
      >
        {description}
      </p>
    </header>
  )
}
