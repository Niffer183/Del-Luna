let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
    navbar .classList.toggle('active')
    searchFrom .classList.remove('active')
    cartItem .classList.remove('active')
}

let searchFrom = document.querySelector('.search-from')

document.querySelector('#search-btn').onclick = () => {
    searchFrom .classList.toggle('active')
    navbar .classList.remove('active')
    cartItem .classList.remove('active')
}

let cartItem = document.querySelector('.cart-item-container')

document.querySelector('#cart-btn').onclick = () => {
    cartItem .classList.toggle('active')
    navbar .classList.remove('active')
    searchFrom .classList.remove('active')
}

window.onscroll = () => {
    navbar .classList.remove('active')
    searchFrom .classList.remove('active')
    cartItem .classList.remove('active')
}