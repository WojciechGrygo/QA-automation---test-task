import { homePage } from '../page/homePage'
import { kursPage } from '../page/kursPage'
import { zadanieDomowePage } from '../page/zadanieDomowePage'

describe('Test', () => {

  before(() => {
    cy.login()
  })

  it('Upload and send your homework again', () => {
    homePage.clickPrzejdzDoKursu()
    kursPage.clickZadanieDomowe()
    zadanieDomowePage.sendHomeworkAgain()
  })
})