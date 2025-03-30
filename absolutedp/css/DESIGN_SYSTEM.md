# Absolute Draining & Plumbing Design System

## Core Design Philosophy

Our design system combines Material Design principles with plumbing industry-specific needs, prioritizing:
1. Emergency accessibility
2. Trust building
3. Clear service communication
4. Mobile-first conversion optimization

## Color System

### Primary Colors
```css
--primary: #0D47A1;        /* Primary brand color - trust, reliability */
--primary-dark: #002171;   /* Darker variant for depth */
--primary-light: #5472D3;  /* Lighter variant for accents */

/* RGB versions for opacity operations */
--primary-rgb: 13, 71, 161;
```

### Secondary Colors
```css
--secondary: #D32F2F;        /* Emergency actions */
--secondary-dark: #9A0007;   /* Hover states for emergency */
--secondary-light: #FF6659;  /* Notifications */

--secondary-rgb: 211, 47, 47;
```

### Neutral Colors
```css
--dark: #212121;          /* Primary text */
--gray-dark: #424242;     /* Secondary text */
--gray: #757575;          /* Disabled text */
--gray-light: #E0E0E0;    /* Borders, dividers */
--light: #F5F5F5;         /* Background, cards */
--white: #FFFFFF;         /* Surface */
```

### Functional Colors
```css
--success: #388E3C;       /* Confirmation messages */
--warning: #F57C00;       /* Warning messages */
--error: #D32F2F;         /* Error states */
--info: #0288D1;          /* Information messages */
```

## Typography

### Font Family
```css
--font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Font Weights
```css
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Font Sizes
```css
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;   /* 14px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.125rem;   /* 18px */
--font-size-xl: 1.25rem;    /* 20px */
--font-size-2xl: 1.5rem;    /* 24px */
--font-size-3xl: 2rem;      /* 32px */
--font-size-4xl: 2.5rem;    /* 40px */
```

### Line Heights
```css
--line-height-tight: 1.2;
--line-height-base: 1.5;
--line-height-loose: 1.75;
```

## Spacing System

```css
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-3: 0.75rem;   /* 12px */
--spacing-4: 1rem;      /* 16px */
--spacing-5: 1.5rem;    /* 24px */
--spacing-6: 2rem;      /* 32px */
--spacing-8: 3rem;      /* 48px */
--spacing-10: 4rem;     /* 64px */
--spacing-12: 5rem;     /* 80px */
```

## Layout

### Container
```css
--container-max: 1200px;
--container-padding: 1rem;   /* Adjusts with breakpoints */
```

### Z-Index Layers
```css
--z-below: -1;
--z-base: 0;
--z-above: 1;
--z-header: 100;
--z-dropdown: 200;
--z-modal: 300;
--z-toast: 400;
```

## Component Specifications

### Buttons
Standard heights and padding for various button sizes:
```css
/* Base Button */
.btn {
    height: 48px;
    padding: 0 var(--spacing-4);
    border-radius: var(--radius-sm);
    font-weight: var(--font-weight-medium);
    transition: all var(--transition-normal);
}

/* Small Button */
.btn-sm {
    height: 36px;
    padding: 0 var(--spacing-3);
}

/* Large Button */
.btn-lg {
    height: 56px;
    padding: 0 var(--spacing-6);
}
```

### Cards
Standard card styling:
```css
.card {
    background: var(--white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    padding: var(--spacing-6);
}
```

## Effects & Animation

### Shadows
```css
--shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
--shadow-md: 0 4px 6px rgba(0,0,0,0.1);
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
--shadow-xl: 0 20px 25px rgba(0,0,0,0.1);

--shadow-primary: 0 4px 14px rgba(var(--primary-rgb), 0.25);
--shadow-secondary: 0 4px 14px rgba(var(--secondary-rgb), 0.25);
```

### Border Radius
```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

### Transitions
```css
--transition-fast: 150ms ease;
--transition-normal: 250ms ease;
--transition-slow: 350ms ease;
```

## Responsive Breakpoints

```css
--breakpoint-sm: 576px;   /* Mobile landscape */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 992px;   /* Desktop */
--breakpoint-xl: 1200px;  /* Large desktop */
```

## Emergency-Specific Components

### Emergency Call Button
```css
.emergency-cta {
    background: var(--secondary);
    color: var(--white);
    font-weight: var(--font-weight-bold);
    min-height: 48px;
    box-shadow: var(--shadow-secondary);
}
```

### Emergency Form
```css
.emergency-form {
    background: var(--white);
    border: 2px solid var(--secondary);
    border-radius: var(--radius-lg);
    padding: var(--spacing-6);
}
```

## Trust Indicators

### Trust Badge
```css
.trust-badge {
    background: var(--light);
    border-radius: var(--radius-sm);
    padding: var(--spacing-2) var(--spacing-3);
    font-size: var(--font-size-sm);
    color: var(--dark);
}
```

### Review Stars
```css
.review-stars {
    color: #FFC107;  /* Material Design yellow */
    font-size: var(--font-size-lg);
}
```

## Implementation Guidelines

### Critical Path Elements
1. Emergency contact access
2. Service navigation
3. Trust signals
4. Contact forms

### Mobile Optimization
- Touch targets minimum 44px
- Bottom navigation for key actions
- Floating emergency button
- Simplified forms

### Performance Targets
- First Contentful Paint: < 1.2s
- Largest Contentful Paint: < 2.5s
- First Input Delay: < 100ms
- Cumulative Layout Shift: < 0.1

### Accessibility Requirements
- WCAG 2.1 AA compliance
- Clear focus states
- Proper heading hierarchy
- Color contrast ratios ≥ 4.5:1
- Screen reader optimization

## Component Dependencies

1. Base Styles
   - variables.css
   - reset.css
   - utilities.css

2. Layout Components
   - header.css
   - navigation.css
   - footer.css

3. Feature Components
   - buttons.css
   - forms.css
   - cards.css

4. Section Components
   - hero.css
   - services.css
   - testimonials.css

5. Enhancement Layer
   - animations.css
   - transitions.css