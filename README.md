# Cypress Lighthouse Plugin
Cypress Lighthouse Plugin is a lighthouse plugin that adds the `cy.lighthouse` command to audit websites against the lighthouse performance metrics. 
## Installation
Use npm or yarn to install cypress-lighthouse
```
npm install cypress-lighthouse
```
```
yarn add cypress-lighthouse
```

Import the commands at the top of your test file. 
```
import 'cypress-lighthouse';
```

## API
### Syntax
```javascript
.lighthouse(url)
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