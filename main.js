document.addEventListener('DOMContentLoaded', function () {
    const navigation = document.querySelector('#navigation');
    const backToTopButton = document.querySelector('#backToTopButton');

    // Função para verificar o scroll e aplicar classes
    function onScroll() {
        showNavOnScroll();
        showBackToTopButtonOnScroll();
    }

    // Adiciona o evento de scroll
    window.addEventListener('scroll', onScroll);

    function showNavOnScroll() {
        if (navigation) { // Verifica se o elemento existe
            if (window.scrollY > 0) {
                navigation.classList.add('scroll');
            } else {
                navigation.classList.remove('scroll');
            }
        }
    }

    function showBackToTopButtonOnScroll() {
        if (backToTopButton) { // Verifica se o botão existe
            if (window.scrollY > 550) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        }
    }

    // Adiciona funcionalidade ao botão de "Voltar ao Topo"
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Faz a rolagem suave até o topo
            });
        });
    }

    // Funções do menu expandido
    window.openMenu = function() {
        document.body.classList.add('menu-expanded');
    }
  
    window.closeMenu = function() {
        document.body.classList.remove('menu-expanded');
    }

    // ScrollReveal para animações de entrada
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
    `);
});
