export class MainPage {

    email = 'testing-this-24022022@gmail.com'

    acceptCookiesButton = () => cy.get('[class="sc-5d3a275a-0 jdjrgE"] button[class*="sc-5d3a275a-1"]')
    emailInput = () => cy.get('[type="email"]')
    tryForFreeBtn = () => cy.get('[type="submit"]')
    logInLink = () => cy.get('[href="https://portal.telnyx.com/"]').first()
    signupBtn = () => cy.get('[href="/sign-up"]').eq(1)
    supportCenterLink = () => cy.get('[href="https://support.telnyx.com"]', { timeout: 10000 }).first()
    linkedInLink = () => cy.get('[href="https://www.linkedin.com/company/telnyx/"]')
    twitterLink = () => cy.get('[href="https://twitter.com/telnyx"]')
    facebookLink = () => cy.get('[href="https://www.facebook.com/Telnyx/"]')
    switchSaveHeader = () => cy.get('[href="https://telnyx.com/sign-up"] span')
    voiceBtn = () => cy.get('[class="Button__StyledDefaultButton-vntg8h-0 bHtbuT"]')
    localNumbersRadioBtn = () => cy.get('[for="local-numbers"]', { timeout: 10000 })
    yesRadioBtn = () => cy.get('[id="yes"]', { timeout: 10000 })
    telnyxMonthPrice = () => cy.get('[class="sc-1a5981e5-12 gVMLpl"]')
    apiDevelopersHeader = () => cy.get('[class="Text-sc-5o8owa-0 sc-7b4ce54b-6 gkWopw ibjOTc"]')
    learnMoreLink = () => cy.get('[href="https://developers.telnyx.com/docs"]').eq(1)
    developersDocsLink = () => cy.get('[href="https://developers.telnyx.com/docs"]').last()
    sipTrunkingLink = () => cy.get('[href="/pricing/elastic-sip"]').last()
    sipTrunkingHeader = () => cy.get('h1 span')
    blogLink = () => cy.get('[href="/resources"]').last()
    releaseNotesLink = () => cy.get('[href="/release-notes"]')
    pricingMenu = () => cy.get('[class="Text-sc-5o8owa-0 sc-7b3980dc-7 czgqGc khahzD"]').last()
    seeAllPricingLink = () => cy.get('[href="/pricing"]')
    allPricingHeader = () => cy.get('h1[class*="Text-sc"] span')
    resourcesMenu = () => cy.get('[class="Text-sc-5o8owa-0 sc-7b3980dc-7 czgqGc khahzD"]').eq(3)
    calculatorLink = () => cy.get('[href="/twilio-pricing-calculator"]')
    careersLink = () => cy.get('[href="/company/careers"]').last()
    coreNetworkEngineerLink = () => cy.get('[href="https://boards.greenhouse.io/telnyx54/jobs/4920895003"]')
    applyButton = () => cy.get('[id="apply_button"]')
    applyHeading = () => cy.get('[class="heading"]')

    linkedinURL = 'https://www.linkedin.com/'
    twitterURL = 'https://twitter.com/telnyx'
    facebookURL = 'https://www.facebook.com/Telnyx/'
    telnyxMonthPriceValue = '$2,578'
    learnMoreURL = 'https://developers.telnyx.com/docs/'
    sipTrunkingHeaderText = 'SIP Trunk Pricing'
    blogURL = 'https://telnyx.com/resources'
    releaseNotesURL = 'https://telnyx.com/release-notes'
    allPricingHeaderText = 'Only pay for what you use'
    calculatorURL = 'https://telnyx.com/twilio-pricing-calculator'
    careerURL = 'https://boards.greenhouse.io/'
    
    goToTelnyx = () => {
        cy.visit('https://telnyx.com/')
    }

    acceptCookies = () => {
        this.acceptCookiesButton().click()
    }

    enterEmail = () => {
        this.emailInput().type(this.email)
        this.tryForFreeBtn().click()
    }

    loginClick = () => {
        this.logInLink().click()
    }

    signUpClick = () => {
        this.signupBtn().click()
    }

    supportCenterClick = () => {
        this.supportCenterLink().click()
    }

    checkLinkedinShare = () => {
        this.linkedInLink().scrollIntoView()
        this.linkedInLink().invoke('removeAttr', 'target').click()
        cy.url().should('include', this.linkedinURL)
    }

    checkTwitterShare = () => {
        this.twitterLink().scrollIntoView()
        this.twitterLink().invoke('removeAttr', 'target').click()
        cy.url().should('include', this.twitterURL)
    }

    checkFacebookShare = () => {
        this.facebookLink().scrollIntoView()
        this.facebookLink().invoke('removeAttr', 'target').click()
        cy.url().should('include', this.facebookURL)
    }

    checkSwitchSaveForm = () => {
        this.switchSaveHeader().scrollIntoView()
        this.voiceBtn().click()
        this.localNumbersRadioBtn().click()
        this.yesRadioBtn().click()
        this.telnyxMonthPrice().should('have.text', this.telnyxMonthPriceValue)
    }

    learnMoreClick = () => {
        this.apiDevelopersHeader().scrollIntoView()
        this.learnMoreLink().click()
        cy.url().should('include', this.learnMoreURL)
    }

    developersDocsClick = () => {
        this.developersDocsLink().invoke('removeAttr', 'target').click()
        cy.url().should('include', this.learnMoreURL)
    }

    sipTrunkingClick = () => {
        this.sipTrunkingLink().click()
        this.sipTrunkingHeader().should('have.text', this.sipTrunkingHeaderText)
    }

    blogLinkClick = () => {
        this.blogLink().click()
        cy.url().should('include', this.blogURL)
    }

    releaseNotesClick = () => {
        this.releaseNotesLink().click()
        cy.url().should('include', this.releaseNotesURL)
    }

    verifyAllPricingPage = () => {
        this.pricingMenu().trigger('mouseover')
        this.seeAllPricingLink().click({force: true})
        this.allPricingHeader().should('have.text', this.allPricingHeaderText)
    }

    savingsCalculatorClick = () => {
        this.resourcesMenu().trigger('mouseover')
        this.calculatorLink().click({force: true})
        cy.url().should('include', this.calculatorURL)
    }

    checkCareers = () => {
        this.careersLink().click()
        this.coreNetworkEngineerLink().invoke('removeAttr', 'target').click()
        cy.url().should('include', this.careerURL)
        this.applyButton().click()
        this.applyHeading().should('be.visible')
    }

}