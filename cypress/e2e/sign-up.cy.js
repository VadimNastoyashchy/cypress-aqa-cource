/*global describe, it*/
import { homePage } from '../src/pages'
import { buildUserName, buildUserPassword } from '../src/services/userService'
describe('Sign up test', () => {
    it('Sign up user with valid credentials', () => {
        homePage
            .visit()
            .checkPageUrl()
            .header.clickOnSignUpButton()
            .signUpModal.signUpWithCredentials(
                buildUserName(),
                buildUserPassword()
            )
    })
})
