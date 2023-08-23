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
Cypress.Commands.add('login', (user, pass) => {  

  
    cy.get('.auth-card-title')
      .should('have.text', 'Sign In')

    cy.get('#float-input').type(user,{timeout: 3000})

    cy.get('.p-password > .p-inputtext').type(pass ,{timeout: 3000})

    cy.get('.btn-user-auth').click()

})
import 'cypress-file-upload'