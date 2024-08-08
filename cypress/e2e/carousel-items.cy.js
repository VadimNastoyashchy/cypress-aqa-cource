/*global describe, it*/
import { homePage } from '../src/pages/HomePage'

describe('Carousel items check', () => {
    it('Check if the carousel items visible on the home page', () => {
        homePage
            .visit()
            .checkPageUrl()
        .carouselItems
            .checkCarouselIsVisible('First slide')
            .clickOnArrowButton()
            .checkCarouselIsVisible('Second slide')
            .clickOnArrowButton()
            .checkCarouselIsVisible('Third slide')
    })
})
