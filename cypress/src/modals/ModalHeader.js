/*globals cy*/
export default class ModalHeader {
    constructor(headerContainer = '.modal-header') {
        this.HEADER_CONTAINER = headerContainer
    }

    get modalHeaderText() {
        return cy.get(`${this.HEADER_CONTAINER} .modal-title`)
    }

    get headerCloseModalButton() {
        return cy.get(`${this.HEADER_CONTAINER} .close`)
    }

    checkTextInHeader(headerText) {
        this.modalHeaderText.contains(headerText)
        return this
    }

    checkHeaderCloseButton() {
        this.headerCloseModalButton.should('be.visible')
        return this
    }
}
