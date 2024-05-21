const menuBar = document.querySelector('.menu_humberger')
const closeMenu = document.querySelector('.close-menu')
const menu = document.querySelector('.navbar_right_part')

menuBar.addEventListener('click', () => {
    menu.classList.toggle('active')
})
closeMenu.addEventListener('click', () => {
    menu.classList.remove('active')
})