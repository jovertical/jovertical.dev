import dayjs from 'dayjs'
import factory from '../factories/article'

describe('Single article page', () => {
  let article = null

  before(() => {
    cy.mock(factory).then((data) => {
      article = data

      cy.visit('/articles/' + article.slug)
    })
  })

  it('has heading', () => {
    cy.get('body').find('[data-cy=header]').should('exist')

    cy.get('[data-cy=publish-date]').contains(
      dayjs(article._publishedAt).format('MMMM DD, YYYY')
    )

    cy.get('[data-cy=title]').contains(article.title)
  })

  it('has body', () => {
    cy.get('body').find('[data-cy=body]').should('exist')
  })

  it('has table of contents', () => {
    cy.get('body').find('[data-cy=toc]').should('exist')

    let link = cy.get('[data-cy^=heading-]').eq(_.range(0, 4))

    link.click()

    link
      .then(($el) => cy.get($el.attr('href')))
      .then(($heading) => {
        let top = $heading.position().top

        cy.document()
          .its('documentElement.scrollTop')
          .should((scrollTop) => {
            expect(scrollTop).to.be.within(top, top + 300)
          })
      })
  })

  it.skip('has a comment section', () => {})
})
