# Component Architecture Specification

## Layout Hierarchy

```
Layout Components
├── Header System
│   ├── Logo
│   ├── Navigation
│   └── Header Actions
│
├── Main Content
│   ├── Hero Section
│   ├── Trust Signals
│   ├── Services Grid
│   ├── Why Choose Us
│   ├── Testimonials
│   └── CTA Sections
│
└── Footer System
    ├── Service Areas
    ├── Contact Info
    └── Navigation
```

## Component Relationships

### Header System
```
header/
├── .header                  # Fixed container
│   └── .header-inner       # Content wrapper
│       ├── .logo          # Brand identity
│       ├── .desktop-nav   # Primary navigation
│       └── .header-actions # CTA buttons
```

**Interaction Points:**
- Header responds to scroll state
- Navigation expands/collapses on mobile
- CTAs maintain prominent visibility

### Hero Section
```
hero/
├── .hero                   # Full-width container
│   ├── .hero-bg          # Background image/overlay
│   └── .hero-content     # Main content
│       ├── .hero-title   # Primary heading
│       ├── .hero-text    # Supporting copy
│       └── .hero-cta     # Call to action
```

**Key Features:**
- Immediate value proposition
- Emergency service access
- Trust indicators

### Service Components
```
services/
├── .service-grid           # Layout container
│   └── .service-card      # Individual service
│       ├── .service-icon  # Visual identifier
│       ├── .service-title # Service name
│       ├── .service-desc  # Description
│       └── .service-cta   # Action button
```

**Conversion Elements:**
- Clear service categorization
- Prominent CTAs
- Visual trust signals

### Trust Signal System
```
trust-signals/
├── .trust-bar             # Container
│   └── .trust-item       # Individual signal
│       ├── .trust-icon   # Visual indicator
│       ├── .trust-stat   # Key metric
│       └── .trust-label  # Description
```

## Component States

### Interactive Elements

1. **Buttons**
```css
.btn {
    /* Default */
    background: var(--primary);
    
    /* Hover */
    &:hover {
        transform: translateY(-2px);
    }
    
    /* Active */
    &:active {
        transform: translateY(0);
    }
    
    /* Focus */
    &:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: 2px;
    }
}
```

2. **Navigation Links**
```css
.nav-link {
    /* Default */
    color: var(--dark);
    
    /* Hover */
    &:hover {
        color: var(--primary);
    }
    
    /* Active */
    &.active {
        color: var(--primary);
        font-weight: var(--font-weight-medium);
    }
}
```

## Responsive Behavior

### Mobile-First Breakpoints

```css
/* Base Mobile (320px+) */
.component {
    /* Core styles */
}

/* Tablet (768px+) */
@media (min-width: 768px) {
    .component {
        /* Tablet adaptations */
    }
}

/* Desktop (992px+) */
@media (min-width: 992px) {
    .component {
        /* Desktop optimizations */
    }
}
```

### Component-Specific Adaptations

1. **Header System**
```css
/* Mobile */
.header-actions {
    position: fixed;
    bottom: 0;
    width: 100%;
}

/* Desktop */
.header-actions {
    position: static;
    display: flex;
}
```

2. **Service Grid**
```css
/* Mobile */
.service-grid {
    grid-template-columns: 1fr;
}

/* Tablet */
.service-grid {
    grid-template-columns: repeat(2, 1fr);
}

/* Desktop */
.service-grid {
    grid-template-columns: repeat(3, 1fr);
}
```

## Animation System

### Transition Standards
```css
/* Quick Interactions */
.btn {
    transition: transform var(--transition-fast);
}

/* Menu Transitions */
.dropdown {
    transition: opacity var(--transition-normal),
                transform var(--transition-normal);
}

/* Complex Animations */
.hero-content {
    animation: fadeInUp var(--transition-slow) ease;
}
```

### Animation Timing
1. User Interactions: 150ms
2. State Changes: 250ms
3. Page Transitions: 350ms
4. Loading States: 500ms

## Performance Guidelines

### Critical Path Components
1. Header (navigation and CTAs)
2. Hero section
3. Emergency contact options
4. Trust signals

### Lazy-Loaded Components
1. Testimonials
2. Service details
3. Image galleries
4. Maps

### Mobile Optimization
- Remove non-essential animations
- Simplify complex hover states
- Optimize touch targets
- Reduce motion when prefered

## Accessibility Requirements

### Interactive Elements
1. Minimum touch target: 44x44px
2. Focus indicators: 2px solid
3. Color contrast: 4.5:1 ratio
4. Clear hover/focus states

### Content Structure
1. Semantic HTML
2. ARIA labels where needed
3. Skip navigation links
4. Proper heading hierarchy

## Component Documentation Template

```markdown
# Component Name

## Purpose
Brief description of component's role

## Usage
Example implementation code

## Props/Classes
- class="primary": Primary variant
- class="secondary": Secondary variant

## States
- Default
- Hover
- Active
- Disabled

## Accessibility
- Required ARIA labels
- Keyboard navigation
- Screen reader considerations

## Responsive Behavior
- Mobile layout
- Tablet adaptations
- Desktop optimizations
```

## Testing Requirements

### Visual Testing
- Component renders correctly
- States work as expected
- Responsive layouts adapt properly
- Animations perform smoothly

### Functional Testing
- Interactive elements work
- Keyboard navigation functions
- Touch targets are accessible
- Forms validate properly

### Performance Testing
- Load time optimization
- Animation performance
- Resource loading
- Mobile responsiveness

## Implementation Checklist

1. Base Structure
   - [ ] HTML semantic structure
   - [ ] CSS class naming
   - [ ] Responsive container

2. Styling
   - [ ] Design tokens applied
   - [ ] States defined
   - [ ] Animations added
   - [ ] Responsive styles

3. Functionality
   - [ ] Interactions work
   - [ ] States function
   - [ ] Events trigger
   - [ ] Forms validate

4. Accessibility
   - [ ] ARIA attributes
   - [ ] Keyboard nav
   - [ ] Screen reader
   - [ ] Color contrast