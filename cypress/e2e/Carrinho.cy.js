describe('Carinho', () => {
    it('Adicionar produto ao carrinho com sucesso', () => {
        // Arrange
        cy.visit("https://www.saucedemo.com/v1/")

        cy.get('[data-test="username"]').type("standard_user")

        cy.get('[data-test="password"]').type("secret_sauce")

        cy.get('#login-button').click("")

        cy.screenshot("Login")

        // Action
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click("")

        //assert
        cy.get('.fa-layers-counter')
        .should("be.visible")
        .and("have.text","1")

        cy.get("[data-icon='shopping-cart']").click("")
        cy.contains("Sauce Labs Backpack").should("be.visible")

        cy.screenshot("Carinho")
    });
});