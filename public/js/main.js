// =============== INITIAL SETTINGS ===============
window.addEventListener('scroll', onScroll)
const bodyElement = document.body

function onScroll() {
    const menu = document.querySelector('#header')
    const AlreadyHaveClass = menu.classList.contains('fixed-menu')

    if((scrollY >= 0) && (!AlreadyHaveClass)) {
        changeColorMenuOnScroll(menu)
    }

    if((scrollY <= 0) && (AlreadyHaveClass)){
        menu.classList.remove('fixed-menu')
    }
}

// =============== MENU ===============
function changeColorMenuOnScroll(menu) {
    menu.classList.add('fixed-menu')
}

// =============== SCROLL REVEAL SETTINGS ===============
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: '800',
    delay: 150
})

scrollReveal.reveal(`
    .main-container_presentation,
    .main-container_table,
    .footer-container
`)

// =============== DATATABLES SETTINGS ===============
$(document).ready(function () {
    $('#example').DataTable({
        responsive: true
    });
});