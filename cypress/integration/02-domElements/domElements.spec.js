describe('DOM elements', () => {
    it('Navbar Component', () => {
        cy.get('.icon-filter');
        cy.get('.icon-reload');
        cy.get('.nav-bar').get('.logo');
        cy.get('.filter-label > h4')
    })
    
    it('Filter Component', () => {
        cy.get('.filter-label > h4')
        cy.get('#slct');
        cy.get('.btn-search');
        cy.get('.btn-clean');
    })

    it('Transaction List Component', () => {
        cy.get(' .transaction-table-title > :nth-child(1)')
        cy.get(' .transaction-table-title > :nth-child(2)')
        cy.get(' .transaction-table-title > :nth-child(3)')
        cy.get(' .transaction-table-title > :nth-child(4)')
        cy.get('.transaction-table-content');
    })

    it('Transaction Details Component', () => {
        cy.get('.modal').get('.modal-body').get('h1');
        cy.get('.modal').get('.modal-body').get('.close-btn');
        cy.get('.modal').get('.modal-body').get('.circle__step-name > :nth-child(1)')
        cy.get('.modal').get('.modal-body').get('.circle__step-name > :nth-child(2)')
        cy.get('.modal').get('.modal-body').get('.circle__step-name > :nth-child(3)')
        cy.get('.modal').get('.modal-body').get('#step1');
        cy.get('.modal').get('.modal-body').get('#step2');
        cy.get('.modal').get('.modal-body').get('#step3');
        cy.get('.modal').get('.modal-body').get('.transaction-data').get(':nth-child(1) > .transaction-label > h4');
        cy.get('.modal').get('.modal-body').get('.transaction-data').get(':nth-child(1) > .transaction-value > :nth-child(1)');
        cy.get('.modal').get('.modal-body').get('.transaction-data').get(':nth-child(1) > .transaction-value > :nth-child(2)');
        cy.get('.modal').get('.modal-body').get('.transaction-data').get(':nth-child(2) > .transaction-label > h4')
        cy.get('.modal').get('.modal-body').get('.transaction-data').get(':nth-child(2) > .transaction-value > :nth-child(1)');
        cy.get('.modal').get('.modal-body').get('.transaction-data').get(':nth-child(2) > .transaction-value > :nth-child(2)');
    })
})