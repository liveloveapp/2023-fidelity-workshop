// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    getByTestId(id: string): Chainable<Element>;
    findByTestId(id: string): Chainable<Element>;
  }
}

Cypress.Commands.add('getByTestId', (testId: string) => {
  return cy.get(`[data-test-id="${testId}"]`);
});

Cypress.Commands.add(
  'findByTestId',
  { prevSubject: 'element' },
  (subject: Cypress.Chainable<Element>, testId: string) => {
    return subject.find(`[data-test-id="${testId}"]`);
  }
);
