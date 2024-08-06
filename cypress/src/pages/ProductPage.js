import BasePage from './base/BasePage.js'
import { productDescription } from '../components/ProductDescription.js'

class ProductPage extends BasePage {
    productDescription = productDescription
    constructor() {
        super('#tbodyid')
    }
}

export const productPage = new ProductPage()
