import Header from '../components/Header'
import LogInModal from '../modals/LogInModal'
import HomePage from './HomePage'

const header = new Header()
const logInModal = new LogInModal()
const homePage = new HomePage(header, logInModal)

export { homePage }
