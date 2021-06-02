/// <reference path="../support/index.d.ts" />

describe('Game', () => {
  before(() => {
    cy.visit('/game/cyberpunk-2077');
  });

  it('should be able render page sections', () => {
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('heading', { name: /Cyberpunk 2077/i }).should('exist');
      cy.findByText(/^Cyberpunk 2077 is an open-world/i).should('exist');
      cy.findByText('$199.90').should('exist');
      cy.findByRole('button', { name: /add to cart/i}).should('exist');
    });

    //gallery
    //Deve existir mais de 0 botões com que começa com o nome Thumb
    cy.findAllByRole('button', { name: /Thumb \-/i }).should('have.length.gt', 0);

    //content
    cy.getByDataCy('content').within(() => {
      cy.findByRole('heading', { name: /description/i}).should('exist');
    });
    
    //Deve ter pelo menos dois elementos filhos no content
    cy.getByDataCy('content').children().should('have.length.at.least', 2);

    //Game Details
    cy.getByDataCy('game-details').within(() => {
      cy.findByRole('heading', { name: /game details/i}).should('exist');
      cy.findByRole('heading', { name: /developer/i}).should('exist');
      cy.findByRole('heading', { name: /release date/i}).should('exist');
      cy.findByRole('heading', { name: /platforms/i}).should('exist');
      cy.findByRole('heading', { name: /publisher/i}).should('exist');
      cy.findByRole('heading', { name: /Rating/i}).should('exist');
      cy.findByRole('heading', { name: /Genres/i}).should('exist');

      cy.findByText(/CD PROJEKT RED/i).should('exist');
      cy.findByText(/Dec 8, 2020/i).should('exist');
      cy.findByText(/Gratuito/i).should('exist');
      cy.findByText("Role-playing / Action / Sci-fi").should('exist');
      cy.findByText(/CD PROJEKT RED/i).should('exist');
      cy.findByRole('img', { name: /windows/i}).should('exist');

    });

    cy.shouldRenderShowCase({name: "Upcoming Games", highlight: true});
    cy.shouldRenderShowCase({name: "Recommended Games", highlight: false});
    

  });

  it('should be able add/remove game in cart', () => {
    cy.getByDataCy('game-info').within(() => {
      
      cy.findByRole('button', { name: /add to cart/i}).click();
      cy.findByRole('button', { name: /remove from cart/i}).should('exist');
    });

    cy.findAllByLabelText(/cart items/i).first().should('have.text', 1).click();

    cy.getByDataCy('cart-list').within(() => {
      cy.findByRole('heading', { name: /cyberpunk 2077/i}).should('exist');
    });

    //close dropdown
    cy.findAllByLabelText(/cart items/i).first().click();

    //remove from cart
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('button', { name: /remove from cart/i}).click();
      cy.findByRole('button', { name: /add to cart/i}).should('exist');
    });

    cy.findAllByLabelText(/cart items/i).should('not.exist');
    
  });
});