export class SignupPage {

    email = 'testing-this-24022022@gmail.com'

    confirmRegistrationText = "We've sent you an email to activate your account"
    fullName = 'Tom Waits'
    password = '!AmTestingThis13072022'
    inputErrorText = 'This field is required.'
    passwordRequirementsFirstText = 'Be at least 12 characters long'
    passwordRequirementsSecondText = 'Contain at least one number'
    passwordRequirementsThirdText = 'Contain at least one symbol'
    passwordRequirementsFourthText = 'Contain at least one upper-case letter'
    termsAndConditionsHeaderText = 'TELNYX TERMS AND CONDITIONS OF SERVICE'
    privacyPolicyHeaderText = 'Privacy Policy'

    emailInput = () => cy.get('[id="email"]')
    fullNameInput = () => cy.get('[id="full_name"]')
    passwordInput = () => cy.get('[id="password"]')
    termsAndConditionsCheckbox = () => cy.get('[aria-labelledby="terms-label"] rect')
    createAccountBtn = () => cy.get('[type="submit"]')
    confirmEmailMessage = () => cy.get('h1[class*="Text-sc-5o8owa-0"]')
    emailInputError = () => cy.get('[id="email_error"]')
    fullNameInputError = () => cy.get('[id="full_name_error"]')
    passwordRequirementsFirst = () => cy.get('[id="password_requirements"] div', { timeout: 10000 }).eq(1)
    passwordRequirementsSecond = () => cy.get('[id="password_requirements"] div').eq(2)
    passwordRequirementsThird = () => cy.get('[id="password_requirements"] div').eq(3)
    passwordRequirementsFourth = () => cy.get('[id="password_requirements"] div').eq(4)
    termsAndConditionsLink = () => cy.get('[href="/terms-and-conditions-of-service"]')
    privacyPolicyLink = () => cy.get('[href="/privacy-policy"]')
    termsAndConditionsHeader = () => cy.get('h1[class*="Text"]')
    privacyPolicyHeader = () => cy.get('h1[class*="Text"]')

    checkEmailValue = () => {
        this.emailInput().should('have.value', this.email)
    }

    registrationProcess = () => {        
        this.fullNameInput().type(this.fullName)
        this.passwordInput().type(this.password)
        this.termsAndConditionsCheckbox().click()
        this.createAccountBtn().click()
    }

    checkMessageAfterSignup = () => {
        this.confirmEmailMessage().should('have.text', this.confirmRegistrationText)
    }

    checkWarningMessages = () => {
        this.emailInput().click()
        this.fullNameInput().click()
        this.emailInputError().should('have.text', this.inputErrorText)
        this.passwordInput().click()
        this.fullNameInputError().should('have.text', this.inputErrorText)
        this.createAccountBtn().click()
        this.passwordRequirementsFirst().should('have.text', this.passwordRequirementsFirstText)
        this.passwordRequirementsSecond().should('have.text', this.passwordRequirementsSecondText)
        this.passwordRequirementsThird().should('have.text', this.passwordRequirementsThirdText)
        this.passwordRequirementsFourth().should('have.text', this.passwordRequirementsFourthText)
    }

    verifyTermsAndConditionsPage = () => {
        this.termsAndConditionsLink().invoke('removeAttr', 'target').click()
        this.termsAndConditionsHeader().should('have.text', this.termsAndConditionsHeaderText)
    }

    verifyPrivacyPolicyPage = () => {
        this.privacyPolicyLink().invoke('removeAttr', 'target').click()
        this.privacyPolicyHeader().should('have.text', this.privacyPolicyHeaderText)
    }
}