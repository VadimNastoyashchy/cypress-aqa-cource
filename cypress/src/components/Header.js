/*global cy*/
export default class Header {
    get logInButton() {
        return cy.get('#login2')
    }

    get logOutButton() {
        return cy.get('#logout2')
    }

    get userNameInHeader() {
        return cy.get('#nameofuser')
    }

    get headerButton() {
        return cy.get('.nav-link')
    }

    clickOnLogInButton() {
        this.logInButton.contains('Log in').click()
        return this
    }

    clickOnLogOutButton() {
        this.logOutButton.click()
        return this
    }

    checkUserName(userName) {
        this.userNameInHeader.should('have.text', `Welcome ${userName}`)
        return this
    }
}
