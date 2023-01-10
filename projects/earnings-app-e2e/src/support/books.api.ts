import { BookModel } from '@book-co/shared-models';

const API_BASE_URL = Cypress.env('API_BASE_URL');

export function getBooks() {
  return cy.request<BookModel[]>({
    url: API_BASE_URL,
    method: 'GET',
  });
}

export function getBook(id: string) {
  return cy.request<BookModel>({
    url: `${API_BASE_URL}/${id}`,
    method: 'GET',
  });
}

export function deleteBook(id: string) {
  return cy.request({
    url: `${API_BASE_URL}/${id}`,
    method: 'DELETE',
  });
}

export function deleteAllBooks() {
  return getBooks().then(({ body }) => {
    cy.wrap(body).each((book: BookModel) => {
      deleteBook(book.id);
    });
  });
}

export function createBook(book: BookModel) {
  return cy.request({
    url: API_BASE_URL,
    method: 'POST',
    body: book,
  });
}
