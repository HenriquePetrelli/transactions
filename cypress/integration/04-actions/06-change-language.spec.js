describe("Change language", () => {
    it("Change language to PT-BR", () => {    
        cy.wait(3000)  
        cy.get('.close-btn').click()
        // cy.get('#dropdown-country').trigger('onmouseover');
        // cy.get('.img-dropdown').hover().get('.country-option-dropdown').click()
    })
})