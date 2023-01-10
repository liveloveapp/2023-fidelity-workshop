import { BookModel, BookRequiredProps } from '@book-co/shared-models';
import * as uuid from 'uuid';
import * as BooksApi from '../support/books.api';
import * as AuthApi from '../support/auth.api';
import * as BookListComponent from '../support/book-list-component.harness';
import * as BookFormComponent from '../support/book-form-component.harness';
import * as BooksPage from '../support/books-page.harness';

function setup(options: { throwErrorWhenLoadingBooks?: boolean } = {}) {
  const book = {
    id: uuid.v4(),
    name: 'The Lord of the Rings',
    earnings: '100',
    description:
      'The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien.',
  };

  BooksApi.deleteAllBooks();
  BooksApi.createBook(book);

  if (options.throwErrorWhenLoadingBooks) {
    cy.intercept('GET', 'http://localhost:3000/books', {
      statusCode: 500,
      body: {
        error: 'Internal Server Error',
      },
    }).as('getBooks');
  } else {
    cy.intercept('GET', 'http://localhost:3000/books').as('getBooks');
  }

  AuthApi.login('Admin', 'password');

  cy.visit('/');

  cy.wait('@getBooks');

  return book;
}

describe('Books Page', () => {
  it('should show a list all of the books', () => {
    const book = setup();

    BookListComponent.getBook(book.id).should('contain', book.name);
  });

  it('should gracefully show an error message when loading the books fails', () => {
    setup({ throwErrorWhenLoadingBooks: true });

    BooksPage.getError().should('contain', 'Error');
  });

  it('should let you create a book', () => {
    setup();
    const book: BookRequiredProps = {
      name: 'My Book',
      earnings: '100',
      description: 'My Book Description',
    };

    BookFormComponent.fillForm(book);
    BookFormComponent.saveForm();
  });

  it('should let you edit a book', () => {});

  it('should let you delete a book', () => {});
});
