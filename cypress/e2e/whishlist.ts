/// <reference path="../support/index.d.ts" />

describe('Whishlist', () => {
  it('should be able add and remove games from wishlist', () => {
    //acessar a pagina da wishlist não logado
    cy.visit('/wishlist');

    //redirecionar para fazer o login
    cy.signIn();

    //verificar se a wishlist esta vazia
    cy.findByText(/Games added to your wishlist will appear here/i).should('exist');

    //add um jogo na wishlist
    cy.addToWishlist(0)
            
    //verificar se o jogo está na wishlist
    cy.getByDataCy('wishlist').within(()=> {
      cy.getByDataCy('game-card').should('have.length', 1);
    });

    //remover o jogo da wishlist
    cy.removeFromWishlist(0)
        
    //verificar se a wishlist esta vazia
    cy.findByText(/Games added to your wishlist will appear here/i).should('exist');
  });
});