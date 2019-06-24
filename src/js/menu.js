var acionaMenu = document.querySelector('#acionaMenu')
var ulOculta   = document.querySelector('.esconder') 

acionaMenu.addEventListener('click', switchMenu)

function switchMenu() {
  acionaMenu.classList.toggle('mdi-menu-open')
  ulOculta.classList.toggle('mostrar')
}
