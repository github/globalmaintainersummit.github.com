describe('Home', () => {
  beforeEach(() => {
    cy.visit('/maintainers')
  })

  it('List all maintainers sorted alphabetically', () => {
    cy.get('[data-cy=maintainers]').then(($maintainers) => {
      let names = []

      $maintainers.each((_, maintainerElement) => {
        names = [...names, maintainerElement.innerText]
      })

      expect([...names]).to.have.ordered.members(
        names.sort((a, b) => a.localeCompare(b))
      )
    })
  })
})
