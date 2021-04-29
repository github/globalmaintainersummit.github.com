describe('Home', () => {
  it('Display work in progress', () => {
    cy.visit('/')
    cy.contains('Work in progress')
  })
})
