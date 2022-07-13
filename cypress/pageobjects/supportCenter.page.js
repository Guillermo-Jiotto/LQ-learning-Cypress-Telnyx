export class SupportCenterPage {
    
    topicName = () => cy.get('h2[class="t__h3 c__primary"]') //15 results

    getStart = 'Getting Started'
    configGuides = 'Configuration Guides'
    msgArticlesandGuides = 'Messaging Articles and Guides'
    voiceAndFax = 'Voice and Fax'
    portingArticlesAndGuides = 'Porting Articles and Guides'
    billingAndPricing = 'Billing & Pricing'
    programmableWireless = 'Programmable Wireless'
    toursAndVideos = 'Tours and Videos'
    faqAboutTelnyx = 'FAQs about Telnyx '
    internationalDID = 'International DID Requirements'
    bulkEditNumbers = 'Bulk Edit Numbers'
    reportingArticlesAndGuides = 'Reporting Articles and Guides'
    everythingSIP = 'Everything SIP'
    programmableApps = 'Programmable Applications'
    referenceMaterial = 'Reference Material'

    searchInput = () => cy.get('[class*="search__input"]')
    searchQuery = 'Quality assurance{enter}'
    searchResultsFor = () => cy.get('div[class="section__content"]')
    searchResultsForText = '\n      Search results for: Quality assurance\n    '
    firstSearchResult = () => cy.get('[class="c__primary"]').first()
    firstSearchResultText = 'Audiocodes: How to configure an Audiocodes SBC'


    verifyHeaders = () => {
        this.topicName().eq(0).should('have.text', this.getStart)
        this.topicName().eq(1).should('have.text', this.configGuides)
        this.topicName().eq(2).should('have.text', this.msgArticlesandGuides)
        this.topicName().eq(3).should('have.text', this.voiceAndFax)
        this.topicName().eq(4).should('have.text', this.portingArticlesAndGuides)
        this.topicName().eq(5).should('have.text', this.billingAndPricing)
        this.topicName().eq(6).should('have.text', this.programmableWireless)
        this.topicName().eq(7).should('have.text', this.toursAndVideos)
        this.topicName().eq(8).should('have.text', this.faqAboutTelnyx)
        this.topicName().eq(9).should('have.text', this.internationalDID)
        this.topicName().eq(10).should('have.text', this.bulkEditNumbers)
        this.topicName().eq(11).should('have.text', this.reportingArticlesAndGuides)
        this.topicName().eq(12).should('have.text', this.everythingSIP)
        this.topicName().eq(13).should('have.text', this.programmableApps)
        this.topicName().eq(14).should('have.text', this.referenceMaterial)
    }

    typeSearchQuery = () => {
        this.searchInput().click()
        this.searchInput().type(this.searchQuery)
    }

    checkResultsOfSearch = () => {
        this.searchResultsFor().should('have.text', this.searchResultsForText)
        this.firstSearchResult().should('have.text', this.firstSearchResultText)
    }
}