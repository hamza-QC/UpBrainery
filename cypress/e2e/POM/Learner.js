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
        cy.wait(2000)
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
  const dropdown=cy.get('.p-dropdown-label', {timeout:2000})
  dropdown.click()
  return this
}

Calender(){
  const button= cy.get(':nth-child(1) > .block', {timeout:3000})
  button.click()
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

  
  }
  export default Learner