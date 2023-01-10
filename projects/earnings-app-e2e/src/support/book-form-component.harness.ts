import { BookModel, BookRequiredProps } from '@book-co/shared-models';

export const getBookForm = () => cy.get('bco-book-detail');
export const getNameInput = () =>
  getBookForm().find('[data-test-id="nameInput"]');
export const getEarningsInput = () =>
  getBookForm().find('[data-test-id="earningsInput"]');
export const getDescriptionInput = () =>
  getBookForm().find('[data-test-id="descriptionInput"]');
export const getSaveButton = () =>
  getBookForm().find('[data-test-id="saveButton"]');

export const fillForm = (book: BookRequiredProps) => {
  getNameInput().type(book.name);
  getEarningsInput().type(book.earnings);
  getDescriptionInput().type(book.description || '');
};
export const saveForm = () => getSaveButton().click();
