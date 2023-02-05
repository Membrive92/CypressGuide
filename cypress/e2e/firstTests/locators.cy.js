require('@cypress/xpath');

describe('Locators', ()=>{

    it('Get locator using tag', ()=>{
        cy.visit('/account');
        cy.get('input');
    })

    it('Get locator using attribute', ()=>{
        cy.visit('/account');
        cy.get('[name="username"]');
    })

    it('Get locator using attribute and tag', ()=>{
        cy.visit('/account');
        cy.get('input[name="username"]');
    })

    it('Get locator using id', ()=>{
        cy.visit('/account');
        cy.get('#username');
    })

    it('Get locator using class', ()=>{
        cy.visit('/account');
        cy.get('.woocommerce-Button.woocommerce-button.button.woocommerce-form-register__submit');
    })

    it('Get locator using xpath', ()=>{
        cy.visit('/account');
        cy.xpath('//*[@id="username"]');
    })

})