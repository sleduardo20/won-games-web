/// <reference path="../support/index.d.ts" />

describe('Cart',() => {
  it('should be able add and remove from cart',() => {
    //vistar a home
    cy.visit('/');

    //procurar um jogo e adicionar no carrinho
    cy.addToCart(0);
    cy.addToCart(1);
    cy.addToCart(2);

    //verificar se o icone tem o numero de jogos
    cy.findAllByLabelText(/cart items/i).first().should('have.text', 3);

    //abre o carrinho e verifica se tem os jogos
    cy.findAllByLabelText(/cart items/i).first().should('have.text', 3).click();
    cy.getByDataCy('cart-list').within(() => {
      cy.findAllByRole('heading').should('have.length', 3);
    })

    //fecha o carrinho
    cy.findAllByLabelText(/cart items/i).first().should('have.text', 3).click();

    //procura pelos jogos adicionados e remover do carrinho
    cy.removeFromCart(0);
    cy.removeFromCart(1);
    cy.removeFromCart(2);

    //verifica o icone do carrinho para não ter jogos
    cy.findAllByLabelText(/cart items/i).should('not.exist');

    //abre o carrinho
    cy.findAllByLabelText(/shopping cart/i).first().click();
    
    //verificar se o carrinho está vazio
    cy.findByRole('heading', { name: /your cart is empty/i}).should('exist');
    
  });
});