describe('Home', () => {
  it('Display the correct date and it is clickable', () => {
    cy.visit('/')
    cy.findByText('June 8-9, 2021').click()
  })

  it('List all maintainers sorted alphabetically', () => {
    cy.visit('/')
    cy.get('[data-cy=speaker]').then(($speakers) => {
      let names = []

      $speakers.each((_, speakerElement) => {
        names = [...names, speakerElement.innerText]
      })

      expect([...names]).to.have.ordered.members(
        names.sort((a, b) => a.localeCompare(b))
      )
    })
  })

  it('There are no duplicated speakers in the Maintainers list', () => {
    cy.visit('/')
    cy.get('[data-cy=speaker]').then(($speakers) => {
      let speakers = []

      $speakers.each((_, speakerElement) => {
        speakers = [...speakers, speakerElement.innerText]
      })

      const uniqueSpeakers = new Set(speakers).size

      expect(uniqueSpeakers).to.equal(speakers.length)
    })
  })

  it('Maintainers are clickable', () => {
    cy.visit('/')
    cy.get('[data-cy=speaker]').each(($link) => {
      cy.get($link).click()
    })
  })

  it('Projects are clickable', () => {
    cy.visit('/')
    cy.get('[data-cy=project]').each(($link) => {
      cy.get($link).click()
    })
  })

  it('Cards are clickable', () => {
    cy.visit('/')
    cy.get('[data-cy=card]').each(($link) => {
      cy.get($link).click()
    })
  })
})
