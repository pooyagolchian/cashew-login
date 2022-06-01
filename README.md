## Cashwe Auth (Login with MOCK API data)

This project has been developed with the last version of React.js and Redux (Redux toolkit).

- React.js
- Redux toolkit
- Redux presist store
- Typescript
- Cypress for E2E
- React testing library
- Prettier, ESLint, Husky
- Netlify and GithubAction for CI/CD automate testing
- Use login mock data [reqres.in](https://reqres.in/)

---

## DEMO URL

- [DEMO URL](https://cashew-login.netlify.app/)

## Available Scripts

In the project directory, you can run:

### `yarn install`

Install all the dependencies that are needed for developing.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn cypress open`

Cypress is a next-generation front-end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.
This command has been used to run the E2E test with Cypress. I have used cypress for E2E and mock data.

### `yarn build`

- This command builds the application for production.

### `yarn format`

- This command formats all files with Prettier.

### SOLID

Regarding the `S` for `SOLID` I just tried to keep each function(component as a function as well)
just be responsible for a single task. That's why I just created a separate component for every part
and also keep it simple stupid.

### Prettier

Using [Prettier](https://prettier.io/) for opinionated code formatter.
It will take care of the formatting for you.
Prettier creates an abstract syntax tree from your code and uses it to write new code formatted according to a set of rules.
In addition, I check pretty before every commit by adding a pre-commit hook. For more detail check package.json, husky section.

### Husky

Modern native Git hooks made easy. Husky is used for git hook pre-commit to format all code with Prettier.

## Test with React Testing Library

`yarn test`

## Cypress E2E

`yarn cypress open` or `yarn cypress run` (run cypress in command line)

---

### GitHub actions for automated testing

I have used GitHub actions for automated testing and run all Unit Test.
