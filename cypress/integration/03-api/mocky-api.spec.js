describe('Check Mocky API', () => {
    it('PT-BR API', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://6101e98a27d22500174b225c.mockapi.io/warren-transactions/api/v1/pt-br',
        })
    })

    it('EN API', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://6101e98a27d22500174b225c.mockapi.io/warren-transactions/api/v1/en',
        })
    })
})