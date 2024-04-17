describe('Handle tab', () => {
    it('Appracoh1', () => {
        
        // Visita a página
        cy.visit("https://the-internet.herokuapp.com/windows") // parrent tab

        // Remove o atributo "target" do link e clica nele
        cy.get(".example >a").invoke("removeAttr","target").click(); //clicking on link

        // Verifica se o URL atual inclui a parte do URL esperada
        cy.url().should('include',"https://the-internet.herokuapp.com/windows/new")

        // Espera por 5 segundos
        cy.wait(5000);

     //opeerations // Navega de volta para a aba pai
        cy.go("back"); //back to parent tab
    });
    it('Approach2', () => { // Teste para a segunda abordagem
        // Visita a página
        cy.visit("https://the-internet.herokuapp.com/windows"); // aba pai
    
        // Obtém o URL do link na página e visita esse URL em uma nova aba
        cy.get(".example > a").then(e => {
            let url = e.prop("href");
            cy.visit(url);
        });
    
        // Verifica se o URL atual inclui a parte do URL esperada
        cy.url().should('include',"https://the-internet.herokuapp.com/windows/new");
    
         // Espera por 5 segundos
        cy.wait(5000);
    
        // operações // Navega de volta para a aba pai
        cy.go("back"); // voltar para a aba pai
    });

});
