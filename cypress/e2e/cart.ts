/// <reference path="../support/index.d.ts" />

describe('Cart',() => {
  it('should be able add and remove from cart',() => {
    //vistar a home
    cy.visit('/');

    //procurar um jogo e clicar no botao do carrinho
    cy.getByDataCy('game-card').eq(0).within(() => {
      cy.findByRole('button', { name: /add to cart/i}).click();
    })


    //procurar outro jogo e clicar no botao do carrinho
    cy.getByDataCy('game-card').eq(1).within(() => {
      cy.findByRole('button', { name: /add to cart/i}).click();
    })

    //verificar se o icone tem o numero de jogos
    cy.findAllByLabelText(/cart items/i).first().should('have.text', 2);

    //abre o carrinho e verifica se tem os jogos
    cy.findAllByLabelText(/cart items/i).first().should('have.text', 2).click();
    cy.getByDataCy('cart-list').within(() => {
      cy.findAllByRole('heading').should('have.length', 2);
    })

    //fecha o carrinho
    cy.findAllByLabelText(/cart items/i).first().should('have.text', 2).click();

    //procura pelos jogos adicionados e remover
    cy.getByDataCy('game-card').eq(0).within(() => {
      cy.findByRole('button', { name: /remove from cart/i}).click();
    });
    cy.getByDataCy('game-card').eq(1).within(() => {
      cy.findByRole('button', { name: /remove from cart/i}).click();
    });

    //verifica o icone do carrinho para não ter jogos
    cy.findAllByLabelText(/cart items/i).should('not.exist');

    //abre o carrinho
    cy.findAllByLabelText(/shopping cart/i).first().click();
    
    //verificar se o carrinho está vazio
    cy.findByRole('heading', { name: /your cart is empty/i}).should('exist');
    
  });
});