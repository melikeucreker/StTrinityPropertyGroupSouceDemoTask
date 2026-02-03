import inventoryLocators from '../Locators/inventoryLocators';
import checkoutLocators from '../Locators/checkoutLocators';
import { randomData } from '../support/randomData';
import { injectUserSession } from '../fixtures/loginSession';

describe('Mobile Checkout Flow', () => {

    beforeEach(() => {
        cy.viewport(390, 844);
        injectUserSession();
        cy.url().should('include', '/inventory.html');
    });

    it('should complete checkout successfully on mobile', () => {
        const firstName = randomData.randomString();
        const lastName = randomData.randomString();
        const zip = randomData.randomZip();

        inventoryLocators.sauceLabcPackbackItemAddToCart().click();
        cy.get('.shopping_cart_link').click();

        checkoutLocators.checkOutButton().click();
        cy.wait(500);
        checkoutLocators.firstNameInput().type(firstName);

        checkoutLocators.lastNameInput().type(lastName);
        checkoutLocators.postalCodeInput().type(zip);

        checkoutLocators.continueButton().click();
        checkoutLocators.finishButton().click();

        checkoutLocators.successMessage()
            .should('contain', 'Thank you for your order');

    });

});
