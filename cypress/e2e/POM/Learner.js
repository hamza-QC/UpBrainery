import { should } from "chai"
import { select } from "xpath"

class Learner {

    ClickonUsers(){
    const button= cy.get('#mobile-menu-2 > :nth-child(4)', {timeout:3000})
    button.trigger('mouseenter')
    }

    ClickonLearner(){
      const button= cy.get(':nth-child(1) > .block', {timeout:3000})
      button.click()
      }

      ClickonCreate(){
        const button= cy.get('.cursor-pointer > .mr-1', {timeout:3000})
        button.click()
        cy.wait(1000)
        }

  
    FName(value){
        const field=cy.get('#fname', {timeout:2000})
        field.clear()
        field.type(value).should('have.text','')
        return this
    }

    Lname(value){
      const field=cy.get('#lname', {timeout:2000})
      field.clear()
      field.type(value)
      return this
  }

  Email(){
    const email = `user_${Math.floor(Math.random() * 100000)}@${Cypress.config('emailDomain')}`;
    const field=cy.get('#email', {timeout:2000})
    field.clear()
    field.type(email)
    return this
} 
  UserName(){
    const username= `user-${Math.floor(Math.random() * 100000)}`;
  const field=cy.get('#Username', {timeout:2000})
  field.clear()
  field.type(username)
  return this
}

Dropdown(){
  const button=cy.get('.p-dropdown-trigger', {timeout:2000}).click()
  const button2= cy.get('[ng-reflect-label="1-5"] > .p-ripple').click()
}

Calender(){
  const Cal1= cy.get('#date > .form-control', {timeout:2000}).click()
  const Cal2= cy.get(':nth-child(1) > :nth-child(3) > .p-ripple').click()

  }

Password(value){
  const field=cy.get('#password', {timeout:2000})
  field.clear()
  field.type(value)
  return this
}

ConfirmPassword(value){
  const field=cy.get('#confirmPassword', {timeout:2000})
  field.clear()
  field.type(value)
  return this
} 

Submit(){
  const button= cy.get('.btn-create-acc', {timeout:3000})
  button.click()
  cy.wait(1000)
  cy.get('#toast-container > .ng-trigger').should('have.text', ' Learner Account Created Successfully ')
  }

  
  }
  export default Learner