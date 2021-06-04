/// <reference path="../support/index.d.ts" />

describe('Forgot Password', () => {
  it('should be able fill the input and revice a success message', () => {
    //intercepta qualquer chamada e responde um sucesso
    cy.intercept('POST', '**/auth/forgot-password', res => {
      res.reply({
        statusCode: 200,
        body: {ok: true},
      })

      expect(res.body.email).to.eq('user01@example.com')
    });

    cy.visit('/forgot-password');

    cy.findByPlaceholderText(/email/i).type('user01@example.com');
    cy.findByRole('button', {name: /Send email/i}).click();

    //espera receber uma mensagem de sucesso
    cy.findByText(/You just received an email!/i).should('exist');
  });

  it('should fill the input with an invalid email receive an error', () => {
    //intercepta a chamada e retorna um erro
    cy.intercept('POST', 'http://localhost:1337/auth/forgot-password', res => {
      res.reply({
        statusCode: 400,
        body: {
          error: 'Bad Request',
          message: [
            {
              messages: [
                {
                  message: 'This email does not exist'
                }
              ]
            }
          ]
        }
      })
    })

    cy.visit('/forgot-password')

    cy.findAllByPlaceholderText(/email/i).type('ci@wongames.com')
    cy.findByRole('button', { name: /send email/i }).click()

    // eu espero receber a mensagem de sucesso
    cy.findByText(/This email does not exist/i).should('exist')
  });
});