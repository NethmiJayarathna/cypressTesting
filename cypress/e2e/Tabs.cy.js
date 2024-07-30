describe('Handle tab - approach1',(()=>{

    it.skip('Approach1',()=>{

        cy.visit("https://the-internet.herokuapp.com/windows") //parent window/tab

        cy.get('.example>a').invoke('removeAttr','target').click(); //clicking on link with removing target

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new') //child tab

        cy.wait(5000);

        //operations
        cy.go('back') //back to parent tab

    })


    it('Approach2',()=>{

        cy.visit("https://the-internet.herokuapp.com/windows") //parent window/tab

        //capture href attribute that have child tab link
        cy.get('.example>a').then((e)=>{

            let url=e.prop('href');

            cy.visit(url);

        })

        //validations target page
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new') //child tab

        cy.wait(5000);

        //operations
        cy.go('back') //back to parent tab

    })

}))