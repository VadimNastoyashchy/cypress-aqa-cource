/* eslint-disable no-undef */

export const getUserName = () => {
    return Cypress.env('USER_NAME') || ''
}

export const getUserPassword = () => {
    return Cypress.env('USER_PASSWORD') || ''
}
