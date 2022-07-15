# Telnyx. Testing website with Cypress

This is a learning project to study Cypress framework.
Website for tests: https://telnyx.com/

- Run Cypress with the following command: npx sypress open
- Testing script: cypress/e2e/telnyx.testing.spec.cy.js
- Pageobjects: cypress/pageobjects/*.page.js
Allure:
- Run the test script by allure: npm run cy:clientLogin
- Create results from the test run and open them in website: npm run report:allure
- Run the scripts and generate the reports: npm run test:allure

For redirection to other site was used the next option in cypress.config.js - chromeWebSecurity: false

Status of Last Deployment:<br>
<img src="https://github.com/Guillermo-Jiotto/LQ-learning-Cypress-Telnyx/workflows/GH-Actions-Cypress-Learning/badge.svg?branch=main"><br>
