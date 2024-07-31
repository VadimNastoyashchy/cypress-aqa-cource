/*global describe, it*/
import HomePage from '../src/pages/HomePage'

describe('Login and Logout tests', () => {
    it('Login and Logout first user in page', () => {
        const homePage = new HomePage()

        homePage.visit().checkPageUrl().header.clickOnLogInButton()

        homePage.logInModal
            .logInWithCredentials('testUser3444', 'testUser3444')
            .header.checkUserName('testUser3444')
    })
})
