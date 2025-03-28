/**
 * Testimonial slider functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const prevButton = document.querySelector('.testimonial-prev');
    const nextButton = document.querySelector('.testimonial-next');
    
    if (!testimonialSlider || !prevButton || !nextButton) return;
    
    const slideWidth = testimonialSlider.querySelector('.testimonial-card').offsetWidth;
    const slidesCount = testimonialSlider.querySelectorAll('.testimonial-card').length;
    let currentSlide = 0;
    
    // Clone testimonials for infinite scrolling effect
    const testimonials = testimonialSlider.querySelectorAll('.testimonial-card');
    testimonials.forEach(testimonial => {
        const clone = testimonial.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        testimonialSlider.appendChild(clone);
    });
    
    function scrollToSlide(index) {
        if (index < 0) {
            index = slidesCount - 1;
        } else if (index >= slidesCount) {
            index = 0;
        }
        
        currentSlide = index;
        
        const isMobile = window.innerWidth < 768;
        const slideScrollPosition = isMobile ? 
            index * testimonialSlider.scrollWidth / (slidesCount * 2) : 
            index * (slideWidth + 16); // 16px is the gap
            
        testimonialSlider.scrollTo({
            left: slideScrollPosition,
            behavior: 'smooth'
        });
        
        // Update active state of testimonials (visual indicator)
        testimonials.forEach((testimonial, i) => {
            if (i === currentSlide) {
                testimonial.classList.add('active');
            } else {
                testimonial.classList.remove('active');
            }
        });
    }
    
    // Set up buttons
    prevButton.addEventListener('click', () => scrollToSlide(currentSlide - 1));
    nextButton.addEventListener('click', () => scrollToSlide(currentSlide + 1));
    
    // Auto-advance slides every 5 seconds
    let slideInterval = setInterval(() => scrollToSlide(currentSlide + 1), 5000);
    
    // Pause auto-advance when hovering over slider
    testimonialSlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    testimonialSlider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => scrollToSlide(currentSlide + 1), 5000);
    });
    
    // Handle touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    testimonialSlider.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(slideInterval);
    }, { passive: true });
    
    testimonialSlider.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        slideInterval = setInterval(() => scrollToSlide(currentSlide + 1), 5000);
    }, { passive: true });
    
    function handleSwipe() {
        const swipeDistance = touchStartX - touchEndX;
        if (swipeDistance > 50) {
            scrollToSlide(currentSlide + 1);
        } else if (swipeDistance < -50) {
            scrollToSlide(currentSlide - 1);
        }
    }
    
    // Initialize
    scrollToSlide(0);
    
    // Update on window resize
    window.addEventListener('resize', () => {
        setTimeout(() => scrollToSlide(currentSlide), 100);
    });
});
