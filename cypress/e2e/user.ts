/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate';

describe('User', () => {
  it('should sign up', () => {
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

  it('should be able sign in the user and redirect to the page that it was defined previously', () => {
    cy.visit('/profile/me');

    //redirecionando para o sing in com a callbackUrl do profile/me
    cy.location('href').should('eq', `${Cypress.config().baseUrl}sign-in?callbackUrl=/profile/me`);

    //fazer o sign in
    cy.signIn();

    //espero ser redirecionado para o profile/me
    cy.location('href').should('eq', `${Cypress.config().baseUrl}profile/me`);

    cy.findByLabelText(/username/i).should('have.value', 'User01');
    cy.findByLabelText(/e-mail/i).should('have.value', 'user01@example.com');
  });
});