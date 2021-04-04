import { graphql } from 'msw';

export let createHandlers = (data) => [
    graphql.query('articleList', (req, res, ctx) => {
        return res(ctx.data({ allArticles: data }));
    }),

    graphql.query('articleBy', (req, res, ctx) => {
        return res(ctx.data({ article: data[0] }));
    }),

    graphql.query('tagList', (req, res, ctx) => {
        return res(ctx.data({ allTags: data }));
    }),

    graphql.query('projectList', (req, res, ctx) => {
        return res(ctx.data({ allProjects: data }));
    }),
];
