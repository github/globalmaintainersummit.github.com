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

  describe('when subscribing to the newsletter', () => {
    const SERVICE_URL =
      'https://30cccd97-b967-4c1f-98cd-c705c798c494.trayapp.io'

    it('when everything is ok', () => {
      cy.intercept(
        {
          url: SERVICE_URL,
          method: 'POST',
        },
        []
      ).as('newsletterForm')
      cy.findByPlaceholderText('Enter your@email.here').type('user@example.org')
      cy.findByText('Sign up').click()
      cy.wait('@newsletterForm')
        .its('request.body')
        .should('include', 'user@example.org')
      cy.findByText(/Happy to have you onboard!/).should('be.visible')
    })

    it('when something whent wrong', () => {
      cy.intercept(
        {
          url: SERVICE_URL,
          method: 'POST',
        },
        { forceNetworkError: true }
      ).as('newsletterForm')
      cy.findByPlaceholderText('Enter your@email.here').type('user@example.org')
      cy.findByText('Sign up').click()
      cy.wait('@newsletterForm')
        .its('request.body')
        .should('include', 'user@example.org')
      cy.findByText(/Uops... something went wrong./).should('be.visible')
    })
  })
})
