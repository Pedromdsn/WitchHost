describe('Navigation', () => {
  it('should navigate to the about page', () => {
		cy.visit('/');
		cy.get('[data-cy="send-to-mine"]').click();
		cy.url().should('include', '/minecraft');
		cy.get('[data-cy="Brasil, São Paulo"]').click();
		cy.url().should('include', '/br');
		cy.get('[data-cy="Estados Unidos, Virginia"]').click();
		cy.url().should('include', '/eua');
	})
});

export {};