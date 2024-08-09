/*globals cy*/
class CartContent {
    productIsVisible() {
        cy.get('#tbodyid .success').should('be.visible')
    }

    clickPlaceOrderButton() {
        cy.get('.btn-success')
            .should('be.visible')
            .contains('Place Order')
            .click();
    }

    checkPurchaseAlertWindow() {
        cy.get('.sweet-alert')
            .should('be.visible')
            .contains('Thank you for your purchase!')

        cy.get('.lead')
            .should('be.visible')
            .contains('Id:')
            .contains('Amount:')
            .contains('Card Number:')
            .contains('Name:')
            .contains('Date:')
    }
}

export const cartContent = new CartContent()
