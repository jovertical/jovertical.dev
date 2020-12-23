import dayjs from 'dayjs'
import factory from '../factories/article'

describe('Single article', () => {
  let article = null

  before(() => {
    cy.mock(factory).then((data) => {
      article = data

      cy.visit('/articles/' + article.slug)
    })
  })

  it('has heading', () => {
    cy.get('[data-cy=publish-date]').contains(
      dayjs(article._publishedAt).format('MMMM D, YYYY')
    )

    cy.get('[data-cy=title]').contains(article.title)
  })

  it.skip('has body', () => {})

  it.skip('has table of contents', () => {})

  it.skip('has a comment section', () => {})
})
