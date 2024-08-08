/*global describe, it*/
import { homePage } from '../src/pages/HomePage'

describe('Footer test', () => {
    it("Check footer's components visible on the home page", () => { 
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