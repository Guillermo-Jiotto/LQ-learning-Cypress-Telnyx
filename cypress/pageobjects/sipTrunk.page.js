export class SipTrunkPage {

    countryDropdown = () => cy.get('[aria-haspopup="listbox"]').first()
    currencyDropdown = () => cy.get('[aria-haspopup="listbox"]').last()
    ukraineCountry = () => cy.get('a[href*="/pricing/elastic-sip/ua"]')
    mainHeader = () => cy.get('h1 span')
    eurCurrency = () => cy.get('[class="sc-ecffda1a-4 dCDohY"] div ul li').last()
    firstPrice = () => cy.get('[class="sc-3ef5d51e-18 emWxIX"]').first()
    talkToSalesBtn = () => cy.get('[href="/contact-us"]').last()

    mainHeaderText = 'SIP Trunk Pricing for Ukraine'
    firstPriceText = 'Starting at€0.1440 per minute'
    alertMessageText = 'This field is required.'
    salesURL = 'https://telnyx.com/contact-us'

    chooseCountry = () => {
        this.countryDropdown().click()
        this.ukraineCountry().click()
        this.mainHeader().should('have.text', this.mainHeaderText)
    }

    chooseCurrency = () => {
        this.currencyDropdown().click()
        this.eurCurrency().click()
        this.firstPrice().should('have.text', this.firstPriceText)
    }

    verifyTalkToSales = () => {
        this.talkToSalesBtn().scrollIntoView()
        this.talkToSalesBtn().click({force: true})
        cy.url().should('include', this.salesURL)
    }
}