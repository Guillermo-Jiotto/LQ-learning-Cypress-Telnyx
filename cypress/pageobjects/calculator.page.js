export class CalculatorPage {

    messagingBtn = () => cy.get('[alt="messaging api"]')
    continueBtn = () => cy.get('[class="sc-5d3a275a-1 sc-5d3a275a-3 sc-5d3a275a-4 sc-5d3a275a-7 cSsJix UYAGn eUnEoi hBNXWZ"]')
    secondStepHeader = () => cy.get('[class="Text-sc-5o8owa-0 sc-8143a648-3 knOJT cTxamq"]')

    secondStepHeaderText = 'How many phone numbers do you use?'

    checkPrice = () => {
        this.messagingBtn().click()
        this.continueBtn().click()
        this.secondStepHeader().should('have.text', this.secondStepHeaderText)
    }
}