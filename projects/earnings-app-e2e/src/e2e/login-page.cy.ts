describe('Login Page', () => {
  it('should show "Login" in the header', () => {
    cy.visit('/');

    cy.get('h3').contains('Login');
  });
});
