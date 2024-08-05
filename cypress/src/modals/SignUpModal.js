/*globals cy, expect*/
import { homePage } from '../pages'
import BaseModal from './base/BaseModal'

class SignUpModal extends BaseModal {
    constructor() {
        super('.modal-content')
    }

    get inputUserNameField() {
        return cy.get(`${this.body.BODY_CONTAINER} #sign-username`)
    }

    get inputPasswordField() {
        return cy.get(`${this.body.BODY_CONTAINER} #sign-password`)
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

    checkAlertMessage(expectedText) {
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal(expectedText)
        })
        return this
    }

    clickOnSignUpButton() {
        this.footer.modalFooterButton.contains('Sign up').click()
        return this
    }

    signUpWithCredentials(username, password) {
        this.enterEmail(username)
            .enterPassword(password)
            .clickOnSignUpButton()
            .checkAlertMessage('Sign up successful.')
        return homePage
    }

    checkFooterSignUpButton(textButton) {
        this.footer.modalFooterButton.contains(textButton).should('be.visible')
        return this
    }
}

export const signUpModal = new SignUpModal()
