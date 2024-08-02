/*globals cy*/
export default class ModalBody {
    constructor(bodyContainer = '.modal-body') {
        this.BODY_CONTAINER = bodyContainer;
    }

    get modalTextForm() {
        return cy.get(`${this.BODY_CONTAINER} .form-control-label`);
    }

    get modalInputs() {
        return cy.get(`${this.BODY_CONTAINER} .form-control`);
    }

    checkTextFormsInModal(nameForm) {
        this.modalTextForm.contains(nameForm);
        return this;
    }

    checkInputFieldsInModal() {
        this.modalInputs.should('be.visible');
        return this;
    }

    checkTextFormAndInputField(nameForm) {
        this.checkTextFormsInModal(nameForm);
        this.checkInputFieldsInModal();
        return this;
    }
}