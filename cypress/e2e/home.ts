/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should be able render sections', () => {
    
    cy.visit('/');
    
    cy.shouldRenderBanner();
  });
});