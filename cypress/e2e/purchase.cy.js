/*globals describe, it, cy*/
import { homePage } from "../src/pages/HomePage"
import { cartPage } from "../src/pages/CartPage"
import { getPurchaseValues } from "../src/services/purchaseService"
describe('Check purchase functionality', () => {
    it('Login user, add available product and purchase it', () => {
        cy.loginWithValidCredentials()
        cy.addProductToCart()
        cartPage.cartContent.clickPlaceOrderButton()
        cartPage.purchaseModal.purchaseWithCredentials(getPurchaseValues())
        cartPage.cartContent.checkPurchaseAlertWindow()
    })
})