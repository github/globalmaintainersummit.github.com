describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the hero lead and the correct dates/', () => {
    cy.contains(
      'A virtual gathering for the maintainers who make open source possible'
    )
    cy.contains('June 8-9, 2021')
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
    cy.findByText('Hosted by GitHub')
  })
})
