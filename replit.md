# HEMEKON Pharmacy & Supermarket

## Overview
A React-based web application for HEMEKON Pharmacy & Supermarket in Agbor, Delta State, Nigeria. The app allows customers to browse products, add them to cart, and place orders via WhatsApp.

## Tech Stack
- React 19.x
- TypeScript
- Vite 6.x (build tool)
- React Router DOM 7.x
- Lucide React (icons)
- Tailwind CSS (via CDN)

## Project Structure
```
/
├── components/       # Reusable UI components (Navbar, Footer)
├── context/          # React Context (StoreContext)
├── pages/            # Page components (Home, Shop, Cart, Contact, Admin)
├── App.tsx           # Main application with routing
├── index.tsx         # Entry point
├── index.html        # HTML template
├── constants.ts      # App constants
├── types.ts          # TypeScript types
└── vite.config.ts    # Vite configuration
```

## Running the App
- Development: `npm run dev` (runs on port 5000)
- Build: `npm run build` (outputs to `dist/`)
- Preview: `npm run preview`

## Configuration
- Vite is configured to run on port 5000 with all hosts allowed for Replit proxy compatibility
- Uses Tailwind CSS from CDN for styling
- HashRouter is used for client-side routing

## Deployment
Configured as a static site deployment. The build outputs to the `dist` directory.
