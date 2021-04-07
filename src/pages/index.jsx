import ArticleCard from '@/components/ArticleCard';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Article from '@/models/Article';

export default function Welcome({ articles }) {
    return (
        <Layout>
            <header>
                <SEO
                    title="Jovert Palonpon"
                    description="Jovert Palonpon is a Full Stack engineer"
                />

                <div className="mt-12 flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:space-x-6">
                    <h1
                        className="mt-12 lg:mt-0 max-w-3xl text-3xl sm:text-4xl sm:text-left md:text-center lg:text-left leading-snug md:leading-normal text-gray-dark dark:text-gray-lightest font-semibold"
                        data-cy="title"
                    >
                        Hi, I&apos;m Jovert. <br className="mb-6 lg:hidden" />A
                        Full Stack engineer with an extensive experience in web
                        development and loves the DevOps side of things.
                    </h1>
                </div>
            </header>

            <section className="mt-64" data-cy="featured-articles">
                <h2 className="font-normal text-blue dark:text-turquoise tracking-widest">
                    FEATURED ARTICLES
                </h2>

                <div className="mt-3 -mx-4 md:-mx-6">
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
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    return {
        props: {
            articles: await Article.query()
                .append(['minuteRead'])
                .get({
                    featured: { eq: true },
                }),
        },
    };
}
