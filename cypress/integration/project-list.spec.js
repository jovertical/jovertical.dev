import factory from '../factories/project'

describe('Project listing', () => {
  let projects = []

  before(() => {
    cy.mock(factory, {}, 10).then((data) => (projects = data))

    cy.visit('/projects')
  })

  it('has heading', () => {
    cy.get('[data-cy=title]').contains('Projects')
    cy.get('[data-cy=description]').should('not.be.empty')
  })

  it('displays a list of projects', () => {
    cy.get('article').should('have.length', projects.length)
  })

  it.skip('has pagination', () => {})
})
