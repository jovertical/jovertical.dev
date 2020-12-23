import factory from '../factories/article'

describe('Article listing', () => {
  let articles = []

  before(() => {
    cy.mock(factory, {}, 10).then((data) => {
      articles = data

      cy.visit('/articles')
    })
  })

  it('has heading', () => {
    cy.get('[data-cy=title]').contains('Articles')

    cy.get('[data-cy=description]').contains(
      'My personal thoughts on web development and programming.'
    )
  })

  it('displays a list of articles', () => {
    cy.get('article').should('have.length', articles.length)
  })

  it.skip('has pagination', () => {})

  it.skip('has archive sidebar', () => {})
})
