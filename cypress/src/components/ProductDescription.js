class ProductDescription {

    clickAddToCartButton() {
        cy.get(".btn-success").contains('Add to cart').click()
    }
}

export const productDescription = new ProductDescription();