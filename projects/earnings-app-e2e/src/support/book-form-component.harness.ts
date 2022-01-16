import { BookModel, BookRequiredProps } from '@book-co/shared-models';

export const getBookForm = () => cy.get('bco-book-detail');
export const getNameInput = () => getBookForm().findByTestId('nameInput');
export const getEarningsInput = () =>
  getBookForm().findByTestId('earningsInput');
export const getDescriptionInput = () =>
  getBookForm().findByTestId('descriptionInput');
export const getSaveButton = () => getBookForm().findByTestId('saveButton');

export const fillForm = (book: BookRequiredProps) => {
  getNameInput().clear().type(book.name);
  getEarningsInput().clear().type(book.earnings);
  getDescriptionInput()
    .clear()
    .type(book.description || '');
};
export const saveForm = () => getSaveButton().click();
