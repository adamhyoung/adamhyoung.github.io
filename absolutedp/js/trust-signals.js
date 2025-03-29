// Simple Trust Signals Handler
document.addEventListener('DOMContentLoaded', () => {
    const trustSignals = document.querySelector('.trust-signals');
    
    // Show trust signals after a short delay
    setTimeout(() => {
        trustSignals.classList.add('visible');
    }, 1000);

    // Handle visibility on scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > window.innerHeight * 0.5) {
            trustSignals.classList.add('visible');
        } else {
            trustSignals.classList.remove('visible');
        }
    }, { passive: true });
});