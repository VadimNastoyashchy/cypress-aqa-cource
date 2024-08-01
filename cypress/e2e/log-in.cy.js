/*global describe, it*/
import { homePage } from '../src/pages'
import { getUserName, getUserPassword } from '../src/userService'

describe('Login test', () => {
    it('Login user in home page', () => {
        homePage.visit().checkPageUrl().header.clickOnLogInButton()

        homePage.logInModal
            .logInWithCredentials(getUserName(), getUserPassword(), homePage)
            .header.checkUserName(getUserName())
    })
})
