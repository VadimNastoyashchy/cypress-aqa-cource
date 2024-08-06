/*global cy*/

import { homePage } from '../pages/HomePage'

class Header {
    get logInButton() {
        return cy.get('#login2')
    }

    get logOutButton() {
        return cy.get('#logout2')
    }

    get userName() {
        return cy.get('#nameofuser')
    }

    get cartButton() {
        return cy.get('#cartur')
    }

    get signUpButton() {
        return cy.get('#signin2')
    }

    clickOnLogInButton() {
        this.logInButton.contains('Log in').click()
        return homePage
    }

    clickOnLogOutButton() {
        this.logOutButton.click()
        return this
    }

    clickOnSignUpButton() {
        this.signUpButton.click()
        return homePage
    }

    checkUserName(name) {
        this.userName.should('have.text', `Welcome ${name}`)
        return this
    }

    clickCartButton() {
        this.cartButton.contains('Cart').click()
    }
}

export const header = new Header()
