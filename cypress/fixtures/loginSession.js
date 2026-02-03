
import { credentials } from './credentials';
import homepagelocators from '../Locators/homepagelocators';

export function injectUserSession() {
    cy.visit('/');


    homepagelocators.getUsernameInput().type(credentials.username);
    homepagelocators.getPasswordInput().type(credentials.password);


    homepagelocators.getLoginButton().click();

    cy.window().then((window) => {
        window.localStorage.setItem('session-username', credentials.username);
        cy.setCookie('session-username', credentials.username);
    });
}

