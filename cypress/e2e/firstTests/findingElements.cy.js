describe('Several ways of find elements', ()=>{

    it('Using contains', ()=>{
        cy.visit('/store');
        cy.contains('.woocommerce-loop-product__title','Black Over-the-shoulder Handbag');
    })

    it('Using parents', ()=>{
        cy.visit('/account');
        cy.get('label[for=username]').parent();
        //find all parents that are 'p' tags
        cy.get('label[for=username]').parents().find('p');
        cy.get('form').find('label');
    })

    it('Saving elements and asserts', ()=>{
        cy.visit('/account');
        // get parents type form an do things in then
        cy.get('label[for=password]').parents('form').then(form =>{
            const inputs = form.find('input');
            const labels = form.find('label');

            //assertion
            expect(labels.length).to.greaterThan(1);
        })
    })
})