# Growth Home Sprint

A new prototype for the Stripe Dashboard Home experience featuring an AI-powered assistant for querying Stripe test data.

## Features

### 🏠 Modern Dashboard Home
- **Collapsed Navigation**: Fixed 72px sidebar with icon-based navigation
- **Sticky Header**: Global header with test mode toggle and quick actions
- **Metric Cards**: Frosted glass cards with gradient borders and drop shadows
- **Responsive Design**: Adapts to mobile and desktop viewports

### 🤖 AI Assistant
- **Interactive Prompt Area**: Fixed bottom input for natural language queries
- **Mock Stripe Data**: Simulated responses for common Stripe queries
- **Smart Keyword Matching**: Recognizes queries about balance, payments, customers, volume, payouts, disputes, and more
- **Smooth Animations**: Slide-up appear and slide-down dismiss transitions

### 📊 Dashboard Views
- **Option 1**: CTA buttons, Net Volume, Balance, Payouts, Product Metrics, and Tasks
- **Option 2**: Coming soon (switchable via bottom-right toggle)

## Getting Started

1. Open `index.html` in your browser, or visit the live prototype at:
   **https://stephencalvillo-stripe.github.io/growth-dash-home-sprint/**

2. View the dashboard with sample metrics

3. Try the AI assistant with queries like:
   - "What's my balance?"
   - "Show recent payments"
   - "How many customers do I have?"
   - "What's my net volume?"
   - "When is my next payout?"

## Project Structure

```
growth-dash-home-sprint/
├── index.html           # Main HTML structure
├── styles.css           # All styling and animations
├── script.js            # View switching and AI mock logic
├── Exports/             # Design reference images
├── README.md            # This file
└── UX_DOCUMENTATION.md  # Detailed UX documentation
```

## Design System

### Colors
- **Primary Purple**: `#635BFF` (Stripe brand)
- **Dark Blue**: `#0A2540` (Primary text)
- **Light Gray**: `#F7FAFC` (Card backgrounds)
- **Border Grays**: `#E3E8EE`, `#CBD5E0` (Gradients)
- **Secondary Text**: `#425466`, `#697386`

### Typography
- **Font**: System font stack (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Page Title**: 28px, weight 700
- **Card Headers**: 14px, weight 600
- **Metrics**: 24px-32px, weight 400
- **Body Text**: 14-15px

### Components

#### Metric Cards
- Background: White at 95% opacity with 16px backdrop blur
- Border: 1px gradient from `#FFFFFF` to `#E6E6E6`
- Shadow: Two-layer drop shadow for depth
- Border Radius: 12px
- Padding: 20px

#### AI Prompt Area
- Background: White to transparent gradient
- Border: 4px gradient from `#E3E8EE` to `#CBD5E0`
- Fixed position at bottom of viewport
- Frosted glass effect with backdrop blur

#### Row Containers
- Background: `#F5F6F8`
- Padding: 8px
- Border Radius: 12px
- Gap between modules: 8px

### Spacing
- Header height: ~48px (with 12px padding)
- Navigation width: 72px
- Card padding: 20px
- Row container padding: 8px
- Module gap: 8px (within rows), 16px (between rows)

## Tech Stack

- **HTML5**: Semantic structure
- **CSS3**: Grid, Flexbox, gradients, backdrop-filter, animations
- **Vanilla JavaScript**: No frameworks or libraries
- **Material Symbols**: Icon font from Google

## Browser Support

- Chrome/Edge 88+
- Safari 15.4+
- Firefox 103+

Requires support for:
- CSS backdrop-filter
- CSS Grid
- CSS Custom Properties
- ES6 JavaScript

## Development Notes

This is a high-fidelity prototype intended for design review and user testing. The AI functionality is mocked with predefined responses and does not connect to real Stripe APIs or AI services.

For production implementation, see `UX_DOCUMENTATION.md` for detailed specifications and requirements.

## Future Enhancements

- [ ] Build out Option 2 layout
- [ ] Add real Stripe API integration
- [ ] Implement actual AI/LLM integration
- [ ] Add user preferences and customization
- [ ] Create additional metric visualizations
- [ ] Add keyboard shortcuts
- [ ] Implement dark mode

## License

Internal Stripe prototype - Not for public distribution
