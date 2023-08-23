
class Logouts{

    LogoutTheUser(){
        const button=cy.get('#user-menu-button',{timeout:3000})
        button.click()
        const button2 = cy.get(':nth-child(2) > .p-menuitem-link',{timeout:3000})
        button2.click()
     //   cy.url().should('include','/login')
    }

}
export default Logouts