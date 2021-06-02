/// <reference path="../support/index.d.ts" />

import { priceFields, 
        platformFields, 
        sortFields, 
        genresFields } from '../../src/utils/filter/fields';

describe('Explore Page', () => {
  before(() => {
    cy.visit('/games');
  });

  it('should be able filters columns', () => {
    cy.findByRole('heading', { name: /sort by price/i }).should('exist');
    cy.findByRole('heading', { name: /^price/i }).should('exist');
    cy.findByRole('heading', { name: /platforms/i }).should('exist');
    cy.findByRole('heading', { name: /genres/i }).should('exist');

    cy.getFields(priceFields);
    cy.getFields(platformFields);
    cy.getFields(sortFields);
    cy.getFields(genresFields);
  });

  it('should be able show 15 games and show more games when more is cliked', () => {
    cy.getByDataCy('game-card').should('have.length', 9);

    cy.findByRole('button', { name: /show more/i}).click();

    cy.getByDataCy('game-card').should('have.length', 24);
  });

  it('should be able order by price', () => {
    cy.findByText(/Lowest to highest/i).click();

    //deve conter ?sort=price%3Aasc na url do navegador
    cy.location('href').should('contain', '?sort=price%3Aasc');
    cy.getByDataCy('game-card').first().within(() => {
      cy.findByText('$0.00').should('exist');
    });

    cy.findByText(/Highest to lowest/i).click();

    cy.location('href').should('contain', '?sort=price%3Adesc');

    cy.getByDataCy('game-card').first().within(() => {
      cy.shouldBeGreaterThan(0);
    });
  });

  it('should be able filter by price', () => {
    cy.findByText(/Highest to lowest/i).click();

    cy.findByLabelText(/free/i).click();

    cy.location('href').should('contain', 'price_lte=0');
    
    cy.getByDataCy('game-card').first().within(() => {
      cy.findByText('$0.00').should('exist');
    });

    cy.findByLabelText('Under $50').click();
    cy.location('href').should('contain', 'price_lte=50');
    cy.getByDataCy('game-card').first().within(() => {
      cy.shouldBeLessThan(50);
    });

    cy.findByLabelText('Under $100').click();
    cy.location('href').should('contain', 'price_lte=100');
    cy.getByDataCy('game-card').first().within(() => {
      cy.shouldBeLessThan(100);
    });

    cy.findByLabelText('Under $150').click();
    cy.location('href').should('contain', 'price_lte=150');
    cy.getByDataCy('game-card').first().within(() => {
      cy.shouldBeLessThan(150);
    });

    cy.findByLabelText('Under $250').click();
    cy.location('href').should('contain', 'price_lte=250');
    cy.getByDataCy('game-card').first().within(() => {
      cy.shouldBeLessThan(250);
    });

    cy.findByLabelText('Under $500').click();
    cy.location('href').should('contain', 'price_lte=500');
    cy.getByDataCy('game-card').first().within(() => {
      cy.shouldBeLessThan(500);
    });
  });

  it('should be able filter by platform and genre', () => {
    cy.findByText(/windows/i).click();
    cy.location('href').should('contain', 'platforms=windows')
    
    cy.findByText(/linux/i).click();
    cy.location('href').should('contain', 'platforms=linux')
    
    cy.findByText(/mac os/i).click();
    cy.location('href').should('contain', 'platforms=mac');
    
    cy.findByText(/action/i).click();
    cy.location('href').should('contain', 'categories=action');
  
  });
  
  it('should be able empty when no games match', () => {
    cy.visit('/games');

    //grupo que sabemos que nao tem jogos
    cy.findByText(/free/i).click();
    cy.findByText(/linux/i).click();
    cy.findByText(/sports/i).click();

    cy.getByDataCy('game-card').should('not.exist');
    cy.findByText(`We didn't find any games this filter`).should('exist');

  });
});