const { beforeEach } = require("mocha"); // Importação do beforeEach do Mocha para utilizar um hook

describe('MyTestSuite', () => { // Declaração de um conjunto de testes

    //Direct access
    it.only('fixturesDemoTest', () => {  // Teste apenas - acessando dados de um arquivo de fixação diretamente
        
        // Visita a página de login
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // Acessa os dados do arquivo de fixação e executa o teste
        cy.fixture("orangehrm").then( (data)=>{
            
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username);
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.passowrd);
            cy.get('.oxd-button').click();
    
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
            .should("have.text",data.expected);
        })

    });

    // Access through Hook - for multipme it blocks // Acesso aos dados através de um hook - para vários blocos "it"
    // Inicializa uma variável para armazenar os dados do arquivo de fixação
    let userdata;
    before( ()=>{
        // Acessa os dados do arquivo de fixação e armazena na variável userdata
        cy.fixture("orangehrm").then((data)=>{ 
            userdata=data;
        })
    })

    it('fixturesDemoTest', () => { // Teste usando dados acessados por meio do hook "before"
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") // Visita a página de login

            // Preenche os campos de usuário e senha com os dados armazenados na variável userdata
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.username);
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.passowrd);
            cy.get('.oxd-button').click();
            // Verifica se o texto esperado está presente após o login
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
            .should("have.text",userdata.expected);
    })
});