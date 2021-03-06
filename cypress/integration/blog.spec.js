import random from 'lodash.random';
import range from 'lodash.range';
import collect from 'collect.js';
import articleFactory from '../factories/article';
import tagFactory from '../factories/tag';

describe('Blog page', () => {
    let tags = range(10).map(() => tagFactory.definition());
    let articles = [];

    before(() => {
        cy.mock(
            articleFactory,
            {
                tags: collect(tags).random(random(1, 5)).toArray(),
            },
            random(5, 10),
        ).then((data) => {
            articles = data;

            cy.visit('/blog');
        });
    });

    it('has heading', () => {
        cy.get('[data-cy=title]').contains('Articles');
        cy.get('[data-cy=description]').should('not.be.empty');
    });

    it('displays a list of articles', () => {
        cy.get('article').should('have.length', articles.length);
    });

    it.skip('displays a list filtered by the tag', () => {
        //
    });

    it('has a link to the archives page', () => {
        cy.get(`[data-cy=archives-link]`).focus().click({ force: true });

        cy.location().should((loc) => {
            expect(loc.href).to.include('archives');
        });

        cy.visit('/blog');
    });

    it.skip('has pagination', () => {
        //
    });
});
