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

    function disableDefault(event) {
        event.preventDefault();
    }

    // Vô hiệu hóa menu chuột phải
    document.addEventListener('contextmenu', disableDefault);

    // Vô hiệu hóa Ctrl + C (sao chép)
    document.addEventListener('keydown', event => {
        if (event.ctrlKey && event.key == 'c') {
            event.preventDefault();
        }
    });

    // Vô hiệu hóa việc chọn văn bản
    document.addEventListener('selectstart', disableDefault);

    // Vô hiệu hóa việc kéo
    document.addEventListener('dragstart', disableDefault);

