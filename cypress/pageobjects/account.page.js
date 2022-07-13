export class AccountPage {
    email = 'sad_dog@ukr.net'

    accountIcon = () => cy.get('[data-icon="angle-down"]', { timeout: 10000 }).first()
    loggedInAs = () => cy.get('[class="text-truncate"]')

    checkWhoIsLoggedIn = () => {
        this.accountIcon().trigger('mouseover')
        this.loggedInAs().should('have.text', this.email)
    }
}