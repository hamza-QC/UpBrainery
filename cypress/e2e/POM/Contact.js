

class Contact{

    Contactbutton(){
        const button =cy.get(':nth-child(8) > a > .fa')
        button.click()
        cy.get('.col-sm-12 > .title')
        .should('have.text', 'Contact Us')
    }
    Name(value){
        const field=cy.get('[data-qa="name"]', {timeout:2000})
        field.clear()
        field.type(value)
        return this
    }

    Email(value){
      const field=cy.get('[data-qa="email"]', {timeout:2000})
      field.clear()
      field.type(value)
      return this
    }
    Subject(value){
        const field=cy.get('[data-qa="subject"', {timeout:2000})
        field.clear()
        field.type(value)
        return this
    }
    Message(value){
        const field=cy.get('[data-qa="message"]', {timeout:2000})
        field.clear()
        field.type(value)
        return this
    }
    FileUpload(){
        cy.get('input[type=file]')
        .attachFile('photo-output (1).jpg')
    }
    SubmitAndBack(){
        const button =cy.get('[data-qa="submit-button"]')
        button.click()
        cy.get('.status')
        .should('have.text', 'Success! Your details have been submitted successfully.')
        const button2 =cy.get('#form-section > .btn')
        button2.click()
        cy.url().should('eq','https://automationexercise.com/')
    }
}
export default Contact