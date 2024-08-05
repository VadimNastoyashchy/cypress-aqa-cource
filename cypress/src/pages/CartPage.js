import BasePage from './base/BasePage'
import { cartContent } from '../components/CartContent'

class CartPage extends BasePage {
    constructor() {
        super('/cart.html')
        this.cartContent = cartContent
    }
}

export const cartPage = new CartPage()
