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

Cypress.Commands.add('getByDataCy', (selector, ...args) => {
  return cy.get(`[data-cy=${selector}]`,...args);
});

Cypress.Commands.add('shouldRenderBanner', () => {
    
  //selecionou os banners
    cy.get('.slick-slider').within(() => {
      cy.findByRole('heading', { name: /MechWarrior 5: Mercenaries/i, level: 2} )
      cy.findByRole('link', { name: /buy now/i} );
      
      cy.get('.slick-dots > :nth-child(2) > button').click();
      cy.wait(500);

      cy.findByRole('heading', { name: /Necromunda: Hired Gun/i, level: 2} )
      cy.findByRole('link', { name: /buy now/i} );

      cy.get('.slick-dots > :nth-child(3) > button').click();
      

      cy.findByRole('heading', { name: /Solasta: Crown of the Magister/i, level: 2})
      cy.findByRole('link', { name: /buy now/i} );
    });
});

Cypress.Commands.add('shouldRenderShowCase', ({ name, highlight = false }) => {
    
  cy.getByDataCy(`"${name}"`).within(() => {
    cy.findByRole('heading', { name }).should('exist');

    cy.getByDataCy('highlight').should( highlight ? 'exist' : 'not.exist');

    if (highlight) {
      cy.getByDataCy('highlight').within(() => {
        cy.findByRole('link').should('have.attr', 'href')
      });
    }

  cy.getByDataCy("game-card").should('have.length.gt', 0);
  });
});
