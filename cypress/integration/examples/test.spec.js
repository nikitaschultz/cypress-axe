/// <reference types="cypress" />

context('Actions', () => {
  it('should be accessible', () => {
    cy.visit('https://www.audio-unity-group.com/')

    cy.wait(2000)

    cy.injectAxe();

    cy.checkA11y();
  })
})
