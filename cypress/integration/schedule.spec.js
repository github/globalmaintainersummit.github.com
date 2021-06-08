describe('Schedule', () => {
  beforeEach(() => {
    cy.visit('/schedule')
  })

  it('displays the correct dates for America/Los_Angeles time zone', () => {
    cy.contains('Tuesday ⌁ June 8, 2021')
    cy.contains('Wednesday ⌁ June 9, 2021')
  })

  it('displays the correct dates for Asia/Magadan time zone', () => {
    cy.window().then((window) => {
      window.updateUserTimeZone('Asia/Magadan')
      cy.findByText('Magadan').click()
      cy.findByText('Wednesday ⌁ June 9, 2021').should('be.visible')
      cy.findByText('Thursday ⌁ June 10, 2021').should('be.visible')
    })
  })

  it('changes the timezone when the user is in Europe/Madrid timezone', () => {
    cy.window().then((window) => {
      window.updateUserTimeZone('Europe/Madrid')
      cy.get('[data-cy=slot] > [data-cy=slotTime]').first().as('firstSlot')
      cy.get('@firstSlot').within(() => {
        cy.findByText('9:00 am')
      })
      cy.findByText('Madrid').click()
      cy.get('@firstSlot').within(() => {
        cy.findByText('6:00 pm')
      })
    })
  })
})
