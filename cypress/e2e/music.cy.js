describe('Music Library Test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[data-test='title']").type("I Love Rock 'N Roll")
    cy.get("[data-test='artist']").type("Joan Jett")
    cy.get("[data-test='album']").type("Greatest Hits")
    cy.get("[data-test='release_date']").type("1981-09-16")
    cy.get("[data-test='genre']").type("Classic Rock")
    cy.get("[data-test='running_time']").type(242)
    cy.get("[data-test='submit btn']").click()

  })

  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[data-test='input']").type('Blue')
    cy.should('have.value', 'Blue')
  })

  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Any Man Of Mine')
    .parents('tr')
    .find('button')
    .contains('Delete')
    .click()
  })
})