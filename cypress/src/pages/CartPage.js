import BasePage from './base/BasePage.js'
import { cartContent } from '../components/CartContent.js'
import { purchaseModal } from '../modals/PurchaseModal.js'

class CartPage extends BasePage {
    cartContent = cartContent
    purchaseModal = purchaseModal
    constructor() {
        super('')
    }
}

export const cartPage = new CartPage()
