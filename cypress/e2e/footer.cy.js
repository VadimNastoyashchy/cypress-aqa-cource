/*global describe, it*/
import { homePage } from '../src/pages/HomePage'

describe('Footer test', () => {
    it("Check footer's components visible on the page", () => {
        homePage
        .visit()
        .checkPageUrl()
        .footer.checkFooterVisibility()
    })
})