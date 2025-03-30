# Absolute Draining & Plumbing Design System

## Overview

This design system implements Material Design principles optimized for plumbing service websites, with a focus on emergency accessibility, trust building, and conversion optimization. The system is built to be mobile-first, performance-focused, and accessibility-compliant.

## Documentation Structure

```
css/
├── README.md                  # You are here
├── MASTER_REFERENCE.md        # Complete system overview
├── DESIGN_SYSTEM.md           # Core design principles and tokens
├── IMPLEMENTATION_GUIDE.md    # Development implementation details
├── COMPONENT_ARCHITECTURE.md  # Component structure and patterns
└── CRO_ARCHITECTURE.md       # Conversion optimization strategy
```

## Quick Start

1. Begin with `DESIGN_SYSTEM.md` to understand our core principles and token system
2. Review `IMPLEMENTATION_GUIDE.md` for practical implementation details
3. Reference `COMPONENT_ARCHITECTURE.md` for component patterns
4. Consult `CRO_ARCHITECTURE.md` for conversion optimization
5. Use `MASTER_REFERENCE.md` as your complete reference

## Core Files Organization

```
css/
├── base/
│   ├── _variables.css    # Design tokens
│   ├── _reset.css       # Base reset
│   └── _utilities.css   # Helper classes
│
├── components/
│   ├── _buttons.css     # Button styles
│   ├── _forms.css       # Form elements
│   ├── _header.css      # Header system
│   └── ...             # Other components
│
└── main.css            # Main stylesheet
```

## Key Features

1. **Emergency-First Design**
   - Always-visible emergency contact
   - Clear conversion paths
   - Simplified mobile experience

2. **Trust-Building Elements**
   - Testimonial system
   - Trust signal components
   - Social proof integration

3. **Performance Optimized**
   - Critical CSS path
   - Lazy loading
   - Mobile optimization

4. **Conversion Focused**
   - Clear CTAs
   - Optimized forms
   - A/B testing ready

## Getting Started

1. **Review Documentation**
   ```bash
   # Start with these files in order:
   1. DESIGN_SYSTEM.md
   2. IMPLEMENTATION_GUIDE.md
   3. COMPONENT_ARCHITECTURE.md
   4. CRO_ARCHITECTURE.md
   ```

2. **Implement Base System**
   ```css
   /* Import order in main.css */
   @import 'base/_variables.css';
   @import 'base/_reset.css';
   @import 'base/_utilities.css';
   ```

3. **Add Components**
   ```css
   /* Component imports */
   @import 'components/_buttons.css';
   @import 'components/_forms.css';
   @import 'components/_header.css';
   ```

## Development Workflow

1. **Start New Components**
   - Review design system tokens
   - Follow component architecture
   - Implement mobile-first
   - Test thoroughly

2. **Modify Existing Components**
   - Check design system compliance
   - Maintain responsive behavior
   - Verify accessibility
   - Update documentation

3. **Testing Requirements**
   - Cross-browser compatibility
   - Mobile responsiveness
   - Performance metrics
   - Accessibility compliance

## Best Practices

1. **Use Design Tokens**
   ```css
   /* Do */
   .element {
       color: var(--primary);
       padding: var(--spacing-4);
   }

   /* Don't */
   .element {
       color: #0D47A1;
       padding: 1rem;
   }
   ```

2. **Follow Component Patterns**
   ```css
   /* Component Template */
   .component {
       /* Base styles */
   }

   .component-element {
       /* Child elements */
   }

   @media (min-width: 768px) {
       /* Responsive styles */
   }
   ```

3. **Maintain Accessibility**
   ```css
   /* Focus States */
   .interactive-element:focus-visible {
       outline: 2px solid var(--primary);
       outline-offset: 2px;
   }
   ```

## Support

- Report issues in the project repository
- Request features through pull requests
- Contribute to documentation updates
- Participate in system reviews

## Version Control

```markdown
Version: 1.0.0
Last Updated: March 2025
Status: Production
```

## License

MIT License - See LICENSE.md for details