import { graphql } from 'msw'

export const createHandlers = (data) => [
  graphql.query('GetAllArticles', (req, res, ctx) => {
    return res(ctx.data({ allArticles: data.reverse() }))
  }),

  graphql.query('ArticleBySlug', (req, res, ctx) => {
    return res(ctx.data({ article: data[0] }))
  }),
]
