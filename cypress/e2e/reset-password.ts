/// <reference path="../support/index.d.ts" />

describe('Reset Password', () => {
  it('should be able show error if password does not match', () => {
    cy.visit('/reset-password?code=asdfa123');

    cy.findAllByPlaceholderText(/^password/i).type('123');
    cy.findAllByPlaceholderText(/^confirm password/i).type('123456');

    cy.findByRole('button', { name: /reset password/i}).click();

    cy.findByText(/confirm password does not match with password/i).should('exist');
  });
  
  it('should be able show message error if code is invalid', () => {
    cy.intercept('POST','**/auth/reset-password', res => {
      res.reply({
        statusCode: 400,
        body: {
          error: 'Bad Request',
          message: [
            {
              messages: [
                {
                  message: 'Incorrect code provided'
                }
              ]
            }
          ]
        }
      });
    });
    
    
    cy.visit('/reset-password?code=wrong_code');

    cy.findAllByPlaceholderText(/^password/i).type('123456');
    cy.findAllByPlaceholderText(/^confirm password/i).type('123456');

    cy.findByRole('button', { name: /reset password/i}).click();

    cy.findByText(/Incorrect code provided/i).should('exist');
  });

  it.only('should be able the input and redirect to the home page with the user signed in', () => {
    //acessar a pagina de reset
    
    //rota do back-end
    cy.intercept('POST', '**/auth/reset-password', res => {
      res.reply({
        statusCode: 200,
        body: {
          user: {
            email: 'user01@example.com',
          }
        }
      });
    });

    //rota do credentials do next-auth
    cy.intercept('POST','**/auth/callback/credentials*', {
      statusCode: 200,
      body:{
        user: {
          email: 'user01@example.com',
        },
      },
    });

    //rota de session do next-auth
    cy.intercept('GET','**/auth/session*', {
      statusCode: 200,
      body:{
        user: {
          name: 'user01',
          email: 'user01@example.com',
        },
      },
    });

    //preencher a senha com o token valido
    cy.visit('/reset-password?code=valid_code');

    cy.findAllByPlaceholderText(/^password/i).type('123456');
    cy.findAllByPlaceholderText(/^confirm password/i).type('123456');
    cy.findByRole('button', { name: /reset password/i}).click();

    //fazer o sign in
    //redirecionar para a home page
    cy.url().should('eq', `${Cypress.config().baseUrl}`);
    
    //usuario logado
    cy.findByText(/user01/).should('exist');
  });

});