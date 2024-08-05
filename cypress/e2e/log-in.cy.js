/*global describe, it*/
import { homePage } from '../src/pages'
import { getUserName, getUserPassword } from '../src/services/userService'

describe('Login test', () => {
    it('Login user with valid credentials', () => {
        homePage
            .visit()
            .checkPageUrl()
            .header.clickOnLogInButton()
            .loginModal.logInWithCredentials(getUserName(), getUserPassword())
            .header.checkUserName(getUserName())
    })
})
