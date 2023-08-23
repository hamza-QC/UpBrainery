import Contact from "../POM/Contact";



 describe('Contact Us ',() => {
    it('Automating form',()=> {
        const obj = new Contact()

        let url = Cypress.config().baseUrl; 

        cy.visit(url);
        obj.Contactbutton()
        obj.Name('test')
        obj.Email('testing890@gmail.com')
        obj.Subject('Qurey')
        obj.Message('XYZ qurey')
        obj.FileUpload()
        obj.SubmitAndBack()
    } )
 })