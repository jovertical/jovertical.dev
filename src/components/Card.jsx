export default function Card({ title, link, className, children, ...props }) {
  return (
    <article
      className={cx(
        'bg-secondary dark:bg-secondary-dark p-4 md:p-6',
        className
      )}
      {...props}
    >
      {title && (
        <h3 className="text-xl font-semibold text-primary dark:text-primary-dark">
          {title}
        </h3>
      )}

      {children}
    </article>
  )
}
