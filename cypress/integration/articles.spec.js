/// <reference types="cypress" />

describe('Articles', () => {
  it('has an article listing page', () => {
    cy.visit('/articles')

    cy.get('[data-cy=title]').contains('Articles')

    cy.get('[data-cy=description]').contains(
      'My personal thoughts on web development and programming.'
    )
  })
})
