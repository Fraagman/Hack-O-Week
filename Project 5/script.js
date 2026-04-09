// Sticky Navigation
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Reveal on Scroll
const revealElements = document.querySelectorAll('[data-reveal]');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Reveal only once
        }
    });
};

const revealOptions = {
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    observer.observe(el);
});

// Simple Log for Debugging
console.log("LUMIO TRAVELS: Script Loaded");
