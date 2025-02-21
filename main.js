/*=== TROCA COR DO MENU =================================*/
const navigation = document.querySelector('#navigation'); // Substitua pelo seletor correto

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        navigation.classList.add('scroll');
    } else {
        navigation.classList.remove('scroll');
    }
});

/*=== MENU-EXPANDED =================================*/
function openMenu() {
    document.body.classList.add('menu-expanded')
}
  
function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
    #home,
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content
    `)
  
