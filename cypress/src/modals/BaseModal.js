/*globals cy*/
export default class BaseModal {
    constructor(modalContainer = '') {
        this.MODAL_CONTAINER = modalContainer
        this.MODAL_HEADER_CONTAINER = '.modal-header'
        this.MODAL_BODY_CONTAINER = '.modal-body'
        this.MODAL_FOOTER_CONTAINER = '.modal-footer'
    }

    get modalTextForm() {
        return cy.get(`${this.MODAL_BODY_CONTAINER} .form-control-label`)
    }

    get modalInputs() {
        return cy.get(`${this.MODAL_BODY_CONTAINER} .form-control`)
    }

    get modalHeaderText() {
        return cy.get(`${this.MODAL_HEADER_CONTAINER} .modal-title`)
    }

    get headerCloseModalButton() {
        return cy.get(`${this.MODAL_HEADER_CONTAINER} .close`)
    }

    get footerCloseModalButton() {
        return cy.get(`${this.MODAL_FOOTER_CONTAINER} > .btn-secondary`)
    }

    get modalFooterButton() {
        return cy.get(`${this.MODAL_FOOTER_CONTAINER} > .btn-primary`)
    }

    checkTextFormsInModalWindow(nameForm) {
        this.modalTextForm.contains(nameForm)
        return this
    }

    checkInputFieldsInModalWindow() {
        this.modalInputs.should('be.visible')
        return this
    }

    checkTextInModalHeader(headerText) {
        this.modalHeaderText.contains(headerText)
        return this
    }

    checkHeaderCloseButton() {
        this.headerCloseModalButton.should('be.visible')
        return this
    }

    checkFooterCloseButton() {
        this.footerCloseModalButton.contains('Close')
        return this
    }

    checkTextFormAndInputField(nameForm) {
        this.checkTextFormsInModalWindow(nameForm)
        this.checkInputFieldsInModalWindow()
        return this
    }
}
