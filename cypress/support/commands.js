// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
import { homePage } from '../src/pages/HomePage.js'
import { getUserName, getUserPassword } from '../src/userService.js'

Cypress.Commands.add('loginWithValidCredentials', () => {
    homePage
        .visit()
        .checkPageUrl()
        .header.clickOnLogInButton()
        .loginModal.logInWithCredentials(getUserName(), getUserPassword())
        .header.checkUserName(getUserName());
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
