/*globals cy*/
class ProductCard {
    clickOnProductByName() {
        cy.get('a[href*="prod.html"]').should('be.visible')
        cy.get('.card-title a').first().click()
    }
}

export const productCard = new ProductCard()
