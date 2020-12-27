import factory from '../factories/article'

describe('Welcome page', () => {
  let articles = []

  before(() => {
    cy.mock(factory, { featured: true }, 3).then((data) => {
      articles = data

      cy.visit('/')
    })
  })

  it('has heading', () => {
    cy.get('[data-cy=title]').should('exist')
  })

  it('has a featured articles section', () => {
    cy.get('[data-cy=featured-articles]').should('exist')
  })
})
