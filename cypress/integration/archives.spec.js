describe('Archives page', () => {
    before(() => {
        cy.visit('/archives');
    });

    it('has heading', () => {
        cy.get('[data-cy=title]').contains('Archives');
        cy.get('[data-cy=description]').should('not.be.empty');
    });
});
