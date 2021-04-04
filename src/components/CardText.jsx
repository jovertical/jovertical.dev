import * as React from 'react';

export default function CardText({
    variant = 'paragraph',
    className,
    ...props
}) {
    return React.createElement(variant === 'heading' ? 'h3' : 'p', {
        className: cx(
            {
                'text-lg font-bold': variant === 'title',
                'text-sm text-gray dark:text-gray-lighter':
                    variant === 'subtitle',
                'text-gray dark:text-gray-light leading-relaxed':
                    variant === 'paragraph',
            },
            className,
        ),
        ...props,
    });
}
