describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Display work in progress', () => {
    cy.contains('Work in progress')
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
})
