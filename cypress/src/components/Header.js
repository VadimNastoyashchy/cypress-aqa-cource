/*global cy*/
export default class Header {
    get logInButton() {
        return cy.get('#login2')
    }

    get logOutButton() {
        return cy.get('#logout2')
    }

    get userName() {
        return cy.get('#nameofuser')
    }

    clickOnLogInButton() {
        this.logInButton.contains('Log in').click()
        return this
    }

    clickOnLogOutButton() {
        this.logOutButton.click()
        return this
    }

    checkUserName(name) {
        this.userName.should('have.text', `Welcome ${name}`)
        return this
    }
}
