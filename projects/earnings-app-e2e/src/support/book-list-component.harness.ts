export const getBook = (bookId: string) => cy.getByTestId(`book-${bookId}`);
export const getEditBookButton = (bookId: string) =>
  getBook(bookId).findByTestId('bookEditButton');
export const getDeleteBookButton = (bookId: string) =>
  getBook(bookId).findByTestId('bookDeleteButton');

export const clickEditButtonOnBook = (bookId: string) => {
  getEditBookButton(bookId).click();
};
export const clickDeleteButtonOnBook = (bookId: string) => {
  getDeleteBookButton(bookId).click();
};
