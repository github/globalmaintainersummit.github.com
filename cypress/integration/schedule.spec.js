describe('Schedule', () => {
  beforeEach(() => {
    cy.visit('/schedule')
  })

  it('displays the correct dates', () => {
    cy.contains('Tuesday ⌁ June 8, 2021')
    cy.contains('Wednesday ⌁ June 9, 2021')
  })

  it('changes the timezone when the user has a different timezone than PDT', () => {
    cy.get('[data-cy=timezoneSwitch]').should('exist')
    cy.get('[data-cy=slot] > [data-cy=slotTime]').then(($times) => {
      const pdtTimeFirstSlot = $times[0].firstElementChild.innerText

      cy.get('[data-cy=timezoneSwitch]').within(() => {
        cy.get('[data-cy=option2]').click()
      })

      cy.get('[data-cy=slot] > [data-cy=slotTime]').then(($times) => {
        const localTimeFirstSlot = $times[0].firstElementChild.innerText

        expect(pdtTimeFirstSlot).to.not.equal(localTimeFirstSlot)
      })
    })
  })
})
