/*global describe, it, cy*/
describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.contains('PRODUCT STORE').should('be.visible')
    })
})
