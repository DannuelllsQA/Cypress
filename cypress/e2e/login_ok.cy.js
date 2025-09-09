/// <reference types="Cypress" />
import "cypress-real-events";
import pantalla from './selectores/pantalla' 

describe('template spec', () => {
  var misdatos; //declaramos mi variable
  beforeEach('passes', () => {
    cy.visit('/') //ingresamos a la url guardada en cypress.configuracion
    cy.fixture('./users_ok') //ejecutamos mi fixtures realizado
    .then(testeo =>{
      misdatos = testeo;
    })
    cy.viewport(1100,900) //definimos el tamaño de pantalla
  })

  it('passes', () => {
    misdatos.forEach((linea)=>{

   cy.escribir(pantalla.login.usuario,linea.usuario) //ingresamos usuario
   cy.escribir(pantalla.login.clave,linea.clave)	//ingresamos passwork
   cy.ingresar(pantalla.login.btn_ingresar) //ingresamos al boton ingresar
   //cy.screenshot()

//agregaremos, eliminaremos, ve opcioneremos el carrito y otrass como titulo de pagina, entre otras...
//#add-to-cart-sauce-labs-backpack      compra 1
//#add-to-cart-sauce-labs-bike-light     compra 2
//#shopping_cart_container > a          carrito
//#remove-sauce-labs-backpack           remover compra 1
//#continue-shopping
//#checkout
//#first-name
//#last-name
//#postal-code
//#continue
//#cancel
//#finish
//#back-to-products

   cy.ingresar(pantalla.menu.icono_burguer) //ingresamos al boton de menu (burguer)
   //cy.screenshot('imagen')
   cy.ingresar(pantalla.menu.btn_logout) //seleccionamos salir de sesion
   cy.get(pantalla.login.sel_title).should('have.text',pantalla.login.msg_title) //aserción
   // este comando llama a el logout y a una aserción sobre el título encontrado en la web de respuesta

    })
    
  })
})