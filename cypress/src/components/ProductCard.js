/*globals cy*/
class ProductCard {
    clickOnProductByName(productName) {
        cy.get('.col-lg-9').contains(productName).click()
    }
}

export const productCard = new ProductCard()
