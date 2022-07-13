export class LoginPage {

    email = 'sad_dog@ukr.net'
    password = '!TestingTelnyx2402'

    emailInput = () => cy.get('[name="email"]', { timeout: 10000 }).first()
    passwordInput = () => cy.get('[name="password"]')
    logInButton = () => cy.get('button[type="submit"]').eq(1)

    logInProcess = () => {
        this.emailInput().type(this.email)
        this.passwordInput().type(this.password)
        this.logInButton().click()
    }
}