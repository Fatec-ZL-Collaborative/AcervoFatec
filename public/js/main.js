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
// const scrollReveal = ScrollReveal({
//     origin: 'top',
//     distance: '40px',
//     duration: '800',
//     delay: 150
// })

// scrollReveal.reveal(`
//     .main-container_presentation,
//     .main-container_table,
//     .footer-container
// `)

// =============== DATATABLES SETTINGS ===============
$(document).ready(function () {
    $('#example').DataTable({
        responsive: true
    });
});

// =============== FONT SETTINGS ===============
$(document).ready(function(){
    let font = 1.6
    
    $('.increase').click(function(){
        if(font<2.0){ 
            console.log('rodou')
            font += .2
            $('body').css({'font-size': font + 'rem'})
        }
    })

    $('.decrease').click(function(){
        if(font>1.4){
            font -= .2
            $('body').css({'font-size': font + 'rem'})
        }
    })

})