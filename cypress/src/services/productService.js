export const getProductName = () => {
    return Cypress.env('PRODUCT_NAME') || ''
}