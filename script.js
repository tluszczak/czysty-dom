// Luxury Page Loader
window.addEventListener('load', () => {
    const loader = document.querySelector('.luxury-loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
    }, 1000);
});

// Advanced Navbar Interaction
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
});

// Concierge Form Handling
const conciergeForm = document.querySelector('.concierge-form');
if (conciergeForm) {
    conciergeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = conciergeForm.querySelector('button');
        const originalText = submitBtn.innerText;
        
        submitBtn.innerText = 'PRZETWARZANIE...';
        submitBtn.disabled = true;

        // Simulate high-end service response
        setTimeout(() => {
            alert('Dziękujemy za kontakt z Pasierowski & Pasierowski. Państwa zgłoszenie zostało przekazane do Marcina Pasierowskiego. Skontaktujemy się w ciągu 2 godzin roboczych.');
            conciergeForm.reset();
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}
