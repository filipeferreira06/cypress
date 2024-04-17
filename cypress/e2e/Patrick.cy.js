describe('Exercicio Patrick', () => {
    it('Login bem sucedido', () => {
        // Login bem sucedido
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()

    });
    it('ESCOLHER UMA T-SHIRT', () => {
                        // Login bem sucedido
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()

        cy.get('#item_1_title_link > .inventory_item_name').click("")
        cy.get('.btn_primary').click()
        
    });
    it('Verificar que a T-shirt está no carrinho', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click("")
        
        cy.get('#item_1_title_link > .inventory_item_name').click("")
        cy.get('.btn_primary').click("")

        cy.get('.shopping_cart_badge').should("be.visible","1")
        cy.get('.fa-shopping-cart').click()
        cy.contains('Sauce Labs Bolt T-Shirt').should("be.visible")

        cy.contains("Sauce Labs Bolt T-Shirt").should("not.be.visible")

      });

  });