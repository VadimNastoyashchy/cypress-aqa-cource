/*global describe, it, cy*/
describe('Login test', () => {
    it('Login user in home page', () => {
        const homePage = 'https://www.demoblaze.com/index.html'
        const testUserName = 'testUser3444'
        const testUserPassword = testUserName
        const checkLocation = (url) =>
            cy.location('href').should('include', url)

        cy.visit(homePage)

        checkLocation(homePage)

        cy.get('#login2').click()

        cy.get('#loginusername').type(testUserName, { force: true })

        cy.get('#loginpassword').type(testUserPassword, { force: true })

        cy.get('.btn-primary').contains('Log in').click()

        cy.get('#nameofuser').should('have.text', `Welcome ${testUserName}`)
    })
})
