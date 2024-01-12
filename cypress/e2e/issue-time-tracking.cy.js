import { faker } from '@faker-js/faker';
describe('Issue time tracking creating, editing and deleting', () => {
  beforeEach(() => {     
    cy.visit('/');
    cy.url().should('eq', `${Cypress.env('baseUrl')}project/board`).then((url) => {    
      cy.visit(url + '/board');
      cy.contains('This is an issue of type: Task.').click();


     });


     });
     const getIssueDetailsModal = () => cy.get('[data-testid="modal:issue-details"]');

    it('Time Estimation Functionality', () => {
      const intialestimation = '0';

    //Adding Estimation
      getIssueDetailsModal().within(() => {}     );
        cy.contains('Original Estimate (hours)')
        cy.get('input[placeholder="Number"]').clear()
        .type('7');
        cy.contains('div', '7h estimated')
    //Assert that expected div, should be visible
        cy.contains('Original Estimate (hours)').should('to.be.visible')

    //Editing Estimation
      getIssueDetailsModal().within(() => {}     );

        cy.contains('Original Estimate (hours)')
        cy.get('input[placeholder="Number"]').clear()
        .type('10');
        cy.contains('div', '10h estimated')
    //Assert that expected div, should be visible
        cy.contains('Original Estimate (hours)').should('to.be.visible')

    //Removing Estimation
    getIssueDetailsModal()
       
     .contains('Original Estimate (hours)')
     cy.get('input[placeholder="Number"]').clear()
     cy.contains('div', '10h estimated')
     .click()
     .should('not.exist')

  



      
    });

  });
