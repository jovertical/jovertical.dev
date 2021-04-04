import fs from 'fs/promises';
import ArticleCard from '@/components/ArticleCard';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import generateRss from '@/helpers/generateRss';
import Article from '@/models/Article';

export default function Articles({ articles }) {
    return (
        <Layout>
            <PageHeader
                title="Articles"
                description="My personal thoughts on web development and programming. Being a full stack software engineer, I encounter a lot of problems and I just love sharing how I solved these problems, so I write it down here."
            />

            <div className="mt-8 -mx-4 md:-mx-6">
                {articles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        className="mt-6"
                        title={article.title}
                        body={article.excerpt}
                        slug={article.slug}
                        minuteRead={article.minuteRead}
                        publishedAt={article._publishedAt}
                    />
                ))}
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
