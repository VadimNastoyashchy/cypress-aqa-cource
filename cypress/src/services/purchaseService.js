/* eslint-disable no-undef */

export const getPurchaseValues = () => {
    return {
        name: Cypress.env('USER_NAME') || 'User',
        country: Cypress.env('USER_NAME') || 'Ukraine',
        city: Cypress.env('USER_NAME') || 'Forteciya Lviv',
        card: Cypress.env('USER_NAME') || '1234',
        month: Cypress.env('USER_NAME') || '8',
        year: Cypress.env('USER_NAME') || '2024',
    }
}