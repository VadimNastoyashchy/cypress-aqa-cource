/*global describe, it*/
import HomePage from '../src/pages/HomePage'
import Accounts from '../src/accounts/Accounts'

describe('Login test', () => {
    it('Login user in home page', () => {
        const homePage = new HomePage()
        const account = new Accounts()
        homePage.visit().checkPageUrl().header.clickOnLogInButton()

        homePage.logInModal
            .logInWithCredentials(account.userName, account.userPassword)
            .header.checkUserName(account.userName)
    })
})
