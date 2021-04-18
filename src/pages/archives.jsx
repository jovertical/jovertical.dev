import dayjs from 'dayjs';
import Card from '@/components/Card';
import CardText from '@/components/CardText';
import Layout from '@/components/Layout';
import Link from '@/components/Link';
import PageHeader from '@/components/PageHeader';
import Article from '@/models/Article';

export default function Archives({ articles }) {
    return (
        <Layout>
            <PageHeader
                title="Archives"
                description="All of the articles I published, in reverse chronological order."
            />

            <div className="mt-8 -mx-4 md:-mx-6 space-y-4">
                {articles.map((article) => (
                    <Card
                        key={article.id}
                        className="flex flex-col md:flex-row items-start md:items-center justify-between"
                    >
                        <CardText
                            variant="title"
                            className="hover:text-blue dark:hover:text-turquoise w-full md:w-3/4"
                        >
                            <Link as={`/${article.slug}`} href="/[slug]">
                                {article.title}
                            </Link>
                        </CardText>

                        {article._publishedAt && (
                            <CardText className="font-medium">
                                {dayjs(article._publishedAt).format(
                                    'MMMM D, YYYY',
                                )}
                            </CardText>
                        )}
                    </Card>
                ))}
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    let articles = await Article.get();

    return {
        props: {
            articles,
        },
    };
}
