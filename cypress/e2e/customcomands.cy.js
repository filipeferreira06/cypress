//click on link using label
// over writing existing cotains() comand
// re-usuable custom command

describe('custom commands', () => {
    it('handling links', () => {    // Teste: Manipulação de links
        // Visita a página inicial do site NopCommerce
        cy.visit("https://demo.nopcommerce.com/");
        
        //direct - witout using custom command
        //cy.get(':nth-child(2) > .product-item > .details > .product-title > a').click();
        
        //using custom command
        cy.clickLink("Apple MacBook Pro 13-inch"); // Utilizando um comando personalizado para clicar no link "Apple MacBook Pro 13-inch"
            cy.get("#product-details-form > div:nth-child(2) > div.product-essential > div.overview > div.product-name > h1").should("have.text","Apple MacBook Pro 13-inch"); // Verifica se o título do produto exibido corresponde ao esperado

    });
    it.only('overwriting existing command', () => { // Teste: Sobrescrevendo comando existente
         // Visita a página inicial do site NopCommerce
        cy.visit("https://demo.nopcommerce.com/");

        //using custom command
        cy.clickLink("APPLE MACBOOK PRO 13-inch");// Utilizando um comando personalizado para clicar no link "APPLE MACBOOK PRO 13-inch"
        cy.get("#product-details-form > div:nth-child(2) > div.product-essential > div.overview > div.product-name > h1").should("have.text","Apple MacBook Pro 13-inch");// Verifica se o título do produto exibido corresponde ao esperado
        
    });
    it('login command', () => { Teste: // Teste: Comando de login
        // Visita a página inicial do site NopCommerce
        cy.visit("https://demo.nopcommerce.com/");
        //Login
        cy.clickLink("Log in"); //custom command // Utiliza o comando personalizado para clicar no link "Log in"
        cy.loginapp("testing@gmail.com","test123"); // custom command // Utiliza outro comando personalizado para fazer login com um usuário e senha específicos

        cy.get(".ico-account").should("have.text","My account"); // Verifica se o ícone "My account" está presente na página

    });
});