<div align="center">
  <h1>AdmyBrand - AI-Powered Marketing Platform</h1>
  <p>Modern, performant, and accessible marketing platform built with Next.js 14, TypeScript, and Tailwind CSS</p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-14.0.0+-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0+-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![GSAP](https://img.shields.io/badge/GSAP-3.12.0+-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

  [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fadmybrand)
  [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=for-the-badge&logo=codesandbox)](https://codesandbox.io/p/github/yourusername/admybrand/main)
</div>

AdmyBrand is a cutting-edge marketing platform that combines modern web technologies with AI-powered features to deliver exceptional user experiences. Built with performance, accessibility, and developer experience in mind.

## 🎯 Key Features

### 🎨 Beautiful UI/UX
- **Responsive Design**: Looks great on all devices
- **Dark/Light Mode**: Built-in theme support with system preference detection
- **Smooth Animations**: GSAP-powered transitions and micro-interactions
- **Accessibility**: WCAG 2.1 compliant components and keyboard navigation

### 🚀 Performance
- **Lightning Fast**: Optimized for maximum performance (Lighthouse score >90)
- **Code Splitting**: Automatic code splitting and lazy loading
- **Image Optimization**: Next.js Image component for optimized assets
- **Analytics**: Integrated with leading analytics platforms

### 🛠 Developer Experience
- **Type-Safe**: Full TypeScript support
- **Component Library**: Reusable, documented UI components
- **Modern Tooling**: ESLint, Prettier, and Husky pre-configured
- **Theming**: Easy theming with CSS variables

### 🌐 SEO & Analytics
- **Metadata Management**: Built-in SEO optimization
- **Performance Tracking**: Real user metrics
- **Heatmaps**: User interaction analysis

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5.0+](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + CSS Modules
- **Animations**: [GSAP](https://greensock.com/gsap/) & [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email**: [Resend](https://resend.com/)

### Developer Tools
- **Linting**: [ESLint](https://eslint.org/)
- **Formatting**: [Prettier](https://prettier.io/)
- **Git Hooks**: [Husky](https://typicode.github.io/husky/)
- **Commit Linting**: [Commitlint](https://commitlint.js.org/)
- **Testing**: [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/)

### Analytics & Monitoring
- **Analytics**: Google Analytics 4
- **Tag Manager**: Google Tag Manager
- **Session Recording**: Hotjar
- **Performance**: Microsoft Clarity

## 📚 Table of Contents

- [Features](#-key-features)
- [Tech Stack](#%EF%B8%8F-tech-stack)
- [Getting Started](#-getting-started)
- [Documentation](#-documentation)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm (v9+) or yarn (v1.22+)
- Git
- [Resend API key](https://resend.com/api-keys) (for email functionality)
- [Google Analytics 4](https://analytics.google.com/) (for analytics)
- [Google Tag Manager](https://tagmanager.google.com/) (for tracking)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/admybrand.git
   cd admybrand
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Required
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   
   # Email (Resend)
   RESEND_API_KEY=re_123456789
   
   # Analytics
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXX
   
   # Optional
   NEXT_PUBLIC_HOTJAR_ID=1234567
   NEXT_PUBLIC_MICROSOFT_CLARITY_ID=your-clarity-id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

6. **Start production server**
   ```bash
   npm start
   # or
   yarn start
   ```


## 📖 Documentation

### Project Structure

```
src/
├── app/                    # App Router pages and layouts
├── components/             # Reusable UI components
│   ├── ui/                 # Shadcn/ui components
│   └── ParallaxBackground/ # GSAP-powered parallax components
├── lib/                    # Utility functions and hooks
├── styles/                 # Global styles and themes
└── types/                  # TypeScript type definitions
```

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Your site's base URL |
| `RESEND_API_KEY` | Yes | API key for Resend email service |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 ID |
| `NEXT_PUBLIC_GTM_ID` | No | Google Tag Manager ID |
| `NEXT_PUBLIC_HOTJAR_ID` | No | Hotjar site ID |
| `NEXT_PUBLIC_MICROSOFT_CLARITY_ID` | No | Microsoft Clarity ID |

### Scripts

- `dev`: Start development server
- `build`: Create production build
- `start`: Start production server
- `lint`: Run ESLint
- `format`: Format code with Prettier
- `test`: Run tests
- `prepare`: Install husky git hooks

## 🏎️ Performance

AdmyBrand is optimized for maximum performance:

- **Lighthouse Score**: 95+ (Desktop)
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Bundle Size**: < 100kb (gzipped)

### Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Font optimization
- Prefetching and preloading
- Efficient animations with GSAP

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Message Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code changes that neither fixes a bug nor adds a feature
- `perf`: Performance improvements
- `test`: Adding or fixing tests
- `chore`: Changes to the build process or auxiliary tools

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [GSAP](https://greensock.com/gsap/) - Professional-grade animation for the modern web
- [Shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icon toolkit

## 👨‍💻 Author

**Kamlesh Pawar**

- Website: [yourwebsite.com](https://kamlesh-pawar.netlify.app/)
- GitHub: [@yourusername](https://github.com/kamlesh9876)
- LinkedIn: [Your Name](https://www.linkedin.com/in/kamlesh-pawar-3871552b5/)

## 🔗 Links

- [Live Demo](aipowertools.netlify.app)

## ✨ Show Your Support

Give a ⭐️ if this project helped you!

---

<div align="center">
  Made with ❤️ using Next.js, TypeScript, and Tailwind CSS
</div>

### GSAP Parallax Background

The application features a high-performance, customizable parallax background powered by GSAP. Key features include:

- Smooth, hardware-accelerated animations
- Multiple visual effects (particles, grid, scan lines, gradient orbs)
- Theme-aware color schemes
- Reduced motion support for accessibility
- Responsive design that works on all devices

#### Demo

Check out the interactive demo at `/demo` to see the parallax effects in action and customize the settings.

#### Usage

```tsx
import { GSAPBackground } from '@/components/ParallaxBackground/GSAPBackground';

export default function YourPage() {
  return (
    <GSAPBackground
      particleCount={30}
      baseColor={{ light: '#f8fafc', dark: '#0f172a' }}
      accentColor={{ light: '#3b82f6', dark: '#818cf8' }}
      enableParticles={true}
      enableGrid={true}
      enableScanLine={true}
      enableOrbs={true}
      reducedMotion={false}
      className="min-h-screen"
    >
      {/* Your content here */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Your Content</h1>
      </div>
    </GSAPBackground>
  );
}
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/admybrand.git
   cd admybrand
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Update the values with your own API keys and configurations

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Resend Email API
RESEND_API_KEY=your_resend_api_key
ADMIN_EMAIL=your_email@example.com

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Hotjar
NEXT_PUBLIC_HOTJAR_ID=1234567

# Microsoft Clarity
NEXT_PUBLIC_CLARITY_ID=your_clarity_id

# reCAPTCHA (optional)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

## 📦 Dependencies

- `next`: 14.0.0
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `framer-motion`: ^10.16.0
- `tailwindcss`: ^3.3.0
- `resend`: ^2.0.0
- `react-hook-form`: ^7.45.0
- `zod`: ^3.22.0
- `react-icons`: ^4.10.0

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Resend Documentation](https://resend.com/docs)

## 📬 Contact

For any questions or feedback, please reach out to [kamleshsharadpawar@gmail.com](mailto:kamleshsharadpawar@gmail.com).

---

Made with ❤️ by [Kamlesh Sharad Pawar]
