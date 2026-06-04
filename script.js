// Mobile Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

if (burger && nav) {
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('active');

        // Burger Animation
        burger.classList.toggle('toggle');
        
        // Prevent body scroll
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('toggle');
            document.body.style.overflow = 'auto';
        });
    });
}

// Simple Scroll Effect for Navbar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.padding = '0';
        header.style.background = '#fff';
    }
});

// Form Submission (Prevent Default for Demo)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.');
        contactForm.reset();
    });
}
