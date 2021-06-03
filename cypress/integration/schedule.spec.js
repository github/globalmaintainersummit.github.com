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
      cy.get('[data-cy=timezoneSwitch]').within(() => {
        cy.get('[data-cy=option2]').click({ force: true })
      })
      cy.contains('Wednesday ⌁ June 9, 2021')
      cy.contains('Thursday ⌁ June 10, 2021')
    })
  })

  it('changes the timezone when the user has a different timezone than America/Los_Angeles', () => {
    cy.window().then((window) => {
      window.updateUserTimeZone('Europe/Madrid')
      cy.get('[data-cy=slot] > [data-cy=slotTime]').then(($times) => {
        const pdtTimeFirstSlot = $times[0].firstElementChild.innerText

        cy.get('[data-cy=timezoneSwitch]').within(() => {
          cy.get('[data-cy=option2]').click({ force: true })
        })

        cy.get('[data-cy=slot] > [data-cy=slotTime]').then(($times) => {
          const localTimeFirstSlot = $times[0].firstElementChild.innerText

          expect(pdtTimeFirstSlot).to.not.equal(localTimeFirstSlot)
          expect(pdtTimeFirstSlot).to.equal('9:00 am')
          expect(localTimeFirstSlot).to.equal('6:00 pm')
        })
      })
    })
  })
})
