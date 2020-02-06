/// <reference types="Cypress" />

Cypress.Commands.add('lighthouse', (url) => {
  cy.exec(`lighthouse ${url} --output json --chrome-flags="--headless"`).then(({ stdout }) => {
    const { categories } = JSON.parse(stdout);
    return Object.keys(categories).reduce((curr, key) => {
      return {
        ...curr,
        [key]: categories[key].score
      }
    }, {});
  });
});