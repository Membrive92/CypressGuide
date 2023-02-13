describe('Several assertions', ()=>{

    it('Assert in url', ()=>{
        cy.visit('/store');
        cy.url().should('include','mdch.com');
    })

    it('Assert visible element', ()=>{
        cy.visit('/store');
        cy.url().should('include','mdch.com');
        cy.get('.woocommerce-products-header__title').should('be.visible');
    })

    it('Assert element with specific attribute', ()=>{
        cy.visit('/account');
        cy.url().should('include','mdch.com');
        cy.get('#reg_username').should('be.visible').and('have.attr','name','username');
    })

    it('Assert element with specific attribute using .then for use variables or element out of cypress', ()=>{
        cy.visit('/account');
        cy.url().should('include','mdch.com');
        cy.get('#reg_username').then((element)=>{
            expect(element).to.be.visible;
            expect(element).to.have.attr('name','username');
        })
    })

    it('Assert element using .then and assert.equal method', ()=>{
        cy.visit('/account');
        cy.url().should('include','mdch.com');
        cy.get('#reg_username').then((element)=>{
            assert.equal(element.attr('name',),'username')
        })
    })
})