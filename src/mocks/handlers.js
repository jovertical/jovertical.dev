import { graphql } from 'msw'

export const createHandlers = (data) => [
  graphql.query('articleList', (req, res, ctx) => {
    return res(ctx.data({ allArticles: data }))
  }),

  graphql.query('articleBy', (req, res, ctx) => {
    return res(ctx.data({ article: data[0] }))
  }),

  graphql.query('projectList', (req, res, ctx) => {
    return res(ctx.data({ allProjects: data }))
  }),
]
