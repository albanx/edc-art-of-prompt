# React TypeScript App with SCSS

A modern React application built with Next.js 15, TypeScript, and SCSS following best practices for component organization and routing.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **SCSS** for enhanced styling with nested selectors and variables
- **Component-based architecture** with organized folder structure
- **Responsive design** with mobile-first approach
- **Navigation system** with sticky header

## Project Structure

```
src/
├── app/
│   ├── globals.scss         # Global styles and CSS variables
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main page component
├── components/
│   ├── Navigation.tsx      # Navigation component
│   └── Navigation.scss     # Navigation styles
└── pages/
    ├── Home.tsx           # Home page component
    └── Home.scss          # Home page styles
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd react-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Components
- Reusable UI components stored in `/src/components/`
- Each component has its own SCSS file for styling
- Components use TypeScript interfaces for props

### Pages
- Page components stored in `/src/pages/`
- Each page has its own styling file
- Pages are imported and used in the App Router structure

### Styling
- SCSS for enhanced CSS with nesting and variables
- CSS custom properties for theming
- Responsive design with mobile-first breakpoints
- Component-scoped styles to prevent conflicts

### Routing
- Next.js App Router for file-based routing
- Navigation component provides consistent header across pages

## Technology Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: SCSS
- **Build Tool**: Turbopack (Next.js built-in)
- **Linting**: ESLint with Next.js config

## Development Notes

- The app uses CSS custom properties for theming
- SCSS nesting is used for better style organization
- Components follow React functional component patterns
- TypeScript strict mode is enabled for better type safety
