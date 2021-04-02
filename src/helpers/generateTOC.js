import cheerio from 'cheerio';

export default function generateTOC(content) {
    let $ = cheerio.load(content);

    let headings = $('h2, h3')
        .toArray()
        .map((node) => ({
            name: node.children[1]?.data,
            target: node.children[0]?.attribs?.href,
            depth: parseInt(node.name.replace('h', '')) - 1,
        }));

    return [
        { name: 'Introduction', target: '#introduction', depth: 1 },
        ...headings,
    ];
}
