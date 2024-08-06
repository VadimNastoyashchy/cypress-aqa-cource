/*globals cy*/
class CartContent {
    productIsVisible() {
        cy.get('#tbodyid .success').should('be.visible')
    }
}

export const cartContent = new CartContent()
