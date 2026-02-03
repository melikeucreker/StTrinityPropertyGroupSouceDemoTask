class inventoryLocators {
    static sauceLabcPackbackItemAddToCart() {
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }
    static shoppingCartBadge() {
        return cy.get('[data-test="shopping-cart-badge"]')
    }
    static removeButton() {
        return cy.get('[data-test="remove-sauce-labs-backpack"]')
    }
} export default inventoryLocators;

