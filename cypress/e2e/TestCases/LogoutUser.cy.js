import Logouts from '../POM/Logouts';


describe('Logouts', () => {
    it('Logout user', () => { 

        const obj= new Logouts()
  
        let url = Cypress.config().baseUrl;
  
        cy.visit(url);

        let user = Cypress.config().email;
        
        let pass = Cypress.config().password;
  
        cy.login(user, pass)

        obj.LogoutTheUser()
    })
  })
  