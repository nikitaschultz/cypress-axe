/// <reference types="cypress" />
context('Actions', () => {

  function terminalLog(violations) {
    cy.task(
      'log',
      `${violations.length} accessibility violation${
        violations.length === 1 ? '' : 's'
      } ${violations.length === 1 ? 'was' : 'were'} detected`
    )
    // pluck specific keys to keep the table readable
    const violationData = violations.map(
      ({ id, impact, description, nodes }) => ({
        id,
        impact,
        description,
        nodes: nodes.length
      })
    )
  
    cy.task('table', violationData)
  }

  
  it('should be accessible', () => {
    cy.visit('https://www.audio-unity-group.com/')

    cy.wait(2000)

    cy.injectAxe();

    cy.checkA11y(null, null, terminalLog);
  })
})
