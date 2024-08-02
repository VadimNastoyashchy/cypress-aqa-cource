/*globals cy*/
import BaseModal from './BaseModal'

export default class LogInModal extends BaseModal {
    constructor() {
        super('.modal-dialog')
    }

    get inputUserNameField() {
        return cy.get(`${this.body.BODY_CONTAINER} #loginusername`)
    }

    get inputPasswordField() {
        return cy.get(`${this.body.BODY_CONTAINER} #loginpassword`)
    }

    enterEmail(userName) {
        this.inputUserNameField
            .should('be.visible')
            .clear()
            .type(userName, { force: true })
        return this
    }

    enterPassword(password) {
        this.inputPasswordField
            .should('be.visible')
            .clear()
            .type(password, { force: true })
        return this
    }

    clickOnLogInButton() {
        this.footer.modalFooterButton.contains('Log in').click()
    }

    logInWithCredentials(username, password, homePage) {
        this.enterEmail(username).enterPassword(password).clickOnLogInButton()
        return homePage
    }

    checkFooterLogInButton(textButton) {
        this.footer.modalFooterButton.contains(textButton).should('be.visible')
        return this
    }
}
