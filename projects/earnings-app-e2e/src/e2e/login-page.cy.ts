describe('Login Page', () => {
  it('should show "Login" in the header', () => {
    cy.visit('/');

    cy.get('h3').contains('Login');
  });

  it('should show a form element', () => {
    cy.visit('/');

    cy.get('form').should('be.visible');
  });
});
