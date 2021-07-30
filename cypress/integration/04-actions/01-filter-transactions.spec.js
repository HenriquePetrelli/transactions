describe("Filter Transactions", () => {
  
  it("Fill transactions by Name (deposito)", () => {
    cy.get("#slct")
      .select("Nome")
      .get(".filter-content")
      .get(".input")
      .type("deposito",{ delay: 150 }).should('have.value', 'deposito')
      .get(".btn-search")
      .click();
      cy.wait(3000)
  });

  it("Fill transactions by Status (created)", () => {
    cy.get('.btn-clean').click();
  cy.get("#slct")
    .select("Status")
    .get(".filter-content")
    .get(".filter-text > #slct")
    .select("Created")
    .get(".btn-search")
    .click();
    cy.wait(3000)
});
});