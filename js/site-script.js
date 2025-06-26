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
});
