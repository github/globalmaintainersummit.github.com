describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Maintainers are listed and there are no duplicated maintainers in the Maintainers list', () => {
    cy.get('[data-cy=maintainers]').then(($maintainers) => {
      let maintainers = []

      $maintainers.each((_, maintainerElement) => {
        maintainers = [...maintainers, maintainerElement.innerText]
      })

      const uniquemaintainers = new Set(maintainers).size

      expect(uniquemaintainers).to.equal(maintainers.length)
    })
  })

  it('user can navigate to the complete list of maintainers', () => {
    cy.findByText('All Maintainers').click()
    cy.url().should('include', '/maintainers')
  })

  it('displays the short version of the brand for mobile', () => {
    cy.viewport('iphone-6+')
    cy.findByText('GMS')
  })

  it('displays the full brand info for desktop', () => {
    cy.findByText('Global Maintainer Summit')
    cy.findByText('hosted by GitHub')
  })

  it('expands and collapses the save the date button in the top nav', () => {
    cy.get('[data-cy=navigation]').within(() => {
      cy.findByText('Save the Date').click()
      cy.findByText('Apple').should('be.visible')
      cy.findByText('Save the Date').click()
      cy.findByText('Apple').should('be.not.visible')
    })
  })
})
