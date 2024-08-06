/*global describe, it, cy*/
import { homePage } from '../src/pages/HomePage'
import { productPage } from '../src/pages/ProductPage'
import { cartPage } from '../src/pages/CartPage'

describe('Add to cart', () => {
    it('Check "Add to cart" functionality', () => {
        cy.loginWithValidCredentials()
        homePage.productCard.clickOnProductByName()
        productPage.productDescription.clickAddToCartButton()
        homePage.header.clickCartButton()
        cartPage.cartContent.productIsVisible()
    })
})
