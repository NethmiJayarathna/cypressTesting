describe('CSSLocators', () =>{

    it('csslocators', () =>{
        
        cy.visit("http://www.automationpractice.pl/index.php")

        //cy.get("#search_query_top").type("T-Shirts") //id
        //cy.get(".search_query").type("T-Shirts") //class
        //cy.get("[name='search_query']").type("T-Shirts") //attribute

        cy.get("input.search_query[name='search_query']").type("T-Shirts") // tag , class and attribute combination

        cy.get("[name='submit_search']").click()

        cy.get(".lighter").contains("T-Shirts") //Assersion

    })
})