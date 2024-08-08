/*global cy*/
class Footer {
    constructor() {
        this.footerContent = '#fotcont'
        this.copyrightFooter = 'footer'
    }

    scrollToFooter() {
        cy.get(this.footerContent)
        .scrollIntoView()
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
        for (const detail of details) { 
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
        cy.get(this.copyrightFooter) 
        .contains('Copyright © Product Store 2017')
        .should('be.visible');
        return this
    }
}

export const footer = new Footer();