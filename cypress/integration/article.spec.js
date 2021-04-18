import dayjs from 'dayjs';
import articleFactory from '../factories/article';
import tagFactory from '../factories/tag';

describe('Article page', () => {
    let article = null;

    before(() => {
        cy.mock(articleFactory, {
            tags: [tagFactory.definition(), tagFactory.definition()],
        }).then((data) => {
            article = data;

            cy.visit('/' + article.slug);
        });
    });

    it('has heading', () => {
        cy.get('body').find('[data-cy=header]').should('exist');

        cy.get('[data-cy=publish-date]').contains(
            dayjs(article._publishedAt).format('MMMM DD, YYYY'),
        );

        cy.get('[data-cy=minute-read]').should('not.be.empty');

        cy.get('[data-cy=title]').contains(article.title);

        cy.get('[data-cy=tags]').should('exist');
        cy.get('[data-cy=tags]').children().should('have.length', 2);
    });

    it('has body', () => {
        cy.get('body').find('[data-cy=body]').should('exist');
    });

    it('has table of contents', () => {
        cy.get('body').find('[data-cy=toc]').should('exist');

        let link = cy.get('[data-cy^=heading-]').eq(_.range(0, 4));

        link.click();

        link.then(($el) => cy.get($el.attr('href'))).then(($heading) => {
            let top = $heading.position().top;

            cy.document()
                .its('documentElement.scrollTop')
                .should((scrollTop) => {
                    expect(scrollTop).to.be.within(top, top + 300);
                });
        });
    });

    it.skip('navigates to the blog page when a tag is clicked', () => {
        let tag = article.tags[0];

        cy.get(`[data-cy=tag-${tag.id}]`).focus().click();

        cy.location().should((loc) => {
            expect(loc.href).to.include(`blog?tag=${tag.name}`);
        });
    });
});
