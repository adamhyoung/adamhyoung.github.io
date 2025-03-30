# Design System Implementation Guide

## Core Variables Implementation

Copy the following CSS variables into `_variables.css`:

```css
:root {
    /* Color System */
    --primary: #0D47A1;
    --primary-dark: #002171;
    --primary-light: #5472D3;
    --primary-rgb: 13, 71, 161;

    --secondary: #D32F2F;
    --secondary-dark: #9A0007;
    --secondary-light: #FF6659;
    --secondary-rgb: 211, 47, 47;

    /* Neutral Colors */
    --dark: #212121;
    --gray-dark: #424242;
    --gray: #757575;
    --gray-light: #E0E0E0;
    --light: #F5F5F5;
    --white: #FFFFFF;

    /* Functional Colors */
    --success: #388E3C;
    --warning: #F57C00;
    --error: #D32F2F;
    --info: #0288D1;

    /* Typography */
    --font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
    
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;

    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 2rem;
    --font-size-4xl: 2.5rem;

    --line-height-tight: 1.2;
    --line-height-base: 1.5;
    --line-height-loose: 1.75;

    /* Spacing */
    --spacing-1: 0.25rem;
    --spacing-2: 0.5rem;
    --spacing-3: 0.75rem;
    --spacing-4: 1rem;
    --spacing-5: 1.5rem;
    --spacing-6: 2rem;
    --spacing-8: 3rem;
    --spacing-10: 4rem;
    --spacing-12: 5rem;

    /* Layout */
    --container-max: 1200px;
    --container-padding: 1rem;

    /* Z-Index Layers */
    --z-below: -1;
    --z-base: 0;
    --z-above: 1;
    --z-header: 100;
    --z-dropdown: 200;
    --z-modal: 300;
    --z-toast: 400;

    /* Effects */
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
    --shadow-xl: 0 20px 25px rgba(0,0,0,0.1);

    --shadow-primary: 0 4px 14px rgba(var(--primary-rgb), 0.25);
    --shadow-secondary: 0 4px 14px rgba(var(--secondary-rgb), 0.25);

    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-full: 9999px;

    /* Transitions */
    --transition-fast: 150ms ease;
    --transition-normal: 250ms ease;
    --transition-slow: 350ms ease;

    /* Breakpoints */
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;

    /* Component-Specific */
    --header-height: 80px;
    --header-height-scrolled: 64px;
    --nav-text-shadow: 0 1px 2px rgba(0,0,0,0.1);
    --header-bg-scrolled: rgba(255, 255, 255, 0.95);
}

/* Dark Mode Variables */
@media (prefers-color-scheme: dark) {
    :root {
        --dark: #FFFFFF;
        --gray-dark: #E0E0E0;
        --gray: #9E9E9E;
        --gray-light: #424242;
        --light: #212121;
        --white: #121212;
        
        --shadow-sm: 0 1px 3px rgba(0,0,0,0.3);
        --shadow-md: 0 4px 6px rgba(0,0,0,0.3);
        --shadow-lg: 0 10px 15px rgba(0,0,0,0.3);
        --shadow-xl: 0 20px 25px rgba(0,0,0,0.3);
    }
}

/* Mobile-First Media Query Variables */
@media (max-width: 767px) {
    :root {
        --container-padding: 1rem;
        --header-height: 64px;
        --header-height-scrolled: 56px;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    :root {
        --container-padding: 2rem;
        --header-height: 72px;
        --header-height-scrolled: 60px;
    }
}
```

## Implementation Steps

1. Replace the current contents of `_variables.css` with the above code
2. Update any component-specific variables to use these new tokens
3. Test responsive breakpoints and dark mode implementations
4. Verify all components adapt correctly to the new variables

## Component Migration Guide

### Buttons
```css
.btn {
    padding: var(--spacing-3) var(--spacing-4);
    border-radius: var(--radius-sm);
    font-weight: var(--font-weight-medium);
    transition: all var(--transition-normal);
}
```

### Cards
```css
.card {
    background: var(--white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    padding: var(--spacing-6);
}
```

### Headers & Text
```css
h1 { font-size: var(--font-size-4xl); }
h2 { font-size: var(--font-size-3xl); }
h3 { font-size: var(--font-size-2xl); }
h4 { font-size: var(--font-size-xl); }
```

### Containers
```css
.container {
    max-width: var(--container-max);
    padding: 0 var(--container-padding);
    margin: 0 auto;
}
```

## Testing Requirements

1. Verify all color contrast ratios meet WCAG 2.1 AA standards
2. Test responsive breakpoints on real devices
3. Verify dark mode implementation
4. Check transition timing across components
5. Validate spacing consistency

## Quality Assurance Checklist

- [ ] All components use design system variables
- [ ] No hard-coded values in component CSS
- [ ] Dark mode functions correctly
- [ ] Responsive breakpoints work as expected
- [ ] Typography scale is consistent
- [ ] Spacing system is properly implemented
- [ ] Shadow system creates proper hierarchy
- [ ] Color system maintains proper contrast
- [ ] Transitions are smooth and consistent