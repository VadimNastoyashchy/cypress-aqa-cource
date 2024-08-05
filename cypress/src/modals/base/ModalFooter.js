/*globals cy*/
export default class ModalFooter {
    constructor(footerContainer = '.modal-footer') {
        this.FOOTER_CONTAINER = footerContainer
    }

    get footerCloseModalButton() {
        return cy.get(`${this.FOOTER_CONTAINER} > .btn-secondary`)
    }

    get modalFooterButton() {
        return cy.get(`${this.FOOTER_CONTAINER} > .btn-primary`)
    }

    checkFooterCloseButton() {
        this.footerCloseModalButton.contains('Close')
        return this
    }
}
