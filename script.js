// Efecto Parallax
document.addEventListener('DOMContentLoaded', function() {
    // Parallax para las secciones con efecto de desplazamiento
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;

        // Efecto parallax en secciones con clase parallax-section
        const parallaxSections = document.querySelectorAll('.parallax-section');

        parallaxSections.forEach(section => {
            const offset = section.offsetTop;
            const height = section.offsetHeight;

            // Solo aplicar el efecto cuando la sección esté visible
            if (scrolled + window.innerHeight > offset && scrolled < offset + height) {
                const yPos = -(scrolled - offset) * 0.5;
                section.style.backgroundPositionY = yPos + 'px';
            }
        });

        // Efecto adicional en layers con data-speed
        const parallaxLayers = document.querySelectorAll('.parallax-layer');

        parallaxLayers.forEach(layer => {
            const speed = layer.getAttribute('data-speed') || 0.5;
            const parent = layer.closest('.parallax-section');

            if (parent) {
                const offset = parent.offsetTop;
                const height = parent.offsetHeight;

                if (scrolled + window.innerHeight > offset && scrolled < offset + height) {
                    const yPos = (scrolled - offset) * speed;
                    layer.style.transform = `translateY(${yPos}px)`;
                }
            }
        });
    });

    // Navegación suave mejorada
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animación de aparición al hacer scroll
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos para animarlos
    const animatedElements = document.querySelectorAll(
        '.gallery-item, .roster-card, .stat-item, .schedule-item'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Efecto de cambio en la navbar al hacer scroll
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'linear-gradient(180deg, rgba(13, 13, 13, 0.98) 0%, rgba(26, 15, 15, 0.98) 100%)';
            navbar.style.boxShadow = '0 5px 25px rgba(140, 22, 22, 0.6), 0 1px 0 rgba(185, 30, 30, 0.4)';
        } else {
            navbar.style.background = 'linear-gradient(180deg, rgba(13, 13, 13, 0.98) 0%, rgba(26, 15, 15, 0.95) 100%)';
            navbar.style.boxShadow = '0 3px 15px rgba(140, 22, 22, 0.4), 0 1px 0 rgba(185, 30, 30, 0.3)';
        }
    });

    // Precargar imágenes de fondo para mejor rendimiento
    const preloadImages = [
        './images/hero-background.jpg',
        './images/raid-banner.jpg',
        './images/pvp-banner.jpg',
        './images/clan-banner.jpg'
    ];

    preloadImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Funcionalidad del botón Scroll to Top
    const scrollToTopBtn = document.getElementById('scrollToTop');

    // Mostrar/ocultar el botón según el scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    // Volver arriba al hacer clic
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Optimización del parallax con RequestAnimationFrame
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;

    const parallaxSections = document.querySelectorAll('.parallax-section');

    parallaxSections.forEach(section => {
        const offset = section.offsetTop;
        const height = section.offsetHeight;

        if (scrolled + window.innerHeight > offset && scrolled < offset + height) {
            const yPos = -(scrolled - offset) * 0.5;
            section.style.backgroundPositionY = yPos + 'px';
        }
    });

    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});
