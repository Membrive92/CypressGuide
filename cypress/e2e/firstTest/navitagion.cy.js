describe('Navigation', ()=>{

    it('Navigate to first page', ()=>{
        cy.visit('https://askomdch.com/');
    })

    it('Refresh page', ()=>{
        cy.reload();
    })

    it('Forcing refresh page (cleaning cache)', ()=>{
        cy.visit('https://askomdch.com/store/');
        cy.reload();
    })

    it('Back to previous page', ()=>{
        cy.visit('https://askomdch.com/');
        cy.visit('https://askomdch.com/store/');
        cy.go('back');
        //another way is: cy.go(-1)
    })

    it('Navigate to forward in a page', ()=>{
        cy.visit('https://askomdch.com/');
        cy.visit('https://askomdch.com/store/');
        cy.go('back');
        cy.go('forward');
        //another way is: cy.go(1)
    })
})