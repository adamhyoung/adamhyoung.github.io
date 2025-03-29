document.addEventListener('DOMContentLoaded', () => {
    // Remove preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 200);
        }, 500);
    }

    // Header scroll behavior
    const header = document.getElementById('header');
    const trustSignals = document.querySelector('.trust-signals');
    
    const handleScroll = () => {
        if (!header || !trustSignals) return;
        
        const trustSignalsTop = trustSignals.getBoundingClientRect().top;
        const headerBottom = header.getBoundingClientRect().bottom;
        
        if (headerBottom >= trustSignalsTop) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
});
