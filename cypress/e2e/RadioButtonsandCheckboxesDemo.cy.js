describe('Check UI Elements', () => {
    it('Checking Radio Buttons', () => { // Teste para verificar botões 
        cy.visit("https://testautomationpractice.blogspot.com/")

        // Se os input(opçoes) estao visible,// Verifica se os botões de rádio estão visíveis
        cy.get('input#female').should("be.visible")
        cy.get('input#male').should("be.visible")

        //selecionar um input // Seleciona o botão de rádio "female" e verifica se está selecionado
        cy.get('input#female').check().should("be.checked")
        // Verifica se o botão de rádio "male" não está selecionado
        cy.get('input#male').should("not.be.checked")

        // Seleciona o botão de rádio "male" e verifica se está selecionado
        cy.get('input#male').check().should("be.checked")
        // Verifica se o botão de rádio "female" não está selecionado
        cy.get('input#female').should("not.be.checked")

    });
    it('Checking checkboxes', () => { // Teste para verificar checkboxes

         // Visita o site de teste
        cy.visit("https://testautomationpractice.blogspot.com/")

        //o elemento esta visible // Verifica se o checkbox "sunday" está visível
        cy.get('input#sunday').should("be.visible")

        //selecionar uma check box- sunday // Seleciona o checkbox "sunday" e verifica se está selecionado
        cy.get('input#sunday').check().should("be.checked")

        //tirar o selecionado de uma check box// Desmarca o checkbox "sunday" e verifica se não está selecionado
        cy.get('input#sunday').uncheck().should("not.be.checked")

        //selecionar todas as  check boxes// Seleciona todos os checkboxes e verifica se estão selecionados
        cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")

        //tirar de todas as check boxe // Desmarca todos os checkboxes e verifica se não estão selecionados
        cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")

        //selecionar a primeira e a ultima check boxes // Seleciona o primeiro e o último checkbox e verifica se estão selecionados
        cy.get("input.form-check-input[type='checkbox']").first().check().should("be.checked")
        cy.get("input.form-check-input[type='checkbox']").last().check().should("be.checked")

    });
});