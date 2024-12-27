# Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🌓 Dark/Light theme support
- 📱 Fully responsive design
- ✨ Smooth animations
- 🎨 Modern UI components with shadcn/ui
- 🎯 Type-safe development with TypeScript
- 🎬 Animated transitions with Framer Motion

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Customization

### Personal Information

Update the data in `src/data/portfolio-data.ts` with your information:

- About me section
- Skills
- Projects
- Social links

### Resume

1. Add your resume PDF to the `public/assets` folder
2. Update the `resumeUrl` in `src/data/portfolio-data.ts`

### Styling

- Theme colors can be customized in `src/index.css`
- Component styles can be modified using Tailwind classes
- Additional styling can be added to individual components

## Project Structure

```
src/
├── components/     # React components
├── data/          # Portfolio data
├── types/         # TypeScript types
├── lib/           # Utility functions
└── App.tsx        # Main application component
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide Icons

## License

MIT