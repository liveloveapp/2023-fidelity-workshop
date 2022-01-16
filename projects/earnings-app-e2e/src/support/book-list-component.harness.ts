export const getBook = (bookId: string) =>
  cy.get(`[data-test-id="book-${bookId}"]`);
