/*globals cy*/
class CarouselItems {
    constructor() {
        this.carouselContent = '#carouselExampleIndicators'
    }

    checkCarouselIsVisible(slideAltText) {
        cy.get(`${this.carouselContent} .active img`)
            .should('be.visible')
            .and('have.attr', 'alt', slideAltText)
        return this
    }

    clickOnArrowButton() {
        cy.get(this.carouselContent)
        .contains('Next')
        .click()
        return this
    }

    checkCarouselItems() {
        this.checkCarouselIsVisible('First slide')
            .clickOnArrowButton()
            .checkCarouselIsVisible('Second slide')
            .clickOnArrowButton()
            .checkCarouselIsVisible('Third slide')
    }
}

export const carouselItems = new CarouselItems()
