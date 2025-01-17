describe("Assertions demo", () =>{

    it("Implicit assertions", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // should  and

        //check the url
        //cy.url().should('include','orangehrmlive.com')
        //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contain','orangehrm')

        //cy.url().should('include','orangehrmlive.com')
        //.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //.should('contain','orangehrm')

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        .and('not.contain','greenhrm')

        //check the title
        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        //check the Logo is present and exist or not
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        //find the no of links that available in the web page
        cy.xpath('//a').should('have.length','5')

        //provide a value into inputbox
        cy.get("input[placeholder='Username']").type("Admin")
        //check the value
        cy.get("input[placeholder='Username']").should('have.value','Admin')
    
    })


    it("Explicit assertions", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get(" button[type='submit']").click()

        let expName="Test 63 user";

        cy.get(".oxd-userdropdown-name").then(   (x)=>{

            let actName=x.text()

            //BDD Style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            //TDD Style
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)

        })
       
    })
})