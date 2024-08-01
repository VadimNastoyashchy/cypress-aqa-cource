import BasePage from '../base/BasePage'
export default class HomePage extends BasePage {
    constructor(header, logInModal) {
        super('index.html')
        this.header = header
        this.logInModal = logInModal
    }
}
