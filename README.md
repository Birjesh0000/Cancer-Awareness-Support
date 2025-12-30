# Cancer Awareness & Support

A responsive web application dedicated to cancer awareness and support, built with React and Vite.

## Features

- **Landing Page**: Compelling hero section with awareness message
- **Contact Form**: Simple form for visitors to get in touch (Name, Email, Message)
- **Daily Inspiration**: Real-time quotes fetched from a public API
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern Stack**: React 19 with TypeScript and Vite for optimal performance

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Landing page hero section
│   ├── ContactForm.tsx      # Contact form component
│   ├── QuotesSection.tsx    # Daily inspiration section
│   └── Footer.tsx          # Footer section
├── styles/
│   ├── Header.css
│   ├── Hero.css
│   ├── ContactForm.css
│   ├── QuotesSection.css
│   └── Footer.css
├── App.tsx                 # Main app component
├── index.css               # Global styles
└── main.tsx               # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "Cancer Awareness & Support App"
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Technologies Used

- **React 19**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **Axios**: HTTP client for API calls
- **CSS3**: Responsive styling with modern features

## Features Breakdown

### 1. Landing Page (Hero Section)
- Eye-catching gradient background
- Compelling message about cancer awareness
- Mobile-responsive typography

### 2. Contact Form
- Name, Email, and Message fields
- Form validation
- Success message feedback
- No backend required (ready for future integration)

### 3. Daily Inspiration
- Fetches random inspirational/motivational quotes from [Quotable API](https://quotable.io)
- "Get Another Quote" button for new quotes
- Loading and error states
- Real-time updates

### 4. Navigation
- Sticky header with smooth scrolling
- Quick navigation to Contact and Inspiration sections
- Responsive mobile menu

### 5. Responsive Design
- Mobile-first approach
- Breakpoints for tablet (768px) and mobile (480px)
- Flexible layouts using CSS Flexbox

## API Integration

The application uses the free [Quotable API](https://quotable.io) to fetch inspirational quotes:

```
GET https://api.quotable.io/random?tags=inspirational,motivational
```

No authentication required.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Backend integration for form submissions
- User authentication
- Blog section for awareness articles
- Resource library with educational materials
- Community forum
- Donation integration

## License

This project is open source and available for educational and community support purposes.

## Support

For questions or feedback, please visit the contact section on the website or reach out through the contact form.

---

Built with care for cancer awareness and support. ❤️
