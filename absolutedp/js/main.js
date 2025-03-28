/**
 * Main JavaScript functionality for Absolute Draining & Plumbing website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Preloader with improved timing
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        setTimeout(function() {
            preloader.classList.add('fade-out');
            setTimeout(function() {
                preloader.style.display = 'none';
                
                // Trigger initial animations after preloader is gone
                document.querySelectorAll('.hero-content, .hero .btn').forEach(el => {
                    el.classList.add('active');
                });
            }, 500);
        }, 500); // Give a bit more time to ensure everything is loaded
    });
    
    // Mobile Navigation Toggle with Enhanced Submenu Support
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const navOverlay = document.getElementById('nav-overlay');
    
    if (hamburgerBtn && mobileNav && navOverlay) {
        hamburgerBtn.addEventListener('click', function() {
            const isActive = this.classList.contains('active');
            
            this.classList.toggle('active');
            mobileNav.classList.toggle('active');
            navOverlay.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            
            // Handle ARIA attributes for accessibility
            this.setAttribute('aria-expanded', !isActive);
            mobileNav.setAttribute('aria-hidden', isActive);
        });
        
        navOverlay.addEventListener('click', function() {
            closeAllMobileNav();
        });
        
        // Mobile Submenu Toggles
        const mobileSubmenuToggles = document.querySelectorAll('.mobile-menu .has-submenu > .mobile-menu-item');
        
        mobileSubmenuToggles.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                
                const parent = this.parentElement;
                const isOpen = parent.classList.contains('active');
                
                // Close all open submenus first
                document.querySelectorAll('.mobile-menu .has-submenu.active').forEach(item => {
                    if (item !== parent) {
                        item.classList.remove('active');
                    }
                });
                
                // Toggle current submenu
                parent.classList.toggle('active');
            });
        });
        
        // Close mobile nav when clicking a non-toggle link
        const mobileNavLinks = document.querySelectorAll('.mobile-submenu a, .mobile-menu > li:not(.has-submenu) > a');
        mobileNavLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                closeAllMobileNav();
            });
        });
    }

    function closeAllMobileNav() {
        hamburgerBtn.classList.remove('active');
        mobileNav.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
        
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
        
        // Close all open submenus
        document.querySelectorAll('.mobile-menu .has-submenu.active').forEach(item => {
            item.classList.remove('active');
        });
    }
    
    // Enhanced Header Scroll with transparent to solid transition
    const header = document.getElementById('header');
    
    function handleHeaderScroll() {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }
    
    window.addEventListener('scroll', handleHeaderScroll);
    // Run once on page load
    handleHeaderScroll();
    
    // Improved Back to Top Button with enhanced UX
    const backToTopBtn = document.getElementById('back-to-top');
    
    function handleBackToTopVisibility() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    }
    
    window.addEventListener('scroll', handleBackToTopVisibility);
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Add visual feedback
        backToTopBtn.classList.add('clicked');
        
        // Smooth scroll with enhanced easing
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Remove visual feedback after animation
        setTimeout(() => {
            backToTopBtn.classList.remove('clicked');
        }, 300);
    });
    
    // Improved Smooth Scrolling for Anchor Links with offset adjustment
    const scrollLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    scrollLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.getElementById('header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Enhanced Pipe Animation with dynamic sizing based on viewport
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / totalHeight) * 100;
        
        // Remove all scroll classes
        document.body.classList.remove('scroll-25', 'scroll-50', 'scroll-75', 'scroll-100');
        
        // Add appropriate class based on scroll percentage
        if (scrollPercentage > 75) {
            document.body.classList.add('scroll-100');
        } else if (scrollPercentage > 50) {
            document.body.classList.add('scroll-75');
        } else if (scrollPercentage > 25) {
            document.body.classList.add('scroll-50');
        } else if (scrollPercentage > 0) {
            document.body.classList.add('scroll-25');
        }
    });
    
    // Add phone number formatting and validation
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.length <= 3) {
                    value = '(' + value;
                } else if (value.length <= 6) {
                    value = '(' + value.substring(0, 3) + ') ' + value.substring(3);
                } else {
                    value = '(' + value.substring(0, 3) + ') ' + value.substring(3, 6) + '-' + value.substring(6, 10);
                }
                e.target.value = value;
            }
        });
    }
    
    // Add resize listener to update elements that need to react to viewport changes
    window.addEventListener('resize', debounce(function() {
        // Any resize-sensitive code can go here
    }, 250));
    
    // Utility function to debounce events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Services Tab Functionality
    const tabButtons = document.querySelectorAll('.services-tab-btn');
    const tabPanes = document.querySelectorAll('.services-tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show the corresponding tab pane
            const target = this.dataset.target;
            document.getElementById(`${target}-tab`).classList.add('active');

            // Add animation to service cards in active tab
            const activeTabCards = document.querySelectorAll(`#${target}-tab .service-card`);
            activeTabCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        });
    });

    // Initialize the first tab
    if (tabButtons.length > 0 && tabPanes.length > 0) {
        tabButtons[0].classList.add('active');
        tabPanes[0].classList.add('active');

        // Animate initial service cards
        const initialCards = tabPanes[0].querySelectorAll('.service-card');
        initialCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
});
