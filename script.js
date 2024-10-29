// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content, .hero');

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.classList.add('hidden');
        revealOnScroll.observe(section);
    });
});
