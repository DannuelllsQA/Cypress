/// <reference types="Cypress" />
describe('template spec', () => {
  beforeEach('passes', () => {
    cy.visit('/') //ingresamos a la url predefinida en cypres.config
  })

  it('passes', () => {
   cy.get('[data-test="username"]').type('standard_user') // ingresamos el usuario
   cy.get('[data-test="password"]').type('secret_sauce')	// ingresamos a la password
   cy.get('[data-test="login-button"]').click()	//hacemos click en ingresar
   cy.get('#react-burger-menu-btn').click()	//ingresamos al menu (burguer)
   cy.screenshot('imagen') //hacemos una captura
   cy.get('[data-test="logout-sidebar-link"]').click() //cerramos sesion
   cy.get('#root > div > div.login_logo').should('have.text','Laboratorio') //aserción
   // este comando llama a el logout y a una aserción sobre el título encontrado en la web de respuesta

  })
})