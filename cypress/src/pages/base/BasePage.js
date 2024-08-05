/*global cy, Cypress*/

import { header } from '../../components/Header'

export default class BasePage {
    header = header

    constructor(pageUrl = '') {
        this.PAGE_URL = pageUrl
    }

    visit() {
        cy.visit(`${Cypress.config('baseUrl')}${this.PAGE_URL}`, {
            failOnStatusCode: false,
        })
        return this
    }

    checkPageUrl() {
        cy.location('href').should(
            'include',
            `${Cypress.config('baseUrl')}${this.PAGE_URL}`
        )
        return this
    }
}
