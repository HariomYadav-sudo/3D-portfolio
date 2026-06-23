# 🌌 3D Interactive Developer Portfolio

A premium, interactive 3D developer portfolio showcasing web development skills, experience, achievements, and projects. Built with **React 19**, **TypeScript**, **Vite**, **Three.js / React Three Fiber (R3F)**, **Tailwind CSS v4**, and **Framer Motion**.

---

## ✨ Features

- **3D Skills Sphere**: An interactive, rotating 3D tag cloud rendering technology badges in real-time.
- **Interactive 3D Globe**: A custom-textured, rotating Earth globe with particle systems to represent global connectivity and projects.
- **3D Workspace Scene**: Interactive 3D workspace model elements to bring the page to life.
- **Dynamic Particles**: Interactive mouse-following canvas particles providing a fluid background effect.
- **Custom 3D Loader**: A custom loading component that handles asset caching and smoothly transitions the scene into view once loaded.
- **Responsive Layout & Sleek UI**: Designed with glassmorphism, responsive grids, sleek gradients, and subtle animations using Tailwind CSS v4 and Framer Motion.

---

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite 8](https://vite.dev/)
- **3D Rendering**: [Three.js](https://threejs.org/), [@react-three/fiber](https://r3f.docs.pmnd.rs/), [@react-three/drei](https://github.com/pmndrs/drei)
- **Styling & Theme**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine and run it independently.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` (usually comes with Node.js) or `yarn`/`pnpm`

### 1. Clone the Repository

```bash
git clone https://github.com/HariomYadav-sudo/3D-portfolio.git
cd 3D-portfolio
```

### 2. Install Dependencies

Install the required node packages defined in `package.json`:

```bash
npm install
```

### 3. Run the Development Server

Start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

By default, the application will run at **`http://localhost:5173`**. Open this URL in your browser to see the live site.

### 4. Build for Production

To build a highly optimized version of the application for production deployment, run:

```bash
npm run build
```

This compiles TypeScript, bundles resources, and outputs files to the `dist/` directory.

### 5. Preview Production Build Locally

After building the project, you can preview the production bundle locally:

```bash
npm run preview
```

---

## 📂 Project Structure

Here is an overview of the key directories in the project:

```text
3D-portfolio/
├── public/                 # Static assets (images, logos, favicon, textures)
├── src/
│   ├── assets/             # Images, SVGs, and other local media assets
│   ├── components/         # React Components
│   │   ├── 3d/             # Three.js / React Three Fiber components
│   │   │   ├── GlobeScene.tsx       # Interactive 3D Earth Globe
│   │   │   ├── MouseParticles.tsx   # Fluid mouse tracker particles
│   │   │   ├── SkillsSphere.tsx     # Rotating 3D tag sphere
│   │   │   ├── StarsBackground.tsx  # Dynamic space environment background
│   │   │   └── WorkspaceScene.tsx   # Hero area workspace model elements
│   │   ├── About.tsx       # About Me section
│   │   ├── Achievements.tsx # Milestones & accomplishments
│   │   ├── Contact.tsx     # Contact form and social links
│   │   ├── Experience.tsx  # Interactive timeline for professional work
│   │   ├── Projects.tsx    # Showcase of projects with card zoom and links
│   │   ├── Skills.tsx      # Technology badges categorized list
│   │   ├── Navbar.tsx      # Dynamic header navigation
│   │   ├── Loader.tsx      # Premium loading progress bar overlay
│   │   └── Footer.tsx      # Footer section
│   ├── App.tsx             # Main entry application container
│   ├── main.tsx            # React application mounting file
│   └── index.css           # Tailwind CSS imports & global design tokens
├── package.json            # Scripts, dependencies, and configuration
├── tsconfig.json           # TypeScript compilation configurations
└── vite.config.ts          # Vite build environment configuration
```

---

## 🌐 Deployment

This application is ready to deploy on any hosting provider. Since it is a Single Page Application (SPA), you can host it easily on:
- **Vercel** (Automatic zero-config deployment)
- **Netlify**
- **GitHub Pages** (Requires routing configuration if multi-page routing is added later)

For quick deployment using Vercel CLI:
```bash
npm i -g vercel
vercel
```

---

## 📝 License

This project is licensed under the MIT License. Feel free to use and customize it to make your own interactive portfolio!
