class HomePage {

    przejdzDoKursuBtn = '#go-to-the-course-homepage-widget'

    clickPrzejdzDoKursu() {
        cy.get(this.przejdzDoKursuBtn).should('be.visible').and('contain', 'Przejdź do kursu').click()
    }
}

export const homePage = new HomePage();