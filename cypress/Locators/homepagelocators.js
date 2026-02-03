class homepagelocators {
    static getUsernameInput() {
        return cy.get("#user-name")
    }
    static getPasswordInput() {
        return cy.get("#password")
    }
    static getLoginButton() {
        return cy.get("#login-button")
    }
   
}
export default homepagelocators;