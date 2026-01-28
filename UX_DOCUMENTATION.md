# UX Documentation - Growth Home Sprint

## Overview

This document provides detailed UX specifications for the Growth Home Sprint prototype, including user flows, interaction patterns, component behaviors, and design rationale.

## User Flows

### Primary User Journey

1. **Landing on Home**
   - User arrives at dashboard home
   - Sees overview of key metrics (Net Volume, Balance, Payouts)
   - Can quickly access CTAs for common actions
   - Bottom AI prompt is visible and inviting

2. **Viewing Metrics**
   - Metrics are organized in grouped rows with visual hierarchy
   - Large Net Volume card draws primary attention
   - Smaller cards show supporting metrics
   - Charts provide at-a-glance trend visualization

3. **Using AI Assistant**
   - User types natural language query in bottom input
   - Presses Enter or clicks send button
   - Response appears above input with smooth slide-up animation
   - User can read response and close it with X button
   - Response slides down and fades out on close

4. **Switching Views**
   - User clicks "Option 2" in bottom-right toggle
   - View switches instantly
   - Toggle state updates to show active view

## Component Specifications

### Navigation Sidebar

**Purpose**: Persistent access to main dashboard sections

**Behavior**:
- Fixed position on left side (72px wide)
- Always visible on desktop
- Icons only (no labels for compact design)
- Three groups with 24px spacing between:
  - Top group: 5 primary navigation items
  - Middle group: 1 item (clock/recent)
  - Bottom group: 5 secondary items
- Active state: Light gray background (#E3E8EE)
- Hover state: Light gray background with smooth transition

**Accessibility**:
- Icons are buttons with proper focus states
- Material Symbols provide semantic meaning
- Keyboard navigable

### Global Header

**Purpose**: Context awareness and global actions

**Behavior**:
- Sticky/fixed to top of viewport
- Spans from navigation edge to right edge
- Contains:
  - Stripe logo mark (left)
  - Test mode toggle (right)
  - Quick action icons (apps, notifications, settings)
  - Create button (prominent purple circle)
- Stays visible during scroll

**Interactions**:
- Test mode toggle: Click to switch modes
- Icon buttons: Hover shows light background
- Create button: Hover scales up slightly (1.05x)

### Metric Cards

**Purpose**: Display key business metrics with visual data

**Visual Specifications**:
- Background: White at 95% opacity
- Border: 1px gradient (white to #E6E6E6)
- Shadow: Layered for depth
  - Shadow 1: 0px 2px 5px rgba(48, 49, 61, 0.08)
  - Shadow 2: 0px 1px 1px rgba(0, 0, 0, 0.12)
- Backdrop blur: 16px (frosted glass effect)
- Border radius: 12px
- Padding: 20px

**Layout**:
- Cards flex to fill available space
- Large cards are 2x width of regular cards
- Minimum height ensures proper proportions
- Charts extend to bottom edge (negative margin)

**Content Hierarchy**:
- Card title: Small, subtle (14px, #425466)
- Metric value: Large, prominent (24-32px, #0A2540, weight 400)
- Supporting text: Small, gray (13px, #697386)
- Charts: Minimal styling, gray lines (#CBD5E0)

### Row Containers

**Purpose**: Group related metrics visually

**Specifications**:
- Background: #F5F6F8 (light gray)
- Padding: 8px all sides
- Border radius: 12px
- Gap between modules: 8px
- Spacing between containers: 16px

**Rationale**: Creates visual grouping without heavy borders or shadows

### CTA Group

**Purpose**: Quick access to common actions

**Behavior**:
- Horizontal row of pill-shaped buttons
- Buttons size to content (no stretching)
- Left-aligned
- 12px gap between buttons

**Button Specifications**:
- Border radius: 999px (full pill)
- Background: #F5F6F8
- Hover: Darker gray (#E3E8EE)
- Padding: 12px 20px
- Icon + text layout
- Icon color: #425466

### AI Prompt Area

**Purpose**: Natural language interface for querying Stripe data

**Positioning**:
- Fixed to bottom of viewport
- Spans from navigation edge to right edge
- Always visible (persistent)
- Z-index above content but below navigation

**Visual Design**:
- White to transparent gradient background (creates fade effect)
- Input wrapper:
  - 4px gradient border (#E3E8EE to #CBD5E0)
  - White at 95% opacity
  - 16px backdrop blur
  - Shadows matching metric cards
  - Border radius: 12px
  - Max width: 1400px (centered)

**Input Area Components**:
1. **Attach button**: Paperclip icon, left side, gray
2. **Text input**: Flexible width, placeholder "Ask, search, or create anything"
3. **Send button**: Circular, gray background, up arrow icon

**Response Area**:
- Appears above input when active
- Response card styling matches metric cards
- Close button (X) in top right with 16px/20px padding
- Content: Formatted HTML with headers, lists, strong text
- Max height: 50vh with scroll

**Animations**:
- **Appear**: Slide up 10px with fade in (300ms ease-out)
- **Dismiss**: Slide down 10px with fade out (300ms ease-out)

**Interaction States**:
1. **Idle**: Input visible, no response
2. **Typing**: User enters query
3. **Submitted**: 500ms delay (simulates AI thinking)
4. **Response shown**: Card slides up with content
5. **Dismissed**: User clicks X, card slides down

### AI Mock Responses

**Keyword Matching**:
- Balance: balance, how much, funds, available
- Payments: payment, transaction, recent, last
- Customers: customer, user, client
- Volume: volume, revenue, sales, gross
- Payouts: payout, transfer, bank
- Disputes: dispute, chargeback, refund
- Create: create, new, make, generate

**Response Format**:
- Strong headers for sections
- Bullet lists for details
- Bold for important values
- Realistic Stripe test data
- Clear, concise language

**Data Consistency**:
- Balance: $8,420 (matches card)
- Net Volume: $24,532 (matches card)
- Last Payout: $12,840 (matches card)

### Version Toggle

**Purpose**: Switch between different home layouts

**Positioning**:
- Fixed bottom right
- 24px from bottom and right edges
- Z-index: 1000

**Design**:
- White background
- Shadow for elevation
- Border radius: 8px
- Two buttons: "Option 1" and "Option 2"
- Active state: Purple background (#635BFF)
- Inactive state: Transparent with gray text

## Responsive Behavior

### Desktop (> 900px)
- Navigation sidebar visible
- Full layout with side-by-side cards
- AI prompt spans from nav edge to right

### Mobile (≤ 900px)
- Navigation hidden
- Header spans full width
- Single column layout
- AI prompt spans full width
- Cards stack vertically

## Accessibility Considerations

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Logical tab order
- Enter key submits AI queries
- Focus indicators on all buttons and inputs

### Screen Readers
- Semantic HTML structure
- ARIA labels where needed
- Icon buttons have accessible names
- Status messages announced

### Color Contrast
- All text meets WCAG AA standards
- Interactive elements have clear focus states
- Color is not the only indicator of state

## Performance Considerations

### CSS Optimization
- Backdrop filter used sparingly (modern browsers)
- Transforms for animations (GPU accelerated)
- Minimal repaints and reflows

### JavaScript
- Event delegation where appropriate
- Minimal DOM manipulation
- No external dependencies
- Small bundle size

## Design Rationale

### Frosted Glass Cards
- Creates depth and hierarchy
- Modern, premium aesthetic
- Allows subtle background effects
- Reduces visual weight

### Fixed AI Prompt
- Always accessible
- Doesn't compete with content
- Gradient indicates more content above
- Consistent position (muscle memory)

### Minimal Borders
- Clean, uncluttered appearance
- Relies on shadows and spacing
- Gradient borders add subtle detail
- Modern design trend

### Icon-Only Navigation
- Maximizes content space
- Clean, minimal sidebar
- Icons are recognizable
- Consistent with mobile patterns

### Regular Weight Numbers
- More readable for large metrics
- Modern typography trend
- Less aggressive than bold
- Appropriate emphasis level

## Future Enhancements

### AI Improvements
- Multi-turn conversations
- Context retention
- Suggested queries
- Action buttons in responses (e.g., "Create Invoice")
- Voice input
- Response history

### Personalization
- Customizable metric cards
- Drag-and-drop card arrangement
- Save preferred layouts
- Hide/show cards
- Custom date ranges

### Data Visualization
- Interactive charts
- Drill-down capabilities
- Export data
- Comparison views
- Real-time updates

### Collaboration
- Share views with team
- Comments on metrics
- Alerts and notifications
- Team insights

## Testing Recommendations

### User Testing Focus Areas
1. Can users find and use the AI prompt naturally?
2. Are metric cards easy to scan and understand?
3. Is the navigation intuitive?
4. Do animations feel smooth or distracting?
5. Is the information hierarchy clear?

### Technical Testing
1. Cross-browser compatibility
2. Performance with large datasets
3. Accessibility with screen readers
4. Keyboard-only navigation
5. Mobile responsiveness
6. Animation performance

### Analytics to Track
- AI prompt usage frequency
- Common queries
- View switching patterns
- Time spent on page
- Card interaction rates
- CTA button clicks

## Design Files

Reference images are available in the `Exports/` folder:
- `Collapsed Nav.png` - Navigation sidebar design
- `New Dashboard header.png` - Header component
- `CTA group.png` - Call-to-action buttons
- `Home Row 1.png` - First row of metrics
- `Home Row 2.png` - Second row of metrics
- `AI prompt area.png` - AI input component

---

**Document Version**: 1.0
**Last Updated**: January 28, 2026
**Author**: Growth Team
**Status**: Design Review
