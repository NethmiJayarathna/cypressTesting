/// <reference types = "Cypress" />

describe('Alerts', ()=>{

    //1) Javascript Alert: It will have some text and an 'OK' button

    it('JS Alert', ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert',(t)=>{

            expect(t).to.contains('I am a JS Alert'); // validating the text on the alret window

        })

        //alert windoe automatically closed by cypress

        cy.get("#result").should('have.text','You successfully clicked an alert') // after closing alert message this message should be present(validate it)

    })
   

    //2) Javascript Confirm Alert: It will have some text with 'OK' and 'Cancle' button

    it('JS Confirm Alert - OK', ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(t)=>{

            expect(t).to.contains('I am a JS Confirm'); // validating the text on the alret window

        }) 

        //cypress will automatically closed the alert window by using ok button-default

        cy.get('#result').should('have.text','You clicked: Ok')
    
    })

    it('JS Confirm Alert - Cancel', ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(t)=>{

            expect(t).to.contains('I am a JS Confirm'); // validating the text on the alret window

        }) 

        cy.on('window:confirm',()=> false); //cypress closes alert window by using cancel button

        cy.get('#result').should('have.text','You clicked: Cancel')
    
    })


    //3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK'

    it('JS Prompt Alert - Cancel', ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('welcome');

        })

        cy.get("button[onclick='jsPrompt()']").click();

        //cypress will automatically close prompted alert - it will use OK button-default

        //cy.on('window:prompt',()=> false); //cypress closes alert window by using cancel button

        cy.get("#result").should('have.text','You entered: welcome');

    })
    

    //4) Authenticated Alert
    it.only('JS Authentication Alert - Cancel', ()=>{

        //Approach 1

        /*cy.visit("https://the-internet.herokuapp.com/basic_auth",{ auth:
                                                                    {
                                                                        username:"admin",
                                                                        password:"admin"
                                                                    }
                                                                } );

        cy.get("div[class='example'] p").should('have.contain','Congratulations')*/


        //Approach2("https://admin:admin@the-internet.herokuapp.com/basic_auth")

        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

        cy.get("div[class='example'] p").should('have.contain','Congratulations');

    })

})