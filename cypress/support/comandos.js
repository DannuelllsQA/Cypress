Cypress.Commands.add('escribir', (selector, dato) => { 

    cy.get(selector).type(dato)
    
})

Cypress.Commands.add('ingresar', (selector) => { 

    cy.get(selector).click()
    
})
