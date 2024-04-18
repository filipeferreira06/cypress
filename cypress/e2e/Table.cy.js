describe('handle Tables', () => { // Descrição: Manipulação de Tabelas

     // Executado antes de cada teste para realizar o login
    beforeEach("login", () => {

        cy.visit("https://demo.opencart.com/admin/"); // Visita a página de login do OpenCart
         // Insere o nome de usuário e senha
        cy.get("#input-username").type("demo");
        cy.get("#input-password").type("demo");
        // Clica no botão de login
        cy.get("button[type='submit']").click();

         // Fecha qualquer mensagem de boas-vindas ou notificação
        cy.get(".btn-close").click();
         //customers-- customers
        // Navega para o menu de clientes
        cy.get('#menu-customer > .parent').click(); //customers main menu // menu principal de clientes
        cy.get("#menu-customer>ul>li:first-child").click(); //customers sub/child item // item secundário do menu de clientes
    });

    it('Check number rows e colums', () => { // Teste para verificar o número de linhas e colunas na tabela
        // Verifica se há 10 linhas na tabela
        cy.get(".table-bordered >tbody>tr").should("have.length","10");
        // Verifica se há 7 colunas na tabela
        cy.get(".table-bordered >thead>tr>td").should("have.length","7");
    });
    it('check cell data form specific row e column', () => {  // Teste para verificar os dados de uma célula específica na tabela

        // Verifica se o email "gorankrezic90@gmail.com" está presente na célula da quinta linha
        cy.get("#form-customer > div.table-responsive > table > tbody > tr:nth-child(5")
        .contains("gorankrezic90@gmail.com");
    });
    it.only('read all the rows e columns data in the first page', () => { // Teste para ler todos os dados de todas as linhas e colunas na primeira página da tabela
        // Itera sobre cada linha da tabela
        cy.get("#form-customer > div.table-responsive > table > tbody > tr") 
            .each( ($row, index, $rows)=>{
                 // Itera sobre cada coluna dentro da linha
                cy.wrap($row).within( ()=>{

                    cy.get("td").each( ($col, index, $cols)=>{
                        cy.log($col.text()); // Exibe o texto de cada célula
                    
                    })

                }) 
            })

    });
    it.only('pagination', () => { // Teste para verificar a paginação da tabela
        
        //find total number of pages // Encontra o número total de páginas na tabela
        let totalPages;
        cy.get(".col-sm-6.text-end").then( (e)=>{
                let mytext=e.text();  //showing 1 to 10 of 19425 (1943 Pages) // exibindo 1 a 10 de 19425 (1943 Páginas)
                totalPages=mytext.substring(   mytext.indexOf("(")+1, mytext.indexOf("Pages")-1);
                cy.log("Total number of pages in a table ========>"+totalPages);
        })
    })
})

//SINTESE
// 1.Verificar número de linhas e colunas: Este teste verifica se a tabela na página possui o número esperado de linhas e colunas.
// 2.Verificar dados de uma célula específica: Este teste verifica se um dado específico está presente em uma célula específica da tabela.
// 3.Ler todos os dados das linhas e colunas na primeira página: Este teste lê todos os dados de todas as linhas e colunas presentes na primeira página da tabela.
// 4.Paginação: Este teste verifica a funcionalidade de paginação da tabela, determinando o número total de páginas disponíveis.