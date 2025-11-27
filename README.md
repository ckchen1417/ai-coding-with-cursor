# Next.js + shadcn/ui + Tailwind CSS

This is a modern Next.js application set up with [shadcn/ui](https://ui.shadcn.com) components and Tailwind CSS.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Lucide React** - Icon library

## Getting Started

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Adding shadcn/ui Components

To add new components from shadcn/ui:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add input
```

Browse all available components at [ui.shadcn.com](https://ui.shadcn.com).

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Home page
│   ├── layout.tsx    # Root layout
│   └── globals.css   # Global styles & Tailwind config
├── components/       # React components
│   └── ui/           # shadcn/ui components
└── lib/              # Utility functions
    └── utils.ts      # Helper utilities
```

## Configuration Files

- `components.json` - shadcn/ui configuration
- `tsconfig.json` - TypeScript configuration
- `next.config.ts` - Next.js configuration
- `eslint.config.mjs` - ESLint configuration

## Styling

This project uses Tailwind CSS v4 with custom CSS variables for theming. The theme is configured in `src/app/globals.css` and supports both light and dark modes.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deploy

Deploy your Next.js app easily with [Vercel](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
