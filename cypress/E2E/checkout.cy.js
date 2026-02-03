import inventoryLocators from '../Locators/inventoryLocators';
import checkoutLocators from '../Locators/checkoutLocators';
import { randomData } from '../support/randomData';
import { injectUserSession } from '../fixtures/loginSession';

describe('Checkout Flow with Add-to-Cart Validation', () => {

    beforeEach(() => {
        cy.viewport(1280, 800);
        injectUserSession();
        cy.url().should('include', '/inventory.html');
    });

    it('should validate add-to-cart button , remove Button and complete checkout successfully', () => {
        const firstName = randomData.randomString();
        const lastName = randomData.randomString();
        const zip = randomData.randomZip();

        // 1️⃣ Step: Add to cart button click & validate
        Cypress.log({ name: 'STEP', message: 'Click Add-to-Cart and validate button' });
        inventoryLocators.sauceLabcPackbackItemAddToCart()
            .click();


        inventoryLocators.removeButton()
            .should('be.visible')
            .and('have.text', 'Remove')
            .and('have.css', 'color', 'rgb(226, 35, 26)');

        // 2️⃣ Step: Go to cart
        Cypress.log({ name: 'STEP', message: 'Go to shopping cart' });
        cy.get('.shopping_cart_link').click();

        // 3️⃣ Step: Start checkout
        Cypress.log({ name: 'STEP', message: 'Start checkout process' });
        checkoutLocators.checkOutButton().click();

        // 4️⃣ Step: Fill in checkout information
        Cypress.log({ name: 'STEP', message: 'Fill in user information for checkout' });
        checkoutLocators.firstNameInput().type(firstName);
        checkoutLocators.lastNameInput().type(lastName);
        checkoutLocators.postalCodeInput().type(zip);

        // 5️⃣ Step: Continue and finish checkout
        Cypress.log({ name: 'STEP', message: 'Continue and finish checkout' });
        checkoutLocators.continueButton().click();
        checkoutLocators.finishButton().click();

        // 6️⃣ Step: Validate success message
        Cypress.log({ name: 'STEP', message: 'Validate order success message' });
        checkoutLocators.successMessage()
            .should('contain', 'Thank you for your order');
    });

});
