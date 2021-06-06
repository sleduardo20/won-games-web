/// <reference path="../support/index.d.ts" />

import { createUser, User } from "../support/generate";

describe('Checkout', () => {
  let user: User;
  describe('Free Games', () => {
    before(() => {
      user = createUser();
    });

    it('should be able buy free games', () => {
      //criar um usuario
      cy.visit('/sign-up');
      cy.signUp(user);
      cy.url().should('eq', `${Cypress.config().baseUrl}`);

      // //ir para explore page
      cy.findByRole('link', { name: /explore/i }).click();

      
      cy.url().should('eq', `${Cypress.config().baseUrl}games`);

      // //filtrar por jogos free
      cy.findByText(/free/i).click();
      cy.url().should('contain', 'price_lte=0');

      // //adicionar um jogo free
      cy.addToCart(0)

      // //verificar se o carrinho tem o jogo free e abrir o dropdown
      cy.findAllByLabelText(/cart items/i).first().should('have.text', 1).click();

      // //clicar para fazer a compra
      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/buy it now/i).click();
      });

      //encontrar um texto de só jogos free
      cy.findByText(/only free games/i).should('exist');

      //clicar em comprar
      cy.findByRole('button', {name: /Buy Now/i}).click();
  
      //redirecionar para pagina de success
      cy.url().should('eq', `${Cypress.config().baseUrl}success`);
        
      //mostrar o texto de sucesso
      cy.findByRole('heading',{ name: /Your purchase was successful!/i }).should('exist');
    });

    it('should show games in order page', () => {
      cy.visit('/profile/orders');
      cy.location('href').should('eq', `${Cypress.config().baseUrl}sign-in?callbackUrl=/profile/orders`);

      cy.signIn(user.email, user.password);
      cy.location('href').should('eq', `${Cypress.config().baseUrl}profile/orders`);
      cy.getByDataCy('game-item').should('have.length', 1);

    });


  });
  
  describe('Paid Games', () => {

  });
});
