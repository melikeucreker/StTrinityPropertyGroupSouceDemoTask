class checkoutLocators {
    static checkOutButton() {
        return cy.get('[data-test="checkout"]')
    }
    static firstNameInput() {
        return cy.get('[data-test="firstName"]')
    }
    static lastNameInput() {
        return cy.get('[data-test="lastName"]')
    }
    static postalCodeInput() {
        return cy.get('[data-test="postalCode"]')
    }
    static continueButton() {
        return cy.get('[data-test="continue"]')
    }
    static finishButton() {
        return cy.get('[data-test="finish"]')
    }
    static successMessage() {
        return cy.get('[data-test="complete-header"]')
    }
   
}
export default checkoutLocators;