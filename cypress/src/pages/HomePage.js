import BasePage from '../pages/base/BasePage.js'
import { loginModal } from '../modals/LogInModal'
import { productCard } from '../components/ProductCard.js';

class HomePage extends BasePage {
    loginModal = loginModal;
    productCard = productCard
    
    constructor() {
        super('index.html')
    }
}

export const homePage = new HomePage()
