// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//******* This is used only for login into the test site ********
Cypress.Commands.add('login', (usernameInputfield, passwordInputfield, signinbutton, email, password) => {
    cy.get(usernameInputfield).type(email)
      .get(passwordInputfield).type(password)
      .get(signinbutton).click()
      .wait(5000)
})

// This is for mouse hover on button(s) or link(s) and it comes with validation that when hover a certain element should popup
Cypress.Commands.add('hovermouseto', (element1, element2) => {
  cy.get(element1).trigger('mouseover')
    .wait(3000)
    .get(element2).should('be.visible')
})

//This is only to mouse hover out
Cypress.Commands.add('hovermouseOut', (element1) => {
  cy.get(element1).trigger('mouseout')
})


// This is to assert for correct text using the xpath selector
Cypress.Commands.add('assertTextusingXPATH', (element, text) => {
  cy.xpath(element)
    .wait(3000)
    .should('be.visible')
    .should('contain.text', text)
})

//This is to click a link or a button using css selector
Cypress.Commands.add('clickLinkbutton', (element) => {
  cy.get(element)
    .wait(3000)
    .should('be.visible')
    .should('not.be.disabled')
    .click()  
})

//This is to assert if element is visible and not disabled
Cypress.Commands.add('assertElement', (element) => {
  cy.get(element)
    .wait(3000)
    .should('be.visible')
    .should('not.be.disabled')
})

//This is to assert if element is exist and has its text
Cypress.Commands.add('assertElementandText', (element, text) => {
  cy.get(element)
    .wait(3000)
    .should('be.visible')
    .should('not.be.disabled')
    .should('contain.text', text)
})

//This is to assert if element is exist and has its text using xpath
Cypress.Commands.add('assertElementandTextusingXPATH', (element, text) => {
  cy.xpath(element)
    .wait(3000)
    .should('be.visible')
    .should('not.be.disabled')
    .should('contain.text', text)
})