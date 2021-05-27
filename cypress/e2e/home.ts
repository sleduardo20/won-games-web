/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should be able render sections', () => {
    //visitar a pagina
    cy.visit('/');

    //selecionou os banners
    cy.get('.slick-slider').within(() => {
      cy.findByRole('heading', { name: /The Witcher 3/i, level: 2} )
      cy.findByRole('link', { name: /buy now/i} )
      
      cy.get('.slick-dots > :nth-child(2) > button').click()
      cy.wait(500)

      cy.findByRole('heading', { name: /Cyberpunk 2077/i, level: 2} )
      cy.findByRole('link', { name: /buy now/i} )

      cy.get('.slick-dots > :nth-child(3) > button').click()
      

      cy.findByRole('heading', { name: /Fallout 3: Game of the Year Edition/i, level: 2})
      cy.findByRole('link', { name: /buy now/i} )
    });
  });
});