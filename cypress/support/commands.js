/* eslint-disable no-undef */

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
import { getUserName, getUserPassword } from '../src/services/userService.js'
import { productPage } from '../src/pages/ProductPage.js'
import { cartPage } from '../src/pages/CartPage.js'

Cypress.Commands.add('loginWithValidCredentials', () => {
    homePage
        .visit()
        .checkPageUrl()
        .header.clickOnLogInButton()
        .loginModal.logInWithCredentials(getUserName(), getUserPassword())
        .header.checkUserName(getUserName())
})

Cypress.Commands.add('addProductToCart', () => {
    homePage.productCard.clickOnProductByName()
    productPage.productDescription.clickAddToCartButton()
    homePage.header.clickCartButton()
    cartPage.cartContent.productIsVisible()
})

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
