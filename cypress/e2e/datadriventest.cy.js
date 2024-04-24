describe('MyTestSuite', () => { // Declaração de um conjunto de testes
    it('DataDrivenTest', () => { // Teste: Data-Driven Test
        // Acessa os dados do arquivo de fixação "orangehrm2" e executa o teste para cada conjunto de dados
        cy.fixture("orangehrm2").then((data)=>{
            // Visita a página de login
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                // Preenche os campos de usuário e senha com os dados do conjunto de dados atual
                data.forEach((userdata)=>{
                cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.username);
                cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.passowrd);
                cy.get('.oxd-button').click();
                 // Verifica se os dados de login são válidos (usuário "Admin" e senha "admin123")
                if(userdata.username=='Admin' && userdata.passowrd=="admin123")//Utiliza-se o if para um login verdadeiro ou certo
                {   // Verifica se o usuário é redirecionado para o painel de administração após o login bem-sucedido
                cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
                .should("have.text",userdata.expected);// Dashboard validation
                // Realiza logout
                cy.get('.oxd-userdropdown-tab > .oxd-icon').click(); //logout
                cy.get(':nth-child(4) > .oxd-userdropdown-link').click() //logout
                }
                else{//Utiliza-se quando os dados dentro do data sao invalidos e que neste caso vai ser sem sucesso o login
                    cy.get('.oxd-alert-content > .oxd-text') // Verifica se uma mensagem de erro é exibida para credenciais inválidas
                    .should("have.text",userdata.expected)
                }

            })

        })

    })
});

//Neste caso no fixtures-orangehrm2 os dados tem 1 login verdadeiro e 2 falsos, mas caso houve outro verdadeiro teria que colocar outro if que ficaria assim :
// : else if (userdata.username == 'OutroAdmin' && userdata.passowrd == "outraSenha") { //Utiliza-se o if para um login verdadeiro ou certo
                   // Verifica se o usuário é redirecionado para o painel de administração após o login bem-sucedido
/* cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
.should("have.text",userdata.expected);// Dashboard validation
                    // Realiza logout
cy.get('.oxd-userdropdown-tab > .oxd-icon').click(); //logout
cy.get(':nth-child(4) > .oxd-userdropdown-link').click() //logout */ 
