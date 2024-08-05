import BasePage from './base/BasePage'
import { productDescription } from '../components/ProductDescription'

class ProductPage extends BasePage {
    productDescription
    constructor() {
        super('/prod.html?idp_=1')
        this.productDescription = productDescription
    }
}

export const productPage = new ProductPage()
