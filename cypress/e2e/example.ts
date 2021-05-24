/// <reference path="../support/index.d.ts" />

describe('Cypress TS', () => {
  it('should be able go Google', () => {
    cy.google();
  });

  it('should be able change light/dark theme on willian justen side',()=>{
      cy.visit('https://willianjusten.com.br/');

      cy.findByTitle(/mudar o tema/i).click();
      cy.get('.light').should('exist');

      cy.findByTitle(/mudar o tema/i).click();
      cy.get('.dark').should('exist');


  });
});
