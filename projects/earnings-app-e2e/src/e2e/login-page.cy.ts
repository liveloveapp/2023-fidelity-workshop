describe('Login Page', () => {
  it('should show "Login" in the header', () => {
    cy.visit('/');

    cy.get('h3').contains('Login');
  });

  it('should show a form element', () => {
    cy.visit('/');

    cy.get('form').should('be.visible');
  });

  it('should show username and password inputs', () => {
    cy.visit('/');

    cy.get('form').within(($frm) => {
      cy.get('[data-test-id="usernameInput"]').should('be.visible');
      cy.get('[data-test-id="passwordInput"]').should('be.visible');
    });
  });

  it('should show two input elements', () => {
    cy.visit('/');

    cy.get('form').find('input').should('have.length', 2);
  });
});
