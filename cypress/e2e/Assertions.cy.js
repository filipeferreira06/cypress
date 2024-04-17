describe('Assertaçoes', () => {
    it('explicit assertions', () => { // Teste para asserções explícitas

        // Visita a página de login do OrangeHRM
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

         // Insere o nome de usuário e senha
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()
        
         // Define o nome esperado
        let expName="Paulo Ferreira";

         // Obtém o nome de usuário do dropdown
        cy.get('.oxd-userdropdown-name').then( (x)=>{  
            
                       let actName=x.text()
                       
                        //BDD STYLE
                        // Verifica se o nome atual é igual ao esperado
                       expect(actName).to.equal(expName)
                       // Verifica se o nome atual não é igual ao esperado
                       expect(actName).to.not.equal(expName)

                       //TDD STYLE
                       // Verifica se o nome atual é igual ao esperado
                       assert.to.equal(actName,expName)
                       // Verifica se o nome atual não é igual ao esperado
                       assert.not.equal(actName,expName)
                 
                 })
    });
});