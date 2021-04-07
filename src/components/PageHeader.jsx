import * as React from 'react';
import SEO from '@/components/SEO';

export default function PageHeader({ title, description }) {
    return (
        <header className="max-w-xl md:max-w-3xl" data-cy="header">
            <SEO
                title={title + ' - Jovert Palonpon'}
                description={description}
            />

            <h1
                className="text-4xl font-extrabold text-blue dark:text-turquoise"
                data-cy="title"
            >
                {title}
            </h1>

            <p
                className="text-lg text-gray dark:text-gray-lighter leading-loose mt-6"
                data-cy="description"
            >
                {description}
            </p>
        </header>
    );
}
