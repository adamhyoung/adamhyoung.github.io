# Header Actions Alignment Analysis

## Conversion Priority Analysis

The header actions are primary conversion points and must be:
1. Immediately visible
2. Clearly actionable
3. Emergency-focused
4. Mobile-optimized

## Required Structure

```html
<div class="header-actions">
    <!-- Emergency Call -->
    <a href="tel:+1234567890" class="header-action header-action--emergency">
        <div class="action-content">
            <i class="fas fa-phone-alt" aria-hidden="true"></i>
            <span class="action-label">
                <small>24/7 Emergency</small>
                <strong>Call Now</strong>
            </span>
        </div>
        <div class="pulse-ring"></div>
    </a>

    <!-- Quote Request -->
    <button class="header-action header-action--quote" data-modal="quote">
        <i class="fas fa-clipboard-list" aria-hidden="true"></i>
        <span class="action-label">Get Quote</span>
    </button>
</div>
```

## Updated Styling

```css
/* Header Actions Container */
.header-actions {
    --action-height: calc(var(--header-height) * 0.6);
    
    display: flex;
    align-items: center;
    gap: var(--spacing-4);
    height: 100%;
    padding-left: var(--spacing-6);
    border-left: 1px solid var(--header-border);
}

/* Base Action Button */
.header-action {
    position: relative;
    display: flex;
    align-items: center;
    height: var(--action-height);
    padding: 0 var(--spacing-4);
    border-radius: var(--radius-sm);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-sm);
    letter-spacing: 0.01em;
    transition: all var(--transition-normal);
    white-space: nowrap;
    min-width: 44px; /* Minimum touch target */
}

/* Emergency Call Button */
.header-action--emergency {
    background: linear-gradient(
        to bottom,
        var(--secondary) 0%,
        var(--secondary-dark) 100%
    );
    color: var(--white);
    border: 1px solid var(--secondary);
    box-shadow: var(--shadow-secondary);
    
    /* Hover Effect */
    &:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-secondary-lg);
        
        .pulse-ring {
            animation-play-state: paused;
        }
    }
    
    /* Active State */
    &:active {
        transform: translateY(0);
    }
    
    /* Focus State */
    &:focus-visible {
        outline: 2px solid var(--secondary-light);
        outline-offset: 2px;
    }
}

/* Quote Button */
.header-action--quote {
    background: rgba(255, 255, 255, 0.1);
    color: var(--white);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(4px);
    
    &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
    }
    
    &:active {
        transform: translateY(0);
    }
    
    &:focus-visible {
        outline: 2px solid var(--white);
        outline-offset: 2px;
    }
}

/* Action Content */
.action-content {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
}

/* Action Label */
.action-label {
    display: flex;
    flex-direction: column;
    
    small {
        font-size: var(--font-size-xs);
        opacity: 0.9;
    }
    
    strong {
        font-weight: var(--font-weight-bold);
    }
}

/* Pulse Animation */
.pulse-ring {
    position: absolute;
    inset: -3px;
    border-radius: inherit;
    background: var(--secondary);
    opacity: 0;
    z-index: -1;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
    0%, 100% {
        opacity: 0;
        transform: scale(1);
    }
    50% {
        opacity: 0.3;
        transform: scale(1.05);
    }
}

/* Scroll State Adjustments */
.header-scrolled .header-action {
    --action-height: calc(var(--header-height-scrolled) * 0.7);
}

/* Mobile Optimization */
@media (max-width: 991px) {
    .header-actions {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: var(--spacing-2);
        background: var(--white);
        box-shadow: var(--shadow-lg);
        border: none;
        justify-content: space-around;
        z-index: var(--z-header);
    }
    
    .header-action {
        flex: 1;
        justify-content: center;
        max-width: 180px;
    }
    
    .header-action--quote {
        background: var(--primary);
        border-color: var(--primary);
        color: var(--white);
    }
}

/* Icon-only on Small Mobile */
@media (max-width: 767px) {
    .header-action {
        width: 48px;
        height: 48px;
        padding: 0;
        justify-content: center;
        
        .action-label {
            display: none;
        }
        
        i {
            font-size: var(--font-size-xl);
            margin: 0;
        }
    }
}

/* Tablet Layout */
@media (min-width: 768px) and (max-width: 991px) {
    .header-action--emergency {
        /* Show text for emergency only */
        width: auto;
        
        .action-label {
            display: flex;
        }
    }
}
```

## Key Improvements

1. **Conversion Focus**
   - Emergency call prominence
   - Clear action hierarchy
   - Optimized touch targets
   - Strong visual cues

2. **Accessibility**
   - Proper touch areas
   - Clear focus states
   - Screen reader support
   - Keyboard navigation

3. **Mobile Optimization**
   - Fixed bottom positioning
   - Simplified interface
   - Easy reach zones
   - Quick access

4. **Visual Enhancement**
   - Consistent styling
   - Clear hierarchy
   - Animation effects
   - State management

## Implementation Checklist

1. **Structure**
   - [ ] Update HTML markup
   - [ ] Implement new classes
   - [ ] Add ARIA labels
   - [ ] Verify semantics

2. **Styling**
   - [ ] Apply new CSS
   - [ ] Test responsive
   - [ ] Verify states
   - [ ] Check animations

3. **Functionality**
   - [ ] Click events
   - [ ] Touch behavior
   - [ ] Scroll handling
   - [ ] Modal triggers

4. **Testing**
   - [ ] Mobile devices
   - [ ] Screen readers
   - [ ] Keyboard nav
   - [ ] Performance

## Success Metrics

1. **Engagement**
   - Emergency call clicks
   - Quote form opens
   - Mobile interaction
   - Scroll behavior

2. **Accessibility**
   - WCAG compliance
   - Screen reader test
   - Keyboard navigation
   - Touch targets

3. **Performance**
   - Animation frames
   - Interaction timing
   - Load performance
   - Paint times