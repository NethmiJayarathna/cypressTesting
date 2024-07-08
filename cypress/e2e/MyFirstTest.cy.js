
describe('My First Test', () => {
    it('verify title-Positive', () => {

        cy.visit("http://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
      
    })

    it('verify title-Negative', () => {

        cy.visit("http://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM123')
      
    })
  })

