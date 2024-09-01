/// <reference types='cypress' />

describe('Cypress E2E Testing demo', () => {
  it('Assert Url', () => {
    cy.visit('https://ultimateqa.com/automation')
    cy.url().should('contain', 'ultimateqa')
  })
})