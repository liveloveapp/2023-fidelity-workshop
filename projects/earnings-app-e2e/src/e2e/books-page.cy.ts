import { BookModel, BookRequiredProps } from '@book-co/shared-models';
import * as uuid from 'uuid';
import * as BooksApi from '../support/books.api';
import * as AuthApi from '../support/auth.api';
import * as BookListComponent from '../support/book-list-component.harness';
import * as BookFormComponent from '../support/book-form-component.harness';
import * as BooksPage from '../support/books-page.harness';

describe('Books Page', () => {
  let book: BookModel;

  beforeEach(() => {
    book = {
      id: uuid.v4(),
      name: 'The Lord of the Rings',
      earnings: '100',
      description:
        'The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien.',
    };

    BooksApi.deleteAllBooks();
    BooksApi.createBook(book);

    cy.visit('/');

    cy.get('bco-login-form')
      .find('[data-test-id="usernameInput"]')
      .type('Admin');

    cy.get('bco-login-form')
      .find('[data-test-id="passwordInput"]')
      .type('password');

    cy.get('bco-login-form')
      .find('[data-test-id="loginButton"]')
      .debug()
      .click();
  });

  it('should show a list all of the books', () => {
    cy.get(`[data-test-id="book-${book.id}"]`).should('contain', book.name);
  });

  it('should gracefully show an error message when loading the books fails', () => {});

  it('should let you create a book', () => {});

  it('should let you edit a book', () => {});

  it('should let you delete a book', () => {});
});
