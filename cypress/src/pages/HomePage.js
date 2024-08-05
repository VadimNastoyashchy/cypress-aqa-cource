import BasePage from '../pages/base/BasePage.js'
import { loginModal } from '../modals/LogInModal'
import { signUpModal } from '../modals/SignUpModal.js'

class HomePage extends BasePage {
    loginModal = loginModal
    signUpModal = signUpModal

    constructor() {
        super('index.html')
    }
}

export const homePage = new HomePage()
