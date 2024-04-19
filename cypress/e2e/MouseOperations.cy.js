require('@4tw/cypress-drag-drop')
describe('Mouse Operations', () => {
    it('.onlyMouse Hover', () => { // Teste para verificar o efeito de mouse hover

        // Visita a página de demonstração do OpenCart
        cy.visit("https://demo.opencart.com/")

        // Verifica se o elemento não está visível inicialmente
        cy.get("#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a").should("not.be.visible");

        // Move o cursor do mouse sobre o elemento para acionar o efeito de mouse hover
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger("mouseover").click();
        
        // Verifica se o elemento agora está visível após o mouse hover
        cy.get("#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a")
        .should("be.visible");
        
    });


    it('Right Click', () => { // Teste para realizar um clique com o botão direito do mouse
        
         // Visita a página de demonstração do menu de contexto jQuery
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        //appraoch1 // Maneira 1
        // Realiza um clique com o botão direito do mouse no elemento específico
        cy.get("body > div > section > div > div > div > p > span").trigger("contextmenu");

        // Verifica se o menu de contexto foi exibido após o clique com o botão direito do mouse
        cy.get('.context-menu-icon-copy > span').should("be.visible");
        
        //appraoch2 // Maneira 2

        // Realiza um clique com o botão direito do mouse no elemento específico
        cy.get("body > div > section > div > div > div > p > span").rightclick();

         // Verifica se o menu de contexto foi exibido após o clique com o botão direito do mouse
        cy.get('.context-menu-icon-copy > span').should("be.visible");

    });


    it('Double Click', () => { // Teste para realizar um clique duplo com o mouse
        
        // Visita a página de demonstração de eventos ondblclick HTML5
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        cy.frameloaded("iframeResult"); //Load the frame // Carrega o frame

        //appraoch1 - trigger()

         // Realiza um clique duplo no botão dentro do frame
        cy.iframe("iframeResult").find("body > button").trigger("dblclick");

        // Verifica se o campo de texto foi preenchido após o clique duplo
        cy.iframe("iframeResult").find("#field2").should("have.value","Hello World!");

        //appraoch2- dblclick()

        // Realiza um clique duplo no botão dentro do frame
        cy.iframe("iframeResult").find("body > button").dblclick();

         // Verifica se o campo de texto foi preenchido após o clique duplo
        cy.iframe("iframeResult").find("#field2").should("have.value","Hello World!");

    });

    it('Drag and Drop using plugin', () => { // Teste para arrastar e soltar elementos usando um plugin externo
        
        // Visita a página de demonstração de arrastar e soltar usando um plugin externo
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
       
       // Verifica se os elementos de arrastar e soltar estão visíveis
        cy.get("#box6").should("be.visible")
        cy.get("#box106").should("be.visible")

        // Aguarda um intervalo de tempo para garantir que a página carregue completamente
        cy.wait(3000);

        // Realiza a ação de arrastar e soltar um elemento em outro
        cy.get("#box6").drag("#box106",{force:true});
    });


    it('scrolling Page', () => { // Teste para rolar a página para visualizar elementos específicos
        
        // Visita a página com uma lista de bandeiras dos países
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")

        // Portugal Flag // Rola a página para visualizar a bandeira de Portugal
        cy.get("#content > div.container > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(44) > td:nth-child(1) > img").scrollIntoView({duration:2000});
        cy.get("#content > div.container > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(44) > td:nth-child(1) > img").should("be.visible")

        // Suisse Flag // Rola a página para visualizar a bandeira da Suíça
        cy.get("#content > div.container > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(76) > td:nth-child(1) > img").scrollIntoView({duration:2000});
        cy.get("#content > div.container > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(76) > td:nth-child(1) > img").should("be.visible");

         // Rola a página até o rodapé
        cy.get("#footer").scrollIntoView();
    });

});

// SINTESE:
// Teste para verificar o efeito de mouse hover
// Teste para realizar um clique com o botão direito do mouse
// Teste para realizar um clique duplo com o mouse
// Teste para arrastar e soltar elementos usando um plugin externo
// Teste para rolar a página para visualizar elementos específicos