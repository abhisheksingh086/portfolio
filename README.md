# Agency Portfolio

A modern, responsive agency portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Fully responsive across all devices
- **Interactive Components**: Animated elements using Framer Motion
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide Icons**: Beautiful, consistent icons

## Tech Stack

- **Framework**: Next.js 15.0.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components with shadcn/ui patterns

## Installation

1. Clone the repository:
```bash
git clone https://github.com/abhisheksingh086/portfolio.git
```

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Install dependencies:
```bash
npm install
```

## Usage

1. Start the development server:
```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

3. Build for production:
```bash
npm run build
npm start
```

## Project Structure

```
agency-portfolio/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact section
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   ├── Navigation.tsx  # Navigation bar
│   ├── Portfolio.tsx   # Portfolio section
│   ├── Services.tsx    # Services section
│   ├── Team.tsx        # Team section
│   ├── Technologies.tsx # Technologies section
│   └── ui/             # UI components
├── lib/                # Utility functions
│   └── utils.ts        # Helper functions
└── public/             # Static assets
```

## Components

- **Hero**: Eye-catching hero section with call-to-action
- **About**: Company information and mission
- **Services**: Service offerings with descriptions
- **Portfolio**: Showcase of past projects
- **Team**: Team member profiles
- **Technologies**: Technology stack display
- **Contact**: Contact form and information
- **Navigation**: Responsive navigation bar
- **Footer**: Site footer with links

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is licensed under the MIT License.

## Author

Abhishek Singh - [GitHub](https://github.com/abhisheksingh086)
