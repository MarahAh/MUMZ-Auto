/// <reference types="Cypress" />

import generateRandomString from "../support/utils";

describe("mumzworld automated tests", () => {
  beforeEach(() => {
    cy.visit("https://www.mumzworld.com/", { timeout: 240000 });
  });
  it("add to cart -> checkout -> register new user", () => {
    // Step 1: Search for a product (Pampers)
    cy.get('input[type="search"]').type("pampers");
    cy.get('button[title="Submit your search query"]').click();

    // Step 2: Click on the first product link in the search results
    cy.get('a[title="Fine Baby - Diaper Size 6, 16+ kg Junior 144 Diapers"]').eq(0).click();

    // Step 3: Add the product to the cart
    cy.get('button[title="Add to bag"]').click();

    // Step 4: Verify the product has been successfully added to the bag
    cy.contains("Successfully added to bag").should("be.visible");

    // Step 5: Click the "View Bag" button to navigate to the cart
    cy.contains("View Bag").click();

    // Step 6: Increase the product quantity in the cart by 4 (adjusting the quantity)
    for (let i = 0; i < 4; i++) {
      cy.get('button[aria-label="Increase Quantity"]').eq(1).click();
      cy.wait(2000); // Wait 2 seconds between each click to simulate real user interaction
    }

    // Step 7: Proceed to the checkout page
    cy.get('button[title="Proceed to Checkout"]').eq(1).click();

    // Step 8: Click the "Sign up" button to register a new user
    cy.get('button[title="Sign up"]').click();

    // Step 9: Generate random first and last names for registration
    let firstName = generateRandomString(7);
    let lastName = generateRandomString(7);

    // Step 10: Fill in the registration form with the random first name, last name, and email
    cy.get("#create_account_page_firstname").type(firstName);
    cy.get("#create_account_page_lastname").type(lastName);
    cy.get("#create_account_page_email").type(`${firstName}@${lastName}.com`);
    cy.get("#create_account_page_password").type("Test@123"); // Input a predefined password

    // Step 11: Click the "Register" button to submit the form
    cy.get('button[title="Register"]').eq(2).click();

    // Step 12: Verify the user has been taken to the secure checkout page
    cy.contains("Secure checkout").should("be.visible");
});
})
