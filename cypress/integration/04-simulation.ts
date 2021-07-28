describe('Filter actions', () => {
    it('Fill filter with name', () => {
        setTimeout(() => {
            cy.get('#slct').select('Nome').get('.filter-content').get('.input').type('Resgate').then(() => {
                cy.get('.btn-search').click().then(() => {
                    cy.get('#slct').select('Status').get('.filter-content').get('.filter-text > #slct').select('Criado')
                    cy.get('.btn-search').click();
                })
            })
        }, 2500);
    })

})