document.addEventListener('DOMContentLoaded', function () {
    const navigation = document.querySelector('#navigation');
    const backToTopButton = document.querySelector('#backToTopButton');

    // Seleciona as seções para ativar o menu
    const sections = document.querySelectorAll('#home, #services, #about, #contact');

    // Adiciona o evento de scroll
    window.addEventListener('scroll', onScroll);

    function onScroll() {
        showNavOnScroll();
        showBackToTopButtonOnScroll();
        
        sections.forEach(section => {
            activateMenuAtCurrentSection(section);
        });
    }

    function activateMenuAtCurrentSection(section) {
        const targetLine = scrollY + innerHeight / 2;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

        const sectionEndsAt = sectionTop + sectionHeight;
        const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

        const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

        const sectionId = section.getAttribute('id');
        const menuElement = document.querySelector(`.menu a[href*="${sectionId}"]`);

        if (menuElement) {
            menuElement.classList.remove('active');
            if (sectionBoundaries) {
                menuElement.classList.add('active');
            }
        }
    }

    function showNavOnScroll() {
        if (navigation) {
            if (window.scrollY > 0) {
                navigation.classList.add('scroll');
            } else {
                navigation.classList.remove('scroll');
            }
        }
    }

    function showBackToTopButtonOnScroll() {
        if (backToTopButton) {
            if (window.scrollY > 550) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        }
    }

    if (backToTopButton) {
        backToTopButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    window.openMenu = function() {
        document.body.classList.add('menu-expanded');
    };

    window.closeMenu = function() {
        document.body.classList.remove('menu-expanded');
    };

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

    // Chama o onScroll() para atualizar as classes no carregamento
    onScroll();
});
