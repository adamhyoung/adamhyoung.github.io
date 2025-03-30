# Header System Integration Plan

## Component Integration Overview

The header system consists of three main components that need to work together seamlessly:

1. Base Header Structure (`_header.css`)
2. Navigation System (`_desktop-nav.css`)
3. Header Actions (`_header-actions.css`)

## Integration Steps

### 1. Update Base Variables

```css
/* Add to _variables.css */
:root {
    /* Header Dimensions */
    --header-height: 80px;
    --header-height-scrolled: 64px;
    
    /* Header Colors */
    --header-bg: transparent;
    --header-bg-scrolled: rgba(255, 255, 255, 0.95);
    --header-border: rgba(255, 255, 255, 0.1);
    
    /* Navigation */
    --nav-item-padding: var(--spacing-4);
    --nav-text-shadow: 0 1px 2px rgba(0,0,0,0.1);
    
    /* Actions */
    --action-height: calc(var(--header-height) * 0.6);
    --action-height-scrolled: calc(var(--header-height-scrolled) * 0.7);
}
```

### 2. HTML Structure Update

```html
<header id="header">
    <div class="header-inner">
        <!-- Logo -->
        <div class="logo">
            <a href="/">
                <img src="logo.png" alt="Logo">
            </a>
        </div>

        <!-- Navigation -->
        <nav class="desktop-nav">
            <ul class="main-menu">
                <!-- Emergency First -->
                <li class="menu-item menu-item--emergency">
                    <a href="/emergency">Emergency Service</a>
                </li>
                
                <!-- Services Menu -->
                <li class="menu-item has-megamenu">
                    <a href="/services">Services</a>
                    <div class="megamenu">
                        <!-- Mega Menu Content -->
                    </div>
                </li>
            </ul>
        </nav>

        <!-- Actions -->
        <div class="header-actions">
            <a href="tel:" class="header-action header-action--emergency">
                <div class="action-content">
                    <i class="fas fa-phone"></i>
                    <span class="action-label">
                        <small>24/7 Emergency</small>
                        <strong>Call Now</strong>
                    </span>
                </div>
            </a>
            
            <button class="header-action header-action--quote">
                <i class="fas fa-clipboard"></i>
                <span class="action-label">Get Quote</span>
            </button>
        </div>
    </div>
</header>
```

### 3. JavaScript Integration

```javascript
// Header Scroll Behavior
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add/remove scrolled class
    if (currentScroll > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
    
    // Handle direction
    if (currentScroll > lastScroll) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu
const menuTrigger = document.querySelector('.mobile-menu-trigger');
const mobileNav = document.querySelector('.mobile-nav');

menuTrigger.addEventListener('click', () => {
    menuTrigger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});
```

## Responsive Integration

### Desktop (992px+)
- Full navigation visible
- Mega menus enabled
- Full action labels

### Tablet (768px - 991px)
- Hamburger navigation
- Emergency call visible
- Quote button icon-only

### Mobile (<768px)
- Bottom fixed actions
- Icon-only buttons
- Simplified navigation

## Performance Optimizations

1. **CSS Loading**
```css
/* Critical CSS */
.header {
    position: fixed;
    width: 100%;
    z-index: var(--z-header);
}

/* Deferred CSS */
@media (min-width: 992px) {
    .megamenu {
        /* Complex mega menu styles */
    }
}
```

2. **Animation Performance**
```css
/* Use transforms and opacity */
.header-action {
    transform: translateY(0);
    will-change: transform;
}

/* Reduce repaints */
.header-scrolled {
    backdrop-filter: blur(8px);
    transform: translateY(0);
}
```

## Accessibility Integration

1. **ARIA Attributes**
```html
<nav class="desktop-nav" aria-label="Main navigation">
    <button class="mobile-menu-trigger" 
            aria-expanded="false"
            aria-controls="mobile-nav">
        <span class="sr-only">Menu</span>
    </button>
</nav>
```

2. **Focus Management**
```css
/* Visible focus states */
.header-action:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
}
```

## Error Prevention

1. **Mobile Menu**
```javascript
// Close menu on outside click
document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && 
        !menuTrigger.contains(e.target)) {
        mobileNav.classList.remove('active');
        menuTrigger.classList.remove('active');
    }
});
```

2. **Scroll Lock**
```javascript
// Prevent scroll when menu open
function toggleScrollLock(lock) {
    document.body.style.overflow = lock ? 'hidden' : '';
}
```

## Testing Requirements

1. **Visual Testing**
- Scroll behavior
- Mobile menu
- Responsive layouts
- Animation smoothness

2. **Functional Testing**
- Navigation paths
- Menu interactions
- Action buttons
- Form triggers

3. **Accessibility Testing**
- Screen readers
- Keyboard nav
- Focus order
- ARIA labels

## Success Metrics

1. **Performance**
- FCP < 1.2s
- TTI < 2.5s
- CLS < 0.1

2. **Engagement**
- Navigation usage
- CTA clicks
- Mobile interactions
- Form submissions

## Implementation Schedule

### Day 1: Foundation
- Update variables
- Base header styles
- HTML structure

### Day 2: Navigation
- Desktop nav
- Mobile nav
- Mega menus

### Day 3: Actions
- CTA buttons
- Emergency call
- Quote trigger

### Day 4: Integration
- JavaScript
- Animations
- Responsive

### Day 5: Testing
- Cross-browser
- Accessibility
- Performance