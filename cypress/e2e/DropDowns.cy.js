/// <reference types = "Cypress" />

describe('handle dropdowns',()=>{

    it.skip('Dropdown with select',()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html?src=homepage")

        cy.get('#zcf_address_country').select('Italy').should('have.value','Italy')
        
    })

    it.skip('Dropdown without select',()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get('#select2-billing_country-container').click()

        cy.get('.select2-search__field').type('Italy').type('{enter}')

        cy.get('#select2-billing_country-container').should('have.text','Italy')
        
    })

    it.skip('Auto Suggest Dropdown',()=>{

        cy.visit("https://www.wikipedia.org/")

        cy.get('#searchInput').type('Delhi')

        cy.get('.suggestion-title').contains('Delhi University').click() // get all suggestions,choose one that we want and click
    
    })

    it('Dynamic Dropdown',()=>{

        cy.visit("https://www.google.com/")

        cy.get("textarea[name='q']").type('cypress automation')

        cy.wait(3000)

        cy.get('div.wM6W7d>span').should('have.length',13) // get all suggestions and count total number of suggetions

        //read each and every options in to this element
        cy.get('div.wM6W7d>span').each(($el,index,$list)=>{

            if($el.text()=='cypress automation tutorial') //comparing element into the text
                {
                    cy.wrap($el).click() // both are equal clicking the input box
                }
        })

        cy.get("textarea[name='q']").should('have.value','cypress automation tutorial') // checking input box has right value or not
    
    })
})