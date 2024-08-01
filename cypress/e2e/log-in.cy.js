/*global describe, it*/
import HomePage from '../src/pages/HomePage'
import { getUserName, getUserPassword } from '../src/userService'

describe('Login test', () => {
    it('Login user in home page', () => {
        const homePage = new HomePage()
        homePage.visit().checkPageUrl().header.clickOnLogInButton()

        homePage.logInModal
            .logInWithCredentials(getUserName(), getUserPassword())
            .header.checkUserName(getUserName())
    })
})
