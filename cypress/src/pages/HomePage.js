import BasePage from '../pages/base/BasePage.js'
import { loginModal } from '../modals/LogInModal'
import { productCard } from '../components/ProductCard.js'
import { signUpModal } from '../modals/SignUpModal.js'
import { carouselItems } from '../components/CarouselItems.js'

class HomePage extends BasePage {
    loginModal = loginModal
    productCard = productCard
    signUpModal = signUpModal
    carouselItems = carouselItems

    constructor() {
        super('index.html')
    }
}

export const homePage = new HomePage()
