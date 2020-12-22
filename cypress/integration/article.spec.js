/// <reference types="cypress" />

describe('Single article', () => {
  before(() => {
    cy.visit('/articles/my-first-article')
  })

  it('has heading', () => {
    cy.get('[data-cy=publish-date]').contains('January 01, 2020')
    cy.get('[data-cy=title]').contains('My first article')
  })

  it('has body', () => {
    cy.get('[data-cy=body]').contains(
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    )
  })

  it.skip('has table of contents', () => {})

  it.skip('has a comment section', () => {})
})
