class ZadanieDomowePage {

    uploadInput = 'input[type=file]'
    uploadedFile = '[download]'

    deleteHomework() {
        cy.contains('[type="button"]', 'Usuń').click()
        cy.intercept('**/list?homeworkId=**').as('fileDeleted')
        cy.wait('@fileDeleted')
    }

    editHomework() {
        cy.contains('Edytować nadesłane').click()
    }

    sendHomework() {
        cy.intercept('**/send').as('homeworkSent')
        cy.contains('Ponownie prześlij pracę domową').click()
        cy.wait('@homeworkSent')
    }

    sendHomeworkAgain() {
        cy.get("body").then($body => {
            if ($body.find(this.uploadedFile).length > 0) {
                this.editHomework()
                this.deleteHomework()
            }
        }) // if homework is already loaded, delete it
        this.uploadHomework()
        this.verifyIfHomeworkIsUploaded()
        this.sendHomework()
    }

    uploadHomework() {
        cy.get(this.uploadInput).attachFile('testFile.pdf')
    }

    verifyIfHomeworkIsUploaded() {
        cy.contains('Prześlij kolejny plik o rozmiarze do 5 Mb').should('be.visible')
        cy.get(this.uploadedFile).within(() => {
            cy.contains('testFile.pdf').should('be.visible')
            cy.contains('0.05 MB').should('be.visible')
        })
    }
}

export const zadanieDomowePage = new ZadanieDomowePage()