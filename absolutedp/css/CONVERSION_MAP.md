# CSS Conversion Point Mapping

## Primary Conversion Points

### Emergency Call CTA
**Location:** Header
**CSS Modules:** `_header-actions.css`, `_buttons.css`
```css
.header-call {
    /* High visibility emergency action */
    background: var(--secondary);
    /* Prominent positioning */
    /* Clear touch targets */
}
```

### Quote Request CTA
**Location:** Header, Hero, Services
**CSS Modules:** `_buttons.css`, `_forms.css`
```css
.btn-primary {
    /* Primary conversion action */
    /* Consistent styling */
    /* Clear hierarchy */
}
```

## Trust Building Elements

### Trust Signals Bar
**Location:** Below Hero
**CSS Module:** `_trust-signals.css`
```css
.trust-bar {
    /* Immediate social proof */
    /* Visual credibility */
    /* Mobile optimization */
}
```

### Service Cards
**Location:** Services Section
**CSS Module:** `_services.css`
```css
.service-card {
    /* Clear value proposition */
    /* Action-oriented design */
    /* Mobile-first layout */
}
```

## Conversion Support Elements

### Why Choose Us
**Location:** Mid-page
**CSS Module:** `_why-choose.css`
```css
.why-choose-point {
    /* Differentiation points */
    /* Trust reinforcement */
    /* Visual engagement */
}
```

### Testimonials
**Location:** Pre-footer
**CSS Module:** `_testimonials.css`
```css
.testimonial-card {
    /* Social proof */
    /* Credibility building */
    /* Trust reinforcement */
}
```

## Form Conversion Points

### Quote Request Form
**Location:** Modal, Contact Section
**CSS Module:** `_forms.css`
```css
.contact-form {
    /* Clear progression */
    /* Error prevention */
    /* Mobile optimization */
}
```

## Mobile Conversion Path

### Mobile Navigation
**CSS Modules:** `_mobile-nav.css`, `_header-actions.css`
```css
.mobile-nav {
    /* Quick access to key actions */
    /* Clear touch targets */
    /* Simplified journey */
}
```

### Mobile CTAs
**CSS Modules:** Various
```css
/* Consistent mobile CTA styling */
.btn {
    min-height: 48px;  /* Touch target */
    display: flex;     /* Alignment */
    width: 100%;       /* Full width on mobile */
}
```

## Conversion Optimization Points

### Visual Hierarchy
- Primary actions use `var(--primary)`
- Emergency actions use `var(--secondary)`
- Supporting elements use neutral colors
- Clear size and weight progression

### Touch Targets
- Minimum 44px/48px touch areas
- Adequate spacing between actions
- Clear hit states
- Mobile-optimized interactions

### Form Optimization
- Clear input states
- Immediate validation
- Error prevention
- Success confirmation

### Loading States
- Clear progress indication
- Optimistic UI updates
- Smooth transitions
- Error recovery

## Key Performance Indicators

### CSS Performance
- Critical path optimization
- Efficient selectors
- Minimal repaints
- GPU acceleration where beneficial

### Conversion Metrics
- CTA visibility
- Form completion rates
- Mobile conversion path
- Error/abandon rates

## Implementation Guidelines

### New Features
1. Identify conversion impact
2. Map to existing patterns
3. Implement consistently
4. Test thoroughly
5. Monitor metrics

### Modifications
1. Review conversion data
2. Assess impact
3. A/B test changes
4. Monitor results
5. Document findings

## Regular Maintenance

### Monthly Review
- [ ] Check conversion metrics
- [ ] Review CSS performance
- [ ] Update documentation
- [ ] Test key paths
- [ ] Optimize as needed

### Quarterly Audit
- [ ] Full conversion audit
- [ ] Performance testing
- [ ] Browser testing
- [ ] Mobile testing
- [ ] Documentation update