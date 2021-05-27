// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Add Testing Library React
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('google', () => cy.visit('https://www.google.com'));

Cypress.Commands.add('shouldRenderBanner', () => {
    
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
})
