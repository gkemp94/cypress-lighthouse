/// <reference types="cypress" />

interface LighthouseResult {
  performance: Number;
  accessibility: Number;
  "best-practices": Number;
  seo: Number;
  pwa: Number;
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Perform an audit on a page
     * @example
     * cy.lighthouse('https://google.com').then(results => {
     *   console.log(results);
     * })
     */
    lighthouse(url: String): Chainable<LighthouseResult>
  }
}