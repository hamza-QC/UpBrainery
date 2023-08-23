import Learner from '../POM/Learner';

describe('Register', () => {
    it('Registering a User', () => {
        const obj = new Learner()

        let url = Cypress.config().baseUrl; 

        cy.visit(url); 
        
        cy.title().should('eq','UpBrainery')

        let user = Cypress.config().email;
        
        let pass = Cypress.config().password;
  
        cy.login(user, pass)

        obj.ClickonUsers()
        obj.ClickonLearner()
        obj.ClickonCreate()
        obj.FName('Testing')
        obj.Lname('1230')
        obj.Email()
        obj.UserName()
        obj.Dropdown()
    })
})
