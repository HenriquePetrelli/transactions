describe("Filter Transactions By Name", () => {
  it("Fill transitions with Status (created)", () => {
    cy.get("#slct")
      .select("Status")
      .get(".filter-content")
      .get(".filter-text > #slct")
      .select("Criado")
      .get(".btn-search")
      .click();
  });
});
