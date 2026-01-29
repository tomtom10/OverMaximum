# Over Maximum Records

A cutting-edge record label website built with Next.js, showcasing groundbreaking artists and revolutionary music.

## Features

- 🎨 **Premium Dark Mode Design** - Vibrant purple and blue gradients with sophisticated animations
- 🎵 **Featured Artists Section** - Showcase your roster with interactive cards
- 💿 **Latest Releases** - Display new tracks and albums with glassmorphic design
- ✨ **Smooth Animations** - Micro-interactions and hover effects throughout
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⚡ **Built with Next.js 16** - Fast, modern, and SEO-optimized

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework**: Next.js 16.1.6 with TypeScript
- **Styling**: Custom CSS with CSS Modules
- **Fonts**: Inter and Outfit from Google Fonts
- **Bundler**: Turbopack for fast development

## Project Structure

```
over-maximum/
├── src/
│   └── app/
│       ├── layout.tsx          # Root layout with fonts and metadata
│       ├── page.tsx            # Main homepage
│       ├── page.module.css     # Component-specific styles
│       └── globals.css         # Design system & utilities
├── public/                     # Static assets
└── package.json
```

## Customization

### Design Tokens

All design tokens (colors, spacing, typography) are defined in `src/app/globals.css` as CSS custom properties. Modify these to change the overall theme:

- `--color-primary`: Main purple color
- `--color-secondary`: Electric blue accent
- `--color-accent`: Hot pink highlights

### Content

Edit `src/app/page.tsx` to update:
- Artist information
- Release listings
- About section text
- Footer links

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

MIT
