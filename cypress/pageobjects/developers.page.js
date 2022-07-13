export class DevelopersPage {

    joinDevelopersCommunityLink = () => cy.get('[href="https://community.telnyx.com/articles/171/welcome-to-the-telnyx-community-1.html"]').first()
    searchField = () => cy.get('[id="search-query"]')
    firstSearchResult = () => cy.get('[href="/articles/373/send-fax-with-go-and-telnyx-api.html"]')
    messagingLink = () => cy.get('[href="/docs/v2/messaging"]').last()
    seeTheSpecsBtn = () => cy.get('[color="primary"][href="/docs/api/v2/messaging"]')
    runInPostmanBtn = () => cy.get('[alt="Run in Postman"]')
    menuDropdown = () => cy.get('[id="explore-menu-dropdown"]')
    topicsFilter = () => cy.get('[id="explore_topics_link"]')
    topicsHeader = () => cy.get('h1[class="h3 d-inline capitalize"]')
    askQuestionBtn = () => cy.get('[id="create-button"]')
    askQuestionHeader = () => cy.get('h1[class="h2"]')
    yourQuestionInput = () => cy.get('[id="title"]')
    questionsBody = () => cy.get('[id="body"]')
    topicsInput = () => cy.get('[class="select2-search__field"]')
    topicsResult = () => cy.get('[id="topics-results-0"]')
    sectionDropdown = () => cy.get('[id="space_select-container"]')
    firstSectionResult = () => cy.get('[id="space_select-results-0"]')
    loginAndSubmitBtn = () => cy.get('[id="submit-question"]')
    afterSubmitWarning = () => cy.get('[class="alert alert-warning"]')
    questionFilter = () => cy.get('[id="question_explore_link"]')
    ideasFilter = () => cy.get('[id="idea_explore_link"]')
    articlesFilter = () => cy.get('[id="kbentry_explore_link"]')
    usersFilter = () => cy.get('[id="explore_users_link"]')
    badgesFilter = () => cy.get('[id="explore_awards_link"]')
    allQuestionsHeader = () => cy.get('h1[class="h3 d-inline capitalize"]')
    ideasHeader = () => cy.get('h1[class="h2"]')
    articlesHeader = () => cy.get('h1[class="h3 d-inline capitalize"]')
    usersHeader = () => cy.get('h1[class="h3 d-inline capitalize"]')
    badgesHeader = () => cy.get('h1[class="h3 d-inline capitalize"]')
    loginButton = () => cy.get('[id="login-link"]')
    signInButton = () => cy.get('[name="signin_button"]')
    alertMessage = () => cy.get('[role="alert"]')
    registrationBtn = () => cy.get('[href="/users/register.html"]')
    createUserBtn = () => cy.get('[id="bnewaccount"]')
    registrationAlertMessage = () => cy.get('[role="alert"]')
    forgotPasswordLink = () => cy.get('[href="/users/temporaryLogin/request.html"]')
    sendLoginBtn = () => cy.get('[type="submit"]')
    forgotPassAlert = () => cy.get('[role="alert"]')
    forgotPassWarning = () => cy.get('[class="help-inline"]')

    developersURL = 'https://community.telnyx.com/articles/'
    searchQuery = 'testing{enter}'
    firstSearchResultText = '\nSend Fax with Go and Telnyx API\n                '
    messagingURL = 'https://developers.telnyx.com/docs/v2/messaging'
    seeTheSpecsURL = 'https://developers.telnyx.com/docs/api/v2/messaging'
    postmanURL = 'https://god.gw.postman.com/run-collection/'
    topicsHeaderText = 'Список тем'
    askQuestionHeaderText = 'Задать вопрос'
    yourQuestionText = 'I am doing it for learning automation QA with Cypress'
    questionsBodyText = 'Sorry for spam. I will do it a few times more. Please delete this message.'
    topicsInputText = 'messaging'
    submitedQuestionMessage = '\nЭтот пост в настоящее время ожидает модерации.  Если вы считаете, это ошибка, обратитесь к системному администратору.            '
    allQuestionsHeaderText = '\nВсе вопросы                    '
    ideasHeaderText = '\nДобро пожаловать в новый TeamHub!\n'
    articlesHeaderText = '\nВсе статьи            '
    usersHeaderText = '\nПользователи            '
    badgesHeaderText = '\nЗначки                '
    alertMessageText = 'Your login attempt was not successful. Please try again.'
    registrationAlertMessageText = 'Ошибки в форме.  Пожалуйста, исправьте их, чтобы продолжить.'
    forgotPassAlertText = 'Ошибки в форме.  Пожалуйста, исправьте их, чтобы продолжить.'
    forgotPassWarningText = 'The email you entered is not present in our database.'

    checkSearchWork = () => {
        this.joinDevelopersCommunityLink().invoke('removeAttr', 'target').click()
        cy.url().should('include', this.developersURL)
        this.searchField().click()
        this.searchField().type(this.searchQuery)
        this.firstSearchResult().should('have.text', this.firstSearchResultText)
    }

    checkRunInPostmanFunction = () => {
        this.messagingLink().click()
        cy.url().should('eq', this.messagingURL)
        this.seeTheSpecsBtn().click()
        cy.url().should('include', this.seeTheSpecsURL)
        this.runInPostmanBtn().invoke('removeAttr', 'target').click()
        cy.url().should('include', this.postmanURL)
    }

    checkTopicFilters = () => {
        this.joinDevelopersCommunityLink().invoke('removeAttr', 'target').click()
        cy.url().should('include', this.developersURL)
        this.menuDropdown().click()
        this.topicsFilter().click()
        this.topicsHeader().should('have.text', this.topicsHeaderText)
    }

    goToAskQuestionForm = () => {
        this.joinDevelopersCommunityLink().invoke('removeAttr', 'target').click()
        cy.url().should('include', this.developersURL)
        this.askQuestionBtn().click()
        this.askQuestionHeader().should('have.text', this.askQuestionHeaderText)
    }

    createQuestion = () => {
        this.yourQuestionInput().type(this.yourQuestionText)
        this.questionsBody().type(this.questionsBodyText)
        this.topicsInput().type(this.topicsInputText)
        this.topicsResult().click()
        this.sectionDropdown().click()
        this.firstSectionResult().click()
        this.loginAndSubmitBtn().click()
        this.afterSubmitWarning().should('have.text', this.submitedQuestionMessage)
    }

    checkQuestionFilter = () => {
        this.joinDevelopersCommunityLink().invoke('removeAttr', 'target').click()
        cy.url().should('include', this.developersURL)
        this.menuDropdown().click()        
        this.questionFilter().click()
        this.allQuestionsHeader().should('have.text', this.allQuestionsHeaderText)
    }

    checkIdeasFilter = () => {
        this.joinDevelopersCommunityLink().invoke('removeAttr', 'target').click()
        cy.url().should('include', this.developersURL)
        this.menuDropdown().click()        
        this.ideasFilter().click()
        this.ideasHeader().should('have.text', this.ideasHeaderText)
    }

    checkArticlesFilter = () => {
        this.joinDevelopersCommunityLink().invoke('removeAttr', 'target').click()
        cy.url().should('include', this.developersURL)
        this.menuDropdown().click()        
        this.articlesFilter().click()
        this.articlesHeader().should('have.text', this.articlesHeaderText)
    }

    checkUsersFilter = () => {
        this.joinDevelopersCommunityLink().invoke('removeAttr', 'target').click()
        cy.url().should('include', this.developersURL)
        this.menuDropdown().click()        
        this.usersFilter().click()
        this.usersHeader().should('have.text', this.usersHeaderText)
    }

    checkBadgesFilter = () => {
        this.joinDevelopersCommunityLink().invoke('removeAttr', 'target').click()
        cy.url().should('include', this.developersURL)
        this.menuDropdown().click()        
        this.badgesFilter().click()
        this.badgesHeader().should('have.text', this.badgesHeaderText)
    }

    verifyLoginWarnMessages = () => {
        this.joinDevelopersCommunityLink().invoke('removeAttr', 'target').click()
        cy.url().should('include', this.developersURL)
        this.loginButton().click()
        this.signInButton().click()
        this.alertMessage().should('have.text', this.alertMessageText)
    }

    verifyRegistrationWarnMessages = () => {
        this.joinDevelopersCommunityLink().invoke('removeAttr', 'target').click()
        cy.url().should('include', this.developersURL)
        this.loginButton().click()
        this.registrationBtn().click()
        this.createUserBtn().click()
        this.registrationAlertMessage().should('have.text', this.registrationAlertMessageText)
    }

    verifyWarnMessageInForgotPass = () => {
        this.joinDevelopersCommunityLink().invoke('removeAttr', 'target').click()
        cy.url().should('include', this.developersURL)
        this.loginButton().click()
        this.forgotPasswordLink().click()
        this.sendLoginBtn().click()
        this.forgotPassAlert().should('have.text', this.forgotPassAlertText)
        this.forgotPassWarning().should('have.text', this.forgotPassWarningText)
    }
}