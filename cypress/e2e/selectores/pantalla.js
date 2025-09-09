class pantalla {
//selectores de la pantalla de login
    login = {
            usuario : '[data-test="username"]',
            clave : '[data-test="password"]',
            btn_ingresar: '[data-test="login-button"]',
            msg_title:'Swag Labs',
            sel_title:'#root > div > div.login_logo'
    }

//selectores de la pantalla de menu    
menu = {
    icono_burguer : '#react-burger-menu-btn' ,
    btn_logout : '[data-test="logout-sidebar-link"]'
}


//selectores de la pantalla de productos    
    productos = {
        producto : '',
        carrito : ''
}
}
// habilitar los datos para los test
module.exports = new pantalla();