describe('Alerts', () => {
    it('Js alert', () => { // Teste para alerta JavaScript

        // Visita a página com alertas JavaScript
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

         // Clica no botão que dispara o alerta JavaScript
        cy.get("button[onclick='jsAlert()']").click();

         // Verifica se o texto do alerta é o esperado
        cy.on("window:alert",(t)=>{
                expect(t).to.contains("I am a JS Alert");
        })
        //alert window automaticalyy closed by cypress // A janela de alerta é fechada automaticamente pelo Cypress
        
        // Verifica se o resultado exibido na página é "You successfully clicked an alert"
        cy.get("#result").should("have.text","You successfully clicked an alert")

    });
    it("Js confirm alert-ok" , () => { // Teste para alerta de confirmação JavaScript (ok)

        // Visita a página com alertas JavaScript
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        // Clica no botão que dispara o alerta de confirmação JavaScript
        cy.get("button[onclick='jsConfirm()']").click();

        // Verifica se o texto do alerta de confirmação é o esperado
        cy.on("window:confirm",(t)=>{
            expect(t).to.contains("I am a JS Confirm");
    })
        // cypress automatically closed alert window by using ok button-default // Cypress fecha automaticamente a janela do alerta clicando no botão "Ok" (padrão)

        // Verifica se o resultado exibido na página é "You clicked: Ok"
        cy.get("#result").should("have.text","You clicked: Ok")

    });
    it('Js confirm alert-cancel', () =>{ // Teste para alerta de confirmação JavaScript (cancelar)
        // Visita a página com alertas JavaScript
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        // Clica no botão que dispara o alerta de confirmação JavaScript
        cy.get("button[onclick='jsConfirm()']").click();

         // Verifica se o texto do alerta de confirmação é o esperado
        cy.on("window:confirm",(t)=>{
            expect(t).to.contains("I am a JS Confirm");
    })
         // Simula o usuário clicando no botão "Cancelar" do alerta, fechando-o
        cy.on("window:confirm",() => false); //cypress close alert window using cancel button
        
        // Verifica se o resultado exibido na página é "You clicked: Cancel"
        cy.get("#result").should("have.text","You clicked: Cancel")

    });
    it.only("Js prompt alert", () => { // Teste para alerta de prompt JavaScript
          // Visita a página com alertas JavaScript
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    
         // Substitui a função prompt por uma função que retorna "welcome"
        cy.window().then((win) => {
            cy.stub(win, "prompt").returns("welcome");
        });
        // Clica no botão que dispara o prompt JavaScript
        cy.get("button[onclick='jsPrompt()']").click();

        // Verifica se o texto do prompt é o esperado
        cy.on("window:confirm", (text) => {
            expect(text).to.equal("I am a JS prompt");
        });
        // Verifica se o resultado exibido na página é "You entered: welcome"
        cy.get("#result").should("have.text", "You entered: welcome");
    })

    it.only("Authenticated alert", () => { // Teste para alerta de autenticação
        // Visita a página com autenticação básica usando credenciais fornecidas
        cy.visit("https://the-internet.herokuapp.com/basic_auth", { 
            auth: {
                username: "admin",
                password: "admin"
            } 
        });
    // Verifica se o texto de congratulações está presente dentro do elemento <p> dentro da <div> com a classe "example"
       cy.get("div[class='example'] p").should("have.contain","Congratulations")

       // Visita a página com autenticação básica inserindo as credenciais na URL
       cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

       // Verifica se o texto de congratulações está presente dentro do elemento <p> dentro da <div> com a classe "example"
       cy.get("div[class='example'] p").should("have.contain","Congratulations")
    });
});