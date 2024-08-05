import { homePage } from "../src/pages";
import { productPage } from "../src/pages/ProductPage";
import { cartPage } from "../src/pages/CartPage";
import { getProductName } from '../src/services/productService.js';

describe('Add to cart', () => {
    it('Check "Add to cart" functionality', () => {
        cy.loginWithValidCredentials();
        homePage.productCard.clickOnProductByName(getProductName());
        productPage.productDescription.clickAddToCartButton();
        homePage.header.clickCartButton();
        cartPage.cartContent.productIsVisible();
    })
})