describe("handling frames",()=>{

    it('Approach1',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

        const iframe = cy.get("#mce_0_ifr") //getting the frame
            .its('0.contentDocument.body') //go to the document
            .should('be.visible') //check its visible or not
            .then(cy.wrap); //wrap thet element

        //iframe.clear().type("Welcome {ctrl+a}") ;(pass the value in the iFrame inputs)

        //cy.get("[arial-lable='Bold']").click() ;(basically click on the bold button)

    })

    
})