describe('handle dropdowns', () => {

    it('dropdown with select', () => { // Teste para dropdown com seleção

       // Visita a página de solicitação de demo do Zoho
        cy.visit("https://www.zoho.com/learn/request-demo.html")
        // Seleciona "Portugal" no menu suspenso do país
        cy.get("#zcf_address_country")
        .select("Portugal")
        .should("have.value","Portugal")

    });
    it('dropdown with select', () => { // Teste para dropdown com seleção
        
        // Visita a página de criação de bilhete falso do Dummy Ticket
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        // Clica no campo de seleção do país
        cy.get("#select2-billing_country-container").click()

        // Digita "Portugal" no campo de pesquisa e pressiona Enter
        cy.get(".select2-search__field").type("Portugal").type("{enter}")

        // Verifica se o país selecionado é "Portugal"
        cy.get("#select2-billing_country-container")
        .should("have.text","Portugal")
    });
    it('Auto suggest dropdown', () => { // Teste para dropdown de sugestão automática
        
       // Visita a página da Wikipedia
        cy.visit("https://www.wikipedia.org/")

        // Digita "Trancoso" no campo de busca
        cy.get("#searchInput").type("Trancoso")

        // Clica na sugestão "Trancoso, Portugal"
        cy.get(".suggestion-text").contains("Trancoso, Portugal").click()
    });
    it('Dynamic dropdown', () => { //Teste para dropdown dinamico

        // Visita o site do Google
       cy.visit("https://www.google.com/")

        // Insere "automação cypress" no campo de pesquisa
       cy.get("input[name='q']").type("cypress automation")

        // Aguarda 3000 milissegundos (3 segundos)
       cy.wait(3000)

        // Verifica se existem 11 elementos <span> dentro do elemento com a classe "wM6W7d"
       cy.get("wM6W7d>span").should("have.length",11)

        // Para cada elemento <span> dentro do elemento com a classe "wM6W7d"
       cy.get("wM6W7d>span").each(  ($el, index, $list)=>{

         // Se o texto do elemento for "automação cypress tool"
            if($el.text("")=='cypress automation tutorial')
            {
                 // Clica no elemento
                cy.wrap($el).click()
            }
       } )
        // Verifica se o campo de pesquisa contém o valor "automação cypress tutorial"
       cy.get("input[name='q']").should("have.value","cypress automation tutorial")
    });
});