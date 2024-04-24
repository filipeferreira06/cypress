// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress"/>

const cypress = require("cypress");


// custom command for clicking on link using label

Cypress.Commands.add("clickLink",(label) =>{ // Comando personalizado para clicar em um link usando o rótulo // Adiciona um novo comando Cypress chamado 'clickLink'
    cy.get("a").contains(label).click(); // Localiza um elemento <a> que contenha o texto especificado pelo rótulo e clica nele  // Localiza e clica no link que contém o texto especificado pelo rótulo
        
})


//Over wrtite  contains () // Sobrescrever o comando contains()

/*Cypress.Commands.overwrite('contains',(originalFn, subject, filter, text, options ={})=>{
    //determine if a filter argument was passed
    if (typeof text === "object") {
        options = text
        text = filter
        filter = undefined
    }

    options.matchCase = false

    return originalFn( subject, filter, text, options)

})*/

//Custom command for login

Cypress.Commands.add("loginapp",(email,password)=>{ // Comando personalizado para login
    cy.get("#Email").type(email); // Preenche o campo de e-mail com o e-mail fornecido
    cy.get("#Passoword").type(password);  // Preenche o campo de senha com a senha fornecida
    cy.get("body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body > div.customer-blocks > div.returning-wrapper.fieldset > form > div.buttons > button").click();    // Clica no botão de login
})