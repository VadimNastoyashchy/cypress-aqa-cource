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
}

export const carouselItems = new CarouselItems()
