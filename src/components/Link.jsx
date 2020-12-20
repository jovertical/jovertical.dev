import NextLink from 'next/link'

export default function Link({ href, as, children, ...props }) {
  return (
    <NextLink href={href} as={as || href}>
      <a {...props}>
        <>{children}</>
      </a>
    </NextLink>
  )
}
