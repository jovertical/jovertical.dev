export default function Card({ title, className, children, ...props }) {
    return (
        <article
            className={cx(
                'bg-gray-lightest dark:bg-gray-darkest p-4 md:p-6',
                className,
            )}
            {...props}
        >
            {title && (
                <h3 className="text-xl font-semibold text-gray-dark dark:text-gray-lightest">
                    {title}
                </h3>
            )}

            {children}
        </article>
    );
}
