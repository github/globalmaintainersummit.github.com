describe('Code of Conduct', () => {
  beforeEach(() => {
    cy.visit('/code-of-conduct')
  })

  it('displays the three main sections', () => {
    cy.contains('Code of Conduct')
    cy.contains('Reporting an incident')
    cy.contains('Credit')
  })
})
