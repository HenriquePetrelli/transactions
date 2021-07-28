describe('Check DOM elements', () => {
    it('Navbar Component', () => {
        cy.get('.icon-filter');
        cy.get('.icon-reload');
        cy.get('.nav-bar').get('.logo');
        cy.get('.filter-label > h4').contains('Selecione as opções de filtro');
    })
    
    it('Filter Component', () => {
        cy.get('.filter-label > h4').contains('Selecione as opções de filtro');
        cy.get('#slct');
        cy.get('.btn-search');
        cy.get('.btn-clean');
    })

    it('Transaction List Component', () => {
        cy.get(' .transaction-table-title > :nth-child(1)').contains('Título');
        cy.get(' .transaction-table-title > :nth-child(2)').contains('Descrição');
        cy.get(' .transaction-table-title > :nth-child(3)').contains('Status');
        cy.get(' .transaction-table-title > :nth-child(4)').contains('Valor');
        cy.get('.transaction-table-content');
    })

    it('Transaction Details Component', () => {
        cy.get('.modal').get('.modal-body').get('h1');
        cy.get('.modal').get('.modal-body').get('.close-btn');
        cy.get('.modal').get('.modal-body').get('.circle__step-name > :nth-child(1)').contains('Solicitado');
        cy.get('.modal').get('.modal-body').get('.circle__step-name > :nth-child(2)').contains('Processando');
        cy.get('.modal').get('.modal-body').get('.circle__step-name > :nth-child(3)').contains('Concluído');
        cy.get('.modal').get('.modal-body').get('#step1');
        cy.get('.modal').get('.modal-body').get('#step2');
        cy.get('.modal').get('.modal-body').get('#step3');
        cy.get('.modal').get('.modal-body').get('.transaction-data').get(':nth-child(1) > .transaction-label > h4').contains('Transferindo de');
        cy.get('.modal').get('.modal-body').get('.transaction-data').get(':nth-child(1) > .transaction-value > :nth-child(1)');
        cy.get('.modal').get('.modal-body').get('.transaction-data').get(':nth-child(1) > .transaction-value > :nth-child(2)');
        cy.get('.modal').get('.modal-body').get('.transaction-data').get(':nth-child(2) > .transaction-label > h4').contains('Para');
        cy.get('.modal').get('.modal-body').get('.transaction-data').get(':nth-child(2) > .transaction-value > :nth-child(1)');
        cy.get('.modal').get('.modal-body').get('.transaction-data').get(':nth-child(2) > .transaction-value > :nth-child(2)');
    })
})