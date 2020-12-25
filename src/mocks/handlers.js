import { graphql } from 'msw'

export const createHandlers = (data) => [
  graphql.query('GetAllArticles', (req, res, ctx) => {
    return res(ctx.data({ allArticles: data }))
  }),

  graphql.query('ArticleBySlug', (req, res, ctx) => {
    return res(ctx.data({ article: data[0] }))
  }),

  graphql.query('GetAllProjects', (req, res, ctx) => {
    return res(ctx.data({ allProjects: data }))
  }),
]
