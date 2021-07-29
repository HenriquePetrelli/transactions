
describe("Start App", () => {
  beforeEach(() => {
    //Mobile (iPhone 6/7/8)
    // cy.viewport(375, 667);

    //Desktop
    cy.viewport(1124, 720);
    
    //Inicializa aplicação pelo index
    cy.visit("https://transactions-warren.netlify.app/");
  });

  it('Correct title', () => {
     //Verifica se titulo da aplicação está igual ao informado
    cy.title().should('equal', 'Transactions');
  });
});
