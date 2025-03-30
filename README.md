# Alx-capstone-project

# African Art Celebration Web App

A modern web application designed to showcase and promote African art and artists, built with Next.js, TypeScript, and Tailwind CSS.

## Overview

This platform celebrates various categories of African art including sculptures, iron bending art, furniture design, architecture, and other traditional and contemporary works. The goal is to provide a visually stunning experience while helping African creatives gain recognition and drive sales.

## Features

- **Art Showcase:** Grid-based display of African artworks with motion effects and transitions
- **Artist Profiles:** Detailed pages for each artist with their portfolio and contact information
- **Interactive Elements:** Like, share, and comment functionality for artworks
- **Responsive Design:** Mobile-friendly interface that works across all devices
- **Search Functionality:** Find artists by name with intuitive error handling
- **Contact Form:** Suggest new artists to be featured on the platform

## Tech Stack

- **Frontend:** Next.js 14, React, TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** [Your deployment platform]

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/african-art-celebration.git
cd african-art-celebration
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
├── components/             # Reusable components
│   ├── ArtCard.tsx         # Artwork card component
│   ├── ArtModal.tsx        # Modal for viewing artwork details
│   ├── Footer.tsx          # Site footer
│   ├── Navbar.tsx          # Navigation bar
├── data/                   # Data sources
│   ├── demoArtworks.ts     # Sample artwork data
├── public/                 # Static assets
│   ├── images/             # Artwork images
├── types.ts                # TypeScript type definitions
```

## Future Enhancements

- **Phase 2:** Integration with backend database (Firebase/Supabase)
- Artist authentication and artwork management
- Enhanced search and filtering capabilities
- Analytics dashboard for artists
- E-commerce integration for art sales

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[Your chosen license]

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [African artists and creators who inspire this project]
