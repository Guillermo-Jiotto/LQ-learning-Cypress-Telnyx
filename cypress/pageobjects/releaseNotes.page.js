export class ReleaseNotesPage {

    videoRoomsCheckbox = () => cy.get('[class="sc-e117dd75-0 dERAgk"] rect').eq(3)
    firstArticleHeader = () => cy.get('[class="Text-sc-5o8owa-0 sc-d997c11f-1 dexjwF jEAeMj"]')

    firstArticleHeaderText = 'New Product Beta- Telnyx Video Rooms'

    checkVideoRooms = () => {
        this.videoRoomsCheckbox().click()
        this.firstArticleHeader().should('have.text', this.firstArticleHeaderText)
    }
}