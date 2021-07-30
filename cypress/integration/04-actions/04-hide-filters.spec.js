describe("Hide Filters", () => {
    it("Click on hidden filters button", () => {
        cy.get('.icon-filter').click();
        cy.wait(3000)
    })
})