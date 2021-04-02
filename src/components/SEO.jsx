import Head from 'next/head';

export default function SEO({ title, description }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="twitter:title" content={title} />
            <meta property="og:title" content={title} />

            {description && (
                <>
                    <meta name="description" content={description} />
                    <meta name="twitter:description" content={description} />
                    <meta property="og:description" content={description} />
                </>
            )}

            <meta property="og:type" content="article" />
        </Head>
    );
}
