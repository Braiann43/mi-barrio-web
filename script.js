document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MENÚ MÓVIL ---
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    const mobileLinks = menu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });

    // --- 2. ACORDEÓN PREGUNTAS FRECUENTES (FAQ) ---
    const faqItems = document.querySelectorAll('.faq-pregunta');
    
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // El contenedor de la respuesta es el elemento siguiente al botón
            const respuesta = item.nextElementSibling;
            const icono = item.querySelector('.faq-icono');
            
            // Si está cerrado, lo abrimos
            if (!respuesta.style.maxHeight || respuesta.style.maxHeight === '0px') {
                respuesta.style.maxHeight = respuesta.scrollHeight + 'px';
                icono.style.transform = 'rotate(180deg)';
                item.parentElement.classList.add('border-brand-blue');
            } else {
                // Si está abierto, lo cerramos
                respuesta.style.maxHeight = '0px';
                icono.style.transform = 'rotate(0deg)';
                item.parentElement.classList.remove('border-brand-blue');
            }
        });
    });

    // Inicializamos las respuestas cerradas
    document.querySelectorAll('.faq-respuesta').forEach(el => {
        el.style.maxHeight = '0px';
        el.style.overflow = 'hidden';
        el.style.transition = 'max-height 0.3s ease-in-out';
    });


    // --- 3. ANIMACIONES AL HACER SCROLL (Reveal) ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        // Definimos cuándo aparece (100px antes de llegar al borde inferior)
        const elementVisible = 100;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    // Escuchamos el scroll de la página
    window.addEventListener('scroll', revealOnScroll);
    // Ejecutamos una vez al cargar por si los elementos ya están en pantalla
    revealOnScroll();
});