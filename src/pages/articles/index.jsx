import { useRouter } from 'next/router';
import * as React from 'react';
import range from 'lodash.range';
import random from 'lodash.random';
import fs from 'fs/promises';
import ArticleCard from '@/components/ArticleCard';
import ArticleCardSkeleton from '@/components/ArticleCardSkeleton';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import generateRss from '@/helpers/generateRss';
import Article from '@/models/Article';
import Tag from '@/models/Tag';

export default function Articles(props) {
    let router = useRouter();
    let [loading, setLoading] = React.useState(false);
    let [articles, setArticles] = React.useState(props.articles);

    function fetchTag(name = null) {
        if (!name) {
            return Promise.reject('Tag not found');
        }

        return Tag.first({
            name: {
                eq: name,
            },
        });
    }

    function fetchArticles(tag) {
        return Article.append(['minuteRead']).get({
            ...(tag && {
                tags: {
                    anyIn: [tag.id],
                },
            }),
        });
    }

    React.useEffect(() => {
        if (!router.query.tag) {
            return;
        }

        setLoading(true);

        fetchTag(router.query.tag)
            .then(fetchArticles)
            .then((filteredArticles) => setArticles(filteredArticles))
            .finally(() => setLoading(false));
    }, [router.query.tag]);

    return (
        <Layout>
            <PageHeader
                title="Articles"
                description="My personal thoughts on web development and programming. Being a full stack software engineer, I encounter a lot of problems and I just love sharing how I solved these problems, so I write it down here."
            />

            <div className="mt-8 -mx-4 md:-mx-6 space-y-6">
                {loading ? (
                    <>
                        {range(0, random(1, 2)).map((value) => (
                            <ArticleCardSkeleton key={value} />
                        ))}
                    </>
                ) : (
                    <>
                        {articles.map((article) => (
                            <ArticleCard
                                key={article.id}
                                title={article.title}
                                body={article.excerpt}
                                slug={article.slug}
                                minuteRead={article.minuteRead}
                                publishedAt={article._publishedAt}
                            />
                        ))}
                    </>
                )}
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    let articles = await Article.append(['minuteRead']).get();

    try {
        let rss = generateRss(articles);

        await fs.writeFile('public/rss.xml', rss);
    } catch (error) {}

    return {
        props: {
            articles,
        },
    };
}
