describe('Filter actions', () => {
  it('Fill transitions with Status (created)', () => {
    cy.get('#slct')
      .select('Status')
      .get('.filter-content')
      .get('.filter-text > #slct')
      .select('Criado').get('.btn-search').click().then(() => {
        it('Fill transitions with Name (internal movement)', () => {
          setTimeout(() => {
            cy.get('#slct')
              .select('Nome')
              .get('.filter-content')
              .get('.input')
              .type('movimentacao interna')
              .get('.btn-search')
              .click();
          }, 3000);
        });
      });
  });

  
})

describe('View transaction details', () => {
  it('View first transaction details', () => {
    // setTimeout(() => {
    cy.get('.transaction-table-content')
      .get(':nth-child(1) > .td-title')
      .click();
    // }, 10000);
  });
});

