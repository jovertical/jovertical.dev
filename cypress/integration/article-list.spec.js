import articleFactory from '../factories/article';

describe('Article listing page', () => {
    let articles = [];

    before(() => {
        cy.mock(articleFactory, {}, 10).then((data) => {
            articles = data;

            cy.visit('/articles');
        });
    });

    it('has heading', () => {
        cy.get('[data-cy=title]').contains('Articles');
        cy.get('[data-cy=description]').should('not.be.empty');
    });

    it('displays a list of articles', () => {
        cy.get('article').should('have.length', articles.length);
    });

    it.skip('has pagination', () => {});

    it.skip('has archive sidebar', () => {});
});
