describe('First Test', ()=>{

    it('Navigate to first page', ()=>{
        cy.visit('https://askomdch.com/')
    })

    it('Navigate to store page', ()=>{
        cy.visit('https://askomdch.com/store/')
    })
})