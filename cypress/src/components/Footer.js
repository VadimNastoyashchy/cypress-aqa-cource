/*global cy*/
class Footer {
    constructor() {
        this.footerContent = '#fotcont'
    }

    scrollToFooter() {
        cy.get(this.footerContent)
        .scrollIntoView()
        .should('be.visible')
        return this
    }

    checkVisibilityOfText(text) {
        cy.get(this.footerContent)
        .contains(text)
        .should('be.visible')
        return this
    }

    checkAboutUs() {
        this.checkVisibilityOfText('About Us')
        this.checkVisibilityOfText('We believe performance needs to be validated')
        return this
    }

    checkGetInTouch() {
        const details = ['Get in Touch', 'Address', 'Phone', 'Email'];
        for (let detail of details) {
            this.checkVisibilityOfText(detail);
        }
        return this;
    }

    checkLogoVisibility() {
        cy.get(`${this.footerContent} img`)
        .should('be.visible')
        return this
    }

    checkCopyrightVisibility() {
        cy.get('footer')
        .contains('Copyright © Product Store 2017')
        .should('be.visible');
        return this
    }

    checkFooterVisibility() {
        this.scrollToFooter()
            .checkAboutUs()
            .checkGetInTouch()
            .checkLogoVisibility()
            .checkCopyrightVisibility()
    }
}

export const footer = new Footer();