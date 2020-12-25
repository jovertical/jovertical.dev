import cx from 'classnames'

export default function Icon({
  size = 'regular',
  variant = 'outlined',
  className,
  children,
}) {
  return (
    <svg
      className={cx(
        {
          'w-4 h-4': size === 'small',
          'w-6 h-6': size === 'regular',
          'w-8 h-8': size === 'large',
        },
        className
      )}
      fill={variant === 'filled' ? 'currentColor' : 'none'}
      stroke={variant === 'outlined' ? 'currentColor' : 'none'}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}
