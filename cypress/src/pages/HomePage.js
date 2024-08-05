import BasePage from '../pages/base/BasePage.js'
import { loginModal } from '../modals/LogInModal'

class HomePage extends BasePage {
    loginModal = loginModal
    
    constructor() {
        super('index.html')
    }
}

export const homePage = new HomePage()
