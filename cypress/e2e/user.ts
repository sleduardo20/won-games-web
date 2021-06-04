/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate';

describe('User', () => {
  it.skip('should sign up', () => {
    const user = createUser();
    cy.visit('/sign-up');
    cy.signUp(user);
    cy.findByRole('button', { name: /CRIAR CONTA/i }).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}`);
    cy.findByText(user.username).should('exist');
  });

  it('should be able sign in and sign out', () => {
    cy.visit('/sign-in');

    cy.signIn();

    cy.url().should('eq', `${Cypress.config().baseUrl}`);
    
    cy.findByText('User01').should('exist').click();
    cy.findByText(/sign out/i).click();

    cy.findByRole('link', { name: /sign in/i }).should('exist');
    cy.findByText('User01').should('not.exist');
  });
});