describe('Schedule', () => {
  beforeEach(() => {
    cy.visit('/schedule')
  })

  it('displays the correct dates', () => {
    cy.contains('Tuesday ⌁ June 8, 2021')
    cy.contains('Tuesday ⌁ June 9, 2021')
  })
})
