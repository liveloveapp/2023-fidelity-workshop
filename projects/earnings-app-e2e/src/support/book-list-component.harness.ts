export const getBook = (bookId: string) =>
  cy.get(`[data-test-id="book-${bookId}"]`);
export const getEditBookButton = (bookId: string) =>
  getBook(bookId).find('[data-test-id="bookEditButton"]');

export const clickEditButtonOnBook = (bookId: string) => {
  getEditBookButton(bookId).click();
};
