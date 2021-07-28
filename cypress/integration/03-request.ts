describe('Api', () => {
    it('Api Requests', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://warren-transactions-api.herokuapp.com/api/',
        })
    })
})