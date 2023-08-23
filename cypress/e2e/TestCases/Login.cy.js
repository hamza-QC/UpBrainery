describe('Login', () => {
    it('Login', () => { 
  
        let url = Cypress.config().baseUrl;
  
        cy.visit(url);

        let user = Cypress.config().email;
        
        let pass = Cypress.config().password;
  
        cy.login(user, pass)
  
    })
  })
  