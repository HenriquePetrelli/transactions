describe('App', () => {
  beforeEach(() => {
    //Seta tamanho de tela para visualização no cypress (descomente a opção abaixo para respectiva visualização)

    //Mobile (iPhone 6/7/8)
    // cy.viewport(375, 667);
    //Desktop
    cy.viewport(1124, 720);

    //Inicializa aplicação pelo index
    cy.visit('/');
  });

  //Verifica se titulo da aplicação está igual ao informado
  it('Correct title', () => {
    cy.title().should('equal', 'Transactions');
  });
});


