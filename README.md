<p align="center">
  <a href="https://www.cypress.io">
    <picture>
      <source media="(prefers-color-scheme: dark)"  srcset="./cypress_logo/cypress-logo-dark.png">
      <source media="(prefers-color-scheme: light)" srcset="./cypress_logo/cypress-logo-light.png">
      <img alt="Cypress Logo" src="./assets/cypress-logo-light.png">
    </picture>    
  </a>
</p>

<h3 align="center">
Cypress automation tests
</h3>

<p align="center">
  <a href="https://www.cypress.io/">
    <img src="https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg" alt="Cypress"/>
  </a>
  <a href="https://github.com/filo3of/ClickUp/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License"/>
  </a>
  <br />
</p>

## Getting started

This project will hold end to end automated frontend and API tests for the [ClickUp](https://clickup.com/) website.

For the e2e frontend tests we are using Cypress. If you want to know more about Cypress visit [official site](https://www.cypress.io/) and check [documentation](https://docs.cypress.io/guides/overview/why-cypress).

## How to setup project locally

- Install Node.js (latest LTS version).
- Install VS code.
- Clone the project repository.
- Open VS code and navigate to the project repository.
- In VS code terminal run:

```
npm install
```

- After all dependencies are installed, in VS code terminal run:

```
npx cypress open
```

This will run Cypress for the first time and verify that everything is installed correctly.

- Close the Cypress by pressing CTRL+C in VS code terminal.

## How to run tests

- In order to run the test through Test Runner (Cypress GUI), and to get options to choose the browser in which the tests are going to run in the VS code terminal run:

```
npx cypress open
```

- In order to run the tests in a headless Electron browser run:

```
npx cypress run
```

- In order to run the tests in Test Runner directly on Chrome run:

```
npm run cy:open
```

- In order to run the tests in a headless Chrome browser run:

```
npm run cy:run
```

- More info about scripts you can find in "package.json" file.

## NOTE

Create .env file and add your own user credentials as it is shown in example .env file

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
