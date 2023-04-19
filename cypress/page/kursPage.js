class KursPage {

    zadanieDomoweBtn = '[data-tour-step="homework"]'

    clickZadanieDomowe() {
        cy.intercept('**/flags').as('zadanieDomowePageLoaded')
        cy.get(this.zadanieDomoweBtn).should('contain', 'Zadanie domowe').click()
        cy.wait('@zadanieDomowePageLoaded', {timeout: 8000})
    }
}

export const kursPage = new KursPage()