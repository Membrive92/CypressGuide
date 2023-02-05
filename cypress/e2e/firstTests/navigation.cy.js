describe('Navigation', ()=>{

    it('Navigate to first page', ()=>{
        cy.visit('/');
    })

    it('Refresh page', ()=>{
        cy.reload();
    })

    it('Forcing refresh page (cleaning cache)', ()=>{
        cy.visit('/');
        cy.reload();
    })

    it('Back to previous page', ()=>{
        cy.visit('/');
        cy.visit('/');
        cy.go('back');
        //another way is: cy.go(-1)
    })

    it('Navigate to forward in a page', ()=>{
        cy.visit('/');
        cy.visit('/store/');
        cy.go('back');
        cy.go('forward');
        //another way is: cy.go(1)
    })
})