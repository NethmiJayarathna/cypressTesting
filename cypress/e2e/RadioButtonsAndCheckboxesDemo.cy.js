/// <reference types = "Cypress" />

describe("Check UI Elements", () => {

    it("Checking Radio Buttons", () => {
        
        cy.visit("https://demoqa.com/radio-button")

        //Visibility of radio buttons
        cy.get("input#impressiveRadio").should('be.visible')
        cy.get("input#yesRadio").should('be.visible')

        //Selecting radio button
        cy.get("input#yesRadio").check().should('be.checked')
        cy.get("input#impressiveRadio").should('not.be.checked')

        cy.get("input#impressiveRadio").check().should('be.checked')
        cy.get("input#yesRadio").should('not.be.checked') 

    })


    it("Checking Check Boxes", () => {
        
        cy.visit("https://demoqa.com/radio-button")

        //Visibility of the element
        cy.get("input#tree-node-desktop").should('be.visible')

        //Selecting single checkbox
        cy.get("input#tree-node-desktop").check().should('be.checked')
        
        //Unselecting the checkbox
        cy.get("input#tree-node-desktop").uncheck().should('not.be.checked')

        //Selecting all the checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

        //Unselecting all the checkboxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //Select First checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')

        //Select last checkbox
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')


    })
})