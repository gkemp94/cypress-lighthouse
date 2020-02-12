# Cypress Lighthouse Plugin

accessibilityCypress Lighthouse Plugin is a cypress plugin that adds the `cy.lighthouse()` command to audit websites against the lighthouse performance metrics. The command runs performance, accessibility, best practices, seo and progressive web app tests using Google's [Lighthouse](https://github.com/GoogleChrome/lighthouse) Tool and returns an object with a score out of 1 for each category.

## Installation

Use npm or yarn to install cypress-lighthouse

```shell
npm install cypress-lighthouse
```

```shell
yarn add cypress-lighthouse
```

Import the commands in your `support/index.js` file. 

```javascript
import 'cypress-lighthouse';
```

## API

### Syntax

```javascript
cy.lighthouse(url)
```

### Usage

```javascript
describe('Performance Metrics for https://google.com', () => {
  before(function () {
    cy.lighthouse('https://google.com').as('results')
  });
  
  it('Meets performance benchmarks', function () {
    // Assert that the performance metric is greater than .85
    cy.wrap(this.results.performance).should('be.gt', .85);
  })
});
```

### Arguments

**url *(string)***  

Any valid URL.

### Yields

A chaining component with the results of the lighthouse audit.

Example: 

```json
{
  "performance": 0.16, 
  "accessibility": 0.72, 
  "best-practices": 0.79, 
  "seo": 0.92, 
  "pwa": 0.3
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
