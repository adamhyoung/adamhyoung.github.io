document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.testimonial-slider');
    const track = document.querySelector('.testimonial-track');
    const cards = Array.from(document.querySelectorAll('.testimonial-card'));
    let currentIndex = 0;

    // Clone cards for infinite scroll effect
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    // Set initial position and width
    function updateTrack() {
        const cardWidth = cards[0].offsetWidth + 30; // Include gap
        track.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
        track.style.transition = 'transform 0.5s ease';
    }

    // Auto advance slider
    let autoplayInterval = setInterval(nextSlide, 5000);

    function nextSlide() {
        currentIndex++;
        updateTrack();

        // Reset position when reaching the cloned slides
        if (currentIndex >= cards.length) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentIndex = 0;
                updateTrack();
                setTimeout(() => {
                    track.style.transition = 'transform 0.5s ease';
                }, 50);
            }, 500);
        }
    }

    function prevSlide() {
        if (currentIndex <= 0) {
            track.style.transition = 'none';
            currentIndex = cards.length;
            updateTrack();
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease';
                currentIndex--;
                updateTrack();
            }, 50);
        } else {
            currentIndex--;
            updateTrack();
        }
    }

    // Handle mouse interactions
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    slider.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 5000);
    });

    // Add navigation controls
    const controls = document.querySelector('.testimonial-controls');
    if (controls) {
        const prevBtn = controls.querySelector('.testimonial-prev');
        const nextBtn = controls.querySelector('.testimonial-next');

        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    }

    // Initial setup
    updateTrack();

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateTrack, 100);
    });
});
