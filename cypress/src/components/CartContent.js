class CartContent {

    productIsVisible() {
        cy.get('#tbodyid').should('exist')
    }
}

export const cartContent = new CartContent();