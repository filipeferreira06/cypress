//Hooks

// before
// after
// beforeEach
// afterEach

// Os hooks são usados para executar código antes ou depois de cada teste ou grupo de testes.

describe('MyTestSuite', () => { // Declaração de um conjunto de testes

    before(()=>{ // Hook before: executado uma vez antes de todos os testes do conjunto

        cy.log("****** Launch app *****");

    })
    after(()=>{ // Hook after: executado uma vez após todos os testes do conjunto

        cy.log("****** close app *****");

    })
    beforeEach(()=>{ // Hook beforeEach: executado antes de cada teste do conjunto

        cy.log("****** Login *****");

    })
    afterEach(()=>{ // Hook afterEach: executado após cada teste do conjunto

        cy.log("****** Logout *****");

    })

    it('Search', () => { // Teste: Pesquisar
        cy.log(" ****** searching ******");
    });
    it('advanced search', () => {   // Teste: Pesquisa avançada

        cy.log(" ****** advanced searching ******");
    });
    it('Listing Products', () => {  // Teste: Listagem de Produtos

        cy.log(" ****** Listing Products ******");
    });

});
