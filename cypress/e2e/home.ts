/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should be able render sections', () => {
    
    cy.visit('/');
    
    cy.shouldRenderBanner();
    cy.shouldRenderShowCase({ name:"New Games", highlight: false });
    cy.shouldRenderShowCase({ name:"Popular Games", highlight: true });
    cy.shouldRenderShowCase({ name:"Upcoming Games", highlight: true });
    cy.shouldRenderShowCase({ name:"Free Games", highlight: true });

  });
});