import BasePage from './base/BasePage.js'
import { cartContent } from '../components/CartContent.js'

class CartPage extends BasePage {
    cartContent = cartContent
    constructor() {
        super('')
    }
}

export const cartPage = new CartPage()
