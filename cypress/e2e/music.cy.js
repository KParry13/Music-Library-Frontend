describe('Music Library Test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[data-test='title']").type("Any Man Of Mine")
    cy.get("[data-test='artist']").type("Shania Twain")
    cy.get("[data-test='album']").type("Come On Over")
    cy.get("[data-test='release_date']").type("2001-10-25")
    cy.get("[data-test='genre']").type("Country")
    cy.get("[data-test='running_time']").type(236)
    cy.get("[data-test='submit btn']").click()

  })

  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[data-test='input']").type('Blue')
    cy.should('have.value', 'Blue')
  })
})