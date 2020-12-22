/// <reference types="cypress" />

describe('Article listing', () => {
  before(() => {
    cy.visit('/articles')
  })

  it('has heading', () => {
    cy.get('[data-cy=title]').contains('Articles')

    cy.get('[data-cy=description]').contains(
      'My personal thoughts on web development and programming.'
    )
  })

  it('displays a list of articles', () => {
    cy.get('article').should('have.length', 2)
  })

  it.skip('has pagination', () => {})

  it.skip('has archive sidebar', () => {})
})
