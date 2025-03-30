# Animation & Motion Preferences Guide

## Core Principles

1. Respect user preferences
2. Provide smooth fallbacks
3. Maintain conversion effectiveness
4. Ensure accessibility

## Implementation

### Base Motion Query
```css
/* Detect motion preference */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}
```

### Emergency CTA Animation
```css
.action-pulse {
    position: absolute;
    inset: 0;
    pointer-events: none;
    
    @media (prefers-reduced-motion: no-preference) {
        /* Full animation */
        background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.2),
            transparent 70%
        );
        opacity: 0;
        animation: subtle-pulse 2s ease-out infinite;
    }
    
    @media (prefers-reduced-motion: reduce) {
        /* Subtle highlight only */
        background: rgba(255, 255, 255, 0.1);
        opacity: 1;
        animation: none;
    }
}

/* Alternative attention getter for reduced motion */
.header-action--emergency {
    @media (prefers-reduced-motion: reduce) {
        border-width: 2px;
        font-weight: var(--font-weight-bold);
    }
}
```

### Header Scroll Behavior
```css
.header {
    @media (prefers-reduced-motion: no-preference) {
        transition: all var(--transition-normal);
    }
    
    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }
}

.header-scrolled {
    /* Immediate state changes for reduced motion */
    @media (prefers-reduced-motion: reduce) {
        height: var(--header-height-scrolled);
    }
}
```

### Navigation Transitions
```css
.megamenu {
    @media (prefers-reduced-motion: no-preference) {
        transition: opacity var(--transition-normal),
                    transform var(--transition-normal),
                    visibility 0s linear var(--transition-normal);
    }
    
    @media (prefers-reduced-motion: reduce) {
        transition: none;
        /* Use display instead of visibility for immediate change */
        display: none;
    }
}

.has-megamenu:hover .megamenu {
    @media (prefers-reduced-motion: reduce) {
        display: block;
    }
}
```

## Hover States

### Button Hovers
```css
.header-action {
    @media (prefers-reduced-motion: no-preference) {
        transition: all var(--transition-normal);
    }
    
    &:hover {
        @media (prefers-reduced-motion: no-preference) {
            transform: translateY(-2px);
        }
        
        @media (prefers-reduced-motion: reduce) {
            /* Use color change instead of movement */
            filter: brightness(1.1);
        }
    }
}
```

### Menu Item Hovers
```css
.menu-item > a {
    @media (prefers-reduced-motion: no-preference) {
        transition: color var(--transition-normal);
    }
    
    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }
}
```

## Mobile Menu

### Menu Toggle
```css
.mobile-nav {
    @media (prefers-reduced-motion: no-preference) {
        transition: transform var(--transition-normal);
    }
    
    @media (prefers-reduced-motion: reduce) {
        /* Use simpler visibility toggle */
        display: none;
        transform: none;
    }
}

.mobile-nav.active {
    @media (prefers-reduced-motion: reduce) {
        display: block;
    }
}
```

## Focus States

```css
/* Maintain focus visibility without animation */
:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
    /* No transition needed for outline */
}
```

## JavaScript Considerations

```javascript
// Check motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Adjust scroll behavior
function updateScrollBehavior() {
    document.documentElement.style.scrollBehavior = 
        prefersReducedMotion.matches ? 'auto' : 'smooth';
}

// Listen for preference changes
prefersReducedMotion.addEventListener('change', updateScrollBehavior);
```

## Implementation Checklist

### Critical Elements
- [ ] Emergency CTA animation
- [ ] Header scroll behavior
- [ ] Navigation transitions
- [ ] Mobile menu toggle

### Secondary Elements
- [ ] Hover effects
- [ ] Focus states
- [ ] Scroll behavior
- [ ] Loading states

### Testing Requirements
- [ ] Test with motion enabled
- [ ] Test with motion reduced
- [ ] Verify all states work
- [ ] Check conversion impact

## Success Criteria

1. **Functionality**
   - All features work in both modes
   - No jarring transitions
   - Clear state changes
   - Maintained usability

2. **Accessibility**
   - WCAG 2.1 compliant
   - Clear focus states
   - Readable transitions
   - No vestibular triggers

3. **Performance**
   - No layout shifts
   - Smooth changes
   - Efficient updates
   - Browser support

## Browser Support

```css
/* Fallback for older browsers */
@supports not (prefers-reduced-motion: reduce) {
    * {
        /* Set safe defaults */
        transition-duration: 0.2s;
        animation-duration: 0.2s;
    }
}
```

## Documentation Updates

1. Update component docs
2. Add motion preferences
3. Document fallbacks
4. Include examples

## Review Schedule

- Weekly animation review
- Monthly accessibility audit
- Quarterly preference check
- Annual WCAG compliance