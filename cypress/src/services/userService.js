/* eslint-disable no-undef */

export const getUserName = () => {
    return Cypress.env('USER_NAME') || ''
}

export const getUserPassword = () => {
    return Cypress.env('USER_PASSWORD') || ''
}

export const buildUserName = () => {
    return `testUser${Math.floor(Date.now() / 1000)}`
}

export const buildUserPassword = () => {
    return buildUserName()
}
