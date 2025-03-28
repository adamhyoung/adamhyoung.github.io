/**
 * Animation functionality for the Absolute Draining & Plumbing website
 */

// Scroll-triggered animations
document.addEventListener('DOMContentLoaded', function() {
    // Set up Intersection Observer for animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get animation type and delay from data attributes
                const animation = entry.target.dataset.animation || 'fade-in';
                const delay = entry.target.dataset.delay || 0;
                
                // Set animation delay and add class
                entry.target.style.animationDelay = `${delay}s`;
                entry.target.classList.add(animation);
                
                // Stop observing after animation is applied
                animationObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Observe each animated element
    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });
    
    // Count-up animations
    const countUpElements = document.querySelectorAll('.count-up');
    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseFloat(target.dataset.count);
                const decimalPlaces = countTo % 1 !== 0 ? 1 : 0;
                let current = 0;
                const increment = countTo / 50; // Divide the target into 50 steps
                const duration = 1500; // Animation duration in ms
                const stepTime = duration / 50;
                
                const counter = setInterval(() => {
                    current += increment;
                    if (current >= countTo) {
                        target.textContent = countTo.toFixed(decimalPlaces);
                        clearInterval(counter);
                    } else {
                        target.textContent = current.toFixed(decimalPlaces);
                    }
                }, stepTime);
                
                countObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    countUpElements.forEach(element => {
        countObserver.observe(element);
    });
    
    // Parallax effect for backgrounds with data-speed attribute
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    function updateParallax() {
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(window.scrollY * speed);
            element.style.transform = `translateY(${yPos}px) translateZ(-1px) scale(2)`;
        });
    }
    
    window.addEventListener('scroll', updateParallax);
    
    // Modal functionality
    const modalTrigger = document.getElementById('quote-btn');
    const modal = document.getElementById('quote-modal');
    const modalClose = document.querySelector('.modal-close');
    
    if (modalTrigger && modal) {
        modalTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
        
        modalClose.addEventListener('click', function() {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        });
        
        // Close modal when clicking outside content
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Handle form submission
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would normally send the form data to a server
            // For now, just show a success message
            const formData = new FormData(quoteForm);
            quoteForm.innerHTML = `
                <div class="form-success">
                    <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--success); margin-bottom: 1rem;"></i>
                    <h4>Thank you for your request!</h4>
                    <p>We've received your information and will contact you shortly.</p>
                </div>
            `;
            
            // Close modal after 3 seconds
            setTimeout(() => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }, 3000);
        });
    }
});
