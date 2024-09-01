/// <reference types='cypress' />

describe('Cypress E2E Testing demo', () => {
  it('Assert Url', () => {
    cy.visit('https://ultimateqa.com/automation')
    cy.url().should('contain', 'ultimateqa')
  })

  it('Assert Title', () => {
    cy.visit('https://ultimateqa.com/automation')
    cy.title().should('equal', 'Automation Practice - Ultimate QA')
  })
})