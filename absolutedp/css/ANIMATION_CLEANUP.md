# Animation Cleanup Plan

## Conflicting Animations Found

1. Multiple pulse definitions across:
   - _header-actions.css
   - _utilities.css
   - animations.css

## Required Changes

### 1. Remove Duplicate Definitions

```css
/* Remove from _utilities.css */
- .pulse-animation
- .pulse-animation::before
- @keyframes pulse

/* Remove from animations.css */
- .pulse-animation
- .pulse-animation::before
- @keyframes pulse
```

### 2. Consolidate in Header Actions

```css
/* Keep in _header-actions.css only */
.action-pulse {
    position: absolute;
    inset: 0;
    background: radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0.2),
        transparent 70%
    );
    opacity: 0;
    animation: action-pulse 2s ease-out infinite;
    pointer-events: none;
}

@keyframes action-pulse {
    0% {
        opacity: 0;
        transform: scale(0.8);
    }
    50% {
        opacity: 0.15;
        transform: scale(1.2);
    }
    100% {
        opacity: 0;
        transform: scale(1.4);
    }
}
```

### 3. Update HTML Structure

```html
<!-- Old structure to remove -->
<a href="tel:" class="header-action header-action--emergency pulse-animation">
    ...
</a>

<!-- New structure to use -->
<a href="tel:" class="header-action header-action--emergency">
    <div class="action-content">
        <i class="fas fa-phone-alt" aria-hidden="true"></i>
        <span class="action-label">
            <small>24/7 Emergency</small>
            <strong>Call Now</strong>
        </span>
    </div>
    <div class="action-pulse"></div>
</a>
```

## Implementation Steps

1. Remove old animation classes:
   - Delete from _utilities.css
   - Delete from animations.css
   - Update any usage in HTML

2. Update header actions:
   - Implement new action-pulse
   - Update HTML structure
   - Test across devices

3. Verify cleanup:
   - No blue pulse remaining
   - Correct animation timing
   - Proper styling applied
   - No conflicts

## Quality Checks

1. Visual Testing:
   - Verify animation color
   - Check timing/easing
   - Test hover states
   - Validate mobile view

2. Performance Testing:
   - Animation frames
   - CPU usage
   - Memory impact
   - Mobile performance

3. Accessibility:
   - Reduced motion
   - Animation timing
   - No flickering
   - Clear visibility

## Success Criteria

1. Only one pulse animation exists
2. Animation uses correct colors
3. Performance is optimized
4. Accessibility is maintained

## Documentation Updates

1. Remove old animation references
2. Update component docs
3. Update implementation guides
4. Update testing plans