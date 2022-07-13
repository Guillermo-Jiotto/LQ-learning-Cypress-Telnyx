import { AccountPage } from "../pageobjects/account.page.js"
import { BlogPage } from "../pageobjects/blog.page.js"
import { CalculatorPage } from "../pageobjects/calculator.page.js"
import { DevelopersPage } from "../pageobjects/developers.page.js"
import { LoginPage } from "../pageobjects/login.page.js"
import { MainPage } from "../pageobjects/main.page.js"
import { ReleaseNotesPage } from "../pageobjects/releaseNotes.page.js"
import { SignupPage } from "../pageobjects/signup.page.js"
import { SipTrunkPage } from "../pageobjects/sipTrunk.page.js"
import { SupportCenterPage } from "../pageobjects/supportCenter.page.js"

describe('Telnyx testing', () => {

  const mainPage = new MainPage()
  const signupPage = new SignupPage()
  const loginPage = new LoginPage()
  const accountPage = new AccountPage()
  const supportCenterPage = new SupportCenterPage()
  const developersPage = new DevelopersPage()
  const sipTrunkPage = new SipTrunkPage()
  const blogPage = new BlogPage()
  const releaseNotesPage = new ReleaseNotesPage()
  const calculatorPage = new CalculatorPage()

  beforeEach(() => {
    cy.viewport(1680, 1050)
    mainPage.goToTelnyx()
  })

  it('1. Registration through "Try for free ->" button', () => {
    mainPage.acceptCookies()
    mainPage.enterEmail();
    signupPage.checkEmailValue();
    signupPage.registrationProcess();
    signupPage.checkMessageAfterSignup();
  })

  it('2. Login with email', () => {
    mainPage.loginClick()
    loginPage.logInProcess()
    accountPage.checkWhoIsLoggedIn()
  })

  it('3. Check warning messages on Sig-up page', () => {
    mainPage.signUpClick()
    signupPage.checkWarningMessages()
  })

  it('4. Verify Terms & Conditions page', () => {
    mainPage.signUpClick()
    signupPage.verifyTermsAndConditionsPage()
  })

  it('5. Verify Privacy Policy page', () => {
    mainPage.signUpClick()
    signupPage.verifyPrivacyPolicyPage()
  })

  it('6. Verify Supoprt Center page', () => {
    mainPage.supportCenterClick()
    supportCenterPage.verifyHeaders()
  })

  it('7. Check search work on Support Center page', () => {
    mainPage.supportCenterClick()
    supportCenterPage.typeSearchQuery()
    supportCenterPage.checkResultsOfSearch()
  })

  it('8. Check LinkedIn share link', () => {
    mainPage.checkLinkedinShare()
  })

  it('9. Check Twitter share link', () => {
    mainPage.checkTwitterShare()
  })

  it('10. Check Facebook share link', () => {
    mainPage.checkFacebookShare()
  })

  it('11. Verify “Switch+Save with Telnyx” form', () => {
    mainPage.checkSwitchSaveForm()
  })

  it('12. Verify “Run API with Postman” function', () => {
    mainPage.learnMoreClick()
    developersPage.checkRunInPostmanFunction()
  })

  it('13. Check search work on Developer Community page', () => {
    mainPage.learnMoreClick()
    developersPage.checkSearchWork()
  })

  it('14. Verify work of Topic filter in Developer Community', () => {
    mainPage.developersDocsClick()
    developersPage.checkTopicFilters()
  })

  it('15. Verify work of Ask Question form', () => {
    mainPage.developersDocsClick()
    developersPage.goToAskQuestionForm()
    developersPage.createQuestion()
  })

  it('16. Verify work of Questions filter in Developer Community', () => {
    mainPage.developersDocsClick()
    developersPage.checkQuestionFilter()
  })

  it('17. Verify work of Ideas filter in Developer Community', () => {
    mainPage.developersDocsClick()
    developersPage.checkIdeasFilter()
  })

  it('18. Verify work of Articles filter in Developer Community', () => {
    mainPage.developersDocsClick()
    developersPage.checkArticlesFilter()
  })

  it('19. Verify work of Users filter in Developer Community', () => {
    mainPage.developersDocsClick()
    developersPage.checkUsersFilter()
  })

  it('20. Verify work of Badges filter in Developer Community', () => {
    mainPage.developersDocsClick()
    developersPage.checkBadgesFilter()
  })

  it('21. Verify warning message in Login to Developer Community', () => {
    mainPage.developersDocsClick()
    developersPage.verifyLoginWarnMessages()
  })

  it('22. Verify warning message in Registration to Developer Community', () => {
    mainPage.developersDocsClick()
    developersPage.verifyRegistrationWarnMessages()
  })

  it('23. Verify warning message in Forgot Password to Developer Community', () => {
    mainPage.developersDocsClick()
    developersPage.verifyWarnMessageInForgotPass()
  })

  it('24. Verify SIP Trunk Pricing for Ukraine', () => {
    mainPage.sipTrunkingClick()
    sipTrunkPage.chooseCountry()
    sipTrunkPage.chooseCurrency()
  })

  it('25. Verify talk to sales in Download SIP Trunking pricing', () => {
    mainPage.sipTrunkingClick()
    sipTrunkPage.verifyTalkToSales()
  })

  it('26. Check search filters in Blog', () => {
    mainPage.blogLinkClick()
    blogPage.checkFilters()
  })

  it('27. Verify Release Notes for Video Rooms', () => {
    mainPage.releaseNotesClick()
    releaseNotesPage.checkVideoRooms()
  })

  it('28. Verify all pricing page', () => {
    mainPage.verifyAllPricingPage()
  })

  it('29. Check work of Savings Calculator', () => {
    mainPage.savingsCalculatorClick()
    calculatorPage.checkPrice()
  })

  it('30. Verify Careers position Core Network Engineer', () => {
    mainPage.checkCareers()
  })
})