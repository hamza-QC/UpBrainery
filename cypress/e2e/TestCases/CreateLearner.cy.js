import Learner from '../POM/Learner';

describe('Create a Learner', () => {
    it('Create a Learner', () => {
        const obj = new Learner()

        let url = Cypress.config().baseUrl; 

        cy.visit(url); 
        
        cy.title().should('eq','UpBrainery')

        let user = Cypress.config().email;
        
        let pass = Cypress.config().password;
  
        cy.login(user, pass)
        cy.wait(2000)

        obj.ClickonUsers()
        obj.ClickonLearner()
        obj.ClickonCreate()
        obj.FName('Testing')
        obj.Lname('1230')
        obj.Email()
        obj.UserName()
        obj.Dropdown()
        obj.Calender('08/16/2023')
        obj.Password('Happy4You@')
        obj.ConfirmPassword('Happy4You@')
        obj.Submit()
    })
})
