import '@/bootstrap';
import Article from '@/models/Article';

export default async (req, res) => {
    // This secret should only be known to this API route and the CMS
    if (req.query.secret !== process.env.NEXT_PUBLIC_DATO_CMS_PREVIEW_SECRET) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    // Check if a slug is provided
    if (!req.query.article) {
        res.status(404).json({ message: 'Slug is not provided' });
    }

    // Fetch the headless CMS to check if the provided `slug` exists
    let content = await Article.queryPreview().find(article);

    // If the slug doesn't exist prevent preview mode from being enabled
    if (!content) {
        return res.status(401).json({ message: 'Invalid slug' });
    }

    // Enable Preview Mode by setting the cookies
    res.setPreviewData({});

    // Redirect to the path from the fetched model
    // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
    res.writeHead(307, {
        Location: `/${content.slug}`.replace(/^\/+/g, ''),
    });

    res.end();
};
