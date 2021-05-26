describe('Default Layout', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('in a small viewport', () => {
    beforeEach(() => {
      cy.viewport('iphone-6')
    })
    it('is displaying the Github Brand and shortened event name', () => {
      cy.get('[data-cy=navigation]').within(() => {
        cy.findByText('GMS').should('be.visible')
      })
    })
    it('is displaying the hamburger icon', () => {
      cy.get('[data-cy=navigation]').within(() => {
        cy.findByLabelText('Open navigation').should('be.visible')
      })
    })
    it('is opening the menu and closing it', () => {
      cy.get('[data-cy=navigation]').within(() => {
        cy.findByLabelText('Open navigation').click()
        cy.findByText('Maintainers').should('be.visible')
        cy.findByLabelText('Close navigation').click()
        cy.findByText('Maintainers').should('not.be.visible')
      })
    })
  })

  context('in a tablet viewport', () => {
    beforeEach(() => {
      cy.viewport('ipad-2')
    })
    it('is displaying the Github Brand and event name', () => {
      cy.get('[data-cy=navigation]').within(() => {
        cy.findByText('GMS').should('be.visible')
        cy.findByText('Schedule').should('be.visible')
      })
    })
  })

  context('in desktop Viewport', () => {
    it('is displaying the Github Brand and event name', () => {
      cy.get('[data-cy=navigation]').within(() => {
        cy.findByText('Global Maintainer Summit').should('be.visible')
        cy.findAllByText('Save the Date').first().should('be.visible')
      })
    })

    it('expands and collapses Save the date dropdown', () => {
      cy.get('[data-cy=navigation]').within(() => {
        cy.findByText('Save the Date').click()
        cy.findByText('Apple').should('be.visible')
        cy.findByText('Google').should('be.visible')
        cy.findByText('Office 365').should('be.visible')
        cy.findByText('Outlook').should('be.visible')
        cy.findByText('Yahoo').should('be.visible')
        cy.findByText('Save the Date').click()
        cy.findByText('Apple').should('not.be.visible')
      })
    })
  })
})
