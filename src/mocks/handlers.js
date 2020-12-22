import { graphql } from 'msw'
import { articles } from '@/mocks/data'

export const handlers = [
  graphql.query('GetAllArticles', (req, res, ctx) => {
    return res(ctx.data({ allArticles: articles.reverse() }))
  }),

  graphql.query('ArticleBySlug', (req, res, ctx) => {
    return res(ctx.data({ article: articles[0] }))
  }),
]
