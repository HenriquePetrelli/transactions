describe("Transaction Detail", () => {
  it("Click on first transaction", () => {
    cy.get(":nth-child(1) > .td-title").click();
    cy.wait(3000)
  });
});
