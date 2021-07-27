describe('Counter', () => {
  beforeEach(() => {
    //Seta tamanho de tela para visualização no cypress (descomente a opção abaixo para respectiva visualização)
    //Mobile (iPhone 6/7/8)
    cy.viewport(375, 667);
    //Desktop
    // cy.viewport(1124, 720);
    //Verifica se aplicativo inicializou no index
    cy.visit('/');
  });

  it('Has the correct title', () => {
    cy.title().should('equal', 'Transactions');
  });
});


