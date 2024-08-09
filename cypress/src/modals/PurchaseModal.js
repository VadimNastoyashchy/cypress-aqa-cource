/*globals cy */
import BaseModal from "./base/BaseModal";

class PurchaseModal extends BaseModal {
    constructor() {
        super('.modal-content')
    }

    get inputUserNameField() {
        return cy.get(`${this.body.BODY_CONTAINER} #name`)
    }

    get inputCountryField() {
        return cy.get(`${this.body.BODY_CONTAINER} #country`)
    }

    get inputCityField() {
        return cy.get(`${this.body.BODY_CONTAINER} #city`)
    }

    get inputCreditCardField() {
        return cy.get(`${this.body.BODY_CONTAINER} #card`)
    }

    get inputMonthField() {
        return cy.get(`${this.body.BODY_CONTAINER} #month`)
    }

    get inputYearField() {
        return cy.get(`${this.body.BODY_CONTAINER} #year`)
    }

    enterName(name) {
        this.inputUserNameField.type(name, { force: true })
        return this
    }

    enterCountry(country) {
        this.inputCountryField.type(country, { force: true })
        return this
    }

    enterCity(city) {
        this.inputCityField.type(city, { force: true})
        return this
    }

    enterCreditCard(card) {
        this.inputCreditCardField.type(card, { force: true})
        return this
    }

    enterMonth(month) {
        this.inputMonthField.type(month, { force: true})
        return this
    }

    enterYear(year) {
        this.inputYearField.type(year, { force: true})
        return this
    }

    clickOnPurchaseButton() {
        this.footer.modalFooterButton.contains('Purchase').click()
    }

    purchaseWithCredentials({ name, country, city, card, month, year }) {
        this.enterName(name)
            .enterCountry(country)
            .enterCity(city)
            .enterCreditCard(card)
            .enterMonth(month)
            .enterYear(year)
            .clickOnPurchaseButton()
    }

}

export const purchaseModal = new PurchaseModal();