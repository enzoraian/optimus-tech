// MENU MOBILE

const header = document.querySelector('.js-header')
const btnMobile = document.querySelector('.js-menu-mobile')


function disableScroll() {
    if (header.classList.contains('nav-open')) {
        document.body.style.position = 'fixed'
    } else {
        document.body.style.position = 'relative'
    }
}

function toggleMenu() {
    header.classList.toggle('nav-open')

    // Desabilitando Scroll
    disableScroll()
}

btnMobile.addEventListener('click', toggleMenu)