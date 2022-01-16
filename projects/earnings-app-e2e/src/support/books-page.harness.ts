export const getPage = () => cy.get('bco-books-page');
export const getError = () => getPage().find('[data-test-id="error"]');
