import BasePage from '../pages/base/BasePage.js'
import { loginModal } from '../modals/LogInModal'
import { productCard } from '../components/ProductCard.js'
import { signUpModal } from '../modals/SignUpModal.js'
import { footer } from '../components/Footer.js'

class HomePage extends BasePage {
    loginModal = loginModal
    productCard = productCard
    signUpModal = signUpModal
    footer = footer
    
    constructor() {
        super('index.html')
    }
}

export const homePage = new HomePage()
