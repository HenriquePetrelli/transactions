describe("Reload Transactions", () => {
    it("Click on reload transactions button", () => {
        cy.get('.icon-reload').click();
        cy.wait(3000)
    })
})