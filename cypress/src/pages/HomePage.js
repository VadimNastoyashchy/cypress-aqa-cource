import Header from '../components/Header'
import BasePage from '../base/BasePage'
import LogInModal from '../modals/LogInModal'

export default class HomePage extends BasePage {
    header = new Header()
    logInModal = new LogInModal()

    constructor() {
        super('index.html')
    }
}
