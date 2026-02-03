# Project SpeedLabs - Cypress Automation

## Setup

Install dependencies:

npm install

Run tests:

npx cypress open

or headless:

npx cypress run

---

## Architecture

- Cypress + JavaScript
- Programmatic login via localStorage injection
- Page Object pattern(POM)
- Robust data-test selectors
- Randomized test data
- Mobile + visual assertions

---

## Programmatic Login

The suite bypasses the login UI by injecting:

localStorage.setItem('session-username', 'standard_user')

This allows tests to start directly at:

/inventory.html

This reduces execution time and improves CI stability.

Login UI is tested separately.

---

## CI

GitHub Actions runs the suite on every push.
Artifacts (videos) are stored after execution.

---

## Tests Covered

- Checkout flow
- Visual button state change
- Mobile responsive checkout
- Session injection login
# StTrinityPropertyGroupSouceDemoTask
