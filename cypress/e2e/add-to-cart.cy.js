import { homePage } from "../src/pages";
import { productPage } from "../src/pages/ProductPage";
import { getProductName } from '../src/services/productService.js';

describe('Add to cart', () => {
    
    it('Check "Add to cart" functionality', () => {
        cy.loginWithValidCredentials();
        homePage.productCard.clickOnProductByName(getProductName());
        productPage.productDescription.clickAddToCartButton()
    })


})