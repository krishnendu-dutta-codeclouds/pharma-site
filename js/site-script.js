// Placeholder for dropdown interaction
document.querySelectorAll('.currency-country').forEach(el => {
    el.addEventListener('click', () => {
        // Future: Show dropdown for currency/country selection
    });
});

// Mobile menu functionality
function toggleMobileMenu(open) {
    const menu = document.getElementById('mobileMenu');
    if (open) {
        menu.classList.add('open');
        document.body.style.overflow = 'hidden';
    } else {
        menu.classList.remove('open');
        document.body.style.overflow = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.mobile-menu-close');
    const overlay = document.getElementById('mobileMenu');
    const panel = overlay ? overlay.querySelector('.mobile-menu-panel') : null;

    if (openBtn && overlay) {
        openBtn.addEventListener('click', () => toggleMobileMenu(true));
    }
    if (closeBtn && overlay) {
        closeBtn.addEventListener('click', () => toggleMobileMenu(false));
    }
    // Close menu on overlay click (but not when clicking inside the panel)
    if (overlay && panel) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) toggleMobileMenu(false);
        });
    }

     new Swiper('.global-testimonials-swiper', {
        slidesPerView: 3,
        autoHeight:true,
        spaceBetween: 24,
        loop: true,
        navigation: {
            nextEl: '.global-testimonials-swiper > .swiper-button-next',
            prevEl: '.global-testimonials-swiper > .swiper-button-prev',
        },
        grabCursor: true,
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            900: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            0: {
                slidesPerView: 2,
                spaceBetween: 8,
            }
        }
    });

    // Product gallery swiper with thumbs
    if (document.querySelector('.product-gallery-swiper') && document.querySelector('.product-gallery-thumbs-swiper')) {
        const thumbsSwiper = new Swiper('.product-gallery-thumbs-swiper', {
            slidesPerView: 5,
            spaceBetween: 10,
            watchSlidesProgress: true,
            slideToClickedSlide: true,
            breakpoints: {
                0: { slidesPerView: 4 },
                600: { slidesPerView: 5 }
            }
        });
        const gallerySwiper = new Swiper('.product-gallery-swiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            effect: 'slide',
            thumbs: {
                swiper: thumbsSwiper
            }
        });
    }
});

