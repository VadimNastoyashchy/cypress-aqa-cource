/*globals cy*/
import BaseModal from './BaseModal'
import HomePage from '../pages/HomePage'

export default class LogInModal extends BaseModal {
    constructor() {
        super('.modal-dialog')
    }

    get inputUserNameField() {
        return cy.get(`${this.MODAL_BODY_CONTAINER} #loginusername`)
    }

    get inputPasswordField() {
        return cy.get(`${this.MODAL_BODY_CONTAINER} #loginpassword`)
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
        this.modalFooterButton.contains('Log in').click()
    }

    logInWithCredentials(name, password) {
        this.enterEmail(name)
        this.enterPassword(password)
        this.clickOnLogInButton()
        return new HomePage()
    }

    checkFooterLogInButton(textButton) {
        this.modalFooterButton.contains(textButton).should('be.visible')
        return this
    }
}
