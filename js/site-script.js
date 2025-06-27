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
    if (overlay && panel) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) toggleMobileMenu(false);
        });
    }

    if (document.querySelector('.global-testimonials-swiper')) {
        new Swiper('.global-testimonials-swiper', {
            slidesPerView: 3,
            autoHeight: true,
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
    }

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

    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function (e) {
            if (
                e.target.closest('a') ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('button')
            ) return;
            window.location.href = 'product.html';
        });
    });

    if (typeof window.gsap !== 'undefined') {
        const cards = document.querySelectorAll('.products-list .product-card');
        if (cards.length) {
            const images = Array.from(cards).map(card => card.querySelector('img'));
            let loaded = 0;
            function animateCards() {
                gsap.set(cards, { opacity: 0, y: 40 });
                gsap.to(cards, {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.15,
                    ease: "power2.out"
                });
            }
            if (images.length === 0) {
                animateCards();
            } else {
                images.forEach(img => {
                    if (img.complete) {
                        loaded++;
                        if (loaded === images.length) animateCards();
                    } else {
                        img.addEventListener('load', () => {
                            loaded++;
                            if (loaded === images.length) animateCards();
                        });
                        img.addEventListener('error', () => {
                            loaded++;
                            if (loaded === images.length) animateCards();
                        });
                    }
                });
            }
        }
    }
});

