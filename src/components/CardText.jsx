import * as React from 'react'

export default function CardText({
  variant = 'paragraph',
  className,
  ...props
}) {
  return React.createElement(variant === 'heading' ? 'h3' : 'p', {
    className: cx(
      {
        'text-lg font-bold': variant === 'title',
        'text-sm text-secondary dark:text-secondary-dark':
          variant === 'subtitle',
        'text-tertiary dark:text-tertiary-dark leading-relaxed':
          variant === 'paragraph',
      },
      className
    ),
    ...props,
  })
}
