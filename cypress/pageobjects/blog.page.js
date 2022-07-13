export class BlogPage {

    messagingFilter = () => cy.get('[role="radio"]').first()
    newsAndEvents = () => cy.get('[role="radio"]').eq(7)
    firstArticle = () => cy.get('h2[class*="Text-sc"]').first()
    article = () => cy.get('[id="articles"] [class*="Text-sc"]')

    firstArticleText = '2022 guide to political campaign text messaging'
    articleText = 'No results found for "Messaging" with "News & Events"'

    checkFilters = () => {
        this.messagingFilter().click()
        this.firstArticle().should('have.text', this.firstArticleText)
        this.newsAndEvents().click()
        this.article().should('have.text', this.articleText)
    }
}