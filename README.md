# Automation Testing Repo

This project is set up with the following tools:

- **ESLint** → To enforce consistent coding style and detect code issues early.
- **Prettier** → To automatically format code and keep it clean and readable.
- **Playwright (JavaScript)** → For end-to-end UI Automation.

## Purpose

The goal of this setup is to maintain a clean and standardized codebase while automating tests effectively.

# Automation Challenges

This repository contains two challenges:

- **Challenge 1** → Reverse words in a string
- **Challenge 2** → Amazon automation test

## How to Run

# Challenges

-Challenge 1
File: `challenge1/challenge.js`  
Run it with:

```bash
cd challenge1
node challenge.js
or directly from package.json file (challengeOne)

-Challenge 2
File: `tests\amazon.spec.js`
directly from package.json file (testAmazon)
or write in terminal npx playwright test --project=chromium --headed amazon.spec.js
and to show the report npx playwright show-report  or directly from package.json (reportHtml)

```
