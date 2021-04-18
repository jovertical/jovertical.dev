import * as React from 'react';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';
import Badge from '@/components/Badge';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import TOC from '@/components/TOC';
import Article from '@/models/Article';
import Link from '@/components/Link';

export default function ArticlePage({ article }) {
    let router = useRouter();

    if (!router.isFallback && !article?.slug) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <Layout>
            {router.isFallback ? (
                <p>Loading...</p>
            ) : (
                <div className="flex justify-between relative">
                    <article className="pb-12 min-w-0 max-w-none">
                        <SEO
                            title={article.title + ' - Jovert Palonpon'}
                            description={article.excerpt}
                        />

                        <header
                            className="max-w-xl md:max-w-3xl"
                            data-cy="header"
                        >
                            <div className="text-sm text-gray dark:text-gray-light tracking-normal">
                                {article._publishedAt ? (
                                    <time
                                        dateTime={article._publishedAt}
                                        data-cy="publish-date"
                                    >
                                        {dayjs(article._publishedAt).format(
                                            'MMMM DD, YYYY',
                                        )}
                                    </time>
                                ) : (
                                    <span>Unpublished</span>
                                )}

                                {article.minuteRead > 0 && (
                                    <span data-cy="minute-read">
                                        {` • ${article.minuteRead} minute read`}
                                    </span>
                                )}
                            </div>

                            <h1
                                id="introduction"
                                className="text-gray-dark dark:text-gray-lightest text-4xl leading-tight md:text-5xl md:leading-none font-bold"
                                data-cy="title"
                            >
                                {article.title}
                            </h1>

                            {article.tags?.length > 0 && (
                                <div
                                    className="flex mt-1.5 md:mt-2 space-x-2 md:space-x-2.5"
                                    data-cy="tags"
                                >
                                    {article.tags.map((tag) => (
                                        <Link
                                            key={tag.id}
                                            href={`/blog?tag=${tag.name}`}
                                            data-cy={'tag-' + tag.id}
                                        >
                                            <Badge text={tag.name} />
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </header>

                        <div
                            className="mt-4 md:mt-8 prose dark:prose-dark lg:prose-lg"
                            dangerouslySetInnerHTML={{
                                __html: article.bodyMarkup,
                            }}
                            data-cy="body"
                        />
                    </article>

                    {/* prettier-ignore */}
                    <TOC
                        headings={article.headings}
                        defaultTarget={
                            router.asPath.includes('#')
                                ? '#' + router.asPath.split('#').reverse().first()
                                : null
                        }
                    />
                </div>
            )}
        </Layout>
    );
}

export async function getStaticProps({ params, preview = false }) {
    return {
        props: {
            preview,
            article: await Article.query(preview)
                .with(['tags'])
                .append(['bodyMarkup', 'minuteRead', 'headings'])
                .find(params?.slug),
        },
    };
}

export async function getStaticPaths() {
    let articles = await Article.queryPreview().get();

    return {
        paths: articles?.map((article) => `/${article.slug}`),
        fallback: true,
    };
}
