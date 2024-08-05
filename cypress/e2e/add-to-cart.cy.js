import { homePage } from "../src/pages";
import { getProductName } from '../src/services/productService.js'

describe('Add to cart', () => {

    const productName = getProductName(); 
    
    it('Check "Add to cart" functionality', () => {
        cy.loginWithValidCredentials();
        homePage.productCard.clickOnProductByName(productName);
    })


})