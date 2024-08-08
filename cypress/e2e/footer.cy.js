/*global describe, it*/
import { homePage } from '../src/pages/HomePage'

describe('Footer test', () => {
    it("Check footer's components visible on the page", () => { //homepage
        homePage
            .visit()
            .checkPageUrl()
        .footer
            .scrollToFooter()
            .checkAboutUs()
            .checkGetInTouch()
            .checkLogoVisibility()
            .checkCopyrightVisibility()
    })
})