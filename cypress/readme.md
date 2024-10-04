# Cypress Test: Add to Cart, Checkout, and Register New User

This is an automated test using Cypress that performs the following steps:
1. Searches for a product.
2. Adds the product to the cart.
3. Increases the product quantity in the cart.
4. Proceeds to checkout.
5. Registers a new user.
6. Verifies the secure checkout page after registration.

## Prerequisites

Ensure you have the following installed:
1. Node.js (version 12 or higher)**:
   - Download and install Node.js from the official website: [Node.js](https://nodejs.org/).
   - Alternatively, you can install it using the command line:
   ```bash
   # For macOS and Linux:
   brew install node

   # For Ubuntu/Debian-based systems:
   sudo apt install nodejs
   sudo apt install npm

2. [Cypress] (version 9 or higher)**:
  - Download and install Cypress from the website:[Cypress](https://www.cypress.io/)
  - you can install it using the command line:
   ```bash
   npm install cypress --save-dev
   ```

## Installation and Setup
1. Place the test code into a Cypress project folder.
2. Install dependencies by running:
    ```bash
    npm install
    ```

## Running the Test

### Run in Cypress Test Runner:
To open the Cypress Test Runner, use:
  ```bash
  npx cypress open
  ```