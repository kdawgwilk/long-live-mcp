### Create Next.js App with bun

Source: https://nextjs.org/docs/app/getting-started/installation

Installs and runs a new Next.js application using bun. This command creates a new project, navigates into it, and starts the development server.

```bash
bun create next-app@latest my-app --yes
cd my-app
bun dev
```

---

### Create Next.js App with npm

Source: https://nextjs.org/docs/app/getting-started/installation

Installs and runs a new Next.js application using npm. This command creates a new project, navigates into it, and starts the development server.

```bash
npx create-next-app@latest my-app --yes
cd my-app
npm run dev
```

---

### Next.js Project Prompts

Source: https://nextjs.org/docs/app/getting-started/installation

Example prompts shown during the `create-next-app` process, covering project naming, TypeScript usage, linting, styling, directory structure, and routing preferences.

```txt
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Which linter would you like to use? ESLint / Biome / None
Would you like to use Tailwind CSS? No / Yes
Would you like your code inside a `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to use Turbopack? (recommended) No / Yes
Would you like to customize the import alias (`@/*` by default)? No / Yes
What import alias would you like configured? @/*
```

---

### Create Next.js App with yarn

Source: https://nextjs.org/docs/app/getting-started/installation

Installs and runs a new Next.js application using yarn. This command creates a new project, navigates into it, and starts the development server.

```bash
yarn create next-app@latest my-app --yes
cd my-app
yarn dev
```

---

### Create Next.js App with pnpm

Source: https://nextjs.org/docs/app/getting-started/installation

Installs and runs a new Next.js application using pnpm. This command creates a new project, navigates into it, and starts the development server.

```bash
pnpm create next-app@latest my-app --yes
cd my-app
pnpm dev
```

---

### Manual Next.js Installation with bun

Source: https://nextjs.org/docs/app/getting-started/installation

Manually installs the core Next.js, React, and ReactDOM packages using bun. This is an alternative to using the `create-next-app` command.

```bash
bun add next@latest react@latest react-dom@latest
```

---

### Next.js Getting Started: Installation

Source: https://context7_llms

Instructions for installing Next.js and setting up a new project. This typically involves using a package manager like npm, yarn, or pnpm with `create-next-app`.

```bash
npx create-next-app@latest my-next-app
cd my-next-app
npm run dev
```

---

### Manual Next.js Installation with npm

Source: https://nextjs.org/docs/app/getting-started/installation

Manually installs the core Next.js, React, and ReactDOM packages using npm. This is an alternative to using the `create-next-app` command.

```bash
npm i next@latest react@latest react-dom@latest
```

---

### Manual Next.js Installation with yarn

Source: https://nextjs.org/docs/app/getting-started/installation

Manually installs the core Next.js, React, and ReactDOM packages using yarn. This is an alternative to using the `create-next-app` command.

```bash
yarn add next@latest react@latest react-dom@latest
```

---

### Next.js package.json Scripts

Source: https://nextjs.org/docs/app/getting-started/installation

Defines essential scripts for a Next.js application within the `package.json` file, including commands for development, building, starting, and linting.

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "lint:fix": "eslint --fix"
  }
}
```

---

### Manual Next.js Installation with pnpm

Source: https://nextjs.org/docs/app/getting-started/installation

Manually installs the core Next.js, React, and ReactDOM packages using pnpm. This is an alternative to using the `create-next-app` command.

```bash
pnpm i next@latest react@latest react-dom@latest
```

---

### Next.js Project Scripts

Source: https://nextjs.org/docs/pages/getting-started/installation

Essential scripts for a Next.js application, including commands to start the development server, build for production, start the production server, and manage linting.

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "lint:fix": "eslint --fix"
  }
}
```

---

### Quickstart Jest Setup with Next.js

Source: https://nextjs.org/docs/app/guides/testing/jest

This command uses `create-next-app` with the `with-jest` example to quickly set up Jest in a new Next.js project.

```bash
npx create-next-app@latest --example with-jest with-jest-app
```

---

### Next.js Getting Started: Deploying

Source: https://context7_llms

Steps and considerations for deploying a Next.js application to production environments, including platform-specific guides.

---

### Create Next.js App via CLI

Source: https://nextjs.org/docs/app/getting-started/installation

Initiates the creation of a new Next.js project using the command-line interface. This command prompts the user for project configuration details.

```bash
npx create-next-app@latest
```

---

### Quickstart Next.js with Vitest

Source: https://nextjs.org/docs/pages/guides/testing/vitest

Use the create-next-app command with the provided Next.js example to quickly set up a project with Vitest integration.

```bash
npx create-next-app@latest --example with-vitest with-vitest-app
```

---

### Quickstart Next.js with Jest

Source: https://nextjs.org/docs/pages/guides/testing/jest

Use the `create-next-app` command with the `with-jest` example to quickly set up a Next.js project with Jest.

```bash
npx create-next-app@latest --example with-jest with-jest-app
```

---

### Quickstart Next.js with Cypress

Source: https://nextjs.org/docs/app/guides/testing/cypress

Installs a Next.js application with Cypress pre-configured using create-next-app.

```bash
npx create-next-app@latest --example with-cypress with-cypress-app
```

---

### Next.js Home Page (JavaScript)

Source: https://nextjs.org/docs/app/getting-started/installation

A simple home page component for a Next.js application using JavaScript. It renders a basic heading element.

```jsx
export default function Page() {
  return <h1>Hello, Next.js!</h1>;
}
```

---

### create-next-app Prompts

Source: https://nextjs.org/docs/pages/getting-started/installation

These are the interactive prompts shown by create-next-app during project initialization. They guide the user through configuring essential project settings.

```txt
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Which linter would you like to use? ESLint / Biome / None
Would you like to use Tailwind CSS? No / Yes
Would you like your code inside a `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to use Turbopack? (recommended) No / Yes
Would you like to customize the import alias (`@/*` by default)? No / Yes
What import alias would you like configured? @/*
```

---

### Install Next.js Dependencies (bun)

Source: https://nextjs.org/docs/pages/getting-started/installation

Manually install Next.js, React, and ReactDOM using bun. This command ensures you have the latest versions of these core libraries.

```bash
bun add next@latest react@latest react-dom@latest
```

---

### ESLint Scripts in package.json

Source: https://nextjs.org/docs/app/getting-started/installation

Defines npm scripts for running ESLint in a Next.js project. Includes commands for linting and automatically fixing linting issues.

```json
{
  "scripts": {
    "lint": "eslint",
    "lint:fix": "eslint --fix"
  }
}
```

---

### Next.js Home Page (TypeScript)

Source: https://nextjs.org/docs/app/getting-started/installation

A simple home page component for a Next.js application using TypeScript. It renders a basic heading element.

```tsx
export default function Page() {
  return <h1>Hello, Next.js!</h1>;
}
```

---

### Migrate next lint to ESLint CLI

Source: https://nextjs.org/docs/app/getting-started/installation

A command-line instruction to migrate existing 'next lint' scripts to the ESLint CLI using a provided codemod. This ensures compatibility with newer ESLint configurations.

```bash
npx @next/codemod@canary next-lint-to-eslint-cli .
```

---

### Create Next.js App with Playwright Example

Source: https://nextjs.org/docs/pages/guides/testing/playwright

This command uses npx to create a new Next.js application from a specific example that already includes Playwright configuration. It's the quickest way to start a project with Playwright set up.

```bash
npx create-next-app@latest --example with-playwright with-playwright-app
```

---

### Install Next.js Dependencies (npm)

Source: https://nextjs.org/docs/pages/getting-started/installation

Manually install Next.js, React, and ReactDOM using npm. This command ensures you have the latest versions of these core libraries.

```bash
npm i next@latest react@latest react-dom@latest
```

---

### Next.js Getting Started: Images

Source: https://context7_llms

Guidance on optimizing and handling images in Next.js, likely involving the `next/image` component for performance benefits.

---

### Biome Scripts in package.json

Source: https://nextjs.org/docs/app/getting-started/installation

Configures npm scripts for using Biome as a linter and formatter in a Next.js project. Provides commands for checking code quality and formatting files.

```json
{
  "scripts": {
    "lint": "biome check",
    "format": "biome format --write"
  }
}
```

---

### Install Next.js Dependencies (pnpm)

Source: https://nextjs.org/docs/pages/getting-started/installation

Manually install Next.js, React, and ReactDOM using pnpm. This command ensures you have the latest versions of these core libraries.

```bash
pnpm i next@latest react@latest react-dom@latest
```

---

### Install Next.js Dependencies (yarn)

Source: https://nextjs.org/docs/pages/getting-started/installation

Manually install Next.js, React, and ReactDOM using yarn. This command ensures you have the latest versions of these core libraries.

```bash
yarn add next@latest react@latest react-dom@latest
```

---

### Create Next.js App with CLI

Source: https://nextjs.org/docs/pages/getting-started/installation

Use the create-next-app command to quickly set up a new Next.js project. This command prompts for configuration details like project name, TypeScript usage, styling, and routing.

```bash
npx create-next-app@latest
```

---

### Next.js Getting Started: CSS

Source: https://context7_llms

Information on styling Next.js applications, covering various methods such as global CSS, CSS Modules, and CSS-in-JS solutions.

---

### Install Playwright

Source: https://nextjs.org/docs/app/guides/testing/playwright

These commands initiate the Playwright setup process within your project. Running `npm init playwright`, `yarn create playwright`, or `pnpm create playwright` will guide you through configuration, including the creation of a `playwright.config.ts` file.

```bash
npm init playwright
```

```bash
yarn create playwright
```

```bash
pnpm create playwright
```

---

### Next.js Root Layout (JavaScript)

Source: https://nextjs.org/docs/app/getting-started/installation

Defines the root layout component for a Next.js application using JavaScript. This component wraps the entire application and includes the basic HTML structure.

```jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

### Migrate Next Lint to ESLint CLI

Source: https://nextjs.org/docs/pages/getting-started/installation

Provides the command to migrate existing `next lint` scripts to the ESLint CLI using a codemod. This is useful for projects transitioning to a more explicit ESLint setup.

```bash
npx @next/codemod@canary next-lint-to-eslint-cli .
```

---

### Next.js Getting Started: Project Structure

Source: https://context7_llms

An explanation of the standard project structure in a Next.js application, including key directories like `pages` (or `app`), `public`, and `styles`.

---

### Install Playwright

Source: https://nextjs.org/docs/pages/guides/testing/playwright

These commands initiate the Playwright setup process within your project. Running `npm init playwright`, `yarn create playwright`, or `pnpm create playwright` will guide you through configuration options and generate necessary files like `playwright.config.ts`.

```bash
npm init playwright
```

```bash
yarn create playwright
```

```bash
pnpm create playwright
```

---

### Create Next.js App with Official Example

Source: https://nextjs.org/docs/app/api-reference/cli/create-next-app

Initializes a new Next.js application using an official example from the Next.js repository. Requires the example name and your desired project name.

```bash
npx create-next-app@latest --example [example-name] [your-project-name]
```

---

### Create Next.js App with Playwright Example

Source: https://nextjs.org/docs/app/guides/testing/playwright

This command uses npx to create a new Next.js application from a template that already includes Playwright configuration. It's the quickest way to start a project with Playwright set up.

```bash
npx create-next-app@latest --example with-playwright with-playwright-app
```

---

### Configure Module Path Aliases with paths

Source: https://nextjs.org/docs/app/getting-started/installation

Demonstrates how to set up module path aliases in Next.js using the 'paths' option within tsconfig.json or jsconfig.json. This maps custom prefixes like '@/' to specific directories.

```json
{
  "compilerOptions": {
    "baseUrl": "src/",
    "paths": {
      "@/styles/*": ["styles/*"],
      "@/components/*": ["components/*"]
    }
  }
}
```

---

### Next.js Root Layout (TypeScript)

Source: https://nextjs.org/docs/app/getting-started/installation

Defines the root layout component for a Next.js application using TypeScript. This component wraps the entire application and includes the basic HTML structure.

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

### Configure Absolute Imports with baseUrl

Source: https://nextjs.org/docs/app/getting-started/installation

Shows how to configure absolute imports in Next.js by setting the 'baseUrl' option in tsconfig.json or jsconfig.json. This allows referencing project directories from the root.

```json
{
  "compilerOptions": {
    "baseUrl": "src/"
  }
}
```

---

### Next.js Node.js Server Scripts

Source: https://nextjs.org/docs/app/getting-started/deploying

Defines the essential 'build' and 'start' scripts in package.json for deploying a Next.js application as a Node.js server. This setup supports all Next.js features and can be extended with a custom server.

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

---

### Reference Static Asset in Next.js (JSX)

Source: https://nextjs.org/docs/app/getting-started/installation

Illustrates how to reference a static asset from the public folder in a Next.js application using JavaScript. It uses the Image component to display a profile picture.

```jsx
import Image from "next/image";

export default function Page() {
  return <Image src="/profile.png" alt="Profile" width={100} height={100} />;
}
```

---

### Next.js Tailwind CSS Setup

Source: https://context7_llms

Integrate Tailwind CSS with your Next.js project for utility-first CSS styling. This guide covers installation and configuration.

```javascript
# 1. Install Tailwind CSS and its peer dependencies
npm install -D tailwindcss postcss autoprefixer

# 2. Initialize Tailwind CSS
npx tailwindcss init -p

# 3. Configure your template paths in tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

# 4. Import Tailwind directives in your CSS (e.g., styles/globals.css)
@tailwind base;
@tailwind components;
@tailwind utilities;

# 5. Import the CSS file in your _app.js or layout component.
```

---

### Global App Component (JavaScript)

Source: https://nextjs.org/docs/pages/getting-started/installation

Configures the global layout and App component for a Next.js application using JavaScript. This file, `pages/_app.js`, allows for global CSS imports and page transitions.

```jsx
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

---

### Create Next.js App with GitHub Example

Source: https://nextjs.org/docs/app/api-reference/cli/create-next-app

Initializes a new Next.js application using any public GitHub repository as an example. Requires the GitHub repository URL and your desired project name.

```bash
npx create-next-app@latest --example "https://github.com/.../" [your-project-name]
```

---

### Install server-only Package (bun)

Source: https://nextjs.org/docs/app/getting-started/server-and-client-components

Command to install the 'server-only' package using bun.

```bash
bun add server-only
```

---

### Configure Biome Scripts in package.json

Source: https://nextjs.org/docs/pages/getting-started/installation

Sets up npm scripts for Biome, a fast linter and formatter, within a Next.js project. This includes commands for checking code quality and applying formatting.

```json
{
  "scripts": {
    "lint": "biome check",
    "format": "biome format --write"
  }
}
```

---

### Build and Start Next.js Application

Source: https://nextjs.org/docs/app/guides/production-checklist

Commands to build your Next.js application for production and then start it to measure performance in a production-like environment.

```bash
next build
next start
```

---

### Reference Static Asset in Next.js (TSX)

Source: https://nextjs.org/docs/app/getting-started/installation

Demonstrates how to reference a static asset from the public folder in a Next.js application using TypeScript. It shows the Image component usage with a path to a profile picture.

```tsx
import Image from "next/image";

export default function Page() {
  return <Image src="/profile.png" alt="Profile" width={100} height={100} />;
}
```

---

### Next.js Getting Started: Fonts

Source: https://context7_llms

Instructions for integrating and optimizing font loading in Next.js applications, focusing on performance and best practices.

---

### Install server-only Package (npm)

Source: https://nextjs.org/docs/app/getting-started/server-and-client-components

Command to install the 'server-only' package using npm.

```bash
npm install server-only
```

---

### Install Tailwind CSS (bun)

Source: https://nextjs.org/docs/app/getting-started/css

Installs Tailwind CSS and its PostCSS plugin using bun.

```bash
bun add -D tailwindcss @tailwindcss/postcss
```

---

### Next.js Testing with Vitest

Source: https://context7_llms

Utilize Vitest for fast unit and integration testing in your Next.js project. This guide covers setup and configuration.

```javascript
# 1. Install Vitest and dependencies
npm install --save-dev vitest jsdom @vitejs/plugin-react

# 2. Configure Vitest (e.g., vitest.config.js)
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.js'],
  },
});

# 3. Create vitest.setup.js for setup
import '@testing-library/jest-dom/vitest';

# 4. Write tests (e.g., components/MyComponent.test.jsx)
import { render, screen } from '@testing-library/react';
import MyComponent from '../components/MyComponent';

it('renders MyComponent', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```

---

### Next.js Self-Hosting Guide

Source: https://context7_llms

Learn how to self-host your Next.js application on your own infrastructure. This guide covers building for production and deploying to custom servers.

```bash
# 1. Build your Next.js application for production:
npm run build

# 2. Start the production server:
npm start

# You can also use a custom server (e.g., with Express):
# node server.js (where server.js is your custom server file)
```

---

### Global App Component (TypeScript)

Source: https://nextjs.org/docs/pages/getting-started/installation

Configures the global layout and App component for a Next.js application using TypeScript. This file, `pages/_app.tsx`, allows for global CSS imports and page transitions.

```tsx
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

---

### Home Page Component (JavaScript)

Source: https://nextjs.org/docs/pages/getting-started/installation

Defines the root page component for a Next.js application using JavaScript. This file is typically located at `pages/index.js` and renders the main content of the home page.

```jsx
export default function Page() {
  return <h1>Hello, Next.js!</h1>;
}
```

---

### Install Tailwind CSS (npm)

Source: https://nextjs.org/docs/app/getting-started/css

Installs Tailwind CSS and its PostCSS plugin using npm.

```bash
npm install -D tailwindcss @tailwindcss/postcss
```

---

### Install server-only Package (pnpm)

Source: https://nextjs.org/docs/app/getting-started/server-and-client-components

Command to install the 'server-only' package using pnpm.

```bash
pnpm add server-only
```

---

### Install Tailwind CSS (yarn)

Source: https://nextjs.org/docs/app/getting-started/css

Installs Tailwind CSS and its PostCSS plugin using yarn.

```bash
yarn add -D tailwindcss @tailwindcss/postcss
```

---

### Install OpenTelemetry Packages

Source: https://nextjs.org/docs/pages/guides/open-telemetry

Installs the necessary OpenTelemetry packages for Next.js instrumentation, including the @vercel/otel SDK and API components.

```Bash
npm install @vercel/otel @opentelemetry/sdk-logs @opentelemetry/api-logs @opentelemetry/instrumentation
```

---

### Custom Document Component (JavaScript)

Source: https://nextjs.org/docs/pages/getting-started/installation

Allows customization of the initial HTML document structure for a Next.js application using JavaScript. This file, `pages/_document.js`, controls the server response for the HTML.

```jsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

---

### Static manifest.json Example

Source: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest

Provides a basic structure for a static manifest.json file, including application name, short name, description, and start URL. This file should be placed in the root of the 'app' directory.

```json
{
  "name": "My Next.js Application",
  "short_name": "Next.js App",
  "description": "An application built with Next.js",
  "start_url": "/"
  // ...
}
```

---

### Install @next/third-parties and Next.js

Source: https://nextjs.org/docs/app/guides/third-party-libraries

Installs the latest versions of the @next/third-parties library and Next.js using npm. This is the initial step to begin using the library's features.

```bash
npm install @next/third-parties@latest next@latest
```

---

### Package.json Scripts for Custom Server

Source: https://nextjs.org/docs/app/guides/custom-server

This JSON configuration updates the `scripts` section in `package.json` to enable running the custom Next.js server. It includes commands for development (`dev`), building the Next.js app (`build`), and starting the production server (`start`).

```json
{
  "scripts": {
    "dev": "node server.js",
    "build": "next build",
    "start": "NODE_ENV=production node server.js"
  }
}
```

---

### Next.js Testing with Cypress

Source: https://context7_llms

Integrate Cypress for end-to-end (E2E) testing of your Next.js application. This guide covers setup and writing E2E tests.

```bash
# 1. Install Cypress
npm install --save-dev cypress

# 2. Open Cypress
npx cypress open

# 3. Write E2E tests in the cypress/integration folder
# Example: cypress/integration/homepage.spec.js
describe('Homepage', () => {
  it('should visit the homepage', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Welcome');
  });
});
```

---

### Install Tailwind CSS (pnpm)

Source: https://nextjs.org/docs/app/getting-started/css

Installs Tailwind CSS and its PostCSS plugin using pnpm.

```bash
pnpm add -D tailwindcss @tailwindcss/postcss
```

---

### Install server-only Package (yarn)

Source: https://nextjs.org/docs/app/getting-started/server-and-client-components

Command to install the 'server-only' package using yarn.

```bash
yarn add server-only
```

---

### Package.json Scripts for Custom Server

Source: https://nextjs.org/docs/pages/guides/custom-server

This JSON configuration updates the `scripts` section in `package.json` to enable running the custom Next.js server. It includes commands for development (`dev`), building the Next.js app (`build`), and starting the production server (`start`).

```json
{
  "scripts": {
    "dev": "node server.js",
    "build": "next build",
    "start": "NODE_ENV=production node server.js"
  }
}
```

---

### Install OpenTelemetry Packages

Source: https://nextjs.org/docs/app/guides/open-telemetry

Installs the necessary OpenTelemetry packages for Next.js instrumentation using npm.

```bash
npm install @vercel/otel @opentelemetry/sdk-logs @opentelemetry/api-logs @opentelemetry/instrumentation
```

---

### Install and Load Environment Variables with @next/env

Source: https://nextjs.org/docs/pages/guides/environment-variables

Provides instructions and code examples for installing the @next/env package and using the loadEnvConfig function to load environment variables outside the Next.js runtime, such as for ORM configurations.

```bash
npm install @next/env
```

---

### Install Cypress Dev Dependency

Source: https://nextjs.org/docs/app/guides/testing/cypress

Installs Cypress as a development dependency using npm, yarn, or pnpm.

```bash
npm install -D cypress
```

```bash
yarn add -D cypress
```

```bash
pnpm install -D cypress
```

---

### Install OpenTelemetry Packages (Bash)

Source: https://nextjs.org/docs/pages/guides/open-telemetry

Installs the essential OpenTelemetry packages for Node.js applications using npm.

```bash
npm install @opentelemetry/sdk-node @opentelemetry/resources @opentelemetry/semantic-conventions @opentelemetry/sdk-trace-node @opentelemetry/exporter-trace-otlp-http
```

---

### Install OpenTelemetry Packages (Bash)

Source: https://nextjs.org/docs/app/guides/open-telemetry

Installs the essential OpenTelemetry packages for Node.js applications using npm.

```bash
npm install @opentelemetry/sdk-node @opentelemetry/resources @opentelemetry/semantic-conventions @opentelemetry/sdk-trace-node @opentelemetry/exporter-trace-otlp-http
```

---

### Create Next.js Project with API Flag

Source: https://nextjs.org/docs/app/guides/backend-for-frontend

This command initializes a new Next.js project with the necessary configuration to include API routes, demonstrating the setup for the Backend for Frontend pattern.

```bash
npx create-next-app@latest --api
```

---

### Install Tailwind CSS v3 with bun

Source: https://nextjs.org/docs/pages/guides/tailwind-v3-css

Installs Tailwind CSS, PostCSS, and Autoprefixer as development dependencies using bun, and then initializes Tailwind CSS with the -p flag to generate configuration files.

```bash
bun add -D tailwindcss@^3 postcss autoprefixer
bunx tailwindcss init -p
```

---

### Custom Document Component (TypeScript)

Source: https://nextjs.org/docs/pages/getting-started/installation

Allows customization of the initial HTML document structure for a Next.js application using TypeScript. This file, `pages/_document.tsx`, controls the server response for the HTML.

```tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

---

### Display Static Image in Next.js (JSX)

Source: https://nextjs.org/docs/pages/getting-started/installation

Shows how to render a static image from the public directory within a Next.js application using JavaScript. The `next/image` component is used for efficient image rendering.

```jsx
import Image from "next/image";

export default function Page() {
  return <Image src="/profile.png" alt="Profile" width={100} height={100} />;
}
```

---

### Next.js Build Output Example

Source: https://nextjs.org/docs/app/api-reference/cli/next

Demonstrates the typical output of the `next build` command, showing route information, asset sizes, and JavaScript dependencies for each route. This helps in understanding application performance and optimization.

```bash
Route (app)                              Size     First Load JS
┌ ○ /_not-found                          0 B               0 kB
└ ƒ /products/[id]                       0 B               0 kB

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

---

### Install Cypress Dev Dependency

Source: https://nextjs.org/docs/pages/guides/testing/cypress

Installs Cypress as a development dependency using npm, yarn, or pnpm. This is the first step in manually setting up Cypress for testing.

```bash
npm install -D cypress
# or
yarn add -D cypress
# or
pnpm install -D cypress
```

---

### Configure ESLint Scripts in package.json

Source: https://nextjs.org/docs/pages/getting-started/installation

Defines the npm scripts for running ESLint in a Next.js project, including commands for linting and fixing linting issues. This configuration is typically found in the `package.json` file.

```json
{
  "scripts": {
    "lint": "eslint",
    "lint:fix": "eslint --fix"
  }
}
```

---

### Home Page Component (TypeScript)

Source: https://nextjs.org/docs/pages/getting-started/installation

Defines the root page component for a Next.js application using TypeScript. This file is typically located at `pages/index.tsx` and renders the main content of the home page.

```tsx
export default function Page() {
  return <h1>Hello, Next.js!</h1>;
}
```

---

### Start Next.js with Turbopack

Source: https://nextjs.org/docs/app/api-reference/cli/next

Initiates the Next.js development server using Turbopack, an experimental Rust-based bundler. This can offer significant performance improvements for the development build process.

```bash
next dev --turbopack

```

---

### Build and Start Next.js Application

Source: https://nextjs.org/docs/pages/guides/production-checklist

Build your Next.js application locally to catch errors and then start it to measure performance in a production-like environment. This is crucial for identifying potential issues before deployment.

```bash
next build
next start
```

---

### Update Next.js and Enable Turbopack

Source: https://nextjs.org/docs/app/guides/local-development

Installs the latest version of Next.js and starts the development server using Turbopack for improved performance. Turbopack is a new bundler integrated into Next.js.

```bash
npm install next@latest
npm run dev --turbopack
```

---

### Install Vitest Dependencies

Source: https://nextjs.org/docs/pages/guides/testing/vitest

Install Vitest and necessary testing libraries as development dependencies for both TypeScript and JavaScript Next.js projects.

```bash
# Using TypeScript
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom vite-tsconfig-paths
# Using JavaScript
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom
```

---

### Running Next.js Development Server

Source: https://nextjs.org/docs/app/guides/debugging

Demonstrates the common commands used to start the Next.js development server, supporting different package managers like npm, yarn, and pnpm.

```bash
npm run dev
```

```bash
yarn dev
```

```bash
pnpm dev
```

---

### Install @next/third-parties and Next.js

Source: https://nextjs.org/docs/pages/guides/third-party-libraries

Installs the latest versions of the `@next/third-parties` and `next` libraries using npm. This is the initial step to begin optimizing third-party integrations.

```bash
npm install @next/third-parties@latest next@latest
```

---

### Configure Manual Signal Handling in package.json

Source: https://nextjs.org/docs/pages/guides/self-hosting

This JSON snippet shows how to configure the `start` script in `package.json` to enable manual signal handling by setting the `NEXT_MANUAL_SIG_HANDLE` environment variable to `true` when starting the Next.js application.

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "NEXT_MANUAL_SIG_HANDLE=true next start"
  }
}
```

---

### Next.js CSS-in-JS Integration

Source: https://context7_llms

Explore how to use CSS-in-JS libraries like styled-components or Emotion with Next.js. This guide covers setup and best practices for dynamic styling.

```javascript
/* Example using styled-components */
import styled from "styled-components";

const Title = styled.h1`
  color: palevioletred;
  font-size: 2em;
`;

function MyComponent() {
  return <Title>Hello World</Title>;
}
```

---

### Install Tailwind CSS v3 with bun

Source: https://nextjs.org/docs/app/guides/tailwind-v3-css

Installs Tailwind CSS v3, PostCSS, and Autoprefixer as development dependencies using bun, and then initializes Tailwind CSS with the -p flag to generate configuration files.

```bash
bun add -D tailwindcss@^3 postcss autoprefixer
bunx tailwindcss init -p
```

---

### Next.js Start Command Options

Source: https://nextjs.org/docs/app/api-reference/cli/next

Details the options for the `next start` command, which launches a Next.js application in production mode after it has been compiled with `next build`. Options include specifying the port, hostname, and keep-alive timeout.

```bash
next start [directory] [options]

Options:
  -h, --help                       Show all available options.
  -p, --port <port>                Specify a port number on which to start the application.
  -H, --hostname <hostname>        Specify a hostname on which to start the application.
  --keepAliveTimeout <keepAliveTimeout> Specify the maximum amount of milliseconds to wait before closing the inactive connections.
```

---

### Configure Base URL in tsconfig.json/jsconfig.json

Source: https://nextjs.org/docs/pages/getting-started/installation

Illustrates how to set the `baseUrl` option in `tsconfig.json` or `jsconfig.json` to configure absolute imports in a Next.js project. This simplifies module resolution.

```json
{
  "compilerOptions": {
    "baseUrl": "src/"
  }
}
```

---

### Run Next.js Development Server

Source: https://nextjs.org/docs/app/guides/migrating/from-create-react-app

Command to start the Next.js development server after updating scripts and configurations.

```bash
npm run dev
```

---

### Next.js Page Component (JavaScript)

Source: https://nextjs.org/docs/pages/guides/testing/vitest

Example of a basic Next.js page component written in JavaScript, suitable for unit testing.

```jsx
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
```

---

### Serwist Integration Example for Next.js

Source: https://nextjs.org/docs/app/guides/progressive-web-apps

This snippet refers to an example of integrating Serwist, a tool for offline support, with a Next.js application. It highlights that this integration currently requires webpack configuration.

```javascript
// Refer to Serwist documentation for specific integration code:
// https://github.com/serwist/serwist/tree/main/examples/next-basic
// Note: Requires webpack configuration.
```

---

### Install Jest Dependencies for Next.js

Source: https://nextjs.org/docs/app/guides/testing/jest

Installs Jest and related testing libraries as development dependencies for Next.js projects using npm, yarn, or pnpm.

```bash
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node @types/jest
```

```bash
yarn add -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node @types/jest
```

```bash
pnpm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node @types/jest
```

---

### Next.js Testing with Playwright

Source: https://context7_llms

Implement end-to-end (E2E) testing for your Next.js application using Playwright. This guide covers setup and writing automated tests.

```bash
# 1. Install Playwright
npm install --save-dev playwright

# 2. Run Playwright tests
npx playwright test

# 3. Write tests in the tests/ directory
# Example: tests/example.spec.js
const { test, expect } = require('@playwright/test');

test('homepage has expected h1', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('h1')).toContainText('Welcome');
});
```

---

### Next.js CLI Commands

Source: https://context7_llms

Overview of Next.js command-line interface (CLI) tools, including `create-next-app` for scaffolding new projects and the main `next` command for development, building, and starting the application.

```bash
# Create a new Next.js project
 npx create-next-app@latest my-app

# Run the development server
 npm run dev
# or
 yarn dev
# or
 pnpm dev

# Build the application for production
 npm run build
# or
 yarn build
# or
 pnpm build

# Start the production server
 npm run start
# or
 yarn start
# or
 pnpm start
```

---

### Install Jest Dependencies for Next.js

Source: https://nextjs.org/docs/pages/guides/testing/jest

Install Jest and related testing libraries as development dependencies for your Next.js project using npm, yarn, or pnpm.

```bash
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node @types/jest
```

```bash
yarn add -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node @types/jest
```

```bash
pnpm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node @types/jest
```

---

### Display Static Image in Next.js (TSX)

Source: https://nextjs.org/docs/pages/getting-started/installation

Demonstrates how to display a static image from the public folder in a Next.js application using TypeScript. It utilizes the `next/image` component for optimized image loading.

```tsx
import Image from "next/image";

export default function Page() {
  return <Image src="/profile.png" alt="Profile" width={100} height={100} />;
}
```

---

### Cache GET Request with Route Handler (JavaScript)

Source: https://nextjs.org/docs/app/getting-started/route-handlers-and-middleware

Shows how to enable caching for a GET request in a Next.js Route Handler using the `dynamic = 'force-static'` export. This example fetches data from an external API and returns it as JSON.

```js
export const dynamic = "force-static";

export async function GET() {
  const res = await fetch("https://data.mongodb-api.com/...", {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
```

---

### Install Tailwind CSS v3 with npm

Source: https://nextjs.org/docs/pages/guides/tailwind-v3-css

Installs Tailwind CSS, PostCSS, and Autoprefixer as development dependencies using npm, and then initializes Tailwind CSS with the -p flag to generate configuration files.

```bash
npm install -D tailwindcss@^3 postcss autoprefixer
npx tailwindcss init -p
```

---

### Install Tailwind CSS v3 with yarn

Source: https://nextjs.org/docs/pages/guides/tailwind-v3-css

Installs Tailwind CSS, PostCSS, and Autoprefixer as development dependencies using yarn, and then initializes Tailwind CSS with the -p flag to generate configuration files.

```bash
yarn add -D tailwindcss@^3 postcss autoprefixer
npx tailwindcss init -p
```

---

### Next.js Custom Server Setup (JavaScript)

Source: https://nextjs.org/docs/app/guides/custom-server

This snippet shows the equivalent setup for a custom Next.js server using plain JavaScript. It initializes the Next.js app and configures the Node.js HTTP server to delegate requests to Next.js's request handler.

```js
import { createServer } from "http";
import { parse } from "url";
import next from "next";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port);

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  );
});
```

---

### Next.js Custom Server Setup

Source: https://context7_llms

Learn how to create a custom server for your Next.js application using Node.js. This allows for more control over the server environment and request handling.

```javascript
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
```

---

### Next.js Project Initialization Prompts

Source: https://nextjs.org/docs/app/api-reference/cli/create-next-app

These are the interactive prompts presented by the create-next-app CLI when creating a new project. They cover essential configuration details like project name, language, styling, directory structure, and routing.

```txt
What is your project named?  my-app
Would you like to use TypeScript?  No / Yes
Which linter would you like to use?  ESLint / Biome / None
Would you like to use Tailwind CSS?  No / Yes
Would you like your code inside a `src/` directory?  No / Yes
Would you like to use App Router? (recommended)  No / Yes
Would you like to use Turbopack? (recommended)  No / Yes
Would you like to customize the import alias (`@/*` by default)?  No / Yes
```

---

### Configure Module Path Aliases in tsconfig.json/jsconfig.json

Source: https://nextjs.org/docs/pages/getting-started/installation

Shows how to define module path aliases using the `paths` option in `tsconfig.json` or `jsconfig.json`. This allows for cleaner imports, mapping aliases like `@/components/*` to specific directories.

```json
{
  "compilerOptions": {
    "baseUrl": "src/",
    "paths": {
      "@/styles/*": ["styles/*"],
      "@/components/*": ["components/*"]
    }
  }
}
```

---

### Install OpenTelemetry API

Source: https://nextjs.org/docs/pages/guides/open-telemetry

Installs the necessary OpenTelemetry API package for JavaScript applications to enable custom span creation.

```bash
npm install @opentelemetry/api
```

---

### Install Tailwind CSS v3 with npm

Source: https://nextjs.org/docs/app/guides/tailwind-v3-css

Installs Tailwind CSS v3, PostCSS, and Autoprefixer as development dependencies using npm, and then initializes Tailwind CSS with the -p flag to generate configuration files.

```bash
npm install -D tailwindcss@^3 postcss autoprefixer
npx tailwindcss init -p
```

---

### Install OpenTelemetry API

Source: https://nextjs.org/docs/app/guides/open-telemetry

Installs the necessary OpenTelemetry API package for JavaScript applications to enable custom span creation.

```bash
npm install @opentelemetry/api
```

---

### Install Next.js Dependency

Source: https://nextjs.org/docs/app/guides/migrating/from-create-react-app

Installs the latest version of Next.js into your existing project using npm.

```bash
npm install next@latest
```

---

### Next.js Custom Server Setup (JavaScript)

Source: https://nextjs.org/docs/pages/guides/custom-server

This snippet shows the equivalent setup for a custom Next.js server using plain JavaScript. It initializes the Next.js app and configures the Node.js HTTP server to delegate requests to Next.js's request handler.

```js
import { createServer } from "http";
import { parse } from "url";
import next from "next";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port);

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  );
});
```

---

### Cache GET Request with Route Handler (TypeScript)

Source: https://nextjs.org/docs/app/getting-started/route-handlers-and-middleware

Shows how to enable caching for a GET request in a Next.js Route Handler using the `dynamic = 'force-static'` export. This example fetches data from an external API and returns it as JSON.

```ts
export const dynamic = "force-static";

export async function GET() {
  const res = await fetch("https://data.mongodb-api.com/...", {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
```

---

### Install Tailwind CSS v3 with pnpm

Source: https://nextjs.org/docs/pages/guides/tailwind-v3-css

Installs Tailwind CSS, PostCSS, and Autoprefixer as development dependencies using pnpm, and then initializes Tailwind CSS with the -p flag to generate configuration files.

```bash
pnpm add -D tailwindcss@^3 postcss autoprefixer
npx tailwindcss init -p
```

---

### Next.js Authentication Guide

Source: https://context7_llms

Learn how to implement authentication in your Next.js application. This guide covers common patterns and best practices for securing your application.

```javascript
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  res.status(200).json({ message: "Welcome, " + session.user.name });
}
```

---

### Install Latest Next.js with bun

Source: https://nextjs.org/docs/app/getting-started/upgrading

Manually install the latest versions of Next.js, React, and related packages using bun. This is an alternative to using the upgrade codemod.

```bash
bun add next@latest react@latest react-dom@latest eslint-config-next@latest
```

---

### Install Tailwind CSS v3 with pnpm

Source: https://nextjs.org/docs/app/guides/tailwind-v3-css

Installs Tailwind CSS v3, PostCSS, and Autoprefixer as development dependencies using pnpm, and then initializes Tailwind CSS with the -p flag to generate configuration files.

```bash
pnpm add -D tailwindcss@^3 postcss autoprefixer
npx tailwindcss init -p
```

---

### Create a Blog List Page in Next.js

Source: https://nextjs.org/docs/app/getting-started/layouts-and-pages

Renders a list of blog posts fetched asynchronously. This example assumes `getPosts` function and a `Post` component are available for displaying individual posts.

```tsx
// Dummy imports
import { getPosts } from "@/lib/posts";
import { Post } from "@/ui/post";

export default async function Page() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
}
```

```jsx
// Dummy imports
import { getPosts } from "@/lib/posts";
import { Post } from "@/ui/post";

export default async function Page() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
}
```

---

### Install Prompt Component (JavaScript)

Source: https://nextjs.org/docs/app/guides/progressive-web-apps

A React component that prompts users to install the web application to their home screen. It detects if the user is on an iOS device and if the app is already running in standalone mode, providing tailored instructions.

```jsx
function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    );

    setIsStandalone(window.matchMedia('(display-mode: standalone)').matches);
  }, []);

  if (isStandalone) {
    return null; // Don't show install button if already installed
  }

  return (
    <div>
      <h3>Install App</h3>
      <button>Add to Home Screen</button>
      {isIOS && (
        <p>
          To install this app on your iOS device, tap the share button
          <span role="img" aria-label="share icon">
            {' '}
            ⎋{' '}
          </span>
          and then "Add to Home Screen"
          <span role="img" aria-label="plus icon">
            {' '}
            ➕{' '}
          </span>
          .
        </p>
      )}
    </div>
  );
}
```

---

### Install Next.js Dependency

Source: https://nextjs.org/docs/app/guides/migrating/from-vite

Installs the latest version of Next.js as a project dependency using npm.

```bash
npm install next@latest
```

---

### Install Tailwind CSS v3 with yarn

Source: https://nextjs.org/docs/app/guides/tailwind-v3-css

Installs Tailwind CSS v3, PostCSS, and Autoprefixer as development dependencies using yarn, and then initializes Tailwind CSS with the -p flag to generate configuration files.

```bash
yarn add -D tailwindcss@^3 postcss autoprefixer
npx tailwindcss init -p
```

---

### Next.js Server Initialization

Source: https://nextjs.org/docs/app/guides/custom-server

This JavaScript code demonstrates the basic import and initialization of the Next.js application instance. The `next()` function accepts an options object to configure the server's behavior, such as environment mode or project directory.

```js
import next from "next";

const app = next({});
```

---

### Next CLI Basic Usage

Source: https://nextjs.org/docs/app/api-reference/cli/next

Starts the Next.js CLI with a specified command and options. This is the fundamental way to interact with the Next.js development server and build process.

```bash
npx next [command] [options]
```

---

### Fetch and Parse Weather Data (POST)

Source: https://nextjs.org/docs/app/guides/backend-for-frontend

This example demonstrates fetching weather data from an external API and parsing it on the server. It uses `request.json()` to get location coordinates, constructs a URL with search parameters, fetches data using `fetch`, and then parses the response text into JSON using a helper function. Using POST for geo-location data prevents sensitive information from being exposed in URLs.

```TypeScript
import { parseWeatherData } from '@/lib/weather'

export async function POST(request: Request) {
  const body = await request.json()
  const searchParams = new URLSearchParams({ lat: body.lat, lng: body.lng })

  try {
    const weatherResponse = await fetch(`${weatherEndpoint}?${searchParams}`)

    if (!weatherResponse.ok) {
      /* handle error */
    }

    const weatherData = await weatherResponse.text()
    const payload = parseWeatherData.asJSON(weatherData)

    return new Response(payload, { status: 200 })
  } catch (reason) {
    const message =
      reason instanceof Error ? reason.message : 'Unexpected exception'

    return new Response(message, { status: 500 })
  }
}
```

```JavaScript
import { parseWeatherData } from '@/lib/weather'

export async function POST(request) {
  const body = await request.json()
  const searchParams = new URLSearchParams({ lat: body.lat, lng: body.lng })

  try {
    const weatherResponse = await fetch(`${weatherEndpoint}?${searchParams}`)

    if (!weatherResponse.ok) {
      /* handle error */
    }

    const weatherData = await weatherResponse.text()
    const payload = parseWeatherData.asJSON(weatherData)

    return new Response(payload, { status: 200 })
  } catch (reason) {
    const message =
      reason instanceof Error ? reason.message : 'Unexpected exception'

    return new Response(message, { status: 500 })
  }
}
```

---

### Next.js Instrumentation Guide

Source: https://context7_llms

Learn how to instrument your Next.js application for monitoring and observability. This guide covers integrating with tools like OpenTelemetry.

```javascript
// Example: Basic instrumentation setup (conceptual)
import { trace } from "@opentelemetry/api";

const tracer = trace.getTracer("nextjs-app-tracer");

export async function GET(request) {
  const span = tracer.startSpan("get-request-handler");
  // Your request handling logic here
  span.end();
  return new Response("Hello");
}
```

---

### Next.js Sass Integration

Source: https://context7_llms

Integrate Sass (SCSS) into your Next.js project for enhanced CSS capabilities. This guide covers setup and usage of Sass with Next.js.

```javascript
// Next.js automatically supports Sass/SCSS.
// Create .scss or .sass files and import them.

// styles/globals.scss
$primary-color: #333;

body {
  background-color: $primary-color;
}

// pages/index.js
import '../styles/globals.scss';

function HomePage() {
  return <h1>Hello Sass!</h1>;
}
```

---

### Install Playwright Dependencies for CI

Source: https://nextjs.org/docs/pages/guides/testing/playwright

This command installs the necessary system dependencies for Playwright to run correctly, particularly in Continuous Integration (CI) environments. It ensures that all required browser binaries and system libraries are available.

```bash
npx playwright install-deps
```

---

### Next.js Multi-Zones Routing

Source: https://context7_llms

Configure multi-zone routing in Next.js to serve different domains or subdomains from a single Next.js application. This guide explains the setup for advanced routing scenarios.

```javascript
// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*", // Matches any path
        has: [{ type: "host", value: "subdomain.example.com" }],
        destination: "/subdomain-page/:path*",
      },
      // Add more rewrites for other zones
    ];
  },
};

// pages/subdomain-page/index.js
export default function SubdomainPage() {
  return <h1>Content for subdomain</h1>;
}
```

---

### Install Vitest and Dependencies for Next.js

Source: https://nextjs.org/docs/app/guides/testing/vitest

Installs Vitest, Vite React plugin, jsdom, React Testing Library, and tsconfig-paths (for TypeScript projects) as development dependencies for a Next.js project.

```bash
npx create-next-app@latest --example with-vitest with-vitest-app
```

```bash
# Using TypeScript
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom vite-tsconfig-paths
# Using JavaScript
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom
```

---

### Next.js Migrating from Vite

Source: https://context7_llms

Steps and considerations for migrating a project from Vite to Next.js. This guide helps in adapting the build process and project structure.

```bash
# 1. Install Next.js dependencies
npm install next react react-dom

# 2. Adapt package.json scripts for Next.js
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}

# 3. Restructure project to follow Next.js conventions (e.g., pages directory)
```

---

### Next.js Server Initialization

Source: https://nextjs.org/docs/pages/guides/custom-server

This JavaScript code demonstrates the basic import and initialization of the Next.js application instance. The `next()` function accepts an options object to configure the server's behavior, such as environment mode or project directory.

```js
import next from "next";

const app = next({});
```

---

### Configuration as a Function (next.config.mjs)

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js

Demonstrates exporting a function from `next.config.mjs` to configure Next.js. This function receives the current phase and default configuration, allowing for dynamic setup.

```javascript
// @ts-check

export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
  };
  return nextConfig;
};
```

---

### Install Playwright Dependencies for CI

Source: https://nextjs.org/docs/app/guides/testing/playwright

This command installs the necessary system dependencies for Playwright to run correctly, particularly in Continuous Integration (CI) environments. It ensures all browser binaries and related libraries are available.

```bash
npx playwright install-deps
```

---

### Install Tailwind CSS (npm)

Source: https://nextjs.org/docs/pages/getting-started/css

Installs Tailwind CSS and its PostCSS plugin using npm. This command is used to add Tailwind CSS as a development dependency.

```bash
npm install -D tailwindcss @tailwindcss/postcss
```

---

### Install Next.js ESLint Plugin

Source: https://nextjs.org/docs/app/api-reference/config/eslint

Installs the `@next/eslint-plugin-next` package as a development dependency. This allows you to use Next.js specific ESLint rules and configurations directly in your project.

```bash
npm install --save-dev @next/eslint-plugin-next

yarn add --dev @next/eslint-plugin-next

pnpm add --save-dev @next/eslint-plugin-next

bun add --dev @next/eslint-plugin-next
```

---

### Install Prompt Component (TypeScript)

Source: https://nextjs.org/docs/app/guides/progressive-web-apps

A React component that prompts users to install the web application to their home screen. It detects if the user is on an iOS device and if the app is already running in standalone mode, providing tailored instructions.

```tsx
function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    );

    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
  }, []);

  if (isStandalone) {
    return null; // Don't show install button if already installed
  }

  return (
    <div>
      <h3>Install App</h3>
      <button>Add to Home Screen</button>
      {isIOS && (
        <p>
          To install this app on your iOS device, tap the share button
          <span role="img" aria-label="share icon">
            {" "}
            ⎋{" "}
          </span>
          and then "Add to Home Screen"
          <span role="img" aria-label="plus icon">
            {" "}
            ➕{" "}
          </span>.
        </p>
      )}
    </div>
  );
}
```

---

### Install Partytown for Worker Strategy in Next.js

Source: https://nextjs.org/docs/pages/guides/scripts

When the `worker` strategy is enabled and `next` is run, Next.js will prompt you to install the necessary Partytown package. This command shows how to install it using npm.

```bash
npm run dev
```

---

### Install MDX Dependencies

Source: https://nextjs.org/docs/pages/guides/mdx

Installs the necessary packages for Next.js to process Markdown and MDX files, including loaders and React integration.

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
```

---

### Next.js Middleware Example (JavaScript)

Source: https://nextjs.org/docs/app/getting-started/route-handlers-and-middleware

An example of Next.js middleware written in JavaScript. This middleware redirects requests to '/about/\*' to '/home'. It includes the `config` object to specify matching paths.

```JavaScript
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}
```

---

### Configure Jest Setup Files

Source: https://nextjs.org/docs/app/guides/testing/jest

Configure Jest to use custom matchers by specifying the setup file in the Jest configuration. This ensures that testing-library matchers are available for all tests.

```ts
setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"];
```

```js
setupFilesAfterEnv: ["<rootDir>/jest.setup.js"];
```

---

### Example usage of Tailwind classes in Next.js (JavaScript)

Source: https://nextjs.org/docs/pages/guides/tailwind-v3-css

Demonstrates how to use Tailwind CSS utility classes, such as `text-3xl`, `font-bold`, and `underline`, within a Next.js component written in JavaScript.

```jsx
export default function Page() {
  return <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>;
}
```

---

### Install Latest Next.js with npm

Source: https://nextjs.org/docs/app/getting-started/upgrading

Manually install the latest versions of Next.js, React, and related packages using npm. This is an alternative to using the upgrade codemod.

```bash
npm i next@latest react@latest react-dom@latest eslint-config-next@latest
```

---

### Install Tailwind CSS (bun)

Source: https://nextjs.org/docs/pages/getting-started/css

Installs Tailwind CSS and its PostCSS plugin using bun. This command is used to add Tailwind CSS as a development dependency with the bun package manager.

```bash
bun add -D tailwindcss @tailwindcss/postcss
```

---

### Install @next/bundle-analyzer

Source: https://nextjs.org/docs/pages/guides/package-bundling

Installs the @next/bundle-analyzer package, a Next.js plugin to help manage application bundle sizes by generating visual reports.

```bash
npm i @next/bundle-analyzer
# or
yarn add @next/bundle-analyzer
# or
pnpm add @next/bundle-analyzer
```

---

### Install Latest Next.js with pnpm

Source: https://nextjs.org/docs/app/getting-started/upgrading

Manually install the latest versions of Next.js, React, and related packages using pnpm. This is an alternative to using the upgrade codemod.

```bash
pnpm i next@latest react@latest react-dom@latest eslint-config-next@latest
```

---

### Configure Jest Setup Files

Source: https://nextjs.org/docs/pages/guides/testing/jest

Configure Jest to use custom matchers by specifying setup files in the Jest configuration. This ensures that matchers like `.toBeInTheDocument()` are available for all tests.

```ts
setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"];
```

```js
setupFilesAfterEnv: ["<rootDir>/jest.setup.js"];
```

---

### Basic next.config.js Setup

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js

Demonstrates the basic structure of a `next.config.js` file with a default export for Next.js configuration. This file is processed by the Next.js server and build phases.

```javascript
// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

module.exports = nextConfig;
```

---

### Custom Cache Handler Implementation for Next.js

Source: https://nextjs.org/docs/pages/guides/self-hosting

Provides an example implementation of a custom cache handler in JavaScript for Next.js. This handler uses a `Map` for caching and includes methods for getting, setting, and revalidating cache entries based on tags.

```jsx
const cache = new Map();

module.exports = class CacheHandler {
  constructor(options) {
    this.options = options;
  }

  async get(key) {
    // This could be stored anywhere, like durable storage
    return cache.get(key);
  }

  async set(key, data, ctx) {
    // This could be stored anywhere, like durable storage
    cache.set(key, {
      value: data,
      lastModified: Date.now(),
      tags: ctx.tags,
    });
  }

  async revalidateTag(tags) {
    // tags is either a string or an array of strings
    tags = [tags].flat();
    // Iterate over all entries in the cache
    for (let [key, value] of cache) {
      // If the value's tags include the specified tag, delete this entry
      if (value.tags.some((tag) => tags.includes(tag))) {
        cache.delete(key);
      }
    }
  }

  // If you want to have temporary in memory cache for a single request that is reset
  // before the next request you can leverage this method
  resetRequestCache() {}
};
```

---

### Install Tailwind CSS (pnpm)

Source: https://nextjs.org/docs/pages/getting-started/css

Installs Tailwind CSS and its PostCSS plugin using pnpm. This is the first step to using Tailwind CSS in a Next.js project.

```bash
pnpm add -D tailwindcss @tailwindcss/postcss
```

---

### Example usage of Tailwind classes in Next.js (TypeScript)

Source: https://nextjs.org/docs/pages/guides/tailwind-v3-css

Demonstrates how to use Tailwind CSS utility classes, such as `text-3xl`, `font-bold`, and `underline`, within a Next.js component written in TypeScript.

```tsx
export default function Page() {
  return <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>;
}
```

---

### Next.js Jest Configuration (JavaScript)

Source: https://nextjs.org/docs/app/guides/testing/jest

Configures Jest for Next.js projects using JavaScript, utilizing `next/jest` for automatic setup. It defines the test environment and coverage provider.

```javascript
const nextJest = require("next/jest");

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
```

---

### Install @next/bundle-analyzer

Source: https://nextjs.org/docs/app/guides/package-bundling

Installs the @next/bundle-analyzer package, a Next.js plugin for analyzing application bundle sizes. This helps in identifying large dependencies and optimizing code.

```bash
npm i @next/bundle-analyzer
# or
yarn add @next/bundle-analyzer
# or
pnpm add @next/bundle-analyzer
```

---

### Next.js Testing with Jest

Source: https://context7_llms

Set up and run tests for your Next.js application using Jest. This guide covers configuring Jest and writing unit and integration tests.

```javascript
# 1. Install Jest and related packages
npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom

# 2. Configure Jest (e.g., jest.config.js)
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};

# 3. Create jest.setup.js for setup
import '@testing-library/jest-dom';

# 4. Write tests (e.g., components/MyComponent.test.js)
import { render, screen } from '@testing-library/react';
import MyComponent from '../components/MyComponent';

test('renders MyComponent', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```

---

### Next.js Page Component (TypeScript)

Source: https://nextjs.org/docs/pages/guides/testing/vitest

Example of a basic Next.js page component written in TypeScript, which can be used for unit testing.

```tsx
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
```

---

### Install React Compiler Babel Plugin

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/reactCompiler

Installs the necessary Babel plugin for the React Compiler using npm.

```bash
npm install babel-plugin-react-compiler
```

---

### Create Next.js App with Default Template

Source: https://nextjs.org/docs/app/api-reference/cli/create-next-app

This command initializes a new Next.js application using the default template. After execution, the CLI will prompt the user for project name and configuration choices.

```bash
npx create-next-app@latest [project-name] [options]
```

```bash
npx create-next-app@latest
```

---

### Add MDX Loader using defaultLoaders.babel

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/webpack

An example demonstrating how to add a custom loader for `.mdx` files. It utilizes `options.defaultLoaders.babel` to ensure compatibility with the default Babel setup and includes the `@mdx-js/loader`.

```javascript
// Example config for adding a loader that depends on babel-loader
// This source was taken from the @next/mdx plugin source:
// https://github.com/vercel/next.js/tree/canary/packages/next-mdx
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: pluginOptions.options,
        },
      ],
    });

    return config;
  },
};
```

---

### Add Custom Loader using defaultLoaders.babel

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/webpack

This example demonstrates how to add a custom loader, specifically `@mdx-js/loader`, to the webpack configuration. It utilizes `options.defaultLoaders.babel` to ensure compatibility with the existing Babel setup, as seen in the `@next/mdx` plugin.

```javascript
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: pluginOptions.options,
        },
      ],
    });

    return config;
  },
};
```

---

### Install Latest Next.js with yarn

Source: https://nextjs.org/docs/app/getting-started/upgrading

Manually install the latest versions of Next.js, React, and related packages using yarn. This is an alternative to using the upgrade codemod.

```bash
yarn add next@latest react@latest react-dom@latest eslint-config-next@latest
```

---

### Next.js Middleware: Redirecting Requests

Source: https://nextjs.org/docs/app/guides/backend-for-frontend

This middleware handles redirects by changing the pathname of the request URL and returning a redirect response. It's used to guide users from one path to another, for example, during version updates or path migrations.

```TypeScript
import { NextResponse } from 'next/server'

export function middleware(request: Request) {
  if (request.nextUrl.pathname === '/v1/docs') {
    request.nextUrl.pathname = '/v2/docs'
    return NextResponse.redirect(request.nextUrl)
  }
}
```

```JavaScript
import { NextResponse } from 'next/server'

export function middleware(request) {
  if (request.nextUrl.pathname === '/v1/docs') {
    request.nextUrl.pathname = '/v2/docs'
    return NextResponse.redirect(request.nextUrl)
  }
}
```

---

### Next.js Jest Configuration (TypeScript)

Source: https://nextjs.org/docs/app/guides/testing/jest

Configures Jest for Next.js projects using TypeScript, leveraging `next/jest` for automatic setup. It specifies the test environment and coverage provider.

```typescript
import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
```

---

### Next.js Guides: AMP

Source: https://context7_llms

Documentation on implementing Accelerated Mobile Pages (AMP) within a Next.js project to improve mobile performance.

---

### Install Tailwind CSS (yarn)

Source: https://nextjs.org/docs/pages/getting-started/css

Installs Tailwind CSS and its PostCSS plugin using yarn. This is the package manager command for adding Tailwind CSS development dependencies.

```bash
yarn add -D tailwindcss @tailwindcss/postcss
```

---

### Markdown Conversion Example

Source: https://nextjs.org/docs/app/guides/mdx

Shows a simple markdown string and its corresponding HTML output, illustrating how markdown syntax is converted into structured HTML for web display.

```md
I **love** using [Next.js](https://nextjs.org/)
```

---

### Render and Test a Next.js Component

Source: https://nextjs.org/docs/pages/guides/testing/jest

Create a basic test for a Next.js component. This example renders the Home component and asserts that a level 1 heading is present in the document using `@testing-library/jest-dom` matchers.

```jsx
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
```

---

### Next.js Middleware Negative Path Matching (Regex)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/middleware

Illustrates how to use regular expressions in Next.js middleware's `matcher` configuration for negative path matching. This example excludes paths starting with 'api', '\_next/static', '\_next/image', and common metadata files.

```js
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
```

---

### Install and Configure eslint-config-prettier

Source: https://nextjs.org/docs/app/api-reference/config/eslint

Installs the `eslint-config-prettier` dependency to resolve conflicts between ESLint and Prettier formatting rules. It then adds 'prettier' to your ESLint configuration to ensure compatibility.

```bash
npm install --save-dev eslint-config-prettier

yarn add --dev eslint-config-prettier

pnpm add --save-dev eslint-config-prettier

bun add --dev eslint-config-prettier
```

---

### Next.js Server Component Redirect Example (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/functions/redirect

An example of using the `redirect` function within a Next.js Server Component written in JavaScript. It redirects to '/login' if a team cannot be fetched.

```jsx
import { redirect } from 'next/navigation'

async function fetchTeam(id) {
  const res = await fetch('https://...')
  if (!res.ok) return undefined
  return res.json()
}

export default async function Profile({ params }) {
  const { id } = await params
  const team = await fetchTeam(id)

  if (!team) {
    redirect('/login')
  }

  // ...
```

---

### Run Minimal Server.js

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/output

Start the Next.js application using the minimal 'server.js' file generated by the 'standalone' output mode. This server is optimized for production and only includes essential Next.js server files.

```bash
node .next/standalone/server.js
```

---

### Next.js Middleware Example (TypeScript)

Source: https://nextjs.org/docs/app/getting-started/route-handlers-and-middleware

An example of Next.js middleware written in TypeScript. This middleware redirects requests to '/about/\*' to '/home'. It includes the `config` object to specify matching paths.

```TypeScript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}
```

---

### Install MDX Dependencies for Next.js

Source: https://nextjs.org/docs/app/guides/mdx

Installs the necessary packages to enable Markdown and MDX processing in Next.js applications. These packages are essential for sourcing and transforming local markdown files into renderable content.

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
```

---

### Next.js Upgrading to Version 10

Source: https://context7_llms

Instructions for upgrading your Next.js project to version 10. This guide highlights key changes and migration steps.

```bash
# Update Next.js and React dependencies
npm install next@10 react@^17 react-dom@^17

# Review the official release notes for breaking changes and new features.
```

---

### Render Next.js Page Component

Source: https://nextjs.org/docs/app/guides/testing/jest

Example of a basic Next.js page component that renders a heading and a link. This component can be tested using Jest and React Testing Library.

```jsx
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
```

---

### Running Vitest Tests

Source: https://nextjs.org/docs/pages/guides/testing/vitest

Execute your Vitest unit tests using npm, yarn, pnpm, or bun by running the 'test' script defined in your package.json.

```bash
npm run test
# or
yarn test
# or
pnpm test
# or
bun test
```

---

### Import @testing-library/jest-dom

Source: https://nextjs.org/docs/app/guides/testing/jest

Import the @testing-library/jest-dom library in your Jest setup file to make its custom matchers available for use in your tests.

```ts
import "@testing-library/jest-dom";
```

```js
import "@testing-library/jest-dom";
```

---

### Next.js Package Bundling

Source: https://context7_llms

Understand how Next.js handles package bundling and code splitting. This guide explains the underlying mechanisms and how to optimize your bundle size.

```javascript
// Next.js automatically handles bundling and code splitting.
// You can analyze your bundle using tools like 'next-bundle-analyzer'.

// Example of dynamic import for code splitting:
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() =>
  import("../components/DynamicComponent")
);

function HomePage() {
  return (
    <div>
      <h1>Welcome</h1>
      <DynamicComponent />
    </div>
  );
}
```

---

### Generate Static 'Hello World' Response

Source: https://nextjs.org/docs/app/guides/backend-for-frontend

Illustrates how to create a static 'Hello World' response using a GET Route Handler in Next.js, specifically configured for static site generation using `export mode`. This handler is set to `force-static` to ensure it's pre-rendered.

```javascript
export const dynamic = 'force-static'

export function GET() {
  return new Response('Hello World', { status: 200 })
```

---

### Offload Script to Web Worker using 'worker' Strategy

Source: https://nextjs.org/docs/pages/guides/scripts

After enabling the 'worker' strategy and completing Partytown setup, you can offload scripts by setting `strategy="worker"` on the `next/script` component. This example shows how to apply this in a React component.

```tsx
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="https://example.com/script.js" strategy="worker" />
    </>
  );
}
```

```jsx
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="https://example.com/script.js" strategy="worker" />
    </>
  );
}
```

---

### Page Displaying Welcome Message with Fetched User Data (JSX)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/layout

A JavaScript example of a page component that fetches user data and renders a welcome message using the fetched name. This demonstrates a common pattern for creating dynamic and personalized user interfaces.

```jsx
import { getUser } from "@/app/lib/data";
import { UserName } from "@/app/ui/user-name";

export default async function Page() {
  const user = await getUser("1");

  return (
    <div>
      <h1>Welcome {user.name}</h1>
    </div>
  );
}
```

---

### Next.js Upgrading to Version 9

Source: https://context7_llms

Guidance on upgrading your Next.js project to version 9. This guide highlights key features and migration steps for v9.

```bash
# Update Next.js dependency
npm install next@9

# Check the official Next.js v9 release notes for any breaking changes
```

---

### Node.js Inspector Output Example

Source: https://nextjs.org/docs/app/guides/debugging

This bash snippet shows the typical output when launching a Next.js dev server with the --inspect flag enabled, including the debugger listening port and the server URL.

```bash
Debugger listening on ws://127.0.0.1:9229/0cf90313-350d-4466-a748-cd60f4e47c95
For help, see: https://nodejs.org/en/docs/inspector
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

---

### Next.js Upgrading to Version 11

Source: https://context7_llms

Steps to upgrade your Next.js application to version 11. This guide covers new features and potential migration considerations.

```bash
# Update Next.js dependency
npm install next@11

# Check the official documentation for any breaking changes or new APIs introduced in v11.
```

---

### Fetch and Render Remote MDX Content

Source: https://nextjs.org/docs/pages/guides/mdx

This example demonstrates how to fetch MDX content from a remote source (like a CMS or database) and render it dynamically on the server using the next-mdx-remote-client package. It includes both TypeScript and JavaScript examples for the page component and getStaticProps.

```tsx
import {
  serialize,
  type SerializeResult,
} from "next-mdx-remote-client/serialize";
import { MDXClient } from "next-mdx-remote-client";

type Props = {
  mdxSource: SerializeResult;
};

export default function RemoteMdxPage({ mdxSource }: Props) {
  if ("error" in mdxSource) {
    // either render error UI or throw `mdxSource.error`
  }
  return <MDXClient {...mdxSource} />;
}

export async function getStaticProps() {
  // MDX text - can be from a database, CMS, fetch, anywhere...
  const res = await fetch("https:...");
  const mdxText = await res.text();
  const mdxSource = await serialize({ source: mdxText });
  return { props: { mdxSource } };
}
```

```jsx
import { serialize } from "next-mdx-remote-client/serialize";
import { MDXClient } from "next-mdx-remote-client";

export default function RemoteMdxPage({ mdxSource }) {
  if ("error" in mdxSource) {
    // either render error UI or throw `mdxSource.error`
  }
  return <MDXClient {...mdxSource} />;
}

export async function getStaticProps() {
  // MDX text - can be from a database, CMS, fetch, anywhere...
  const res = await fetch("https:...");
  const mdxText = await res.text();
  const mdxSource = await serialize({ source: mdxText });
  return { props: { mdxSource } };
}
```

---

### Dynamic Segment in Client Component (TSX)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes

This TypeScript example illustrates accessing a dynamic route segment within a Next.js client component. It uses the `use` hook to asynchronously get the `slug` from the `params` prop. This approach is suitable for interactive components that need to react to URL changes.

```tsx
"use client";
import { use } from "react";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  return (
    <div>
      <p>{slug}</p>
    </div>
  );
}
```

---

### Install and Use 'server-only' Package

Source: https://nextjs.org/docs/app/guides/data-security

Demonstrates how to install the 'server-only' package using npm, yarn, or pnpm. This package is used to mark modules that should only be executed on the server, preventing them from being imported into client-side code and causing build errors.

```bash
npm install server-only
```

```bash
yarn add server-only
```

```bash
pnpm add server-only
```

---

### Markdown to HTML Conversion Example

Source: https://nextjs.org/docs/pages/guides/mdx

Illustrates the conversion of markdown syntax, including headings and lists, into corresponding HTML elements.

```md
## This is a heading

This is a list in markdown:

- One
- Two
- Three
```

---

### CSS Module Import Order Example (JSX)

Source: https://nextjs.org/docs/app/getting-started/css

Demonstrates the impact of CSS Module import order in JavaScript. The example shows how a page component imports a base button, affecting style precedence.

```jsx
import { BaseButton } from "./base-button";
import styles from "./page.module.css";

export default function Page() {
  return <BaseButton className={styles.primary} />;
}
```

---

### Write a Cypress Component Test for a Next.js Page

Source: https://nextjs.org/docs/app/guides/testing/cypress

This example demonstrates how to write a component test for a Next.js page component using Cypress. It mounts the component and asserts that specific content and links are rendered correctly.

```tsx
import Page from "../../app/page";

describe("<Page />", () => {
  it("should render and display expected content", () => {
    // Mount the React component for the Home page
    cy.mount(<Page />);

    // The new page should contain an h1 with "Home"
    cy.get("h1").contains("Home");

    // Validate that a link with the expected URL is present
    // Following the link is better suited to an E2E test
    cy.get('a[href="/about"]').should("be.visible");
  });
});
```

---

### Install Partytown via Terminal

Source: https://nextjs.org/docs/app/guides/scripts

Command to run in the terminal after enabling the `worker` strategy in `next.config.js`. This command installs the necessary Partytown package to offload scripts to a web worker.

```bash
npm run dev
```

---

### Install Sass Package

Source: https://nextjs.org/docs/pages/guides/sass

Installs the Sass package as a development dependency using npm. This is the first step to enable Sass support in Next.js.

```bash
npm install --save-dev sass
```

---

### Example Page with Tailwind CSS (JavaScript)

Source: https://nextjs.org/docs/app/getting-started/css

Demonstrates using Tailwind CSS utility classes in a Next.js page component written in JavaScript.

```jsx
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
    </main>
  );
}
```

---

### Basic GET Request Handler

Source: https://nextjs.org/docs/app/api-reference/file-conventions/route

Demonstrates a simple GET request handler that returns a JSON response with a 'Hello World' message. This is the most basic implementation of a Route Handler.

```ts
export async function GET() {
  return Response.json({ message: "Hello World" });
}
```

```js
export async function GET() {
  return Response.json({ message: "Hello World" });
}
```

---

### Next.js Upgrading to Version 14

Source: https://context7_llms

Steps to upgrade your Next.js project to version 14. This guide covers new features and migration considerations for the latest release.

```bash
# Update Next.js dependency
npm install next@14

# Consult the official Next.js v14 release notes for specific upgrade instructions and new features.
```

---

### Next.js Page Component (Home)

Source: https://nextjs.org/docs/app/guides/testing/cypress

A basic Next.js page component for the home route, including a link to the about page.

```jsx
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
```

---

### Install Sass Package

Source: https://nextjs.org/docs/app/guides/sass

Installs the Sass package as a development dependency using npm. This is the first step to enable Sass support in Next.js.

```bash
npm install --save-dev sass
```

---

### Upgrade to Next.js Canary Version

Source: https://nextjs.org/docs/app/getting-started/upgrading

Update your project to the latest canary release of Next.js. This command installs the `next` package with the `canary` tag.

```bash
npm i next@canary
```

---

### Add History Entry with pushState in Next.js

Source: https://nextjs.org/docs/app/getting-started/linking-and-navigating

Demonstrates using `window.history.pushState` to add a new entry to the browser's history stack, allowing users to navigate back. This example updates URL parameters for sorting products.

```tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function SortProducts() {
  const searchParams = useSearchParams();

  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortOrder);
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  return (
    <>
      <button onClick={() => updateSorting("asc")}>Sort Ascending</button>
      <button onClick={() => updateSorting("desc")}>Sort Descending</button>
    </>
  );
}
```

```jsx
"use client";

import { useSearchParams } from "next/navigation";

export default function SortProducts() {
  const searchParams = useSearchParams();

  function updateSorting(sortOrder) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortOrder);
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  return (
    <>
      <button onClick={() => updateSorting("asc")}>Sort Ascending</button>
      <button onClick={() => updateSorting("desc")}>Sort Descending</button>
    </>
  );
}
```

---

### Next.js Server Component Redirect Example (TypeScript)

Source: https://nextjs.org/docs/app/api-reference/functions/redirect

An example of using the `redirect` function within a Next.js Server Component written in TypeScript. It redirects to '/login' if a team cannot be fetched.

```tsx
import { redirect } from 'next/navigation'

async function fetchTeam(id: string) {
  const res = await fetch('https://...')
  if (!res.ok) return undefined
  return res.json()
}

export default async function Profile({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const team = await fetchTeam(id)

  if (!team) {
    redirect('/login')
  }

  // ...
```

---

### Generate Jest Configuration

Source: https://nextjs.org/docs/pages/guides/testing/jest

Generate a basic Jest configuration file for your project using the `create jest` command with npm, yarn, or pnpm.

```bash
npm init jest@latest
```

```bash
yarn create jest@latest
```

```bash
pnpm create jest@latest
```

---

### Run Jest Tests

Source: https://nextjs.org/docs/pages/guides/testing/jest

Execute your Jest tests using npm, yarn, or pnpm. This command initiates the test runner, which will discover and execute your test files.

```bash
npm run test
# or
yarn test
# or
pnpm test
```

---

### Next.js Debugging Techniques

Source: https://context7_llms

Discover effective methods for debugging your Next.js applications. This guide covers using the browser's developer tools, Node.js debugger, and logging.

```javascript
console.log("Debugging message:", variable);

// Using Node.js inspector
// Run with: node --inspect index.js
// Then connect a debugger client (e.g., Chrome DevTools)
```

---

### Next.js Production Checklist

Source: https://context7_llms

A comprehensive checklist for deploying your Next.js application to production. Covers performance optimization, security, and best practices.

```bash
# Production Checklist:
# 1. Optimize images (using next/image)
# 2. Configure environment variables correctly (.env.production)
# 3. Implement caching strategies (ISR, build caching)
# 4. Minify code (Next.js does this automatically)
# 5. Set up HTTPS
# 6. Monitor performance and errors
# 7. Secure your application (CSP, input validation)
# 8. Consider a CDN for static assets
```

---

### Next.js Static Exports

Source: https://context7_llms

Export your Next.js application as a static HTML site. This guide covers using `next export` for pre-rendering all pages into static files.

```bash
# Configure output to static in next.config.js
module.exports = {
  output: 'export',
};

# Build for static export:
npm run build

# The output will be in the 'out/' directory.
```

---

### next info Command Options

Source: https://nextjs.org/docs/app/api-reference/cli/next

Lists the available command-line options for `next info`. The `--help` option displays all available options, while `--verbose` collects additional debugging information.

```bash
next info -h or --help
next info --verbose
```

---

### Client-Side Navigation Example

Source: https://nextjs.org/docs/app/guides/static-exports

Illustrates how to implement client-side navigation between routes in a Next.js application using the `Link` component. This is crucial for the SPA-like behavior in statically exported sites.

```tsx
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Index Page</h1>
      <hr />
      <ul>
        <li>
          <Link href="/post/1">Post 1</Link>
        </li>
        <li>
          <Link href="/post/2">Post 2</Link>
        </li>
      </ul>
    </>
  );
}
```

```jsx
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Index Page</h1>
      <p>
        <Link href="/other">Other Page</Link>
      </p>
    </>
  );
}
```

---

### Configure Cypress for E2E Testing (JavaScript)

Source: https://nextjs.org/docs/pages/guides/testing/cypress

Sets up the Cypress configuration file (cypress.config.js) for End-to-End (E2E) testing using JavaScript. It includes the defineConfig import and a basic setup for node events.

```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
```

---

### Next.js package.json Scripts

Source: https://nextjs.org/docs/app/guides/migrating/from-vite

Shows the updated scripts in package.json for running a Next.js application, including dev, build, and start commands.

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

---

### CSS Module Import Order Example (TSX)

Source: https://nextjs.org/docs/app/getting-started/css

Illustrates how the order of importing CSS Modules affects the final CSS output. This example shows a primary page component importing a base button component.

```tsx
import { BaseButton } from "./base-button";
import styles from "./page.module.css";

export default function Page() {
  return <BaseButton className={styles.primary} />;
}
```

---

### Static Sitemap XML Example

Source: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

A basic sitemap in XML format for static site indexing. It includes URL, last modification date, change frequency, and priority for each page.

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://acme.com</loc>
    <lastmod>2023-04-06T15:02:24.021Z</lastmod>
    <changefreq>yearly</changefreq>
    <priority>1</priority>
  </url>
  <url>
    <loc>https://acme.com/about</loc>
    <lastmod>2023-04-06T15:02:24.021Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://acme.com/blog</loc>
    <lastmod>2023-04-06T15:02:24.021Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

---

### Next.js Redirects with Host Matching

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/redirects

Configure redirects in Next.js that are applied only when the request host matches a specific value. This example redirects requests to 'example.com'.

```javascript
module.exports = {
  async redirects() {
    return [
      // if the host is `example.com`,
      // this redirect will be applied
      {
        source: "/:path((?!another-page$).*)",
        has: [
          {
            type: "host",
            value: "example.com",
          },
        ],
        permanent: false,
        destination: "/another-page",
      },
    ];
  },
};
```

---

### Image Sitemap XML Example

Source: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

An XML sitemap that includes image information for each URL, adhering to the Google Image Sitemaps protocol.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
  <url>
    <loc>https://example.com</loc>
    <image:image>
      <image:loc>https://example.com/image.jpg</image:loc>
    </image:image>
    <lastmod>2021-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

---

### Generate Robots File with JavaScript/TypeScript

Source: https://nextjs.org/docs/app/getting-started/project-structure

Provides instructions on creating a robots.txt file dynamically using JavaScript or TypeScript. This file guides search engine crawlers on which pages they can or cannot access.

```javascript
export async function GET() {
  const robots = await generateRobots();
  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
```

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}
```

---

### Next.js Redirects with Host Matching

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects

Configure redirects in Next.js that are applied only when the request host matches a specific value. This example redirects requests to 'example.com'.

```javascript
module.exports = {
  async redirects() {
    return [
      // if the host is `example.com`,
      // this redirect will be applied
      {
        source: "/:path((?!another-page$).*)",
        has: [
          {
            type: "host",
            value: "example.com",
          },
        ],
        permanent: false,
        destination: "/another-page",
      },
    ];
  },
};
```

---

### Next.js Guides: Analytics

Source: https://context7_llms

Guidance on integrating analytics tools and services with Next.js applications to track user behavior and performance metrics.

---

### Advanced Rewrite Configuration with beforeFiles, afterFiles, and fallback

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites

Illustrates an advanced rewrite setup in `next.config.js` using `beforeFiles`, `afterFiles`, and `fallback` arrays. This allows for more granular control over rewrite application order, including external rewrites and overriding page files.

```javascript
module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        {
          source: "/some-page",
          destination: "/somewhere-else",
          has: [{ type: "query", key: "overrideMe" }],
        },
      ],
      afterFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
        {
          source: "/non-existent",
          destination: "/somewhere-else",
        },
      ],
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: "/:path*",
          destination: `https://my-old-site.com/:path*`,
        },
      ],
    };
  },
};
```

---

### Cypress npm Scripts for Component and E2E Testing

Source: https://nextjs.org/docs/pages/guides/testing/cypress

This JSON snippet from package.json defines npm scripts for running Cypress tests. It includes commands for opening Cypress interactively and running tests headlessly for both component and end-to-end testing scenarios.

```json
{
  "scripts": {
    //...
    "e2e": "start-server-and-test dev http://localhost:3000 \"cypress open --e2e\"",
    "e2e:headless": "start-server-and-test dev http://localhost:3000 \"cypress run --e2e\"",
    "component": "cypress open --component",
    "component:headless": "cypress run --component"
  }
}
```

---

### Next.js Custom Server Setup (TypeScript)

Source: https://nextjs.org/docs/app/guides/custom-server

This snippet demonstrates how to create a custom HTTP server using Node.js and integrate it with a Next.js application in TypeScript. It prepares the Next.js app and handles incoming requests by passing them to the Next.js request handler.

```ts
import { createServer } from "http";
import { parse } from "url";
import next from "next";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  }).listen(port);

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  );
});
```

---

### Next.js ISR Example with getStaticProps and getStaticPaths

Source: https://nextjs.org/docs/pages/guides/incremental-static-regeneration

This example demonstrates Incremental Static Regeneration (ISR) in Next.js using `getStaticProps` and `getStaticPaths`. It fetches blog post data, generates static paths, and sets a revalidation time of 60 seconds. The page component displays the post title and content.

```tsx
import type { GetStaticPaths, GetStaticProps } from "next";

interface Post {
  id: string;
  title: string;
  content: string;
}

interface Props {
  post: Post;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetch("https://api.vercel.app/blog").then((res) =>
    res.json()
  );
  const paths = posts.map((post: Post) => ({
    params: { id: String(post.id) },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}: {
  params: { id: string };
}) => {
  const post = await fetch(`https://api.vercel.app/blog/${params.id}`).then(
    (res) => res.json()
  );

  return {
    props: { post },
    // Next.js will invalidate the cache when a
    // request comes in, at most once every 60 seconds.
    revalidate: 60,
  };
};

export default function Page({ post }: Props) {
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
```

```jsx
export async function getStaticPaths() {
  const posts = await fetch("https://api.vercel.app/blog").then((res) =>
    res.json()
  );
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const post = await fetch(`https://api.vercel.app/blog/${params.id}`).then(
    (res) => res.json()
  );

  return {
    props: { post },
    // Next.js will invalidate the cache when a
    // request comes in, at most once every 60 seconds.
    revalidate: 60,
  };
}

export default function Page({ post }) {
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
```

---

### Page Layout with Components (JavaScript)

Source: https://nextjs.org/docs/app/guides/progressive-web-apps

The main page component that renders both the PushNotificationManager and the InstallPrompt components, integrating push notification functionality and the home screen install prompt into the application's UI.

```jsx
export default function Page() {
  return (
    <div>
      <PushNotificationManager />
      <InstallPrompt />
    </div>
  );
}
```

---

### Next.js Page Component (About)

Source: https://nextjs.org/docs/app/guides/testing/cypress

A basic Next.js page component for the about route, including a link back to the home page.

```jsx
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>About</h1>
      <Link href="/">Home</Link>
    </div>
  );
}
```

---

### Import @testing-library/jest-dom Matchers

Source: https://nextjs.org/docs/pages/guides/testing/jest

Import the custom matchers from `@testing-library/jest-dom` into your Jest setup file. This makes the custom matchers available for use in your test files.

```ts
import "@testing-library/jest-dom";
```

```js
import "@testing-library/jest-dom";
```

---

### Configure Route Handler GET Method Caching (JS)

Source: https://nextjs.org/docs/app/guides/upgrading/version-15

Shows how to opt-in `GET` methods in Next.js Route Handlers for static caching using the `dynamic = 'force-static'` route configuration option. This ensures the route handler's response is cached.

```js
export const dynamic = "force-static";

export async function GET() {}
```

---

### Next.js Custom Server Setup (TypeScript)

Source: https://nextjs.org/docs/pages/guides/custom-server

This snippet demonstrates how to create a custom HTTP server using Node.js and integrate it with a Next.js application in TypeScript. It prepares the Next.js app and handles incoming requests by passing them to the Next.js request handler.

```ts
import { createServer } from "http";
import { parse } from "url";
import next from "next";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  }).listen(port);

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  );
});
```

---

### CSS Nesting Example

Source: https://nextjs.org/docs/app/api-reference/turbopack

Modern CSS nesting syntax is supported, leveraging Lightning CSS for processing. This allows for more organized and readable CSS.

```CSS
/* Example of CSS Nesting */
.parent {
  color: blue;

  .child {
    font-size: 1.2em;
  }
}
```

---

### Track Navigation Performance with PerformanceObserver

Source: https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation-client

This snippet demonstrates how to track navigation performance, specifically calculating the 'Time to Interactive', using the PerformanceObserver API. It observes 'navigation' entry types and logs the time difference between the start of the script and the load event end. It also includes a function to mark the start of a router transition.

```TypeScript
const startTime = performance.now()

const observer = new PerformanceObserver(
  (list: PerformanceObserverEntryList) => {
    for (const entry of list.getEntries()) {
      if (entry instanceof PerformanceNavigationTiming) {
        console.log('Time to Interactive:', entry.loadEventEnd - startTime)
      }
    }
  }
)

observer.observe({ entryTypes: ['navigation'] })

export function onRouterTransitionStart(url: string) {
  performance.mark(`nav-start-${url}`)
}
```

---

### Run Jest Tests

Source: https://nextjs.org/docs/app/guides/testing/jest

Execute Jest tests using npm, yarn, or pnpm. The 'npm run test' command (or its equivalents) will run all tests defined in your project.

```bash
npm run test
# or
yarn test
# or
pnpm test
```

---

### Next.js Static Generation for Dynamic Blog Routes

Source: https://nextjs.org/docs/app/getting-started/linking-and-navigating

This code example shows how to use `generateStaticParams` in Next.js to statically generate dynamic routes at build time. This improves performance by pre-rendering pages and avoids fallback to dynamic rendering.

```tsx
export async function generateStaticParams() {
  const posts = await fetch("https://.../posts").then((res) => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // ...
}
```

```jsx
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())

  return posts.map((post) => ({
    slug: post.slug,
  }))

export default async function Page({ params }) {
  const { slug } = await params
  // ...
}
```

---

### Interpreting Build Output for Static/Dynamic Routes

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/devIndicators

Shows example build output from `next build --debug` to differentiate between static (○) and dynamic (ƒ) routes.

```bash
Route (app)                              Size     First Load JS
┌ ○ /_not-found                          0 B               0 kB
└ ƒ /products/[id]                       0 B               0 kB

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

---

### Example Page with Tailwind CSS (TypeScript)

Source: https://nextjs.org/docs/app/getting-started/css

Demonstrates using Tailwind CSS utility classes in a Next.js page component written in TypeScript.

```tsx
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
    </main>
  );
}
```

---

### Install and Load Environment Config with @next/env

Source: https://nextjs.org/docs/app/guides/environment-variables

Demonstrates installing the @next/env package and using the loadEnvConfig function to load environment variables from .env files in a specified project directory. This is useful for loading configurations outside the Next.js runtime.

```bash
npm install @next/env
```

```typescript
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);
```

---

### Next.js Link Prefetching Example

Source: https://nextjs.org/docs/app/getting-started/linking-and-navigating

Demonstrates how to use the `<Link>` component in Next.js for automatic route prefetching. Routes linked with `<Link>` are prefetched when they enter the user's viewport, while standard `<a>` tags do not trigger prefetching.

```tsx
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <nav>
          {/* Prefetched when the link is hovered or enters the viewport */}
          <Link href="/blog">Blog</Link>
          {/* No prefetching */}
          <a href="/contact">Contact</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
```

```jsx
import Link from "next/link";

export default function Layout() {
  return (
    <html>
      <body>
        <nav>
          {/* Prefetched when the link is hovered or enters the viewport */}
          <Link href="/blog">Blog</Link>
          {/* No prefetching */}
          <a href="/contact">Contact</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
```

---

### Next.js Environment Variable Configuration

Source: https://nextjs.org/docs/app/guides/migrating/from-vite

Provides an example of setting a custom base path environment variable in a .env file for Next.js applications.

```bash
# ...
NEXT_PUBLIC_BASE_PATH="/some-base-path"
```

---

### Next.js About Page Component

Source: https://nextjs.org/docs/app/guides/testing/playwright

This Next.js page component represents the 'About' page. It displays a heading and a link back to the home page, completing the navigation example.

```tsx
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>About</h1>
      <Link href="/">Home</Link>
    </div>
  );
}
```

---

### Async Headers Usage in Next.js (JavaScript)

Source: https://nextjs.org/docs/app/guides/upgrading/version-15

Shows the recommended asynchronous usage of the `headers` API in Next.js with JavaScript, contrasting it with the previous synchronous method. Also provides a temporary synchronous usage example.

```javascript
import { headers } from "next/headers";

// Before
const headersList = headers();
const userAgent = headersList.get("user-agent");

// After
const headersList = headers();
// will log a warning in dev
const userAgent = headersList.get("user-agent");
```

---

### Next.js API Reference: instrumentation.js

Source: https://context7_llms

The `instrumentation.js` file in Next.js is used for instrumenting your application with custom logic, such as setting up OpenTelemetry or other monitoring tools. It runs before the application starts.

```javascript
// instrumentation.js

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./tracing");
  }
}
```

---

### Next.js Route Handler for GET Requests (JavaScript)

Source: https://nextjs.org/docs/app/guides/backend-for-frontend

Defines a basic Route Handler in Next.js using JavaScript to handle incoming GET requests to the `/api` endpoint. This is a fundamental building block for creating API endpoints in a Next.js application.

```javascript
export function GET(request) {}
```

---

### Install Latest Next.js Version

Source: https://nextjs.org/docs/app/guides/migrating/app-router-migration

This command updates your project to the latest Next.js version, which is required for utilizing the new features like the App Router and `next/font`.

```bash
npm install next@latest
```

---

### Next.js Link Component for Navigation

Source: https://nextjs.org/docs/app/getting-started/layouts-and-pages

Demonstrates how to use the built-in `<Link>` component from 'next/link' to create navigation links to blog posts. It includes fetching posts and mapping them to list items with links, enabling client-side navigation and prefetching.

```tsx
import Link from "next/link";

export default async function Post({ post }) {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
```

```jsx
import Link from "next/link";

export default async function Post({ post }) {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
```

---

### Upgrade to Latest Next.js using Codemod

Source: https://nextjs.org/docs/app/getting-started/upgrading

This command uses the Next.js codemod to upgrade your project to the latest stable version. Ensure you have the `@next/codemod` package installed or use `npx` to run it directly.

```bash
npx @next/codemod@latest upgrade latest
```

---

### Fetch Data and Render Page (Server Component)

Source: https://nextjs.org/docs/app/getting-started/server-and-client-components

This example demonstrates a Next.js Server Component that fetches post data using an async function and passes it to a Client Component. It highlights data fetching on the server and passing props to interactive components.

```tsx
import LikeButton from "@/app/ui/like-button";
import { getPost } from "@/lib/data";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <div>
      <main>
        <h1>{post.title}</h1>
        {/* ... */}
        <LikeButton likes={post.likes} />
      </main>
    </div>
  );
}
```

```jsx
import LikeButton from "@/app/ui/like-button";
import { getPost } from "@/lib/data";

export default async function Page({ params }) {
  const post = await getPost(params.id);

  return (
    <div>
      <main>
        <h1>{post.title}</h1>
        {/* ... */}
        <LikeButton likes={post.likes} />
      </main>
    </div>
  );
}
```

---

### Next.js Loading UI for Dynamic Blog Route

Source: https://nextjs.org/docs/app/getting-started/linking-and-navigating

Demonstrates the implementation of `loading.tsx` for a dynamic blog route in Next.js. This ensures a loading state is shown while the specific blog post content is being fetched and rendered.

```tsx
export default function Loading() {
  return <LoadingSkeleton />;
}
```

```jsx
export default function Loading() {
  return <LoadingSkeleton />;
}
```

---

### Basic Link Navigation in Next.js

Source: https://nextjs.org/docs/app/api-reference/components/link

Demonstrates the fundamental usage of the Next.js Link component to navigate to a different route. This example shows how to import Link and specify the target path using the `href` prop.

```tsx
import Link from "next/link";

export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>;
}
```

```jsx
import Link from "next/link";

export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>;
}
```

---

### Page Layout with Components (TypeScript)

Source: https://nextjs.org/docs/app/guides/progressive-web-apps

The main page component that renders both the PushNotificationManager and the InstallPrompt components, integrating push notification functionality and the home screen install prompt into the application's UI.

```tsx
export default function Page() {
  return (
    <div>
      <PushNotificationManager />
      <InstallPrompt />
    </div>
  );
}
```

---

### Next.js Middleware - Basic Redirect (JavaScript)

Source: https://nextjs.org/docs/pages/api-reference/file-conventions/middleware

This JavaScript example shows a basic Next.js middleware function that redirects all incoming requests to '/home'. It uses `NextResponse.redirect` and defines the paths to match via the `matcher` configuration.

```js
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: "/about/:path*",
};
```

---

### Add Cypress Open Script to package.json

Source: https://nextjs.org/docs/pages/guides/testing/cypress

Adds the 'cypress:open' command to the scripts section of your package.json file, allowing you to easily launch the Cypress testing suite from your terminal.

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "cypress:open": "cypress open"
  }
}
```

---

### Next.js Build Command Options

Source: https://nextjs.org/docs/app/api-reference/cli/next

Lists available options for the `next build` command, used to create an optimized production build. Options include help, specifying a build directory, enabling debug output, profiling, disabling linting, and experimental build modes.

```bash
next build [directory] [options]

Options:
  -h, --help                       Show all available options.
  -d, --debug                      Enables a more verbose build output.
  --profile                        Enables production profiling for React.
  --no-lint                        Disables linting.
  --no-mangling                    Disables mangling.
  --experimental-app-only          Builds only App Router routes.
  --experimental-build-mode [mode] Uses an experimental build mode.
  --debug-prerender                Debug prerender errors in development.
```

---

### Next.js Route Handler for GET Requests (TypeScript)

Source: https://nextjs.org/docs/app/guides/backend-for-frontend

Defines a basic Route Handler in Next.js using TypeScript to handle incoming GET requests to the `/api` endpoint. This is a fundamental building block for creating API endpoints in a Next.js application.

```typescript
export function GET(request: Request) {}
```

---

### Configure Cypress for E2E Testing (TypeScript)

Source: https://nextjs.org/docs/pages/guides/testing/cypress

Sets up the Cypress configuration file (cypress.config.ts) for End-to-End (E2E) testing. It includes the necessary defineConfig import and a basic setup for node events.

```typescript
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
```

---

### Add Test Script to package.json

Source: https://nextjs.org/docs/app/guides/testing/vitest

Adds a 'test' script to the `package.json` file, allowing you to run Vitest tests using the command `npm run test`.

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "vitest"
  }
}
```

---

### Upgrade ESLint Configuration

Source: https://nextjs.org/docs/app/guides/migrating/app-router-migration

Command to install the latest version of the ESLint configuration for Next.js. This ensures ESLint compatibility with newer Next.js versions.

```bash
npm install -D eslint-config-next@latest
```

---

### Generate Jest Configuration

Source: https://nextjs.org/docs/app/guides/testing/jest

Generates a basic Jest configuration file for your project using npm, yarn, or pnpm.

```bash
npm init jest@latest
```

```bash
yarn create jest@latest
```

```bash
pnpm create jest@latest
```

---

### Next.js MDX Integration

Source: https://context7_llms

Integrate MDX files into your Next.js project to write content with JSX. This guide covers setting up MDX and rendering markdown content with interactive components.

```javascript
// next.config.js
module.exports = {
  pageExtensions: ["mdx", "js", "jsx", "ts", "tsx"],
};

// pages/posts/[slug].js
import { serialize } from "next-mdx-remote/serialize";
import MyComponent from "../../components/MyComponent";

export async function getStaticProps(context) {
  const { slug } = context.params;
  const mdxContent = `
# Hello MDX!

This is a paragraph.

<MyComponent message="from MDX" />
`;

  const mdxSource = await serialize(mdxContent, {
    scope: {
      /* pass props to MDX */
    },
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });

  return {
    props: {
      source: mdxSource,
    },
  };
}
```

---

### Basic Link Navigation in Next.js

Source: https://nextjs.org/docs/pages/api-reference/components/link

Demonstrates the basic usage of the Next.js `<Link>` component to navigate to a different route. This example shows how to import and render the `<Link>` component with an `href` prop pointing to the '/dashboard' route.

```tsx
import Link from "next/link";

export default function Home() {
  return <Link href="/dashboard">Dashboard</Link>;
}
```

```jsx
import Link from "next/link";

export default function Home() {
  return <Link href="/dashboard">Dashboard</Link>;
}
```

---

### Next.js Middleware - Basic Redirect (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/middleware

This JavaScript example shows a basic Next.js middleware function that redirects all incoming requests to '/home'. It uses `NextResponse.redirect` and defines the paths to match via the `matcher` configuration.

```js
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: "/about/:path*",
};
```

---

### Avoid Side-Effects in Rendering with Server Actions

Source: https://nextjs.org/docs/app/guides/data-security

Demonstrates the incorrect and correct ways to handle mutations like logging out users or updating databases. The 'BAD' example shows a side-effect during rendering, while the 'GOOD' example correctly uses Server Actions for mutations.

```tsx
// BAD: Triggering a mutation during rendering
export default async function Page({ searchParams }) {
  if (searchParams.get("logout")) {
    cookies().delete("AUTH_TOKEN");
  }

  return <UserProfile />;
}
```

```tsx
// GOOD: Using Server Actions to handle mutations
import { logout } from "./actions";

export default function Page() {
  return (
    <>
      <UserProfile />
      <form action={logout}>
        <button type="submit">Logout</button>
      </form>
    </>
  );
}
```

---

### Configure remotePatterns with Object Syntax (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/components/image

Provides an alternative configuration for `remotePatterns` using an object syntax, suitable for versions prior to Next.js 15.3.0. This example specifies protocol, hostname, and pathname.

```javascript
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/account123/**",
        search: "",
      },
    ],
  },
};
```

---

### Next.js Environment Variables

Source: https://context7_llms

Manage environment variables in your Next.js application for different environments (development, production). This guide covers best practices for security and configuration.

```javascript
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3001

# .env.production
NEXT_PUBLIC_API_URL=https://api.example.com
```

```javascript
// In your code
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
console.log(apiUrl);
```

---

### Cypress Scripts in package.json

Source: https://nextjs.org/docs/app/guides/testing/cypress

This JSON snippet shows common Cypress script commands added to `package.json` for running component and end-to-end (E2E) tests, both interactively and headlessly.

```json
{
  "scripts": {
    //...
    "e2e": "start-server-and-test dev http://localhost:3000 \"cypress open --e2e\"",
    "e2e:headless": "start-server-and-test dev http://localhost:3000 \"cypress run --e2e\"",
    "component": "cypress open --component",
    "component:headless": "cypress run --component"
  }
}
```

---

### Next.js OpenTelemetry Integration

Source: https://context7_llms

Integrate OpenTelemetry into your Next.js application for distributed tracing and metrics. This guide covers setting up the SDK and exporting telemetry data.

```javascript
// Example: Basic OpenTelemetry setup in a server component or middleware
import { trace } from "@opentelemetry/api";

const tracer = trace.getTracer("nextjs-app");

export default function MyComponent() {
  const span = tracer.startSpan("render-my-component");
  // Component rendering logic
  span.end();
  return <div>Hello from Next.js with OpenTelemetry</div>;
}
```

---

### Next.js Blog Page with Suspense (jsx)

Source: https://nextjs.org/docs/app/getting-started/fetching-data

Renders a blog page in Next.js using JavaScript, utilizing Suspense for granular content streaming. The header is displayed immediately, while the blog list is streamed with a skeleton fallback.

```jsx
import { Suspense } from "react";
import BlogList from "@/components/BlogList";
import BlogListSkeleton from "@/components/BlogListSkeleton";

export default function BlogPage() {
  return (
    <div>
      {/* This content will be sent to the client immediately */}
      <header>
        <h1>Welcome to the Blog</h1>
        <p>Read the latest posts below.</p>
      </header>
      <main>
        {/* Any content wrapped in a <Suspense> boundary will be streamed */}
        <Suspense fallback={<BlogListSkeleton />}>
          <BlogList />
        </Suspense>
      </main>
    </div>
  );
}
```

---

### Next.js onReady Script Strategy with Google Maps

Source: https://nextjs.org/docs/app/api-reference/components/script

Shows how to use the `onReady` property with `next/script` to execute code after a script loads and on subsequent component re-mounts. This example re-instantiates a Google Maps instance.

```tsx
"use client";

import { useRef } from "react";
import Script from "next/script";

export default function Page() {
  const mapRef = useRef();

  return (
    <>
      <div ref={mapRef}></div>
      <Script
        id="google-maps"
        src="https://maps.googleapis.com/maps/api/js"
        onReady={() => {
          new google.maps.Map(mapRef.current, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
          });
        }}
      />
    </>
  );
}
```

```jsx
"use client";

import { useRef } from "react";
import Script from "next/script";

export default function Page() {
  const mapRef = useRef();

  return (
    <>
      <div ref={mapRef}></div>
      <Script
        id="google-maps"
        src="https://maps.googleapis.com/maps/api/js"
        onReady={() => {
          new google.maps.Map(mapRef.current, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
          });
        }}
      />
    </>
  );
}
```

---

### Configure Viewport Object (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/functions/generate-viewport

Provides an example of configuring the viewport using a static object in JavaScript projects, leveraging JSDoc for type safety. This is an alternative for projects not using TypeScript.

```js
/** @type {import("next").Viewport} */
export const viewport = {
  themeColor: "black",
};
```

---

### Next.js Middleware - Multiple Path Matching

Source: https://nextjs.org/docs/pages/api-reference/file-conventions/middleware

This JavaScript example demonstrates configuring the `matcher` option in Next.js middleware to apply to multiple specific paths, '/about/:path*' and '/dashboard/:path*', using an array.

```js
export const config = {
  matcher: ["/about/:path*", "/dashboard/:path*"],
};
```

---

### Next.js About Page Component

Source: https://nextjs.org/docs/pages/guides/testing/cypress

A basic Next.js page component for the about route ('/about'). It displays a heading and a link back to the 'Home' page.

```jsx
import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <Link href="/">Home</Link>
    </div>
  );
}
```

---

### Next.js Configuration Options

Source: https://context7_llms

This section details various configuration options available in `next.config.js` for customizing Next.js build and runtime behavior. Options include asset prefixing, environment variables, image optimization, and more.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compilerOptions: {
    // ...
  },
  images: {
    domains: ["example.com"],
  },
  env: {
    CUSTOM_ENV_VAR: "some-value",
  },
  basePath: "/docs",
  assetPrefix: "/static/",
};

module.exports = nextConfig;
```

---

### Preload Data in Next.js Page (JSX)

Source: https://nextjs.org/docs/app/getting-started/fetching-data

This snippet demonstrates preloading data for a Next.js page using JavaScript. It mirrors the TypeScript example by calling a `preload` function to initiate data fetching early.

```jsx
import { getItem, checkIsAvailable } from "@/lib/data";

export default async function Page({ params }) {
  const { id } = await params;
  // starting loading item data
  preload(id);
  // perform another asynchronous task
  const isAvailable = await checkIsAvailable();

  return isAvailable ? <Item id={id} /> : null;
}

export const preload = (id) => {
  // void evaluates the given expression and returns undefined
  // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/void
  void getItem(id);
};
export async function Item({ id }) {
  const result = await getItem(id);
  // ...
}
```

---

### Next.js About Page Component

Source: https://nextjs.org/docs/pages/guides/testing/playwright

This TypeScript/React code defines the 'About' page (`/about`) for a Next.js application. It provides a link back to the 'Home' page, completing the navigation example.

```tsx
import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <Link href="/">Home</Link>
    </div>
  );
}
```

---

### Next.js Middleware - Multiple Path Matching

Source: https://nextjs.org/docs/app/api-reference/file-conventions/middleware

This JavaScript example demonstrates configuring the `matcher` option in Next.js middleware to apply to multiple specific paths, '/about/:path*' and '/dashboard/:path*', using an array.

```js
export const config = {
  matcher: ["/about/:path*", "/dashboard/:path*"],
};
```

---

### Next.js Build Output Example

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/devIndicators

Illustrates the output of `next build --debug`, showing symbols that indicate whether a route is static (○) or dynamic (ƒ). This helps in troubleshooting routes that are not being marked as static.

```bash
Route (app)                              Size     First Load JS
┌ ○ /_not-found                          0 B               0 kB
└ ƒ /products/[id]                       0 B               0 kB

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

---

### Async Headers Usage in Next.js

Source: https://nextjs.org/docs/app/guides/upgrading/version-15

Illustrates the recommended asynchronous usage of the `headers` API in Next.js, comparing it to the prior synchronous approach. Includes a temporary synchronous usage example with type assertion.

```typescript
import { headers } from "next/headers";

// Before
const headersList = headers();
const userAgent = headersList.get("user-agent");

// After
const headersList = await headers();
const userAgent = headersList.get("user-agent");
```

```typescript
import { headers, type UnsafeUnwrappedHeaders } from "next/headers";

// Before
const headersList = headers();
const userAgent = headersList.get("user-agent");

// After
const headersList = headers() as unknown as UnsafeUnwrappedHeaders;
// will log a warning in dev
const userAgent = headersList.get("user-agent");
```

---

### Fetch Data with API Key (TypeScript)

Source: https://nextjs.org/docs/app/getting-started/server-and-client-components

An example of a TypeScript function that fetches data from an external service using an API key from environment variables. This code is intended for server-side use only.

```typescript
export async function getData() {
  const res = await fetch("https://external-service.com/data", {
    headers: {
      authorization: process.env.API_KEY,
    },
  });

  return res.json();
}
```

---

### Implement Partial Prerendering with Suspense

Source: https://nextjs.org/docs/app/getting-started/partial-prerendering

This example demonstrates how to use Partial Prerendering (PPR) in Next.js by enabling the experimental_ppr flag and wrapping dynamic components with React's Suspense boundary. This allows for a static shell with dynamically loaded content.

```jsx
import { Suspense } from "react";
import StaticComponent from "./StaticComponent";
import DynamicComponent from "./DynamicComponent";
import Fallback from "./Fallback";

export const experimental_ppr = true;

export default function Page() {
  return (
    <>
      <StaticComponent />
      <Suspense fallback={<Fallback />}>
        <DynamicComponent />
      </Suspense>
    </>
  );
}
```

---

### Next.js CI Build Caching

Source: https://context7_llms

Optimize your Continuous Integration build times by implementing caching strategies for Next.js projects. This guide explains how to cache dependencies and build artifacts.

```bash
# Example for caching node_modules in a CI environment
# This is a conceptual example and depends on your CI/CD platform

# Cache node_modules directory
cache:
  paths:
    - node_modules/

# Install dependencies
run:
  - npm install

# Build the Next.js application
run:
  - npm run build
```

---

### Redirecting Routes with Middleware

Source: https://nextjs.org/docs/pages/api-reference/config/typescript

Example of how to use middleware to redirect requests and how to link to a route that is handled by middleware using statically typed links.

```ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/middleware-redirect") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
```

---

### Define Basic Route Handler (JavaScript)

Source: https://nextjs.org/docs/app/getting-started/route-handlers-and-middleware

Demonstrates the basic structure of a Route Handler in JavaScript for handling GET requests. This file convention is used within the 'app' directory of a Next.js application.

```js
export async function GET(request) {}
```

---

### Using Next/Image with Custom Loader

Source: https://nextjs.org/docs/pages/guides/static-exports

Demonstrates how to use the `next/image` component in a Next.js application when a custom image loader is configured. The example shows importing the Image component and rendering an image with specified properties.

```tsx
import Image from "next/image";

export default function Page() {
  return <Image alt="turtles" src="/turtles.jpg" width={300} height={300} />;
}
```

```jsx
import Image from "next/image";

export default function Page() {
  return <Image alt="turtles" src="/turtles.jpg" width={300} height={300} />;
}
```

---

### Next.js Redirects with Header Matching

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/redirects

Configure redirects in Next.js that are applied only when a specific header is present. This example shows how to match the presence of the 'x-redirect-me' header.

```javascript
module.exports = {
  async redirects() {
    return [
      // if the header `x-redirect-me` is present,
      // this redirect will be applied
      {
        source: "/:path((?!another-page$).*)",
        has: [
          {
            type: "header",
            key: "x-redirect-me",
          },
        ],
        permanent: false,
        destination: "/another-page",
      },
    ];
  },
};
```

---

### Next.js Middleware: Conditional Path Rewrites (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/middleware

This middleware rewrites requests based on the pathname. If the path starts with '/about', it rewrites to '/about-2'. If it starts with '/dashboard', it rewrites to '/dashboard/user'. This is useful for managing routing logic.

```js
import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.rewrite(new URL("/about-2", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/dashboard/user", request.url));
  }
}
```

---

### Next.js Index Page Component

Source: https://nextjs.org/docs/pages/guides/testing/playwright

This TypeScript/React code defines the main page (`/`) for a Next.js application. It includes a link to the 'About' page, demonstrating basic navigation setup within the framework.

```tsx
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
```

---

### Configure HTTPS with Custom Files

Source: https://nextjs.org/docs/app/api-reference/cli/next

Provides options to configure HTTPS for the Next.js development server using custom key, certificate, and certificate authority files. This allows for more advanced HTTPS setups.

```bash
next dev --experimental-https-key ./path/to/key.pem --experimental-https-cert ./path/to/cert.pem --experimental-https-ca ./path/to/ca.pem

```

---

### Next.js Redirects with Header Matching

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects

Configure redirects in Next.js that are applied only when a specific header is present. This example shows how to match the presence of the 'x-redirect-me' header.

```javascript
module.exports = {
  async redirects() {
    return [
      // if the header `x-redirect-me` is present,
      // this redirect will be applied
      {
        source: "/:path((?!another-page$).*)",
        has: [
          {
            type: "header",
            key: "x-redirect-me",
          },
        ],
        permanent: false,
        destination: "/another-page",
      },
    ];
  },
};
```

---

### MDX Page Example with React Component

Source: https://nextjs.org/docs/app/guides/mdx

Demonstrates how to create an MDX page in Next.js that imports and renders a React component. This showcases the ability to embed dynamic, interactive elements directly within markdown content.

```mdx
import { MyComponent } from "my-component";

# Welcome to my MDX page!

This is some **bold** and _italics_ text.

This is a list in markdown:

- One
- Two
- Three

Checkout my React component:

<MyComponent />
```

---

### Manually Install Next.js and React Latest Versions

Source: https://nextjs.org/docs/app/guides/upgrading/version-15

Manually update your project dependencies to the latest versions of Next.js, React, React DOM, and ESLint config for Next.js.

```bash
npm i next@latest react@latest react-dom@latest eslint-config-next@latest
```

---

### Next.js Middleware: Conditional Path Rewrites (TypeScript)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/middleware

This middleware rewrites requests based on the pathname. If the path starts with '/about', it rewrites to '/about-2'. If it starts with '/dashboard', it rewrites to '/dashboard/user'. This is useful for managing routing logic.

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.rewrite(new URL("/about-2", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/dashboard/user", request.url));
  }
}
```

---

### Next.js Redirecting Pages

Source: https://context7_llms

Learn how to implement redirects in your Next.js application for SEO and user experience. This guide covers permanent (301) and temporary (302) redirects.

```javascript
// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: "/old-page",
        destination: "/new-page",
        permanent: true, // Use true for 301, false for 302
      },
    ];
  },
};

// In a page component (client-side redirect):
import { useRouter } from "next/router";

function MyComponent() {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/target-page");
  }, []);

  return <div>Redirecting...</div>;
}
```

---

### TypeScript Configuration (next.config.ts)

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js

Provides an example of using TypeScript for Next.js configuration with `next.config.ts`. This leverages TypeScript's static typing for improved developer experience and error checking.

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

---

### Use Selected Layout Segment in Client Component (JSX)

Source: https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment

This example shows the usage of the `useSelectedLayoutSegment` hook in a Next.js Client Component using JavaScript (JSX). It mirrors the TSX example, importing the hook and rendering the current route segment.

```jsx
"use client";

import { useSelectedLayoutSegment } from "next/navigation";

export default function ExampleClientComponent() {
  const segment = useSelectedLayoutSegment();

  return <p>Active segment: {segment}</p>;
}
```

---

### Next.js Form Handling

Source: https://context7_llms

Learn how to handle forms in Next.js applications, including client-side validation and server-side submission. This guide covers common patterns for form management.

```javascript
import { useForm } from "react-hook-form";

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} />
      {errors.firstName && <span>This field is required</span>}
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

### Route Handler Conflict Example (JavaScript)

Source: https://nextjs.org/docs/app/getting-started/route-handlers-and-middleware

Illustrates a conflict scenario where a `route.js` file exists at the same level as a `page.js` file, leading to a conflict for handling HTTP verbs.

```js
export default function Page() {
  return <h1>Hello, Next.js!</h1>;
}

// Conflict
// `app/route.js`
export async function POST(request) {}
```

---

### Image with Fill Prop

Source: https://nextjs.org/docs/pages/api-reference/components/image

Example of using the 'fill' prop to make the image expand to its parent element's size.

```js
<Image src="/profile.png" fill={true} />
```

---

### Fetch Data with SWR in Next.js Client Component (JSX)

Source: https://nextjs.org/docs/app/getting-started/fetching-data

Demonstrates how to use the SWR library to fetch data in a Next.js Client Component using JavaScript. It includes basic loading and error handling, and maps fetched data to a list.

```jsx
"use client";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function BlogPage() {
  const { data, error, isLoading } = useSWR(
    "https://api.vercel.app/blog",
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

---

### Next.js Middleware - Basic Redirect (TypeScript)

Source: https://nextjs.org/docs/pages/api-reference/file-conventions/middleware

This TypeScript example demonstrates a basic Next.js middleware function that redirects all incoming requests to '/home'. It utilizes `NextResponse.redirect` and specifies the paths to match using the `matcher` configuration.

```tsx
import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: "/about/:path*",
};
```

---

### Disable Preloading Entries on Next.js Server Start

Source: https://nextjs.org/docs/app/guides/memory-usage

Configure Next.js to disable the preloading of JavaScript modules for each page when the server starts. This reduces the initial memory footprint, although the memory usage may eventually equalize if all pages are requested. This setting is available under the `experimental` configuration.

```typescript
import type { NextConfig } from "next";

const config: NextConfig = {
  experimental: {
    preloadEntriesOnStart: false,
  },
};

export default config;
```

---

### Next.js Preview Mode

Source: https://context7_llms

Implement Preview Mode in Next.js to preview unpublished content from a CMS. This guide explains how to enable and manage Preview Mode.

```javascript
import { setPreviewData, readPreviewData } from "next/dist/server/api-utils";

export default function preview(req, res) {
  // Set preview data based on query parameters or other logic
  setPreviewData(res, {
    token: "your-secret-token",
    // other preview data
  });

  res.writeHead(307, { Location: "/preview-page" });
  res.end();
}
```

---

### Redirecting Routes with Middleware

Source: https://nextjs.org/docs/app/api-reference/config/typescript

Example of how to use middleware to redirect requests and how to link to a route that is handled by middleware using statically typed links.

```ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/middleware-redirect") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
```

---

### Write a Cypress Component Test for AboutPage

Source: https://nextjs.org/docs/pages/guides/testing/cypress

This JSX code demonstrates a Cypress component test for a Next.js AboutPage component. It mounts the component and asserts that it renders the expected content and a link.

```jsx
import AboutPage from "../../pages/about";

describe("<AboutPage />", () => {
  it("should render and display expected content", () => {
    // Mount the React component for the About page
    cy.mount(<AboutPage />);

    // The new page should contain an h1 with "About page"
    cy.get("h1").contains("About");

    // Validate that a link with the expected URL is present
    // *Following* the link is better suited to an E2E test
    cy.get('a[href="/"]').should("be.visible");
  });
});
```

---

### Disable Preloading Entries on Next.js Server Start (MJS)

Source: https://nextjs.org/docs/app/guides/memory-usage

Configure Next.js to disable the preloading of JavaScript modules for each page when the server starts using an MJS configuration file. This reduces the initial memory footprint, although the memory usage may eventually equalize if all pages are requested. This setting is available under the `experimental` configuration.

```javascript
/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    preloadEntriesOnStart: false,
  },
};

export default config;
```

---

### Next.js Middleware - Basic Redirect (TypeScript)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/middleware

This TypeScript example demonstrates a basic Next.js middleware function that redirects all incoming requests to '/home'. It utilizes `NextResponse.redirect` and specifies the paths to match using the `matcher` configuration.

```tsx
import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: "/about/:path*",
};
```

---

### Next.js Rewrites: Match Host

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites

Applies a Next.js rewrite when the host is 'example.com'. The destination is '/another-page'.

```javascript
module.exports = {
  async rewrites() {
    return [
      // if the host is `example.com`,
      // this rewrite will be applied
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "example.com",
          },
        ],
        destination: "/another-page",
      },
    ];
  },
};
```

---

### Generate VAPID Keys for Web Push API

Source: https://nextjs.org/docs/app/guides/progressive-web-apps

This section details how to generate VAPID keys required for the Web Push API. It involves installing the web-push CLI globally and then running a command to generate the keys. The generated public and private keys should be stored in your project's .env file.

```bash
npm install -g web-push
web-push generate-vapid-keys
```

---

### Load Polyfills with Static and Dynamic Imports (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation-client

This JavaScript snippet demonstrates polyfill loading, including a static import for core polyfills and a dynamic import for 'resize-observer' polyfills, loaded conditionally if `window.ResizeObserver` is not present.

```JavaScript
import './lib/polyfills'

if (!window.ResizeObserver) {
  import('./lib/polyfills/resize-observer').then((mod) => {
    window.ResizeObserver = mod.default
  })
}
```

---

### Next.js Static Image Import Example

Source: https://nextjs.org/docs/app/guides/migrating/from-vite

Demonstrates how to import and use a static image in a Next.js application using the standard img tag, referencing the image object's src property.

```tsx
import image from "./img.png"; // `image` will be '/assets/img.2d8efhg.png' in production

export default function App() {
  return <img src={image} />;
}
```

---

### Add Cypress Open Script to package.json

Source: https://nextjs.org/docs/app/guides/testing/cypress

Adds a script to package.json to easily open the Cypress testing suite.

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "cypress:open": "cypress open"
  }
}
```

---

### Get All Cookies with NextResponse

Source: https://nextjs.org/docs/app/api-reference/functions/next-response

Retrieves all cookies or cookies matching a specific name from the response.

```TypeScript
// Given incoming request /home
let response = NextResponse.next()
// [
//   { name: 'experiments', value: 'new-pricing-page', Path: '/home' },
//   { name: 'experiments', value: 'winter-launch', Path: '/home' },
// ]
response.cookies.getAll('experiments')
// Alternatively, get all cookies for the response
response.cookies.getAll()
```

---

### Next.js Home Page Component

Source: https://nextjs.org/docs/pages/guides/testing/cypress

A basic Next.js page component for the home route ('/'). It displays a heading and a link to the 'About' page using Next.js's Link component.

```jsx
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
```

---

### Configure basePath in Next.js

Source: https://nextjs.org/docs/app/guides/migrating/from-create-react-app

Example of configuring the `basePath` in `next.config.ts` to serve a Next.js application under a specific subpath, similar to the `homepage` field in CRA.

```ts
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/my-subpath",
  // ...
};

export default nextConfig;
```

---

### Enable Experimental HTTPS for Next.js

Source: https://nextjs.org/docs/app/api-reference/cli/next

Starts the Next.js development server with HTTPS enabled. This option automatically generates a self-signed certificate for secure local development. It's useful for testing HTTPS configurations.

```bash
next dev --experimental-https

```

---

### Get All Cookies from NextRequest

Source: https://nextjs.org/docs/app/api-reference/functions/next-request

Retrieves all cookies associated with the request. If a name is provided, it returns all cookies with that specific name.

```TypeScript
request.cookies.getAll('experiments')
```

```TypeScript
request.cookies.getAll()
```

---

### Asynchronous Page Params and SearchParams in Next.js

Source: https://nextjs.org/docs/app/guides/upgrading/version-15

Details the asynchronous handling of both parameters and search parameters in Next.js pages. It provides code examples for updating to use `await` for fetching these values.

```tsx
// Before
type Params = { slug: string };
type SearchParams = { [key: string]: string | string[] | undefined };

export function generateMetadata({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { slug } = params;
  const { query } = searchParams;
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { slug } = params;
  const { query } = searchParams;
}

// After
type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function generateMetadata(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const slug = params.slug;
  const query = searchParams.query;
}

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const slug = params.slug;
  const query = searchParams.query;
}
```

```jsx
// Before
export function generateMetadata({ params, searchParams }) {
  const { slug } = params;
  const { query } = searchParams;
}

export default function Page({ params, searchParams }) {
  const { slug } = params;
  const { query } = searchParams;
}

// After
export async function generateMetadata(props) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const slug = params.slug;
  const query = searchParams.query;
}

export async function Page(props) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const slug = params.slug;
  const query = searchParams.query;
}
```

---

### Get Cookie with NextResponse

Source: https://nextjs.org/docs/app/api-reference/functions/next-response

Retrieves the value of a specified cookie from the response. Returns undefined if the cookie is not found.

```TypeScript
// Given incoming request /home
let response = NextResponse.next()
// { name: 'show-banner', value: 'false', Path: '/home' }
response.cookies.get('show-banner')
```

---

### next info Command Output

Source: https://nextjs.org/docs/app/api-reference/cli/next

Displays detailed system information including OS, available memory, CPU cores, binary versions (Node.js, npm, Yarn, pnpm), and relevant Next.js package versions. This output is crucial for diagnosing and reporting bugs.

```bash
Operating System:
  Platform: darwin
  Arch: arm64
  Version: Darwin Kernel Version 23.6.0
  Available memory (MB): 65536
  Available CPU cores: 10
Binaries:
  Node: 20.12.0
  npm: 10.5.0
  Yarn: 1.22.19
  pnpm: 9.6.0
Relevant Packages:
  next: 15.0.0-canary.115 // Latest available version is detected (15.0.0-canary.115).
  eslint-config-next: 14.2.5
  react: 19.0.0-rc
  react-dom: 19.0.0
  typescript: 5.5.4
Next.js Config:
  output: N/A
```

---

### Custom Image Loader Function

Source: https://nextjs.org/docs/pages/api-reference/components/image

Provides an example of a custom loader function for the Next.js Image component to generate image URLs.

```js
import Image from "next/image";

const imageLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

export default function Page() {
  return (
    <Image
      loader={imageLoader}
      src="me.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  );
}
```

---

### Get Cookie Value from NextRequest

Source: https://nextjs.org/docs/app/api-reference/functions/next-request

Retrieves the value of a specified cookie by its name. Returns undefined if the cookie is not found.

```TypeScript
request.cookies.get('show-banner')
```

---

### Next.js basePath Support with Redirects

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/redirects

Demonstrates how Next.js `basePath` automatically prefixes redirect `source` and `destination` paths. Includes an example of disabling `basePath` for a specific redirect.

```javascript
module.exports = {
  basePath: "/docs",

  async redirects() {
    return [
      {
        source: "/with-basePath", // automatically becomes /docs/with-basePath
        destination: "/another", // automatically becomes /docs/another
        permanent: false,
      },
      {
        // does not add /docs since basePath: false is set
        source: "/without-basePath",
        destination: "https://example.com",
        basePath: false,
        permanent: false,
      },
    ];
  },
};
```

---

### Next.js Configuration Options Reference

Source: https://context7_llms

This section lists various configuration options for Next.js projects, typically defined in `next.config.js`. These options control features like incremental caching, inline CSS, logging, MDX support, on-demand entries, package imports, output formats, page extensions, server headers, React Server Components, and more.

```javascript
module.exports = {
  // Incremental Cache Handler Path
  // incrementalCacheHandlerPath: './lib/cache-handler.js',
  // Inline CSS
  // inlineCss: true,
  // Logging
  // logging: {
  //   level: 'info', // 'info', 'warn', 'error', 'debug'
  // },
  // MDX Support
  // mdxRs: true,
  // On-Demand Entries
  // onDemandEntries: {
  //   maxInactiveAge: 60000,
  //   pagesBufferLength: 2,
  // },
  // Optimize Package Imports
  // optimizePackageImports: ['react-icons'],
  // Output Configuration
  // output: 'standalone',
  // Page Extensions
  // pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Powered By Header
  // poweredByHeader: false,
  // Partial Prerendering (PPR)
  // ppr: true,
  // Production Browser Source Maps
  // productionBrowserSourceMaps: true,
  // React Compiler
  // reactCompiler: true,
  // React Max Headers Length
  // reactMaxHeadersLength: 32000,
  // React Strict Mode
  // reactStrictMode: true,
  // Redirects
  // redirects: async () => [
  //   {
  //     source: '/old-page',
  //     destination: '/new-page',
  //     permanent: true,
  //   },
  // ],
  // Rewrites
  // rewrites: async () => [
  //   {
  //     source: '/about-us',
  //     destination: '/about',
  //   },
  // ],
  // Sass Options
  // sassOptions: {
  //   includePaths: ['./styles'],
  // },
  // Server Actions
  // serverActions: {
  //   allowedOrigins: ['example.com'],
  // },
  // Server Components HMR Cache
  // serverComponentsHmrCache: true,
  // Server External Packages
  // serverExternalPackages: ['react-markdown'],
  // Stale Times
  // staleTimes: [1200, 600],
  // Static Generation
  // staticGeneration: true,
  // Taint
  // taint: true,
  // Trailing Slash
  // trailingSlash: true,
  // Transpile Packages
  // transpilePackages: ['my-ui-library'],
  // Turbopack
  // turbopack: true,
  // Turbopack Persistent Caching
  // turbopackPersistentCaching: true,
  // Typed Routes
  // typedRoutes: true,
  // TypeScript Configuration
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // URL Imports
  // urlImports: ['https://cdn.example.com'],
  // Use Cache
  // useCache: true,
  // Use Lightning CSS
  // useLightningcss: true,
  // View Transition
  // viewTransition: true,
  // Webpack Configuration
  // webpack: (config, {
  //   isServer,
  //   dev,
  // }) => {
  //   // Modify config here
  //   return config;
  // },
  // Web Vitals Attribution
  // webVitalsAttribution: ['CLS', 'LCP'],
};
```

---

### Next.js PostCSS Configuration

Source: https://context7_llms

Configure PostCSS in your Next.js project for advanced CSS transformations and optimizations. This guide covers integrating PostCSS with Next.js.

```javascript
// next.config.js
module.exports = {
  // Next.js automatically supports PostCSS.
  // You can configure plugins by creating a postcss.config.js file:
};

// postcss.config.js
module.exports = {
  plugins: [
    "tailwindcss",
    "autoprefixer",
    // Other PostCSS plugins
  ],
};
```

---

### Custom Image Loader Implementation (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/components/image

Provides an example implementation of a custom image loader function. This function takes image source, width, and quality as arguments and returns a URL for the optimized image.

```javascript
"use client";

export default function myImageLoader({ src, width, quality }) {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
}
```

---

### CSS for Loading Spinner Animation

Source: https://nextjs.org/docs/app/getting-started/linking-and-navigating

Provides CSS for a 'spinner' class, including fade-in and rotation animations. The animation is debounced with a 100ms delay and starts invisible, only showing if navigation takes longer than the delay.

```css
.spinner {
  /* ... */
  opacity: 0;
  animation: fadeIn 500ms 100ms forwards, rotate 1s linear infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
```

---

### Fetch Data with ORM/Database in Server Component (Next.js)

Source: https://nextjs.org/docs/app/getting-started/fetching-data

Illustrates fetching data directly from a database or using an ORM within a Next.js Server Component. The example shows an asynchronous component that queries a database using `db.select().from(posts)` and renders the results. This method is suitable for server-side data retrieval.

```tsx
import { db, posts } from "@/lib/db";

export default async function Page() {
  const allPosts = await db.select().from(posts);
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

```jsx
import { db, posts } from "@/lib/db";

export default async function Page() {
  const allPosts = await db.select().from(posts);
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

---

### Client Component Data Fetching with SWR

Source: https://nextjs.org/docs/app/guides/static-exports

This example shows how to use a Client Component with the SWR library for client-side data fetching in a statically exported Next.js application. SWR helps memoize requests and handle loading and error states.

```tsx
"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Page() {
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/1`,
    fetcher
  );
  if (error) return "Failed to load";
  if (!data) return "Loading...";

  return data.title;
}
```

```jsx
"use client";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Page() {
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/1`,
    fetcher
  );
  if (error) return "Failed to load";
  if (!data) return "Loading...";

  return data.title;
}
```

---

### Next.js Redirects with Query and Cookie Matching

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/redirects

Configure redirects in Next.js that require both a specific query parameter and a cookie to be present. This example matches the query 'page=home' and the cookie 'authorized=true'.

```javascript
module.exports = {
  async redirects() {
    return [
      // if the source, query, and cookie are matched,
      // this redirect will be applied
      {
        source: "/specific/:path*",
        has: [
          {
            type: "query",
            key: "page",
            // the page value will not be available in the
            // destination since value is provided and doesn't
            // use a named capture group e.g. (?<page>home)
            value: "home",
          },
          {
            type: "cookie",
            key: "authorized",
            value: "true",
          },
        ],
        permanent: false,
        destination: "/another/:path*",
      },
    ];
  },
};
```

---

### Next.js Redirects with Query and Cookie Matching

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects

Configure redirects in Next.js that require both a specific query parameter and a cookie to be present. This example matches the query 'page=home' and the cookie 'authorized=true'.

```javascript
module.exports = {
  async redirects() {
    return [
      // if the source, query, and cookie are matched,
      // this redirect will be applied
      {
        source: "/specific/:path*",
        has: [
          {
            type: "query",
            key: "page",
            // the page value will not be available in the
            // destination since value is provided and doesn't
            // use a named capture group e.g. (?<page>home)
            value: "home",
          },
          {
            type: "cookie",
            key: "authorized",
            value: "true",
          },
        ],
        permanent: false,
        destination: "/another/:path*",
      },
    ];
  },
};
```

---

### Configure Next.js with plugins for Turbopack

Source: https://nextjs.org/docs/app/guides/mdx

This configuration for `next.config.mjs` demonstrates how to specify remark and rehype plugins using strings for compatibility with Turbopack. It includes examples of plugins with and without options, such as `remark-gfm`, `remark-toc`, `rehype-slug`, and `rehype-katex`.

```js
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      // Without options
      "remark-gfm",
      // With options
      ["remark-toc", { heading: "The Table" }],
    ],
    rehypePlugins: [
      // Without options
      "rehype-slug",
      // With options
      ["rehype-katex", { strict: true, throwOnError: true }],
    ],
  },
});

export default withMDX(nextConfig);
```

---

### Create Optional Catch-All Route Directory Structure

Source: https://nextjs.org/docs/app/guides/migrating/from-create-react-app

This bash command outlines the directory structure for an optional catch-all route in the Next.js App Router, specifically for the `app` directory.

```bash
app
  ┣ [[...slug]]
  ┃ ┗ page.tsx
  ┣ layout.tsx
```

---

### Registering OpenTelemetry in Next.js

Source: https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation

This snippet shows how to register OpenTelemetry for your Next.js application using the `@vercel/otel` package. The `register` function is called once when the Next.js server instance starts.

```typescript
import { registerOTel } from "@vercel/otel";

export function register() {
  registerOTel("next-app");
}
```

```javascript
import { registerOTel } from "@vercel/otel";

export function register() {
  registerOTel("next-app");
}
```

---

### Next.js basePath Support with Redirects

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects

Demonstrates how Next.js `basePath` automatically prefixes redirect `source` and `destination` paths. Includes an example of disabling `basePath` for a specific redirect.

```javascript
module.exports = {
  basePath: "/docs",

  async redirects() {
    return [
      {
        source: "/with-basePath", // automatically becomes /docs/with-basePath
        destination: "/another", // automatically becomes /docs/another
        permanent: false,
      },
      {
        // does not add /docs since basePath: false is set
        source: "/without-basePath",
        destination: "https://example.com",
        basePath: false,
        permanent: false,
      },
    ];
  },
};
```

---

### Tagging bookings data in app/components/bookings.js

Source: https://nextjs.org/docs/app/api-reference/functions/cacheTag

This JavaScript component example demonstrates tagging cached 'bookings-data' within a component responsible for fetching booking details.

```jsx
import { unstable_cacheTag as cacheTag } from 'next/cache'

export async function Bookings({ type = 'haircut' }) {
  'use cache'
  cacheTag('bookings-data')

  async function getBookingsData() {
    const data = await fetch(`/api/bookings?type=${encodeURIComponent(type)}`)
    return data
  }

  return //...
```

---

### Include Common Native/Runtime Assets in Next.js Tracing

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/output

Provides an example of including common native or runtime assets, such as those from `sharp` or `aws-crt`, into the Next.js output trace. This ensures that necessary binary dependencies are correctly bundled.

```javascript
module.exports = {
  outputFileTracingIncludes: {
    "/*": ["node_modules/sharp/**/*", "node_modules/aws-crt/dist/bin/**/*"],
  },
};
```

---

### Include Common Native/Runtime Assets in Next.js Tracing

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/output

Provides an example of including common native or runtime assets, such as those from `sharp` or `aws-crt`, into the Next.js output trace. This ensures that necessary binary dependencies are correctly bundled.

```javascript
module.exports = {
  outputFileTracingIncludes: {
    "/*": ["node_modules/sharp/**/*", "node_modules/aws-crt/dist/bin/**/*"],
  },
};
```

---

### Route Handler Conflict Example (TypeScript)

Source: https://nextjs.org/docs/app/getting-started/route-handlers-and-middleware

Illustrates a conflict scenario where a `route.ts` file exists at the same level as a `page.ts` file, leading to a conflict for handling HTTP verbs.

```ts
export default function Page() {
  return <h1>Hello, Next.js!</h1>;
}

// Conflict
// `app/route.ts`
export async function POST(request: Request) {}
```

---

### Next.js Internationalization (i18n)

Source: https://context7_llms

Implement internationalization (i18n) in your Next.js application to support multiple languages. This guide covers routing, locale detection, and translation management.

```javascript
// next.config.js
module.exports = {
  i18n: {
    locales: ["en", "fr", "nl"],
    defaultLocale: "en",
  },
};

// pages/index.js
import { useRouter } from "next/router";

function HomePage() {
  const router = useRouter();
  const { locale } = router;

  return <div>Welcome in {locale}!</div>;
}
```

---

### Configure Icon Size (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons

Export the 'size' object with width and height properties from your icon or apple-icon route file to configure the icon's dimensions. This example uses JavaScript.

```jsx
export const size = { width: 32, height: 32 };

export default function Icon() {}
```

---

### Add Test Script to package.json

Source: https://nextjs.org/docs/pages/guides/testing/vitest

Include a 'test' script in your `package.json` file to easily run Vitest tests from your terminal.

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "vitest"
  }
}
```

---

### Custom Image Loader Function Example

Source: https://nextjs.org/docs/pages/api-reference/components/image

Defines a custom image loader function that takes image properties and returns a URL string for optimization.

```js
export default function myImageLoader({ src, width, quality }) {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
}
```

---

### Next.js Configuration for SPA Export

Source: https://nextjs.org/docs/app/guides/migrating/from-create-react-app

Creates a `next.config.ts` file to configure Next.js. This example sets the output to 'export' for a Single-Page Application (SPA) and changes the build output directory to 'build'. Note that `output: 'export'` disables server-side features.

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Outputs a Single-Page Application (SPA)
  distDir: "build", // Changes the build output directory to `build`
};

export default nextConfig;
```

---

### Configure localPatterns for Next.js Images (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/components/image

Shows how to configure the `localPatterns` option in `next.config.js` to allow optimization of images from specific local paths. This example permits images within '/assets/images/\*\*'.

```javascript
module.exports = {
  images: {
    localPatterns: [
      {
        pathname: "/assets/images/**",
        search: "",
      },
    ],
  },
};
```

---

### Create a Theme Provider for Context (JSX)

Source: https://nextjs.org/docs/app/getting-started/server-and-client-components

Creates a Client Component 'ThemeProvider' in JSX that utilizes React Context to manage global state like theme. This provider wraps its children, making the context available to nested components.

```jsx
'use client'

import { createContext } from 'react'

export const ThemeContext = createContext({})

export default function ThemeProvider({ children }) {
  return <ThemeContext.Provider value="dark">{children}</ThemeProvider>
}
```

---

### Debug Next.js on Windows with cross-env

Source: https://nextjs.org/docs/app/guides/debugging

This JSON snippet provides a solution for Windows users who cannot use the standard NODE_OPTIONS='--inspect' syntax. It shows how to install and use the 'cross-env' package to set the environment variable for consistent debugging across platforms.

```json
{
  "scripts": {
    "dev": "cross-env NODE_OPTIONS='--inspect' next dev"
  }
}
```

---

### Link Navigation with Query Parameters

Source: https://nextjs.org/docs/pages/api-reference/components/link

Illustrates how to use the Next.js `<Link>` component to navigate to a route with query parameters. This example shows passing an object to the `href` prop, specifying the `pathname` and `query` for the destination URL.

```tsx
import Link from "next/link";

// Navigate to /about?name=test
export default function Home() {
  return (
    <Link
      href={{
        pathname: "/about",
        query: { name: "test" },
      }}
    >
      About
    </Link>
  );
}
```

```jsx
import Link from "next/link";

// Navigate to /about?name=test
export default function Home() {
  return (
    <Link
      href={{
        pathname: "/about",
        query: { name: "test" },
      }}
    >
      About
    </Link>
  );
}
```

---

### Configure Tailwind CSS template paths

Source: https://nextjs.org/docs/pages/guides/tailwind-v3-css

Configures the template paths in the `tailwind.config.js` file to include all relevant files for Next.js pages, components, and app directories.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

### Register OpenTelemetry with Vercel OTEL

Source: https://nextjs.org/docs/app/guides/instrumentation

This snippet shows how to register OpenTelemetry using the `@vercel/otel` package within the `register` function of your `instrumentation.ts` or `instrumentation.js` file. It initializes OpenTelemetry for your Next.js application.

```TypeScript
import { registerOTel } from '@vercel/otel'

export function register() {
  registerOTel('next-app')
}
```

```JavaScript
import { registerOTel } from '@vercel/otel'

export function register() {
  registerOTel('next-app')
}
```

---

### Alternative to fetch Options with unstable_noStore

Source: https://nextjs.org/docs/app/api-reference/functions/unstable_noStore

This example shows `unstable_noStore` as a replacement for fetch options like `cache: 'no-store'` or `next: { revalidate: 0 }`, especially when fetch is not directly available.

```jsx
import { unstable_noStore as noStore } from 'next/cache';

export default async function ServerComponent() {
  noStore();
  const result = await db.query(...);
  ...
```

---

### Configure remotePatterns for Next.js Images (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/components/image

Illustrates configuring `remotePatterns` in `next.config.js` to allow images from specific external domains. This example permits images from 'https://example.com/account123/**'.

```javascript
module.exports = {
  images: {
    remotePatterns: [new URL("https://example.com/account123/**")],
  },
};
```

---

### Define Public Environment Variable (Terminal)

Source: https://nextjs.org/docs/pages/guides/environment-variables

This example shows how to define a public environment variable in a terminal configuration file. The NEXT*PUBLIC* prefix signals Next.js to inline this variable into the browser bundle.

```txt
NEXT_PUBLIC_ANALYTICS_ID=abcdefghijk
```

---

### Image Component with Custom Loader

Source: https://nextjs.org/docs/app/api-reference/components/image

Provides an example of a custom loader function for the Image component to generate image URLs dynamically. Requires Client Component.

```js
"use client";

import Image from "next/image";

const imageLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

export default function Page() {
  return (
    <Image
      loader={imageLoader}
      src="me.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  );
}
```

---

### Define Basic Route Handler (TypeScript)

Source: https://nextjs.org/docs/app/getting-started/route-handlers-and-middleware

Demonstrates the basic structure of a Route Handler in TypeScript for handling GET requests. This file convention is used within the 'app' directory of a Next.js application.

```ts
export async function GET(request: Request) {}
```

---

### Create Server Component Page with Client Component (JSX)

Source: https://nextjs.org/docs/app/guides/migrating/app-router-migration

This snippet demonstrates creating a Server Component page in the `app` directory using JavaScript. It imports a Client Component, fetches data asynchronously, and then renders the Client Component with the fetched data.

```jsx
// Import your Client Component
import HomePage from "./home-page";

async function getPosts() {
  const res = await fetch("https://...");
  const posts = await res.json();
  return posts;
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const recentPosts = await getPosts();
  // Forward fetched data to your Client Component
  return <HomePage recentPosts={recentPosts} />;
}
```

---

### Tagging bookings data in app/components/bookings.tsx

Source: https://nextjs.org/docs/app/api-reference/functions/cacheTag

This TypeScript component example shows how to tag cached 'bookings-data' within a component that fetches booking information.

```tsx
import { unstable_cacheTag as cacheTag } from 'next/cache'

interface BookingsProps {
  type: string
}

export async function Bookings({ type = 'haircut' }: BookingsProps) {
  'use cache'
  cacheTag('bookings-data')

  async function getBookingsData() {
    const data = await fetch(`/api/bookings?type=${encodeURIComponent(type)}`)
    return data
  }

  return //...
```

---

### Specifying Next.js Runtime in instrumentation.js

Source: https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation

This example shows how to conditionally load different instrumentation logic based on the Next.js runtime (Node.js or Edge). It uses `process.env.NEXT_RUNTIME` to determine which code to execute.

```javascript
export function register() {
  if (process.env.NEXT_RUNTIME === "edge") {
    return require("./register.edge");
  } else {
    return require("./register.node");
  }
}

export function onRequestError() {
  if (process.env.NEXT_RUNTIME === "edge") {
    return require("./on-request-error.edge");
  } else {
    return require("./on-request-error.node");
  }
}
```

---

### Specify Next.js Root Directory in Monorepos

Source: https://nextjs.org/docs/app/api-reference/config/eslint

Configure `eslint-plugin-next` to locate the Next.js application within a monorepo structure by setting the `rootDir` in `.eslintrc`. This is crucial when Next.js is not installed at the project root.

```javascript
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next"],
    settings: {
      next: {
        rootDir: "packages/my-app/",
      },
    },
  }),
];

export default eslintConfig;
```

---

### Configure Extended Minimum Cache TTL in Next.js

Source: https://nextjs.org/docs/pages/api-reference/components/image

Increase the TTL to reduce revalidations and potential costs. For example, setting it to 31 days.

```javascript
module.exports = {
  images: {
    minimumCacheTTL: 2678400, // 31 days
  },
};
```

---

### Configure Next.js with remark-gfm plugin

Source: https://nextjs.org/docs/app/guides/mdx

This example shows how to configure `next.config.mjs` to use the `remark-gfm` plugin for GitHub Flavored Markdown support in Next.js. It demonstrates importing the plugin and adding it to the `remarkPlugins` array within the MDX options.

```js
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow .mdx extensions for files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

// Combine MDX and Next.js config
export default withMDX(nextConfig);
```

---

### Next.js Redirects with Missing Header Check

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/redirects

Configure redirects in Next.js that are applied only when a specific header is absent. This example prevents a redirect if the 'x-do-not-redirect' header is present.

```javascript
module.exports = {
  async redirects() {
    return [
      // if the header `x-dont-redirect` is present,
      // this redirect will NOT be applied
      {
        source: "/:path((?!another-page$).*)",
        missing: [
          {
            type: "header",
            key: "x-do-not-redirect",
          },
        ],
        permanent: false,
        destination: "/another-page",
      },
    ];
  },
};
```

---

### Next.js Middleware - Default Export Example

Source: https://nextjs.org/docs/pages/api-reference/file-conventions/middleware

This JavaScript snippet illustrates how to export a middleware function as a default export in Next.js. This is an alternative to a named export for the middleware logic.

```js
// Example of default export
export default function middleware(request) {
  // Middleware logic
}
```

---

### Define Viewport with static object (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/functions/generate-viewport

Export a static `viewport` object from a `layout.jsx` or `page.jsx` file to define viewport options. This example sets the theme color to black.

```jsx
export const viewport = {
  themeColor: "black",
};

export default function Page() {}
```

---

### Next.js Redirects with Missing Header Check

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects

Configure redirects in Next.js that are applied only when a specific header is absent. This example prevents a redirect if the 'x-do-not-redirect' header is present.

```javascript
module.exports = {
  async redirects() {
    return [
      // if the header `x-dont-redirect` is present,
      // this redirect will NOT be applied
      {
        source: "/:path((?!another-page$).*)",
        missing: [
          {
            type: "header",
            key: "x-do-not-redirect",
          },
        ],
        permanent: false,
        destination: "/another-page",
      },
    ];
  },
};
```

---

### Handle Signup and Redirect with Session Creation (JavaScript)

Source: https://nextjs.org/docs/app/guides/authentication

Demonstrates integrating session creation into a signup process within a Next.js Server Action. After creating the session using `createSession`, it redirects the user to their profile page.

```JavaScript
import { createSession } from '@/app/lib/session'

export async function signup(state, formData) {
  // Previous steps:
  // 1. Validate form fields
  // 2. Prepare data for insertion into database
  // 3. Insert the user into the database or call an Library API

  // Current steps:
  // 4. Create user session
  await createSession(user.id)
  // 5. Redirect user
  redirect('/profile')
}
```

---

### Next.js Middleware - Default Export Example

Source: https://nextjs.org/docs/app/api-reference/file-conventions/middleware

This JavaScript snippet illustrates how to export a middleware function as a default export in Next.js. This is an alternative to a named export for the middleware logic.

```js
// Example of default export
export default function middleware(request) {
  // Middleware logic
}
```

---

### Construct Draft URL (Bash)

Source: https://nextjs.org/docs/app/guides/draft-mode

Example of a draft URL to access a Next.js Route Handler. It includes a secret token and a slug for the desired page, with placeholders for site URL and token.

```bash
https://<your-site>/api/draft?secret=<token>&slug=<path>
```

---

### Next.js Lazy Loading Components

Source: https://context7_llms

Optimize your Next.js application's performance by implementing lazy loading for components. This guide uses React.lazy and Suspense for efficient code splitting.

```javascript
import React, { Suspense } from "react";

const HeavyComponent = React.lazy(() => import("../components/HeavyComponent"));

function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
```

---

### Tagging data with cacheTag in app/data.js

Source: https://nextjs.org/docs/app/api-reference/functions/cacheTag

This JavaScript example demonstrates the usage of unstable_cacheTag to apply the 'my-data' tag to cached data within an async function.

```jsx
import { unstable_cacheTag as cacheTag } from "next/cache";

export async function getData() {
  "use cache";
  cacheTag("my-data");
  const data = await fetch("/api/data");
  return data;
}
```

---

### Replace geo and ip Properties of NextRequest with @vercel/functions

Source: https://nextjs.org/docs/pages/guides/upgrading/codemods

This codemod installs the @vercel/functions package and transforms the 'geo' and 'ip' properties of NextRequest to use the corresponding features from @vercel/functions.

```bash
npx @next/codemod@latest next-request-geo-ip .

```

```ts
import type { NextRequest } from "next/server";

export function GET(req: NextRequest) {
  const { geo, ip } = req;
}
```

```ts
import type { NextRequest } from "next/server";
import { geolocation, ipAddress } from "@vercel/functions";

export function GET(req: NextRequest) {
  const geo = geolocation(req);
  const ip = ipAddress(req);
}
```

---

### Load Script in Root Layout (JSX)

Source: https://nextjs.org/docs/app/guides/scripts

Provides an example of loading a third-party script for the entire application using JavaScript in the root layout file (`app/layout.js`). The script is loaded once when any route is accessed.

```jsx
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script src="https://example.com/script.js" />
    </html>
  );
}
```

---

### Replace geo and ip Properties of NextRequest with @vercel/functions

Source: https://nextjs.org/docs/app/guides/upgrading/codemods

This codemod installs the @vercel/functions package and transforms the 'geo' and 'ip' properties of NextRequest to use the corresponding features from @vercel/functions.

```bash
npx @next/codemod@latest next-request-geo-ip .

```

```ts
import type { NextRequest } from "next/server";

export function GET(req: NextRequest) {
  const { geo, ip } = req;
}
```

```ts
import type { NextRequest } from "next/server";
import { geolocation, ipAddress } from "@vercel/functions";

export function GET(req: NextRequest) {
  const geo = geolocation(req);
  const ip = ipAddress(req);
}
```

---

### Layout Fetching User Data and Displaying Name (JSX)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/layout

A JavaScript example of a layout component that fetches user data and renders the user's name. This pattern is common for displaying personalized information in the application's navigation or header.

```jsx
import { getUser } from "@/app/lib/data";
import { UserName } from "@/app/ui/user-name";

export default async function Layout({ children }) {
  const user = await getUser("1");

  return (
    <>
      <nav>
        {/* ... */}
        <UserName user={user.name} />
      </nav>
      {children}
    </>
  );
}
```

---

### Configure MDX Plugins with Turbopack

Source: https://nextjs.org/docs/pages/guides/mdx

This configuration snippet shows how to use remark and rehype plugins with Turbopack in Next.js by specifying plugin names as strings in the next.config.mjs file. It includes examples of plugins with and without options.

```javascript
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      // Without options
      "remark-gfm",
      // With options
      ["remark-toc", { heading: "The Table" }],
    ],
    rehypePlugins: [
      // Without options
      "rehype-slug",
      // With options
      ["rehype-katex", { strict: true, throwOnError: true }],
    ],
  },
});

export default withMDX(nextConfig);
```

---

### Next.js Draft Mode Implementation

Source: https://context7_llms

Implement Draft Mode in Next.js to preview unpublished content. This guide explains how to enable and use Draft Mode for content management systems.

```javascript
import { draftMode } from "next/headers";

export async function GET(request) {
  draftMode().enable();
  return new Response("Draft mode enabled");
}
```

---

### Configure remotePatterns with Wildcard Hostname (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/components/image

Demonstrates using wildcard patterns for the `hostname` in `remotePatterns`. This configuration allows images from any subdomain of 'example.com'.

```javascript
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.example.com",
        port: "",
        search: "",
      },
    ],
  },
};
```

---

### Update Route Handler for Async Params (JS)

Source: https://nextjs.org/docs/app/guides/upgrading/version-15

Provides a JavaScript example for updating Next.js Route Handlers to handle asynchronous route parameters. The code demonstrates awaiting the segment data to access its properties.

```js
// Before
export async function GET(request, segmentData) {
  const params = segmentData.params;
  const slug = params.slug;
}

// After
export async function GET(request, segmentData) {
  const params = await segmentData.params;
  const slug = params.slug;
}
```

---

### Link Component with Dynamic Routing (JavaScript)

Source: https://nextjs.org/docs/pages/api-reference/components/link

This JavaScript example illustrates configuring the Next.js `<Link />` component for use with middleware rewrites. It conditionally sets the `href` based on authentication and uses the `as` prop to match the middleware's rewritten path for accurate prefetching.

```javascript
"use client";

import Link from "next/link";
import useIsAuthed from "./hooks/useIsAuthed"; // Your auth hook

export default function Home() {
  const isAuthed = useIsAuthed();
  const path = isAuthed ? "/auth/dashboard" : "/public/dashboard";
  return (
    <Link as="/dashboard" href={path}>
      Dashboard
    </Link>
  );
}
```

---

### Create a Basic Vitest Unit Test for a Page Component

Source: https://nextjs.org/docs/app/guides/testing/vitest

Demonstrates how to write a unit test for a Next.js Page component using Vitest and React Testing Library. It renders the component and asserts that a specific heading element is present.

```tsx
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
```

```jsx
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
```

```tsx
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

test("Page", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
});
```

```jsx
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

test("Page", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
});
```

---

### Configure Icon Size (TypeScript)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons

Export the 'size' object with width and height properties from your icon or apple-icon route file to configure the icon's dimensions. This example uses TypeScript.

```tsx
export const size = { width: 32, height: 32 };

export default function Icon() {}
```

---

### Initialize NodeSDK for OpenTelemetry (JavaScript)

Source: https://nextjs.org/docs/app/guides/open-telemetry

Initializes the OpenTelemetry NodeSDK with an OTLP trace exporter and sets the service name. This configuration is intended for Node.js runtime environments.

```js
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { Resource } from "@opentelemetry/resources";
import { NodeSDK } from "@opentelemetry/sdk-node";
import { SimpleSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { ATTR_SERVICE_NAME } from "@opentelemetry/semantic-conventions";

const sdk = new NodeSDK({
  resource: new Resource({
    [ATTR_SERVICE_NAME]: "next-app",
  }),
  spanProcessor: new SimpleSpanProcessor(new OTLPTraceExporter()),
});
sdk.start();
```

---

### Create Custom Readable Streams in Next.js

Source: https://nextjs.org/docs/app/api-reference/file-conventions/route

Demonstrates how to create a custom `ReadableStream` in Next.js by converting an async iterator. This example shows how to yield encoded HTML strings with delays.

```TypeScript
// https://developer.mozilla.org/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()

      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    },
  })
}

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

const encoder = new TextEncoder()

async function* makeIterator() {
  yield encoder.encode('<p>One</p>')
  await sleep(200)
  yield encoder.encode('<p>Two</p>')
  await sleep(200)
  yield encoder.encode('<p>Three</p>')
}

export async function GET() {
  const iterator = makeIterator()
  const stream = iteratorToStream(iterator)

  return new Response(stream)
}
```

```JavaScript
// https://developer.mozilla.org/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
function iteratorToStream(iterator) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()

      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    },
  })
}

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

const encoder = new TextEncoder()

async function* makeIterator() {
  yield encoder.encode('<p>One</p>')
  await sleep(200)
  yield encoder.encode('<p>Two</p>')
  await sleep(200)
  yield encoder.encode('<p>Three</p>')
}

export async function GET() {
  const iterator = makeIterator()
  const stream = iteratorToStream(iterator)

  return new Response(stream)
}
```

---

### Global MDX Custom Components (TSX)

Source: https://nextjs.org/docs/app/guides/mdx

Provides an example of defining global custom components for MDX files in Next.js using TypeScript, including styling for headings and images.

```tsx
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

const components = {
  // Allows customizing built-in components, e.g. to add styling.
  h1: ({ children }) => (
    <h1 style={{ color: "red", fontSize: "48px" }}>{children}</h1>
  ),
  img: (props) => (
    <Image
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      {...(props as ImageProps)}
    />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
```

---

### Asset Import with URL Constructor

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/urlImports

This JavaScript example demonstrates importing an asset file (e.g., a text file) using the `URL` constructor with an `import.meta.url`. It shows how to resolve the URL of an imported asset and access its properties, such as the pathname.

```javascript
const logo = new URL("https://example.com/assets/file.txt", import.meta.url);

console.log(logo.pathname);

// prints "/_next/static/media/file.a9727b5d.txt"
```

---

### Image overrideSrc Attribute Example

Source: https://nextjs.org/docs/pages/api-reference/components/image

Demonstrates how `overrideSrc` replaces the automatically generated `src` attribute for an image. The `srcset` is still generated based on the original `src`.

```jsx
<Image src="/profile.jpg" overrideSrc="/override.jpg" />
```

```html
<img
  srcset="
    /_next/image?url=%2Fprofile.jpg&w=640&q=75 1x,
    /_next/image?url=%2Fprofile.jpg&w=828&q=75 2x
  "
  src="/override.jpg"
/>
```

---

### Next.js PWA Manifest (JavaScript)

Source: https://nextjs.org/docs/app/guides/progressive-web-apps

Defines the web app manifest for a Next.js PWA using JavaScript. This configuration includes essential details such as the app's name, short name, description, start URL, display mode, background and theme colors, and icons.

```JavaScript
export default function manifest() {
  return {
    name: 'Next.js PWA',
    short_name: 'NextPWA',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
```

---

### Type Next.js API Routes

Source: https://nextjs.org/docs/pages/api-reference/config/typescript

Implement type safety for Next.js API routes using `NextApiRequest` and `NextApiResponse`. This example shows basic request and response typing.

```ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" });
}
```

---

### Server Action for Revalidation in Next.js

Source: https://nextjs.org/docs/app/api-reference/functions/revalidatePath

Provides an example of a Next.js server action that revalidates all data after a form submission. It imports `revalidatePath` and calls it with the root path.

```ts
"use server";

import { revalidatePath } from "next/cache";

export default async function submit() {
  await submitForm();
  revalidatePath("/");
}
```

---

### Run Next.js in Development Mode

Source: https://nextjs.org/docs/app/api-reference/cli/next

Starts the Next.js application in development mode with Hot Module Reloading (HMR) and error reporting enabled. This command is essential for the development workflow.

```bash
next dev

```

---

### Initialize NodeSDK for OpenTelemetry (JavaScript)

Source: https://nextjs.org/docs/pages/guides/open-telemetry

Initializes the OpenTelemetry NodeSDK with an OTLP trace exporter and sets the service name. This configuration is intended for Node.js runtime environments.

```js
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { Resource } from "@opentelemetry/resources";
import { NodeSDK } from "@opentelemetry/sdk-node";
import { SimpleSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { ATTR_SERVICE_NAME } from "@opentelemetry/semantic-conventions";

const sdk = new NodeSDK({
  resource: new Resource({
    [ATTR_SERVICE_NAME]: "next-app",
  }),
  spanProcessor: new SimpleSpanProcessor(new OTLPTraceExporter()),
});
sdk.start();
```

---

### Define Viewport with static object (TypeScript)

Source: https://nextjs.org/docs/app/api-reference/functions/generate-viewport

Export a static `viewport` object from a `layout.jsx` or `page.jsx` file to define viewport options. This example sets the theme color to black.

```tsx
import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "black",
};

export default function Page() {}
```

---

### Import runtime-specific code in instrumentation

Source: https://nextjs.org/docs/app/guides/instrumentation

This example shows how to conditionally import code based on the Next.js runtime environment (Node.js or Edge). It uses the `NEXT_RUNTIME` environment variable to ensure that runtime-specific modules are loaded correctly.

```TypeScript
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./instrumentation-node')
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./instrumentation-edge')
  }
}
```

```JavaScript
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./instrumentation-node')
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./instrumentation-edge')
  }
}
```

---

### API Route Handler (App Router - JavaScript)

Source: https://nextjs.org/docs/app/guides/migrating/app-router-migration

Illustrates a Route Handler in the `app` directory using JavaScript. This demonstrates the basic structure for handling GET requests, similar to the TypeScript version.

```js
export async function GET(request) {}
```

---

### Creating tags from external data in app/components/bookings.js

Source: https://nextjs.org/docs/app/api-reference/functions/cacheTag

This JavaScript example demonstrates generating cache tags dynamically based on the ID from fetched data within an asynchronous function.

```jsx
import { unstable_cacheTag as cacheTag } from 'next/cache'

export async function Bookings({ type = 'haircut' }) {
  async function getBookingsData() {
    'use cache'
    const data = await fetch(`/api/bookings?type=${encodeURIComponent(type)}`)
    cacheTag('bookings-data', data.id)
    return data
  }
  return //...
```

---

### Report Web Vitals with a Basic Callback

Source: https://nextjs.org/docs/pages/api-reference/functions/use-report-web-vitals

This example demonstrates the basic usage of the `useReportWebVitals` hook by passing a simple callback function that logs the metric object to the console. Ensure the callback function reference remains stable to avoid duplicate reporting.

```jsx
import { useReportWebVitals } from "next/web-vitals";

const logWebVitals = (metric) => {
  console.log(metric);
};

function MyApp({ Component, pageProps }) {
  useReportWebVitals(logWebVitals);

  return <Component {...pageProps} />;
}
```

---

### Vitest Configuration (JavaScript)

Source: https://nextjs.org/docs/pages/guides/testing/vitest

Configure Vitest for a Next.js project using JavaScript by creating a `vitest.config.js` file with the React plugin and specifying the JSDOM environment.

```javascript
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
```

---

### Generate Static Params with JavaScript

Source: https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes

This example shows how to use the `generateStaticParams` function in JavaScript to statically generate routes at build time. It fetches posts and maps them to the expected parameter format.

```JavaScript
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
```

---

### Load Polyfills with Static and Dynamic Imports

Source: https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation-client

This snippet illustrates how to load polyfills in an application. It uses a static import for essential polyfills and a dynamic import for conditional loading of 'resize-observer' polyfills based on the availability of `window.ResizeObserver`.

```TypeScript
import './lib/polyfills'

if (!window.ResizeObserver) {
  import('./lib/polyfills/resize-observer').then((mod) => {
    window.ResizeObserver = mod.default
  })
}
```

---

### Next.js Link Component Migration (Next.js 13)

Source: https://nextjs.org/docs/app/guides/migrating/app-router-migration

Example demonstrating the change in the Next.js Link component. In Next.js 13, the `<a>` tag is automatically rendered by `<Link>`, simplifying the syntax compared to Next.js 12 where it needed to be nested.

```jsx
import Link from 'next/link'

// Next.js 12: `<a>` has to be nested otherwise it's excluded
<Link href="/about">
  <a>About</a>
</Link>

// Next.js 13: `<Link>` always renders `<a>` under the hood
<Link href="/about">
  About
</Link>
```

---

### Self-Host Google Font with Roboto (JSX)

Source: https://nextjs.org/docs/app/getting-started/fonts

Provides an example of self-hosting the Roboto Google Font within a Next.js layout using JavaScript. It includes font weight and subset configuration, applying the optimized font class to the html tag.

```jsx
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}
```

---

### Next.js Rewrites: Match Host

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/rewrites

Applies a Next.js rewrite when the host is 'example.com'. The destination is '/another-page'.

```javascript
module.exports = {
  async rewrites() {
    return [
      // if the host is `example.com`,
      // this rewrite will be applied
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "example.com",
          },
        ],
        destination: "/another-page",
      },
    ];
  },
};
```

---

### Configure ORM with Environment Variables (TypeScript)

Source: https://nextjs.org/docs/app/guides/environment-variables

An example of configuring an ORM (Object-Relational Mapper) using environment variables loaded via envConfig.ts. It demonstrates accessing DATABASE_URL for database credentials.

```typescript
import "./envConfig.ts";

export default defineConfig({
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
});
```

---

### Create a Root Layout in Next.js

Source: https://nextjs.org/docs/app/getting-started/layouts-and-pages

Sets up the root layout for a Next.js application, including `<html>` and `<body>` tags. This layout wraps the application's content, preserving state across navigations.

```tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  );
}
```

```jsx
export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  );
}
```

---

### Next.js Authentication Server Action (JSX)

Source: https://nextjs.org/docs/app/guides/authentication

This JavaScript (JSX) code provides a basic structure for a Next.js Server Action called 'signup'. This function is designed to process signup requests, accepting form data as input. The current implementation is empty, serving as a starting point for actual authentication logic.

```jsx
export async function signup(formData) {}
```

---

### Configure ESLint with TypeScript in Next.js

Source: https://nextjs.org/docs/app/api-reference/config/eslint

Integrates Next.js and TypeScript specific ESLint rules into your ESLint configuration using FlatCompat. This setup ensures your TypeScript code adheres to Next.js best practices.

```javascript
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
  }),
];

export default eslintConfig;
```

---

### Configure Time-based Revalidation with fetch

Source: https://nextjs.org/docs/app/guides/caching

Set the cache lifetime for a resource in seconds using the 'next.revalidate' option within the fetch API. This example revalidates the data at most every hour.

```javascript
fetch("https://...", { next: { revalidate: 3600 } });
```

---

### Link Navigation with Query Parameters

Source: https://nextjs.org/docs/app/api-reference/components/link

Illustrates how to use the Next.js Link component to navigate to a route that includes query parameters. This example shows passing an object to the `href` prop with `pathname` and `query` properties.

```tsx
import Link from "next/link";

// Navigate to /about?name=test
export default function Page() {
  return (
    <Link
      href={{
        pathname: "/about",
        query: { name: "test" },
      }}
    >
      About
    </Link>
  );
}
```

```jsx
import Link from "next/link";

// Navigate to /about?name=test
export default function Page() {
  return (
    <Link
      href={{
        pathname: "/about",
        query: { name: "test" },
      }}
    >
      About
    </Link>
  );
}
```

---

### Redirect via Server Action in Client Component (JSX)

Source: https://nextjs.org/docs/app/api-reference/functions/redirect

Provides an example of initiating a redirect from a Next.js Client Component by invoking a Server Action. The component includes a form for submitting data to the `navigate` Server Action.

```jsx
"use client";

import { navigate } from "./actions";

export function ClientRedirect() {
  return (
    <form action={navigate}>
      <input type="text" name="id" />
      <button>Submit</button>
    </form>
  );
}
```

---

### Run Minimal Server with Standalone Output

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/output

Execute the minimal `server.js` file generated by Next.js's 'standalone' output mode. This server is optimized for production and serves the application using only the traced files.

```bash
node .next/standalone/server.js
```

---

### Get IP Address from NextRequest

Source: https://nextjs.org/docs/app/guides/upgrading/version-15

Demonstrates how to retrieve the IP address from `NextRequest` using the `ipAddress` function from `@vercel/functions` after the removal of `geo` and `ip` properties from `NextRequest`.

```ts
import { ipAddress } from "@vercel/functions";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const ip = ipAddress(request);

  // ...
}
```

---

### Tagging multiple cache entries with cacheTag

Source: https://nextjs.org/docs/app/api-reference/functions/cacheTag

This example illustrates how to apply multiple tags, 'tag-one' and 'tag-two', to a single cache entry by passing them as separate arguments to the cacheTag function.

```tsx
cacheTag("tag-one", "tag-two");
```

---

### Next.js PWA Manifest (TypeScript)

Source: https://nextjs.org/docs/app/guides/progressive-web-apps

Defines the web app manifest for a Next.js PWA using TypeScript. This includes the application's name, short name, description, start URL, display mode, background and theme colors, and icons.

```TypeScript
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Next.js PWA',
    short_name: 'NextPWA',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
```

---

### Get Geolocation from NextRequest

Source: https://nextjs.org/docs/app/guides/upgrading/version-15

Demonstrates how to retrieve geolocation data (city) from `NextRequest` using the `geolocation` function from `@vercel/functions` after the removal of `geo` and `ip` properties from `NextRequest`.

```ts
import { geolocation } from "@vercel/functions";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { city } = geolocation(request);

  // ...
}
```

---

### Integrate Active Link Component into Blog Layout (Next.js)

Source: https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment

This example demonstrates how to import and use the `BlogNavLink` client component within a Next.js layout. It fetches featured posts and renders a list of links, with each link dynamically styled based on its active state using the `BlogNavLink` component.

```tsx
// Import the Client Component into a parent Layout (Server Component)
import { BlogNavLink } from "./blog-nav-link";
import getFeaturedPosts from "./get-featured-posts";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const featuredPosts = await getFeaturedPosts();
  return (
    <div>
      {featuredPosts.map((post) => (
        <div key={post.id}>
          <BlogNavLink slug={post.slug}>{post.title}</BlogNavLink>
        </div>
      ))}
      <div>{children}</div>
    </div>
  );
}
```

```jsx
// Import the Client Component into a parent Layout (Server Component)
import { BlogNavLink } from "./blog-nav-link";
import getFeaturedPosts from "./get-featured-posts";

export default async function Layout({ children }) {
  const featuredPosts = await getFeaturedPosts();
  return (
    <div>
      {featuredPosts.map((post) => (
        <div key={post.id}>
          <BlogNavLink slug={post.slug}>{post.title}</BlogNavLink>
        </div>
      ))}
      <div>{children}</div>
    </div>
  );
}
```

---

### Configure Cypress Component Testing (JavaScript)

Source: https://nextjs.org/docs/app/guides/testing/cypress

This snippet shows the necessary configuration in `cypress.config.js` to enable component testing for a Next.js project using webpack as the bundler.

```js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
```

---

### Send Web Vitals to External Systems in Next.js

Source: https://nextjs.org/docs/pages/guides/analytics

Provides an example of sending Web Vitals metrics to an external analytics endpoint using `navigator.sendBeacon` or `fetch` within a Next.js application.

```javascript
useReportWebVitals((metric) => {
  const body = JSON.stringify(metric);
  const url = "https://example.com/analytics";

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: "POST", keepalive: true });
  }
});
```

---

### Customize Metadata for Global Not Found Page (JSX)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/not-found

Provides an example of setting metadata for a global not-found page in Next.js using JavaScript. It allows customization of the page's title and description.

```jsx
export const metadata = {
  title: "Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <div>
          <h1>Not Found</h1>
          <p>The page you are looking for does not exist.</p>
        </div>
      </body>
    </html>
  );
}
```

---

### Advanced Rewrites with beforeFiles, afterFiles, and fallback

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/rewrites

Demonstrates advanced rewrite configurations in `next.config.js` using `beforeFiles`, `afterFiles`, and `fallback` arrays. These allow for more granular control over rewrite application order relative to file system checks and dynamic routes.

```javascript
module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        {
          source: "/some-page",
          destination: "/somewhere-else",
          has: [{ type: "query", key: "overrideMe" }],
        },
      ],
      afterFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
        {
          source: "/non-existent",
          destination: "/somewhere-else",
        },
      ],
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: "/:path*",
          destination: `https://my-old-site.com/:path*`,
        },
      ],
    };
  },
};
```

---

### Configure Next.js Rewrites with basePath

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites

This JavaScript code snippet demonstrates how to configure rewrites in `next.config.js` to work with `basePath` support. It shows examples of both automatic prefixing and disabling the prefixing for specific rewrites.

```javascript
module.exports = {
  basePath: "/docs",

  async rewrites() {
    return [
      {
        source: "/with-basePath", // automatically becomes /docs/with-basePath
        destination: "/another", // automatically becomes /docs/another
      },
      {
        // does not add /docs to /without-basePath since basePath: false is set
        // Note: this can not be used for internal rewrites e.g. `destination: '/another'`
        source: "/without-basePath",
        destination: "https://example.com",
        basePath: false,
      },
    ];
  },
};
```

---

### Tagging data with cacheTag in app/data.ts

Source: https://nextjs.org/docs/app/api-reference/functions/cacheTag

This example shows how to use the unstable_cacheTag function to tag cached data with 'my-data' within an asynchronous function in a TypeScript file.

```tsx
import { unstable_cacheTag as cacheTag } from "next/cache";

export async function getData() {
  "use cache";
  cacheTag("my-data");
  const data = await fetch("/api/data");
  return data;
}
```

---

### Invalidating bookings cache with revalidateTag in app/actions.js

Source: https://nextjs.org/docs/app/api-reference/functions/cacheTag

This JavaScript Server Action example demonstrates invalidating the cache associated with 'bookings-data' using revalidateTag after an update operation.

```jsx
"use server";

import { revalidateTag } from "next/cache";

export async function updateBookings() {
  await updateBookingData();
  revalidateTag("bookings-data");
}
```

---

### Generate Static Params with TypeScript

Source: https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes

This example demonstrates how to use the `generateStaticParams` function in TypeScript to statically generate routes at build time. It fetches posts and maps them to the expected parameter format.

```TypeScript
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
```

---

### Get All Cookies in Next.js

Source: https://nextjs.org/docs/app/api-reference/functions/cookies

Shows how to fetch all available cookies using the asynchronous `cookies()` function and the `.getAll()` method in Next.js Server Components. The returned cookies can be mapped to display their names and values.

```tsx
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies();
  return cookieStore.getAll().map((cookie) => (
    <div key={cookie.name}>
      <p>Name: {cookie.name}</p>
      <p>Value: {cookie.value}</p>
    </div>
  ));
}
```

```jsx
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies();
  return cookieStore.getAll().map((cookie) => (
    <div key={cookie.name}>
      <p>Name: {cookie.name}</p>
      <p>Value: {cookie.value}</p>
    </div>
  ));
}
```

---

### Sequential Data Fetching in Next.js

Source: https://nextjs.org/docs/app/getting-started/fetching-data

Demonstrates sequential data fetching within a Next.js component where one request must complete before the next is initiated. This can lead to performance bottlenecks if not managed correctly.

```tsx
import { getArtist, getAlbums } from "@/app/lib/data";

export default async function Page({ params }) {
  // These requests will be sequential
  const { username } = await params;
  const artist = await getArtist(username);
  const albums = await getAlbums(username);
  return <div>{artist.name}</div>;
}
```

---

### Invalidating cache with revalidateTag in app/action.js

Source: https://nextjs.org/docs/app/api-reference/functions/cacheTag

This JavaScript Server Action example shows how to use revalidateTag to invalidate cache entries associated with the 'my-data' tag after an operation.

```jsx
"use server";

import { revalidateTag } from "next/cache";

export default async function submit() {
  await addPost();
  revalidateTag("my-data");
}
```

---

### Create a Basic Page in Next.js

Source: https://nextjs.org/docs/app/getting-started/layouts-and-pages

Defines a simple page component for a Next.js application. This component renders a heading and is intended to be placed in the `app` directory to serve as a route.

```tsx
export default function Page() {
  return <h1>Hello Next.js!</h1>;
}
```

```jsx
export default function Page() {
  return <h1>Hello Next.js!</h1>;
}
```

---

### Inline Styles Example in React

Source: https://nextjs.org/docs/pages/guides/css-in-js

This snippet shows a basic React component using inline styles to apply CSS directly to an element. It's a simple way to manage styles for individual components.

```jsx
function HiThere() {
  return <p style={{ color: "red" }}>hi there</p>;
}

export default HiThere;
```

---

### Import and Use Local Font in Next.js

Source: https://nextjs.org/docs/pages/api-reference/components/font

Demonstrates how to import a local font using `next/font/local` and apply it to the main application component. It shows the basic setup for a single font file.

```jsx
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "./my-font.woff2" });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
```

---

### Handle Specific Web Vitals in Next.js

Source: https://nextjs.org/docs/pages/guides/analytics

This example shows how to use the `useReportWebVitals` hook to specifically handle different Web Vitals metrics like FCP and LCP within a Next.js application.

```jsx
import { useReportWebVitals } from "next/web-vitals";

function MyApp({ Component, pageProps }) {
  useReportWebVitals((metric) => {
    switch (metric.name) {
      case "FCP": {
        // handle FCP results
      }
      case "LCP": {
        // handle LCP results
      }
      // ...
    }
  });

  return <Component {...pageProps} />;
}
```

---

### Direct Database Query in Server Component (Next.js)

Source: https://nextjs.org/docs/app/guides/data-security

Demonstrates placing a direct database query within a Next.js Server Component. This example shows how data fetched on the server can be passed to a Client Component, illustrating a potential data exposure risk if not handled carefully.

```tsx
import Profile from "./components/profile.tsx";

export async function Page({ params: { slug } }) {
  const [rows] = await sql`SELECT * FROM user WHERE slug = ${slug}`;
  const userData = rows[0];
  // EXPOSED: This exposes all the fields in userData to the client because
  // we are passing the data from the Server Component to the Client.
  return <Profile user={userData} />;
}
```

---

### Render Blog Posts in Layout (JSX)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/layout

This server component retrieves blog posts and displays them as a list of `NavLink` components, enabling navigation to specific blog articles. It requires `NavLink` and a `getPosts` utility.

```jsx
import { NavLink } from "./nav-link";
import getPosts from "./get-posts";

export default async function Layout({ children }) {
  const featuredPosts = await getPosts();
  return (
    <div>
      {featuredPosts.map((post) => (
        <div key={post.id}>
          <NavLink slug={post.slug}>{post.title}</NavLink>
        </div>
      ))}
      <div>{children}</div>
    </div>
  );
}
```

---

### Creating tags from external data in app/components/bookings.tsx

Source: https://nextjs.org/docs/app/api-reference/functions/cacheTag

This TypeScript example shows how to dynamically create cache tags using data returned from an asynchronous function, such as a data ID.

```tsx
import { unstable_cacheTag as cacheTag } from 'next/cache'

interface BookingsProps {
  type: string
}

export async function Bookings({ type = 'haircut' }: BookingsProps) {
  async function getBookingsData() {
    'use cache'
    const data = await fetch(`/api/bookings?type=${encodeURIComponent(type)}`)
    cacheTag('bookings-data', data.id)
    return data
  }
  return //...
```

---

### Configure Image Optimization API Path (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/components/image

Demonstrates how to change the default path for the Next.js Image Optimization API using the `path` property in `next.config.js`. This example sets the path to '/my-prefix/\_next/image'.

```javascript
module.exports = {
  images: {
    path: "/my-prefix/_next/image",
  },
};
```

---

### Linking with basePath

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath

When `basePath` is configured, links created using `next/link` or `next/router` automatically include the `basePath`. For example, a link to `/about` becomes `/docs/about` if `basePath` is set to `/docs`.

```jsx
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Link href="/about">About Page</Link>
    </>
  );
}
```

---

### Generate Multiple Sitemaps with generateSitemaps (TypeScript)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

This TypeScript example demonstrates how to use the `generateSitemaps` function to create multiple sitemaps. It fetches product data in batches, with each batch corresponding to a single sitemap, adhering to Google's 50,000 URL limit per sitemap. The function returns an array of objects, each with an `id` used to generate a unique sitemap.

```ts
import type { MetadataRoute } from "next";
import { BASE_URL } from "@/app/lib/constants";

export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  // Google's limit is 50,000 URLs per sitemap
  const start = id * 50000;
  const end = start + 50000;
  const products = await getProducts(
    `SELECT id, date FROM products WHERE id BETWEEN ${start} AND ${end}`
  );
  return products.map((product) => ({
    url: `${BASE_URL}/product/${product.id}`,
    lastModified: product.date,
  }));
}
```

---

### Import global CSS in Next.js App

Source: https://nextjs.org/docs/pages/guides/tailwind-v3-css

Imports the global CSS file (`styles/globals.css`) into the main application file (`pages/_app.js`) to apply Tailwind CSS styles across the entire Next.js application.

```jsx
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

---

### Run Vitest Tests in Next.js

Source: https://nextjs.org/docs/app/guides/testing/vitest

Provides commands to execute Vitest tests in a Next.js project using different package managers like npm, yarn, pnpm, and bun.

```bash
npm run test
# or
yarn test
# or
pnpm test
# or
bun test
```

---

### Generate Localized Sitemap in Next.js

Source: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

This example demonstrates generating a localized sitemap in Next.js, supporting multiple languages. It uses the 'alternates.languages' property to specify different language versions of each URL.

```typescript
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://acme.com",
      lastModified: new Date(),
      alternates: {
        languages: {
          es: "https://acme.com/es",
          de: "https://acme.com/de",
        },
      },
    },
    {
      url: "https://acme.com/about",
      lastModified: new Date(),
      alternates: {
        languages: {
          es: "https://acme.com/es/about",
          de: "https://acme.com/de/about",
        },
      },
    },
    {
      url: "https://acme.com/blog",
      lastModified: new Date(),
      alternates: {
        languages: {
          es: "https://acme.com/es/blog",
          de: "https://acme.com/de/blog",
        },
      },
    },
  ];
}
```

```javascript
export default function sitemap() {
  return [
    {
      url: "https://acme.com",
      lastModified: new Date(),
      alternates: {
        languages: {
          es: "https://acme.com/es",
          de: "https://acme.com/de",
        },
      },
    },
    {
      url: "https://acme.com/about",
      lastModified: new Date(),
      alternates: {
        languages: {
          es: "https://acme.com/es/about",
          de: "https://acme.com/de/about",
        },
      },
    },
    {
      url: "https://acme.com/blog",
      lastModified: new Date(),
      alternates: {
        languages: {
          es: "https://acme.com/es/blog",
          de: "https://acme.com/de/blog",
        },
      },
    },
  ];
}
```

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://acme.com</loc>
    <xhtml:link
      rel="alternate"
      hreflang="es"
      href="https://acme.com/es"/>
    <xhtml:link
      rel="alternate"
      hreflang="de"
      href="https://acme.com/de"/>
    <lastmod>2023-04-06T15:02:24.021Z</lastmod>
  </url>
  <url>
    <loc>https://acme.com/about</loc>
    <xhtml:link
      rel="alternate"
      hreflang="es"
      href="https://acme.com/es/about"/>
    <xhtml:link
      rel="alternate"
      hreflang="de"
      href="https://acme.com/de/about"/>
    <lastmod>2023-04-06T15:02:24.021Z</lastmod>
  </url>
  <url>
    <loc>https://acme.com/blog</loc>
    <xhtml:link
      rel="alternate"
      hreflang="es"
      href="https://acme.com/es/blog"/>
    <xhtml:link
      rel="alternate"
      hreflang="de"
      href="https://acme.com/de/blog"/>
    <lastmod>2023-04-06T15:02:24.021Z</lastmod>
  </url>
</urlset>
```

---

### Generate Multiple Sitemaps with JavaScript

Source: https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps

This JavaScript example shows how to use `generateSitemaps` to create paginated sitemaps. It defines the `generateSitemaps` function to return IDs for different sitemap segments and the default `sitemap` function to fetch and format product data for each segment.

```javascript
import { BASE_URL } from "@/app/lib/constants";

export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
}

export default async function sitemap({ id }) {
  // Google's limit is 50,000 URLs per sitemap
  const start = id * 50000;
  const end = start + 50000;
  const products = await getProducts(
    `SELECT id, date FROM products WHERE id BETWEEN ${start} AND ${end}`
  );
  return products.map((product) => ({
    url: `${BASE_URL}/product/${id}`,
    lastModified: product.date,
  }));
}
```

---

### Basic Image Component Usage

Source: https://nextjs.org/docs/app/api-reference/components/image

Demonstrates the basic usage of the Next.js Image component with a source path, dimensions, and alt text.

```jsx
import Image from "next/image";

export default function Page() {
  return (
    <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  );
}
```

---

### Add Tailwind directives to global CSS

Source: https://nextjs.org/docs/pages/guides/tailwind-v3-css

Adds the necessary Tailwind CSS directives (@tailwind base, @tailwind components, @tailwind utilities) to the global CSS file (`styles/globals.css`) to enable Tailwind's styling.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### Force Dynamic Rendering in Next.js (JSX)

Source: https://nextjs.org/docs/app/guides/content-security-policy

This example shows how to force dynamic rendering for a page in Next.js using JavaScript (JSX). This is crucial for dynamically applying nonces during server-side rendering.

```jsx
import { connection } from "next/server";

export default async function Page() {
  // wait for an incoming request to render this page
  await connection();
  // Your page content
}
```

---

### Use Font Utility Classes with Tailwind CSS

Source: https://nextjs.org/docs/pages/api-reference/components/font

Provides examples of using Tailwind CSS utility classes (`font-sans`, `font-mono`) to apply the configured fonts to HTML elements.

```html
<p class="font-sans ...">The quick brown fox ...</p>
<p class="font-mono ...">The quick brown fox ...</p>
```

---

### Configure Turbopack in Next.js (TypeScript)

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack

This snippet shows the basic configuration of the 'turbopack' option in a Next.js project using TypeScript. It's a starting point for customizing Turbopack's behavior.

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // ...
  },
};

export default nextConfig;
```

---

### Get Dictionary Function (JavaScript)

Source: https://nextjs.org/docs/app/guides/internationalization

A server-only function to dynamically load translation dictionaries based on the specified locale (English or Dutch). It imports JSON files and returns the default export.

```js
import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  nl: () => import("./dictionaries/nl.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
```

---

### Add Jest Test Scripts to package.json

Source: https://nextjs.org/docs/app/guides/testing/jest

Add 'test' and 'test:watch' scripts to your package.json file to easily run Jest tests from the command line. The 'test:watch' script automatically re-runs tests when files change.

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

---

### Defer Prefetching on Hover in Next.js (TSX)

Source: https://nextjs.org/docs/app/guides/prefetching

Provides a Next.js Client Component example using TypeScript that defers prefetching until a user hovers over a link. This optimizes resource usage by only prefetching links that the user is likely to interact with.

```tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export function HoverPrefetchLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [active, setActive] = useState(false);

  return (
    <Link
      href={href}
      prefetch={active ? null : false}
      onMouseEnter={() => setActive(true)}
    >
      {children}
    </Link>
  );
}
```

---

### Optimize Bundle Size: Mark Specific Components as Client

Source: https://nextjs.org/docs/app/getting-started/server-and-client-components

Illustrates how to reduce JavaScript bundle size by marking only interactive components as Client Components. This example shows a Layout component (Server Component) importing a Search component (Client Component).

```tsx
// Client Component
import Search from "./search";
// Server Component
import Logo from "./logo";

// Layout is a Server Component by default
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Logo />
        <Search />
      </nav>
      <main>{children}</main>
    </>
  );
}
```

```jsx
// Client Component
import Search from "./search";
// Server Component
import Logo from "./logo";

// Layout is a Server Component by default
export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Logo />
        <Search />
      </nav>
      <main>{children}</main>
    </>
  );
}
```

---

### Linking with basePath

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/basePath

When basePath is configured, links created using next/link or next/router automatically include the basePath. For example, a link to '/about' will correctly resolve to '/docs/about' if basePath is set to '/docs'.

```jsx
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Link href="/about">About Page</Link>
    </>
  );
}
```

---

### Use Environment Variables in Next.js Data Fetching

Source: https://nextjs.org/docs/pages/guides/environment-variables

Shows an example of accessing environment variables (DB_HOST, DB_USER, DB_PASS) within a Next.js getStaticProps function to establish a database connection. This highlights server-side usage.

```js
export async function getStaticProps() {
  const db = await myDB.connect({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
  });
  // ...
}
```

---

### Next.js PageProps for Dynamic Route Parameters

Source: https://nextjs.org/docs/app/getting-started/layouts-and-pages

Shows how to use the `PageProps` helper type in Next.js to access parameters from dynamic routes. This example demonstrates accessing the 'slug' parameter within a page component.

```tsx
export default async function Page(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  return <h1>Blog post: {slug}</h1>;
}
```

---

### Generate Bundle Report with npm/yarn/pnpm

Source: https://nextjs.org/docs/app/guides/package-bundling

Generates a bundle analysis report by running the build command with the ANALYZE environment variable set. The report helps visualize package sizes and dependencies.

```bash
ANALYZE=true npm run build
# or
ANALYZE=true yarn build
# or
ANALYZE=true pnpm build
```

---

### Supported HTTP Methods

Source: https://nextjs.org/docs/app/api-reference/file-conventions/route

Illustrates how to implement various HTTP methods (GET, HEAD, POST, PUT, DELETE, PATCH, OPTIONS) within a Next.js Route Handler. If OPTIONS is not explicitly defined, Next.js provides a default implementation.

```ts
export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and set the appropriate Response `Allow` header depending on the other methods defined in the Route Handler.
export async function OPTIONS(request: Request) {}
```

```js
export async function GET(request) {}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and set the appropriate Response `Allow` header depending on the other methods defined in the Route Handler.
export async function OPTIONS(request) {}
```

---

### Safely Forwarding Subset of Headers

Source: https://nextjs.org/docs/app/api-reference/functions/next-response

Provides an example of a defensive approach to forwarding headers by creating a subset of incoming request headers using an allow-list, discarding sensitive or unnecessary headers.

```typescript
import { type NextRequest, NextResponse } from "next/server";

function middleware(request: NextRequest) {
  const incoming = new Headers(request.headers);
  const forwarded = new Headers();

  for (const [name, value] of incoming) {
    const headerName = name.toLowerCase();
    // Keep only known-safe headers, discard custom x-* and other sensitive ones
    if (
      !headerName.startsWith("x-") &&
      headerName !== "authorization" &&
      headerName !== "cookie"
    ) {
      // Preserve original header name casing
      forwarded.set(name, value);
    }
  }

  return NextResponse.next({
    request: {
      headers: forwarded,
    },
  });
}
```

---

### Create a Dynamic Blog Post Page in Next.js

Source: https://nextjs.org/docs/app/getting-started/layouts-and-pages

Defines a template for a dynamic blog post page using a route segment like `[slug]`. It includes a placeholder for `generateStaticParams` and a simple heading for the post.

```tsx
function generateStaticParams() {}

export default function Page() {
  return <h1>Hello, Blog Post Page!</h1>;
}
```

```jsx
function generateStaticParams() {}

export default function Page() {
  return <h1>Hello, Blog Post Page!</h1>;
}
```

---

### Use Environment Variables in Next.js API Route

Source: https://nextjs.org/docs/app/guides/environment-variables

An example of how to access environment variables like DB_HOST, DB_USER, and DB_PASS within a Next.js API route handler to connect to a database.

```javascript
export async function GET() {
  const db = await myDB.connect({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
  });
  // ...
}
```

---

### Add Jest Test Scripts to package.json

Source: https://nextjs.org/docs/pages/guides/testing/jest

Add Jest test scripts to your `package.json` file to easily run tests. Includes scripts for running tests and running tests in watch mode.

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

---

### Get Dictionary Function (TypeScript)

Source: https://nextjs.org/docs/app/guides/internationalization

A server-only function to dynamically load translation dictionaries based on the specified locale (English or Dutch). It imports JSON files and returns the default export.

```ts
import 'server-only'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  nl: () => import('./dictionaries/nl.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'en' | 'nl') =
  dictionaries[locale]()
```

---

### Global MDX Component Styling (TSX)

Source: https://nextjs.org/docs/pages/guides/mdx

Provides an example of globally styling MDX content in Next.js using TypeScript. It defines custom components for 'h1' and 'img' tags within `mdx-components.tsx`.

```tsx
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

const components = {
  // Allows customizing built-in components, e.g. to add styling.
  h1: ({ children }) => (
    <h1 style={{ color: "red", fontSize: "48px" }}>{children}</h1>
  ),
  img: (props) => (
    <Image
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      {...(props as ImageProps)}
    />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
```

---

### Sequential Data Fetching with Suspense (Next.js)

Source: https://nextjs.org/docs/app/getting-started/fetching-data

Demonstrates sequential data fetching in Next.js where a parent component fetches artist data and passes an ID to a child component to fetch playlists. Uses React Suspense to show a fallback UI while the child component loads, enabling streaming.

```tsx
export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  // Get artist information
  const artist = await getArtist(username);

  return (
    <>
      <h1>{artist.name}</h1>
      {/* Show fallback UI while the Playlists component is loading */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Pass the artist ID to the Playlists component */}
        <Playlists artistID={artist.id} />
      </Suspense>
    </>
  );
}

async function Playlists({ artistID }: { artistID: string }) {
  // Use the artist ID to fetch playlists
  const playlists = await getArtistPlaylists(artistID);

  return (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.id}>{playlist.name}</li>
      ))}
    </ul>
  );
}
```

```jsx
export default async function Page({ params }) {
  const { username } = await params;
  // Get artist information
  const artist = await getArtist(username);

  return (
    <>
      <h1>{artist.name}</h1>
      {/* Show fallback UI while the Playlists component is loading */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Pass the artist ID to the Playlists component */}
        <Playlists artistID={artist.id} />
      </Suspense>
    </>
  );
}

async function Playlists({ artistID }) {
  // Use the artist ID to fetch playlists
  const playlists = await getArtistPlaylists(artistID);

  return (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.id}>{playlist.name}</li>
      ))}
    </ul>
  );
}
```

---

### Basic Draft Mode Route Handler (JavaScript)

Source: https://nextjs.org/docs/app/guides/draft-mode

A basic Next.js Route Handler in JavaScript that returns an empty response. This serves as a starting point for implementing Draft Mode functionality.

```js
export async function GET() {
  return new Response("");
}
```

---

### Produce Response from Next.js Middleware (JavaScript)

Source: https://nextjs.org/docs/pages/api-reference/file-conventions/middleware

This JavaScript example illustrates how to generate a direct response from Next.js middleware, including handling authentication. If the `isAuthenticated` check fails, it returns a JSON object with an error message and a 401 status code.

```js
import { isAuthenticated } from "@lib/auth";

// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: "/api/:function*",
};

export function middleware(request) {
  // Call our authentication function to check the request
  if (!isAuthenticated(request)) {
    // Respond with JSON indicating an error message
    return Response.json(
      { success: false, message: "authentication failed" },
      { status: 401 }
    );
  }
}
```

---

### Next.js: Generate All Static Params at Build Time

Source: https://nextjs.org/docs/app/guides/caching

This example demonstrates how to use generateStaticParams to statically render all possible paths for a dynamic segment at build time. It fetches data and maps it to the required slug format.

```jsx
export async function generateStaticParams() {
  const posts = await fetch("https://.../posts").then((res) => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
```

---

### Stream Video Component with React Suspense (Next.js)

Source: https://nextjs.org/docs/app/guides/videos

This example shows how to stream a video component using React Suspense in a Next.js application. It includes a fallback UI to display while the video component is loading, improving the user experience by preventing page blocking.

```jsx
import { Suspense } from "react";
import VideoComponent from "../ui/VideoComponent.jsx";

export default function Page() {
  return (
    <section>
      <Suspense fallback={<p>Loading video...</p>}>
        <VideoComponent />
      </Suspense>
      {/* Other content of the page */}
    </section>
  );
}
```

---

### Create a Theme Provider for Context (TSX)

Source: https://nextjs.org/docs/app/getting-started/server-and-client-components

Creates a Client Component 'ThemeProvider' in TSX that utilizes React Context to manage global state like theme. This provider wraps its children, making the context available to nested components.

```tsx
"use client";

import { createContext } from "react";

export const ThemeContext = createContext({});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
}
```

---

### Get a Single Cookie in Next.js

Source: https://nextjs.org/docs/app/api-reference/functions/cookies

Demonstrates how to retrieve a specific cookie by its name using the asynchronous `cookies()` function and the `.get()` method in Next.js Server Components. Requires `async/await`.

```tsx
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  return "...";
}
```

```jsx
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  return "...";
}
```

---

### Fetch and render remote MDX content in Next.js App Router

Source: https://nextjs.org/docs/app/guides/mdx

This example demonstrates fetching MDX content from a remote source (e.g., a CMS or database) and rendering it within a Next.js application using `next-mdx-remote-client`. It shows the server component implementation for both TypeScript and JavaScript.

```tsx
import { MDXRemote } from "next-mdx-remote-client/rsc";

export default async function RemoteMdxPage() {
  // MDX text - can be from a database, CMS, fetch, anywhere...
  const res = await fetch("https://...");
  const markdown = await res.text();
  return <MDXRemote source={markdown} />;
}
```

```jsx
import { MDXRemote } from "next-mdx-remote-client/rsc";

export default async function RemoteMdxPage() {
  // MDX text - can be from a database, CMS, fetch, anywhere...
  const res = await fetch("https://...");
  const markdown = await res.text();
  return <MDXRemote source={markdown} />;
}
```

---

### Configure Image Optimization with Custom Loader

Source: https://nextjs.org/docs/pages/guides/static-exports

This configuration enables Next.js image optimization for static exports by specifying a custom loader file. The example demonstrates setting up a loader for Cloudinary image optimization.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./my-loader.ts",
  },
};

module.exports = nextConfig;
```

---

### Next.js Configuration File

Source: https://nextjs.org/docs/app/getting-started/project-structure

The `next.config.js` file is used for configuring Next.js applications. It allows customization of build, runtime, and routing behaviors.

```javascript
module.exports = {
  // Next.js configuration options
};
```

---

### Get All Cookies or Specific Cookie in NextRequest

Source: https://nextjs.org/docs/pages/api-reference/functions/next-request

Illustrates how to retrieve all cookies or cookies with a specific name from an incoming Next.js request using `request.cookies.getAll()`. It returns an array of cookie objects.

```TypeScript
request.cookies.getAll('experiments')
```

```TypeScript
request.cookies.getAll()
```

---

### Replace History Entry with replaceState in Next.js

Source: https://nextjs.org/docs/app/getting-started/linking-and-navigating

Illustrates using `window.history.replaceState` to replace the current browser history entry, preventing navigation back to the previous state. This example changes the application's locale.

```tsx
"use client";

import { usePathname } from "next/navigation";

export function LocaleSwitcher() {
  const pathname = usePathname();

  function switchLocale(locale: string) {
    // e.g. '/en/about' or '/fr/contact'
    const newPath = `/${locale}${pathname}`;
    window.history.replaceState(null, "", newPath);
  }

  return (
    <>
      <button onClick={() => switchLocale("en")}>English</button>
      <button onClick={() => switchLocale("fr")}>French</button>
    </>
  );
}
```

```jsx
"use client";

import { usePathname } from "next/navigation";

export function LocaleSwitcher() {
  const pathname = usePathname();

  function switchLocale(locale) {
    // e.g. '/en/about' or '/fr/contact'
    const newPath = `/${locale}${pathname}`;
    window.history.replaceState(null, "", newPath);
  }

  return (
    <>
      <button onClick={() => switchLocale("en")}>English</button>
      <button onClick={() => switchLocale("fr")}>French</button>
    </>
  );
}
```

---

### Integrate Loading Indicator in Header (JSX)

Source: https://nextjs.org/docs/app/api-reference/functions/use-link-status

This JavaScript example demonstrates integrating the `LoadingIndicator` component within a header. It utilizes Next.js's `<Link>` component with `prefetch={false}` and embeds the `LoadingIndicator` to provide visual feedback during navigation.

```jsx
import Link from "next/link";
import LoadingIndicator from "./loading-indicator";

export default function Header() {
  return (
    <header>
      <Link href="/dashboard" prefetch={false}>
        Dashboard <LoadingIndicator />
      </Link>
    </header>
  );
}
```

---

### Create Entrypoint Page with Catch-All Route (JSX)

Source: https://nextjs.org/docs/app/guides/migrating/from-vite

Defines the entrypoint page for a Next.js application using an optional catch-all route segment (`[[...slug]]`) with JSX. This configuration is for SPA-like behavior and includes `generateStaticParams` for static route generation.

```jsx
import "../../index.css";

export function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page() {
  return "..."; // We'll update this
}
```

---

### Fetch User Data with useSWR in Next.js Profile Component (JSX)

Source: https://nextjs.org/docs/app/guides/single-page-applications

Provides an example of fetching user data with the useSWR hook in a Next.js profile component using JSX. It utilizes a fetcher function to retrieve data from '/api/user'.

```jsx
"use client";

import useSWR from "swr";

export function Profile() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  // The same SWR pattern you already know
  const { data, error } = useSWR("/api/user", fetcher);

  return "...";
}
```

---

### Enable Node.js Inspector for Next.js Development

Source: https://nextjs.org/docs/app/guides/debugging

This snippet shows how to start the Next.js development server with the --inspect flag enabled, allowing for server-side debugging using browser DevTools. It also mentions the option to enable remote debugging.

```bash
NODE_OPTIONS='--inspect' next dev
```

---

### Next.js Server Component Entrypoint (JSX)

Source: https://nextjs.org/docs/app/guides/migrating/from-create-react-app

Defines a Next.js Server Component for an optional catch-all route using JavaScript. It includes `generateStaticParams` to map all routes to a single page and a placeholder for the main content.

```jsx
export function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page() {
  return "..."; // We'll update this
}
```

---

### Embed External Video with HTML <iframe> Tag

Source: https://nextjs.org/docs/app/guides/videos

Shows how to embed a video from an external platform, such as YouTube, using the HTML <iframe> tag within a Next.js page. The example includes the allowFullScreen attribute for an improved viewing experience.

```jsx
export default function Page() {
  return (
    <iframe src="https://www.youtube.com/embed/19g66ezsKAg" allowFullScreen />
  );
}
```

---

### Get Cookie Value in NextRequest

Source: https://nextjs.org/docs/pages/api-reference/functions/next-request

Shows how to retrieve the value of a specific cookie from an incoming Next.js request using `request.cookies.get()`. It returns the cookie's value or undefined if not found.

```TypeScript
request.cookies.get('show-banner')
```

---

### Forward Authorization Header in Next.js

Source: https://nextjs.org/docs/app/api-reference/functions/headers

This example illustrates how to read an 'authorization' header from the incoming request using `headers()` and then forward it to an external API fetch request. This is useful for authentication and authorization workflows.

```jsx
import { headers } from "next/headers";

export default async function Page() {
  const authorization = (await headers()).get("authorization");
  const res = await fetch("...", {
    headers: { authorization }, // Forward the authorization header
  });
  const user = await res.json();

  return <h1>{user.name}</h1>;
}
```

---

### Dynamic MDX Imports for Blog Posts (JSX)

Source: https://nextjs.org/docs/app/guides/mdx

Demonstrates dynamic import of MDX files for blog posts based on route parameters using JavaScript. Includes static generation of slugs and disabling dynamic parameters.

```jsx
export default async function Page({ params }) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return <Post />;
}

export function generateStaticParams() {
  return [{ slug: "welcome" }, { slug: "about" }];
}

export const dynamicParams = false;
```

---

### Read Current Pathname with usePathname (TSX)

Source: https://nextjs.org/docs/app/api-reference/functions/use-pathname

This example demonstrates how to use the `usePathname` hook within a Next.js Client Component to display the current URL's pathname. It requires the 'next/navigation' module.

```tsx
"use client";

import { usePathname } from "next/navigation";

export default function ExampleClientComponent() {
  const pathname = usePathname();
  return <p>Current pathname: {pathname}</p>;
}
```

---

### Configure Next.js for SPA Output

Source: https://nextjs.org/docs/app/guides/migrating/from-vite

Sets up the Next.js configuration file (`next.config.mjs`) to output a Single-Page Application (SPA) and specifies the build output directory.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Outputs a Single-Page Application (SPA).
  distDir: "./dist", // Changes the build output directory to `./dist/`.
};

export default nextConfig;
```

---

### Using Next.js Image Component with Custom Loader (TypeScript)

Source: https://nextjs.org/docs/app/guides/static-exports

Example of using the `next/image` component in a Next.js application with a custom loader. It displays an image with specified dimensions, relying on the configured loader for optimization.

```tsx
import Image from "next/image";

export default function Page() {
  return <Image alt="turtles" src="/turtles.jpg" width={300} height={300} />;
}
```

---

### Display Content Based on Dynamic Route Params

Source: https://nextjs.org/docs/app/api-reference/file-conventions/page

Shows how to access and use dynamic route segments (params) in a Next.js page component to fetch or display specific content. This example uses `async/await` to handle the promise-based `params`.

```tsx
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <h1>Blog Post: {slug}</h1>;
}
```

```jsx
export default async function Page({ params }) {
  const { slug } = await params;
  return <h1>Blog Post: {slug}</h1>;
}
```

---

### Basic Draft Mode Route Handler (TypeScript)

Source: https://nextjs.org/docs/app/guides/draft-mode

A basic Next.js Route Handler in TypeScript that returns an empty response. This serves as a starting point for implementing Draft Mode functionality.

```ts
export async function GET(request: Request) {
  return new Response("");
}
```

---

### Safe Access to Browser APIs in Next.js Client Components

Source: https://nextjs.org/docs/app/guides/static-exports

This example shows how to safely access browser-specific APIs like `window` within a Next.js Client Component using the `useEffect` hook. This ensures the code only runs in the browser environment.

```jsx
'use client';

import { useEffect } from 'react';

export default function ClientComponent() {
  useEffect(() => {
    // You now have access to `window`
    console.log(window.innerHeight);
  }, [])

  return ...;
}
```

---

### Create Middleware with Factory Pattern

Source: https://nextjs.org/docs/app/guides/backend-for-frontend

Shows how to create middleware in Next.js using a factory function provided by a third-party library. This allows for centralized middleware configuration and application across the Next.js application.

```typescript
import { createMiddleware } from "third-party-library";

export default createMiddleware();
```

---

### Invalidating bookings cache with revalidateTag in app/actions.ts

Source: https://nextjs.org/docs/app/api-reference/functions/cacheTag

This TypeScript Server Action example shows how to invalidate the cache for 'bookings-data' using revalidateTag after updating booking information.

```tsx
"use server";

import { revalidateTag } from "next/cache";

export async function updateBookings() {
  await updateBookingData();
  revalidateTag("bookings-data");
}
```

---

### Next.js Layout with Breadcrumbs (JSX)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/layout

Shows a Next.js layout component written in JavaScript that integrates a `Breadcrumbs` component. This setup ensures that navigation context is consistently displayed across nested routes.

```jsx
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";

export default function Layout({ children }) {
  return (
    <>
      <Breadcrumbs />
      <main>{children}</main>
    </>
  );
}
```

---

### Enable Turbopack for Faster Development

Source: https://nextjs.org/docs/app/guides/migrating/from-create-react-app

This bash command demonstrates how to enable Turbopack for faster local development in Next.js. Note that this requires disabling the default webpack by removing the `--turbopack` flag from the dev script.

```Bash
next dev --turbopack
```

---

### Layout with Parallel Routes in JSX

Source: https://nextjs.org/docs/app/api-reference/file-conventions/parallel-routes

This example demonstrates a Next.js layout component written in JavaScript (JSX) that accepts 'children', 'team', and 'analytics' slots as props and renders them. This pattern is useful for displaying multiple dynamic content areas simultaneously within a single application layout.

```jsx
export default function Layout({ children, team, analytics }) {
  return (
    <>
      {children}
      {team}
      {analytics}
    </>
  );
}
```

---

### Fetch User Data with Session Verification (TypeScript)

Source: https://nextjs.org/docs/app/guides/authentication

This TypeScript example illustrates fetching user data by first calling the `verifySession` function. It handles potential errors during data fetching and returns specific user columns (id, name, email). The `getUser` function is also memoized using React's `cache` API.

```TypeScript
export const getUser = cache(async () => {
  const session = await verifySession()
  if (!session) return null

  try {
    const data = await db.query.users.findMany({
      where: eq(users.id, session.userId),
      // Explicitly return the columns you need rather than the whole user object
      columns: {
        id: true,
        name: true,
        email: true,
      },
    })

    const user = data[0]

    return user
  } catch (error) {
    console.log('Failed to fetch user')
    return null
  }
})
```

---

### Register OpenTelemetry with @vercel/otel (JavaScript)

Source: https://nextjs.org/docs/app/guides/open-telemetry

Sets up OpenTelemetry instrumentation in a Next.js application by registering the OpenTelemetry SDK with a specified service name using JavaScript.

```JavaScript
import { registerOTel } from '@vercel/otel'

export function register() {
  registerOTel({ serviceName: 'next-app' })
}
```

---

### Client-Side Interactivity Component

Source: https://nextjs.org/docs/app/getting-started/server-and-client-components

This example shows a basic Next.js Client Component designed for interactivity, using React's useState hook. It's marked with 'use client' to indicate it should be rendered on the client side.

```tsx
"use client";

import { useState } from "react";

export default function LikeButton({ likes }: { likes: number }) {
  // ...
}
```

```jsx
"use client";

import { useState } from "react";

export default function LikeButton({ likes }) {
  // ...
}
```

---

### Revalidate Cached Data in Next.js

Source: https://nextjs.org/docs/app/api-reference/file-conventions/route

Demonstrates how to revalidate cached data in Next.js using the `revalidate` route segment config option. This example sets the revalidation time to 60 seconds.

```JavaScript
export const revalidate = 60

export async function GET() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()

  return Response.json(posts)
}
```

---

### Integrate Loading Indicator in Header (TSX)

Source: https://nextjs.org/docs/app/api-reference/functions/use-link-status

This example shows how to integrate the `LoadingIndicator` component into a header. It uses Next.js's `<Link>` component with `prefetch={false}` and includes the `LoadingIndicator` to display visual feedback during navigation.

```tsx
import Link from "next/link";
import LoadingIndicator from "./loading-indicator";

export default function Header() {
  return (
    <header>
      <Link href="/dashboard" prefetch={false}>
        Dashboard <LoadingIndicator />
      </Link>
    </header>
  );
}
```

---

### Initialize Client Analytics in Next.js

Source: https://nextjs.org/docs/pages/guides/analytics

This snippet shows how to create an `instrumentation-client.js` file in the root of your Next.js application to initialize analytics and set up global error tracking before the frontend code executes.

```javascript
// Initialize analytics before the app starts
console.log("Analytics initialized");

// Set up global error tracking
window.addEventListener("error", (event) => {
  // Send to your error tracking service
  reportError(event.error);
});
```

---

### Revalidate Cached Data in Next.js

Source: https://nextjs.org/docs/app/api-reference/file-conventions/route

Demonstrates how to revalidate cached data in Next.js using the `revalidate` route segment config option. This example sets the revalidation time to 60 seconds.

```TypeScript
export const revalidate = 60

export async function GET() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()

  return Response.json(posts)
}
```

---

### Next.js Middleware - Advanced Matcher Configuration

Source: https://nextjs.org/docs/pages/api-reference/file-conventions/middleware

This JavaScript example showcases an advanced `matcher` configuration for Next.js middleware. It uses an object with `source`, `regexp`, `locale`, `has` (for headers and query parameters), and `missing` (for cookies) to define complex matching conditions.

```js
export const config = {
  matcher: [
    {
      source: "/api/*",
      regexp: "^/api/(.*)",
      locale: false,
      has: [
        { type: "header", key: "Authorization", value: "Bearer Token" },
        { type: "query", key: "userId", value: "123" },
      ],
      missing: [{ type: "cookie", key: "session", value: "active" }],
    },
  ],
};
```

---

### Schedule Logging After Layout Render (TSX)

Source: https://nextjs.org/docs/app/api-reference/functions/after

Schedules a custom logging function to execute after the Next.js layout component is rendered and sent to the user. This example demonstrates using `after` within a Server Component layout.

```tsx
import { after } from "next/server";
// Custom logging function
import { log } from "@/app/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  after(() => {
    // Execute after the layout is rendered and sent to the user
    log();
  });
  return <>{children}</>;
}
```

---

### Role-based route protection in app/admin/page.js

Source: https://nextjs.org/docs/app/api-reference/functions/forbidden

Example of using the `forbidden` function to restrict access to the admin dashboard. If the user's session role is not 'admin', access is denied by calling `forbidden()`.

```jsx
import { verifySession } from "@/app/lib/dal";
import { forbidden } from "next/navigation";

export default async function AdminPage() {
  const session = await verifySession();

  // Check if the user has the 'admin' role
  if (session.role !== "admin") {
    forbidden();
  }

  // Render the admin page for authorized users
  return (
    <main>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {session.user.name}</p>
    </main>
  );
}
```

---

### Implement Internationalized Routing with Next.js Middleware

Source: https://nextjs.org/docs/app/guides/internationalization

This example shows how to use Next.js middleware to internationalize routes. It checks if the current pathname includes a supported locale and redirects the user to a locale-prefixed path if no locale is detected.

```javascript
import { NextResponse } from "next/server";

let locales = ['en-US', 'nl-NL', 'nl']

// Get the preferred locale, similar to the above or using a library
function getLocale(request) { ... }

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/']
}
```

---

### Implement PPR in a Next.js Page (TSX)

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/ppr

This example shows how to implement Partial Prerendering (PPR) in a Next.js page component using TSX. By exporting `experimental_ppr = true`, the page opts into PPR, allowing it to render static and dynamic components concurrently. It includes Suspense for handling dynamic content loading.

```TSX
import { Suspense } from "react"
import { StaticComponent, DynamicComponent, Fallback } from "@/app/ui"

export const experimental_ppr = true

export default function Page() {
  return {
     <>
      <StaticComponent />
      <Suspense fallback={<Fallback />}>
        <DynamicComponent />
      </Suspense>
     </>
  };
}
```

---

### Fetch Data with fetch API in Server Component (Next.js)

Source: https://nextjs.org/docs/app/getting-started/fetching-data

Demonstrates fetching data from an external API within a Next.js Server Component using the asynchronous `fetch` API. The component awaits the fetch call and then processes the JSON response to display a list of blog posts. It highlights Next.js's caching behavior and options for dynamic rendering.

```tsx
export default async function Page() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

```jsx
export default async function Page() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

---

### Role-based route protection in app/admin/page.tsx

Source: https://nextjs.org/docs/app/api-reference/functions/forbidden

Example of using the `forbidden` function to restrict access to the admin dashboard. If the user's session role is not 'admin', access is denied by calling `forbidden()`.

```tsx
import { verifySession } from "@/app/lib/dal";
import { forbidden } from "next/navigation";

export default async function AdminPage() {
  const session = await verifySession();

  // Check if the user has the 'admin' role
  if (session.role !== "admin") {
    forbidden();
  }

  // Render the admin page for authorized users
  return (
    <main>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {session.user.name}</p>
    </main>
  );
}
```

---

### Configure remotePatterns with Specific Query String (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/components/image

Shows how to restrict image optimization to URLs with a specific query string using the `search` property in `remotePatterns`. This example requires the query string '?v=1727111025337'.

```javascript
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com",
        search: "?v=1727111025337",
      },
    ],
  },
};
```

---

### Set Page Title using Metadata Object (JSX)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/layout

This example demonstrates setting the page title to 'Next.js' by defining a `metadata` object within a root layout. This approach is recommended over manually adding `<head>` tags.

```jsx
export const metadata = {
  title: "Next.js",
};

export default function Layout({ children }) {
  return "...";
}
```

---

### Define MDX Components in TypeScript

Source: https://nextjs.org/docs/app/api-reference/file-conventions/mdx-components

This snippet shows how to define MDX components using TypeScript in the `mdx-components.tsx` file. It exports a `useMDXComponents` function that returns an empty MDXComponents object, serving as a basic setup.

```tsx
import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return components;
}
```

---

### Accessing Locale in Next.js Page Component (JavaScript)

Source: https://nextjs.org/docs/app/guides/internationalization

This JavaScript example shows how to access the dynamically routed 'lang' parameter within a Next.js page component. This enables you to serve locale-specific content to your users.

```jsx
// You now have access to the current locale
// e.g. /en-US/products -> `lang` is "en-US"
export default async function Page({ params }) {
  const { lang } = await params
  return ...
```

---

### Example Tailwind CSS Usage in Next.js (JSX)

Source: https://nextjs.org/docs/pages/getting-started/css

Demonstrates using Tailwind CSS utility classes to style a page component in Next.js using JSX. It applies a flex layout and a large font size to a heading.

```jsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
    </main>
  );
}
```

---

### Configure Cypress Component Testing (JavaScript)

Source: https://nextjs.org/docs/pages/guides/testing/cypress

This JavaScript configuration sets up Cypress for component testing with Next.js, specifying the framework and bundler.

```js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
```

---

### Set Turbopack Root Directory (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack

This example shows how to manually set the application root directory for Turbopack when using a non-standard project structure. It uses Node.js's 'path' module to define the root.

```javascript
const path = require("path");
module.exports = {
  turbopack: {
    root: path.join(__dirname, ".."),
  },
};
```

---

### Configure Environment Variables with @next/env

Source: https://nextjs.org/docs/pages/guides/environment-variables

Illustrates how to use the loadEnvConfig function from @next/env to load environment variables in both TypeScript (.ts) and JavaScript (.js) files. This setup is useful for external configurations.

```tsx
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);
```

```jsx
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);
```

```tsx
import "./envConfig.ts";

export default defineConfig({
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
});
```

```jsx
import "./envConfig.js";

export default defineConfig({
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
});
```

---

### Next.js Middleware - Advanced Matcher Configuration

Source: https://nextjs.org/docs/app/api-reference/file-conventions/middleware

This JavaScript example showcases an advanced `matcher` configuration for Next.js middleware. It uses an object with `source`, `regexp`, `locale`, `has` (for headers and query parameters), and `missing` (for cookies) to define complex matching conditions.

```js
export const config = {
  matcher: [
    {
      source: "/api/*",
      regexp: "^/api/(.*)",
      locale: false,
      has: [
        { type: "header", key: "Authorization", value: "Bearer Token" },
        { type: "query", key: "userId", value: "123" },
      ],
      missing: [{ type: "cookie", key: "session", value: "active" }],
    },
  ],
};
```

---

### Import and Use Inter Font (Variable Font)

Source: https://nextjs.org/docs/app/api-reference/components/font

Demonstrates importing the 'Inter' font from 'next/font/google' and applying it to the root layout. This example assumes a variable font where weight doesn't need explicit specification.

```tsx
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
```

```jsx
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
```

---

### Generate Metadata with TypeScript in Next.js (Regular Function)

Source: https://nextjs.org/docs/app/api-reference/functions/generate-metadata

Provides an example of using a regular function to generate metadata with type safety in Next.js. The function returns an object conforming to the `Metadata` type.

```tsx
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Next.js",
  };
}
```

---

### Use Local Font with Multiple Files (JS)

Source: https://nextjs.org/docs/app/getting-started/fonts

Provides an example of configuring `localFont` in JavaScript to use multiple font files for a single font family. It specifies the `path`, `weight`, and `style` for each font file, enabling comprehensive font loading.

```js
const roboto = localFont({
  src: [
    {
      path: "./Roboto-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Roboto-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Roboto-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Roboto-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});
```

---

### Configure Icon Content Type (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons

Export the 'contentType' string with the image MIME type from your icon or apple-icon route file to specify the icon's content type. This example uses JavaScript.

```jsx
export const contentType = "image/png";

export default function Icon() {}
```

---

### Create Shared Route Handler with Factory Pattern

Source: https://nextjs.org/docs/app/guides/backend-for-frontend

Demonstrates using a factory pattern from a third-party library to create a shared handler for GET and POST requests in Next.js Route Handlers. The handler's behavior is customized based on the request's method and pathname.

```typescript
import { createHandler } from "third-party-library";

const handler = createHandler({
  /* library-specific options */
});

export const GET = handler;
// or
export { handler as POST };
```

---

### Stream Dynamic Content with Suspense and PPR

Source: https://nextjs.org/docs/app/getting-started/partial-prerendering

When using dynamic APIs (like `cookies`) that require request data, wrap the dynamic component with `<Suspense>` to ensure it streams correctly while the rest of the page benefits from Partial Prerendering (PPR). This example shows streaming user session data.

```jsx
import { cookies } from "next/headers";

export async function User() {
  const session = (await cookies()).get("session")?.value;
  return "...";
}
```

```tsx
import { cookies } from "next/headers";

export async function User() {
  const session = (await cookies()).get("session")?.value;
  return "...";
}
```

```tsx
import { Suspense } from "react";
import { User, AvatarSkeleton } from "./user";

export const experimental_ppr = true;

export default function Page() {
  return (
    <section>
      <h1>This will be prerendered</h1>
      <Suspense fallback={<AvatarSkeleton />}>
        <User />
      </Suspense>
    </section>
  );
}
```

```jsx
import { Suspense } from "react";
import { User, AvatarSkeleton } from "./user";

export const experimental_ppr = true;

export default function Page() {
  return (
    <section>
      <h1>This will be prerendered</h1>
      <Suspense fallback={<AvatarSkeleton />}>
        <User />
      </Suspense>
    </section>
  );
}
```

---

### Next.js Content Security Policy (CSP)

Source: https://context7_llms

Implement a Content Security Policy (CSP) in your Next.js application to mitigate cross-site scripting (XSS) and other code injection attacks. This guide shows how to configure CSP headers.

```javascript
export async function middleware(request) {
  const csp = `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data:; connect-src 'self'; font-src 'self'; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests;`;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("content-security-policy", csp);

  return new Response(request.body, {
    headers: {
      ...Object.fromEntries(requestHeaders),
      "x-middleware- பயனர்": "true",
    },
  });
}
```

---

### Next.js Incremental Static Regeneration (ISR)

Source: https://context7_llms

Implement Incremental Static Regeneration (ISR) in Next.js to update static pages after build time without a full rebuild. This guide explains the revalidation process.

```javascript
export async function getStaticProps() {
  const res = await fetch("https://...");
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}
```

---

### Hover-Triggered Prefetch with Next.js Link

Source: https://nextjs.org/docs/app/guides/prefetching

This example demonstrates how to modify the Next.js Link component to trigger prefetching only when the user hovers over the link, instead of the default viewport entry. It uses local state to manage the prefetch behavior.

```tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export function HoverPrefetchLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [active, setActive] = useState(false);

  return (
    <Link
      href={href}
      prefetch={active ? null : false}
      onMouseEnter={() => setActive(true)}
    >
      {children}
    </Link>
  );
}
```

---

### Next.js Loading UI for Dashboard Route

Source: https://nextjs.org/docs/app/getting-started/linking-and-navigating

This snippet shows how to create a `loading.tsx` file in Next.js to display fallback UI while a route is loading. It's essential for enabling partial prefetching and immediate navigation feedback.

```tsx
export default function Loading() {
  // Add fallback UI that will be shown while the route is loading.
  return <LoadingSkeleton />;
}
```

```jsx
export default function Loading() {
  // Add fallback UI that will be shown while the route is loading.
  return <LoadingSkeleton />;
}
```

---

### Load External Libraries On-Demand with import()

Source: https://nextjs.org/docs/app/guides/lazy-loading

Demonstrates loading an external library, `fuse.js`, on demand using the dynamic `import()` function. This example shows how to use the library for fuzzy search functionality, loading it only after user interaction.

```jsx
"use client";

import { useState } from "react";

const names = ["Tim", "Joe", "Bel", "Lee"];

export default function Page() {
  const [results, setResults] = useState();

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={async (e) => {
          const { value } = e.currentTarget;
          // Dynamically load fuse.js
          const Fuse = (await import("fuse.js")).default;
          const fuse = new Fuse(names);

          setResults(fuse.search(value));
        }}
      />
      <pre>Results: {JSON.stringify(results, null, 2)}</pre>
    </div>
  );
}
```

---

### Next.js Page Loading UI (jsx)

Source: https://nextjs.org/docs/app/getting-started/fetching-data

Defines the loading UI for a Next.js page using JavaScript. This component serves as a placeholder, showing a loading message while the actual page content is being fetched.

```jsx
export default function Loading() {
  // Define the Loading UI here
  return <div>Loading...</div>;
}
```

---

### React: Memoize Data Fetching with cache function (JavaScript)

Source: https://nextjs.org/docs/app/guides/caching

This JavaScript example demonstrates how to use the React 'cache' function to manually memoize a data fetching operation. It wraps an async function that fetches an item from a database.

```js
import { cache } from "react";
import db from "@/lib/db";

export const getItem = cache(async (id) => {
  const item = await db.item.findUnique({ id });
  return item;
});
```

---

### Playwright E2E Test for Navigation

Source: https://nextjs.org/docs/app/guides/testing/playwright

This TypeScript test file uses Playwright to verify navigation between the home and about pages. It starts from the home page, clicks the 'About' link, and asserts that the URL and content of the about page are correct.

```typescript
import { test, expect } from "@playwright/test";

test("should navigate to the about page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("http://localhost:3000/");
  // Find an element with the text 'About' and click on it
  await page.click("text=About");
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL("http://localhost:3000/about");
  // The new page should contain an h1 with "About"
  await expect(page.locator("h1")).toContainText("About");
});
```

---

### Configure assetPrefix and rewrites for older Next.js versions

Source: https://nextjs.org/docs/app/guides/multi-zones

For Next.js versions prior to 15, configure `assetPrefix` and add a `rewrites` rule in `next.config.js` to handle static assets correctly. This ensures assets are properly proxied.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/blog-static",
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/blog-static/_next/:path+",
          destination: "/_next/:path+",
        },
      ],
    };
  },
};
```

---

### Vitest Unit Test for Page Component (JavaScript)

Source: https://nextjs.org/docs/pages/guides/testing/vitest

Write a Vitest unit test using React Testing Library to confirm that the Next.js page component correctly renders its main heading.

```jsx
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../pages/index";

test("Page", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
});
```

---

### Configure generateBuildId in next.config.js

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/generateBuildId

This example shows how to set a custom `generateBuildId` function in `next.config.js`. The function can return any value, such as a Git hash from an environment variable, to ensure a consistent build ID across different deployments.

```javascript
module.exports = {
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    return process.env.GIT_HASH;
  },
};
```

---

### Type JSON-LD with schema-dts in TypeScript

Source: https://nextjs.org/docs/app/guides/json-ld

This example demonstrates how to use the `schema-dts` library in TypeScript to define JSON-LD objects. It shows the correct typing for a Product schema, ensuring data integrity and providing autocompletion.

```typescript
import { Product, WithContext } from "schema-dts";

const jsonLd: WithContext<Product> = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Next.js Sticker",
  image: "https://nextjs.org/imgs/sticker.png",
  description: "Dynamic at the speed of static.",
};
```

---

### Load Environment Variables for Testing with loadEnvConfig

Source: https://nextjs.org/docs/pages/guides/environment-variables

This snippet demonstrates how to use the `loadEnvConfig` function from the `@next/env` package to load environment variables for testing environments, such as Jest. It ensures that your test setup correctly loads the necessary configuration.

```javascript
import { loadEnvConfig } from "@next/env";

export default async () => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
};
```

---

### Next.js Blog Page with Suspense (tsx)

Source: https://nextjs.org/docs/app/getting-started/fetching-data

Renders a blog page in Next.js using TypeScript, incorporating Suspense for streaming specific content. It displays immediate header information and streams the blog list with a skeleton loader.

```tsx
import { Suspense } from "react";
import BlogList from "@/components/BlogList";
import BlogListSkeleton from "@/components/BlogListSkeleton";

export default function BlogPage() {
  return (
    <div>
      {/* This content will be sent to the client immediately */}
      <header>
        <h1>Welcome to the Blog</h1>
        <p>Read the latest posts below.</p>
      </header>
      <main>
        {/* Any content wrapped in a <Suspense> boundary will be streamed */}
        <Suspense fallback={<BlogListSkeleton />}>
          <BlogList />
        </Suspense>
      </main>
    </div>
  );
}
```

---

### Wildcard Path Matching in Next.js Headers

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/headers

This example shows how to implement wildcard path matching using `*` in the `source` path. This allows matching multiple URL segments, and the wildcard parameter can be referenced in header keys and values.

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: "/blog/:slug*",
        headers: [
          {
            key: "x-slug",
            value: ":slug*",
          },
          {
            key: "x-slug-:slug*",
            value: "my other custom header value",
          },
        ],
      },
    ];
  },
};
```

---

### manifest.json API Reference

Source: https://nextjs.org/docs/app/guides/progressive-web-apps

This entry provides a reference to the API documentation for the manifest.json file, which is crucial for defining PWA properties and behavior.

```json
{
  "name": "Your App Name",
  "short_name": "App",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#333333",
  "icons": [
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

### Configure Jest with Next.js (JavaScript)

Source: https://nextjs.org/docs/pages/guides/testing/jest

Configure Jest in `jest.config.js` to work with Next.js by using `next/jest`. This includes setting the project directory and specifying the test environment.

```js
const nextJest = require("next/jest");

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
```

---

### Fetch User Data in Next.js (TSX)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/layout

A TypeScript example demonstrating how to fetch user data using the `fetch` API within a Next.js application. This function is designed to be used in server components or data fetching utilities.

```typescript
export async function getUser(id: string) {
  const res = await fetch(`https://.../users/${id}`);
  return res.json();
}
```

---

### styled-jsx Registry Setup (JavaScript)

Source: https://nextjs.org/docs/app/guides/css-in-js

This code snippet shows the JavaScript equivalent for setting up a styled-jsx style registry in a Next.js Client Component. It mirrors the TypeScript version, using `createStyleRegistry` and `useServerInsertedHTML` for style management.

```jsx
"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { StyleRegistry, createStyleRegistry } from "styled-jsx";

export default function StyledJsxRegistry({ children }) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [jsxStyleRegistry] = useState(() => createStyleRegistry());

  useServerInsertedHTML(() => {
    const styles = jsxStyleRegistry.styles();
    jsxStyleRegistry.flush();
    return <>{styles}</>;
  });

  return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>;
}
```

---

### Configure Icon Content Type (TypeScript)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons

Export the 'contentType' string with the image MIME type from your icon or apple-icon route file to specify the icon's content type. This example uses TypeScript.

```tsx
export const contentType = "image/png";

export default function Icon() {}
```

---

### API Route Handler (App Router - TypeScript)

Source: https://nextjs.org/docs/app/guides/migrating/app-router-migration

Provides an example of a Route Handler in the `app` directory using TypeScript. Route Handlers replace API Routes and allow custom request handling using Web Request and Response APIs.

```ts
export async function GET(request: Request) {}
```

---

### Implement permanentRedirect in Next.js Page

Source: https://nextjs.org/docs/app/api-reference/functions/permanentRedirect

This example demonstrates how to use the `permanentRedirect` function within a Next.js page component. If a team resource is not found, it redirects the user to the login page using a permanent redirect.

```jsx
import { permanentRedirect } from "next/navigation";

async function fetchTeam(id) {
  const res = await fetch("https://...");
  if (!res.ok) return undefined;
  return res.json();
}

export default async function Profile({ params }) {
  const { id } = await params;
  const team = await fetchTeam(id);
  if (!team) {
    permanentRedirect("/login");
  }

  // ...
}
```

---

### Next.js Migrating from Create React App

Source: https://context7_llms

Guidance on migrating an existing Create React App (CRA) project to Next.js. This covers common challenges and steps to transition your application.

```bash
# 1. Install Next.js
npm install next react react-dom

# 2. Update package.json scripts
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}

# 3. Create pages directory and move components/pages
# 4. Adjust imports and configurations as needed
```

---

### Handle unauthorized access in Server Component (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/functions/unauthorized

Implement the `unauthorized` function within a Server Component to redirect users to a 401 page if they are not authenticated. This example checks for a valid session before rendering the dashboard.

```jsx
import { verifySession } from "@/app/lib/dal";
import { unauthorized } from "next/navigation";

export default async function DashboardPage() {
  const session = await verifySession();

  if (!session) {
    unauthorized();
  }

  // Render the dashboard for authenticated users
  return (
    <main>
      <h1>Welcome to the Dashboard</h1>
      <p>Hi, {session.user.name}.</p>
    </main>
  );
}
```

---

### Render Not Found UI with notFound()

Source: https://nextjs.org/docs/app/api-reference/functions/not-found

This example demonstrates how to use the `notFound()` function from 'next/navigation' to render a not-found UI when a user is not found. It fetches user data and calls `notFound()` if the user data is undefined, ensuring a proper 404 response.

```jsx
import { notFound } from "next/navigation";

async function fetchUser(id) {
  const res = await fetch("https://...");
  if (!res.ok) return undefined;
  return res.json();
}

export default async function Profile({ params }) {
  const { id } = await params;
  const user = await fetchUser(id);

  if (!user) {
    notFound();
  }

  // ...
}
```

---

### Cypress E2E Test for Navigation

Source: https://nextjs.org/docs/app/guides/testing/cypress

A Cypress E2E test that verifies navigation between the home and about pages in a Next.js application.

```javascript
describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="about"]').click();

    // The new url should include "/about"
    cy.url().should("include", "/about");

    // The new page should contain an h1 with "About"
    cy.get("h1").contains("About");
  });
});
```

---

### Read Current Pathname with usePathname (JSX)

Source: https://nextjs.org/docs/app/api-reference/functions/use-pathname

This example shows how to use the `usePathname` hook in a Next.js Client Component using JavaScript (JSX) to display the current URL's pathname. It imports the hook from 'next/navigation'.

```jsx
"use client";

import { usePathname } from "next/navigation";

export default function ExampleClientComponent() {
  const pathname = usePathname();
  return <p>Current pathname: {pathname}</p>;
}
```

---

### Generate bundle analysis report

Source: https://nextjs.org/docs/pages/guides/package-bundling

Generates a bundle analysis report by running the build command with the ANALYZE environment variable set to true. This helps in identifying large dependencies and optimizing code.

```bash
ANALYZE=true npm run build
# or
ANALYZE=true yarn build
# or
ANALYZE=true pnpm build
```

---

### Revalidate a Specific URL

Source: https://nextjs.org/docs/app/api-reference/functions/revalidatePath

This example shows how to revalidate a single, specific URL. Calling revalidatePath with a literal URL like '/blog/post-1' marks that particular URL for revalidation on the next page visit.

```ts
import { revalidatePath } from "next/cache";
revalidatePath("/blog/post-1");
```

---

### Configure Redirect with Path Parameter Matching

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/redirects

Demonstrates how to use path parameters in redirects. This example redirects from '/old-blog/:slug' to '/news/:slug', preserving the matched parameter in the destination URL. It uses a permanent redirect (308 status code).

```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: "/old-blog/:slug",
        destination: "/news/:slug",
        permanent: true,
      },
    ];
  },
};
```

---

### Add Tailwind CSS directives to global CSS

Source: https://nextjs.org/docs/app/guides/tailwind-v3-css

Adds the necessary Tailwind CSS directives (@tailwind base, @tailwind components, @tailwind utilities) to the global CSS file, enabling Tailwind's styling capabilities.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### Handle Custom Next.js Metrics

Source: https://nextjs.org/docs/pages/api-reference/functions/use-report-web-vitals

This example illustrates how to handle custom Next.js performance metrics, such as hydration time and route change rendering time, using a switch statement. These metrics are useful for diagnosing performance issues specific to the Next.js framework.

```jsx
import { useReportWebVitals } from "next/web-vitals";

function handleCustomMetrics(metrics) {
  switch (metric.name) {
    case "Next.js-hydration":
      // handle hydration results
      break;
    case "Next.js-route-change-to-render":
      // handle route-change to render results
      break;
    case "Next.js-render":
      // handle render results
      break;
    default:
      break;
  }
}

function MyApp({ Component, pageProps }) {
  useReportWebVitals(handleCustomMetrics);

  return <Component {...pageProps} />;
}
```

---

### Use Tailwind CSS classes in Next.js page (JavaScript)

Source: https://nextjs.org/docs/app/guides/tailwind-v3-css

Demonstrates using Tailwind CSS utility classes to style an H1 element within a Next.js page component written in JavaScript.

```jsx
export default function Page() {
  return <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>;
}
```

---

### Next.js: Generate Subset of Static Params at Build Time

Source: https://nextjs.org/docs/app/guides/caching

This example shows how to use generateStaticParams to statically render a subset of paths at build time, with the remaining paths rendered at runtime on their first visit. It slices the fetched data.

```jsx
export async function generateStaticParams() {
  const posts = await fetch("https://.../posts").then((res) => res.json());

  // Render the first 10 posts at build time
  return posts.slice(0, 10).map((post) => ({
    slug: post.slug,
  }));
}
```

---

### Wildcard Path Matching in Next.js Headers

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/headers

This example shows how to implement wildcard path matching using `*` in the `source` path. This allows matching multiple URL segments, and the wildcard parameter can be referenced in header keys and values.

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: "/blog/:slug*",
        headers: [
          {
            key: "x-slug",
            value: ":slug*",
          },
          {
            key: "x-slug-:slug*",
            value: "my other custom header value",
          },
        ],
      },
    ];
  },
};
```

---

### Handle unauthorized access in Server Component (TypeScript)

Source: https://nextjs.org/docs/app/api-reference/functions/unauthorized

Implement the `unauthorized` function within a Server Component to redirect users to a 401 page if they are not authenticated. This example checks for a valid session before rendering the dashboard.

```tsx
import { verifySession } from "@/app/lib/dal";
import { unauthorized } from "next/navigation";

export default async function DashboardPage() {
  const session = await verifySession();

  if (!session) {
    unauthorized();
  }

  // Render the dashboard for authenticated users
  return (
    <main>
      <h1>Welcome to the Dashboard</h1>
      <p>Hi, {session.user.name}.</p>
    </main>
  );
}
```

---

### Load Environment Variables for Testing with loadEnvConfig

Source: https://nextjs.org/docs/app/guides/environment-variables

This snippet demonstrates how to use the `loadEnvConfig` function from the `@next/env` package to load environment variables for testing environments, such as Jest. It ensures that your test setup correctly loads the necessary configuration.

```javascript
import { loadEnvConfig } from "@next/env";

export default async () => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
};
```

---

### Next.js Request Context for Serverless WaitUntil

Source: https://nextjs.org/docs/app/api-reference/functions/after

Demonstrates how Next.js accesses the `waitUntil` primitive in a serverless context. It shows the expected structure of the request context and provides an example implementation using `AsyncLocalStorage` to manage the context and inject the `waitUntil` accessor.

```jsx
const RequestContext = globalThis[Symbol.for("@next/request-context")];
const contextValue = RequestContext?.get();
const waitUntil = contextValue?.waitUntil;
```

```tsx
type NextRequestContext = {
  get(): NextRequestContextValue | undefined;
};

type NextRequestContextValue = {
  waitUntil?: (promise: Promise<any>) => void;
};
```

```tsx
import { AsyncLocalStorage } from "node:async_hooks";

const RequestContextStorage = new AsyncLocalStorage<NextRequestContextValue>();

// Define and inject the accessor that next.js will use
const RequestContext: NextRequestContext = {
  get() {
    return RequestContextStorage.getStore();
  },
};
globalThis[Symbol.for("@next/request-context")] = RequestContext;

const handler = (req, res) => {
  const contextValue = { waitUntil: YOUR_WAITUNTIL };
  // Provide the value
  return RequestContextStorage.run(contextValue, () => nextJsHandler(req, res));
};
```

---

### Force Dynamic Rendering in Next.js (TSX)

Source: https://nextjs.org/docs/app/guides/content-security-policy

This example demonstrates how to force dynamic rendering for a page in Next.js using TypeScript. It ensures the page is rendered on each request, which is necessary for nonce injection.

```tsx
import { connection } from "next/server";

export default async function Page() {
  // wait for an incoming request to render this page
  await connection();
  // Your page content
}
```

---

### Configure assetPrefix and rewrites for older Next.js versions

Source: https://nextjs.org/docs/pages/guides/multi-zones

For Next.js versions prior to 15, configure `assetPrefix` and add a `rewrites` rule in `next.config.js` to handle static assets correctly. This ensures assets are properly proxied.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/blog-static",
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/blog-static/_next/:path+",
          destination: "/_next/:path+",
        },
      ],
    };
  },
};
```

---

### Import global CSS in Next.js layout (JavaScript)

Source: https://nextjs.org/docs/app/guides/tailwind-v3-css

Imports the global CSS file into the root layout component in a Next.js application using JavaScript, ensuring Tailwind styles are applied throughout the application.

```jsx
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

### Enable Core Web Vitals Rules in ESLint

Source: https://nextjs.org/docs/app/api-reference/config/eslint

Integrate Next.js Core Web Vitals optimizations into your ESLint setup by extending `next/core-web-vitals`. This configuration enables stricter rules that impact Core Web Vitals performance metrics.

```javascript
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals"],
  }),
];

export default eslintConfig;
```

---

### Unit Testing Next.js Configuration

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js

Shows how to unit test Next.js configuration files using experimental utilities from `next/experimental/testing/server`. This includes testing redirects and other routing configurations.

```javascript
import {
  getRedirectUrl,
  unstable_getResponseFromNextConfig,
} from "next/experimental/testing/server";

const response = await unstable_getResponseFromNextConfig({
  url: "https://nextjs.org/test",
  nextConfig: {
    async redirects() {
      return [{ source: "/test", destination: "/test2", permanent: false }];
    },
  },
});
expect(response.status).toEqual(307);
expect(getRedirectUrl(response)).toEqual("https://nextjs.org/test2");
```

---

### Dynamic Route Icon Generation (JS)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons

This example demonstrates generating an icon for a dynamic route segment in Next.js using JavaScript. The `Icon` component accepts `params` which can contain dynamic route parameters such as `slug`.

```jsx
export default function Icon({ params }) {
  // ...
}
```

---

### VS Code Debug Configurations for Next.js

Source: https://nextjs.org/docs/app/guides/debugging

Provides JSON configurations for VS Code's `launch.json` file to enable debugging of Next.js applications. It includes settings for server-side, client-side (Chrome and Firefox), and full-stack debugging, allowing developers to attach debuggers to their Next.js processes.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    },
    {
      "name": "Next.js: debug client-side (Firefox)",
      "type": "firefox",
      "request": "launch",
      "url": "http://localhost:3000",
      "reAttach": true,
      "pathMappings": [
        {
          "url": "webpack://_N_E",
          "path": "${workspaceFolder}"
        }
      ]
    },
    {
      "name": "Next.js: debug full stack",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/next/dist/bin/next",
      "runtimeArgs": ["--inspect"],
      "skipFiles": ["<node_internals>/**"],
      "serverReadyAction": {
        "action": "debugWithEdge",
        "killOnServerStop": true,
        "pattern": "- Local:.+(https?://.+)",
        "uriFormat": "%s",
        "webRoot": "${workspaceFolder}"
      }
    }
  ]
}
```

---

### Example Tailwind CSS Usage in Next.js (TSX)

Source: https://nextjs.org/docs/pages/getting-started/css

Demonstrates using Tailwind CSS utility classes to style a page component in Next.js using TSX. It applies a flex layout and a large font size to a heading.

```tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
    </main>
  );
}
```

---

### Using Script Component in Next.js (JSX)

Source: https://nextjs.org/docs/pages/api-reference/components/script

Shows how to integrate an external JavaScript file using the Next.js Script component within a JSX file. This example imports the Script component and renders it with a specified source URL.

```jsx
import Script from "next/script";

export default function Dashboard() {
  return (
    <>
      <Script src="https://example.com/script.js" />
    </>
  );
}
```

---

### Generate Multiple Sitemaps with generateSitemaps (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

This JavaScript example shows how to implement the `generateSitemaps` function for creating multiple sitemaps. Similar to the TypeScript version, it handles fetching data in chunks to manage sitemap size and returns an array of IDs for generating individual sitemaps.

```js
import { BASE_URL } from "@/app/lib/constants";

export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
}

export default async function sitemap({ id }) {
  // Google's limit is 50,000 URLs per sitemap
  const start = id * 50000;
  const end = start + 50000;
  const products = await getProducts(
    `SELECT id, date FROM products WHERE id BETWEEN ${start} AND ${end}`
  );
  return products.map((product) => ({
    url: `${BASE_URL}/product/${product.id}`,
    lastModified: product.date,
  }));
}
```

---

### Configure Tailwind CSS template paths

Source: https://nextjs.org/docs/app/guides/tailwind-v3-css

Configures the template paths in the `tailwind.config.js` file to include all relevant JavaScript, TypeScript, JSX, TSX, and MDX files within the app, pages, and components directories.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

### Handle Signup and Redirect with Session Creation (TypeScript)

Source: https://nextjs.org/docs/app/guides/authentication

Shows how to integrate session creation into a signup process within a Next.js Server Action. After creating the session using `createSession`, it redirects the user to their profile page.

```TypeScript
import { createSession } from '@/app/lib/session'

export async function signup(state: FormState, formData: FormData) {
  // Previous steps:
  // 1. Validate form fields
  // 2. Prepare data for insertion into database
  // 3. Insert the user into the database or call an Library API

  // Current steps:
  // 4. Create user session
  await createSession(user.id)
  // 5. Redirect user
  redirect('/profile')
}
```

---

### Custom Next.js Cache Handler Implementation

Source: https://nextjs.org/docs/app/guides/self-hosting

Provides a basic implementation of a custom Next.js cache handler using a JavaScript Map for in-memory storage. It includes methods for getting, setting, and revalidating cache entries based on tags.

```javascript
const cache = new Map();

module.exports = class CacheHandler {
  constructor(options) {
    this.options = options;
  }

  async get(key) {
    // This could be stored anywhere, like durable storage
    return cache.get(key);
  }

  async set(key, data, ctx) {
    // This could be stored anywhere, like durable storage
    cache.set(key, {
      value: data,
      lastModified: Date.now(),
      tags: ctx.tags,
    });
  }

  async revalidateTag(tags) {
    // tags is either a string or an array of strings
    tags = [tags].flat();
    // Iterate over all entries in the cache
    for (let [key, value] of cache) {
      // If the value's tags include the specified tag, delete this entry
      if (value.tags.some((tag) => tags.includes(tag))) {
        cache.delete(key);
      }
    }
  }

  // If you want to have temporary in memory cache for a single request that is reset
  // before the next request you can leverage this method
  resetRequestCache() {}
};
```

---

### User Data Fetching with Auth Check (Next.js DAL)

Source: https://nextjs.org/docs/app/guides/authentication

Provides an example of a data access layer (DAL) function in Next.js that fetches user data and includes an authentication check using `verifySession`. This pattern ensures authorization is checked at the data retrieval point.

```ts
export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  // Get user ID from session and fetch data
});
```

```js
export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  // Get user ID from session and fetch data
});
```

---

### Next.js: Generate No Static Params at Build Time

Source: https://nextjs.org/docs/app/guides/caching

This example demonstrates how to use generateStaticParams to render all paths at runtime on their first visit by returning an empty array. This effectively disables static rendering at build time for all paths.

```jsx
export async function generateStaticParams() {
  return [];
}
```

---

### Track Navigation Performance with PerformanceObserver (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation-client

This JavaScript snippet shows how to track navigation performance, calculating 'Time to Interactive', using the PerformanceObserver API. It observes 'navigation' entry types and logs the time difference. It also includes a function to mark the start of a router transition.

```JavaScript
const startTime = performance.now()

const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry instanceof PerformanceNavigationTiming) {
      console.log('Time to Interactive:', entry.loadEventEnd - startTime)
    }
  }
})

observer.observe({ entryTypes: ['navigation'] })

export function onRouterTransitionStart(url) {
  performance.mark(`nav-start-${url}`)
}
```

---

### React: Memoize Data Fetching with cache function (TypeScript)

Source: https://nextjs.org/docs/app/guides/caching

This TypeScript example demonstrates how to use the React 'cache' function to manually memoize a data fetching operation. It wraps an async function that fetches an item from a database.

```ts
import { cache } from "react";
import db from "@/lib/db";

export const getItem = cache(async (id: string) => {
  const item = await db.item.findUnique({ id });
  return item;
});
```

---

### Fetch Data with SWR in Next.js Client Component (TSX)

Source: https://nextjs.org/docs/app/getting-started/fetching-data

Demonstrates how to use the SWR library to fetch data in a Next.js Client Component using TypeScript. It includes basic loading and error handling, and maps fetched data to a list.

```tsx
"use client";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function BlogPage() {
  const { data, error, isLoading } = useSWR(
    "https://api.vercel.app/blog",
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((post: { id: string; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

---

### Generate Route Types for Specific Directory

Source: https://nextjs.org/docs/app/api-reference/cli/next

This example shows how to generate TypeScript route types for a specific directory using the `next typegen` command. If no directory is provided, it defaults to the current directory. Output files are written to the `<distDir>/types` directory.

```bash
next typegen
```

```bash
next typegen ./apps/web
```

---

### Handle Uncaught Exceptions in getStaticProps (JavaScript)

Source: https://nextjs.org/docs/pages/guides/incremental-static-regeneration

This JavaScript example shows how to manage errors in `getStaticProps`. When an error occurs during fetching, the current cached page is preserved, and the fetch is retried on subsequent requests.

```javascript
export async function getStaticProps({ params }) {
  // If this request throws an uncaught error, Next.js will
  // not invalidate the currently shown page and
  // retry getStaticProps on the next request.
  const res = await fetch(`https://api.vercel.app/blog/${params.id}`);
  const post = await res.json();

  if (!res.ok) {
    // If there is a server error, you might want to
    // throw an error instead of returning so that the cache is not updated
    // until the next successful request.
    throw new Error(`Failed to fetch posts, received status ${res.status}`);
  }

  return {
    props: { post },
    // Next.js will invalidate the cache when a
    // request comes in, at most once every 60 seconds.
    revalidate: 60,
  };
}
```

---

### Basic Next.js Image Component Usage (JSX)

Source: https://nextjs.org/docs/app/getting-started/images

Demonstrates the basic usage of the Next.js Image component in a JSX file. It imports the Image component from 'next/image' and renders it with placeholder src and alt attributes.

```jsx
import Image from "next/image";

export default function Page() {
  return <Image src="" alt="" />;
}
```

---

### Schedule Logging After Layout Render (JSX)

Source: https://nextjs.org/docs/app/api-reference/functions/after

Schedules a custom logging function to execute after the Next.js layout component is rendered and sent to the user. This example demonstrates using `after` within a Server Component layout using JavaScript.

```jsx
import { after } from "next/server";
// Custom logging function
import { log } from "@/app/utils";

export default function Layout({ children }) {
  after(() => {
    // Execute after the layout is rendered and sent to the user
    log();
  });
  return <>{children}</>;
}
```

---

### Use Tailwind CSS classes in Next.js page (TypeScript)

Source: https://nextjs.org/docs/app/guides/tailwind-v3-css

Demonstrates using Tailwind CSS utility classes to style an H1 element within a Next.js page component written in TypeScript.

```tsx
export default function Page() {
  return <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>;
}
```

---

### Render Resource Hints with ReactDOM

Source: https://nextjs.org/docs/app/api-reference/functions/generate-metadata

Demonstrates how to use ReactDOM methods to preload, preconnect, and prefetch DNS for external resources. These methods allow for safe insertion into the document's head, bypassing direct Metadata API support for these resource hints.

```tsx
"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preload("...", { as: "..." });
  ReactDOM.preconnect("...", { crossOrigin: "..." });
  ReactDOM.prefetchDNS("...");

  return "...";
}
```

```jsx
"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preload("...", { as: "..." });
  ReactDOM.preconnect("...", { crossOrigin: "..." });
  ReactDOM.prefetchDNS("...");

  return "...";
}
```

---

### Configure SVG Loader with Options for Turbopack (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack

This example shows how to configure a webpack loader with options for Turbopack. It uses an object format to pass specific options, such as 'icon: true', to the '@svgr/webpack' loader for SVG files.

```javascript
module.exports = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
            },
          },
        ],
        as: "*.js",
      },
    },
  },
};
```

---

### Configure SWR with Fallback Data in Next.js Layout (JS)

Source: https://nextjs.org/docs/app/guides/single-page-applications

Shows how to set up SWR with fallback data in a Next.js layout using JavaScript. This approach enables server-side data provision for client-side fetching with useSWR.

```js
import { SWRConfig } from "swr";
import { getUser } from "./user"; // some server-side function

export default function RootLayout({ children }) {
  return (
    <SWRConfig
      value={{
        fallback: {
          // We do NOT await getUser() here
          // Only components that read this data will suspend
          "/api/user": getUser(),
        },
      }}
    >
      {children}
    </SWRConfig>
  );
}
```

---

### Middleware Rewrite Logic (JavaScript)

Source: https://nextjs.org/docs/pages/api-reference/components/link

This JavaScript code provides an example of Next.js middleware for route rewriting. It handles the '/dashboard' route by rewriting to either an authenticated or public dashboard path based on the user's authentication status.

```javascript
import { NextResponse } from "next/server";

export function middleware(request) {
  const nextUrl = request.nextUrl;
  if (nextUrl.pathname === "/dashboard") {
    if (request.cookies.authToken) {
      return NextResponse.rewrite(new URL("/auth/dashboard", request.url));
    } else {
      return NextResponse.rewrite(new URL("/public/dashboard", request.url));
    }
  }
}
```

---

### Get Image Props for Custom Components

Source: https://nextjs.org/docs/pages/api-reference/components/image

The `getImageProps` function extracts props for an `<img>` element, allowing them to be passed to other components or elements like `<canvas>`. This can improve performance by avoiding React state.

```jsx
import { getImageProps } from "next/image";

const props = getImageProps({
  src: "https://example.com/image.jpg",
  alt: "A scenic mountain view",
  width: 1200,
  height: 800,
});

function ImageWithCaption() {
  return (
    <figure>
      <img {...props} />
      <figcaption>A scenic mountain view</figcaption>
    </figure>
  );
}
```

---

### Generate Multiple Sitemaps with TypeScript

Source: https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps

This TypeScript example demonstrates how to implement `generateSitemaps` to create multiple sitemaps based on product data. It fetches products within specific ID ranges and formats them for sitemap entries, including the URL and last modified date.

```typescript
import { BASE_URL } from "@/app/lib/constants";

export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  // Google's limit is 50,000 URLs per sitemap
  const start = id * 50000;
  const end = start + 50000;
  const products = await getProducts(
    `SELECT id, date FROM products WHERE id BETWEEN ${start} AND ${end}`
  );
  return products.map((product) => ({
    url: `${BASE_URL}/product/${product.id}`,
    lastModified: product.date,
  }));
}
```

---

### Initialize NodeSDK for OpenTelemetry (TypeScript)

Source: https://nextjs.org/docs/pages/guides/open-telemetry

Initializes the OpenTelemetry NodeSDK with an OTLP trace exporter and sets the service name. This configuration is intended for Node.js runtime environments.

```ts
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { Resource } from "@opentelemetry/resources";
import { NodeSDK } from "@opentelemetry/sdk-node";
import { SimpleSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { ATTR_SERVICE_NAME } from "@opentelemetry/semantic-conventions";

const sdk = new NodeSDK({
  resource: new Resource({
    [ATTR_SERVICE_NAME]: "next-app",
  }),
  spanProcessor: new SimpleSpanProcessor(new OTLPTraceExporter()),
});
sdk.start();
```

---

### Get Image Props for Custom Components

Source: https://nextjs.org/docs/app/api-reference/components/image

The `getImageProps` function extracts props for an `<img>` element, allowing them to be passed to other components or elements like `<canvas>`. This can improve performance by avoiding React state.

```jsx
import { getImageProps } from "next/image";

const props = getImageProps({
  src: "https://example.com/image.jpg",
  alt: "A scenic mountain view",
  width: 1200,
  height: 800,
});

function ImageWithCaption() {
  return (
    <figure>
      <img {...props} />
      <figcaption>A scenic mountain view</figcaption>
    </figure>
  );
}
```

---

### Client Component Form with useActionState (JavaScript)

Source: https://nextjs.org/docs/app/guides/forms

This client component example in JavaScript shows how to use React's `useActionState` hook for form handling and displaying validation feedback. It links a form to a server action and conditionally renders error messages.

```jsx
"use client";

import { useActionState } from "react";
import { createUser } from "@/app/actions";

const initialState = {
  message: "",
};

export function Signup() {
  const [state, formAction, pending] = useActionState(createUser, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" required />
      {/* ... */}
      <p aria-live="polite">{state?.message}</p>
      <button disabled={pending}>Sign up</button>
    </form>
  );
}
```

---

### Configure Cypress Component Testing (TypeScript)

Source: https://nextjs.org/docs/app/guides/testing/cypress

This snippet shows the necessary configuration in `cypress.config.ts` to enable component testing for a Next.js project using webpack as the bundler.

```ts
import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
```

---

### Using Typed Links and Navigation in App Router

Source: https://nextjs.org/docs/pages/api-reference/config/typescript

Demonstrates the usage of statically typed links with `next/link` and navigation methods like `push`, `replace`, and `prefetch` from `next/navigation`. It shows examples with literal and dynamic `href`s, including casting non-literal strings to `Route`.

```tsx
"use client";

import type { Route } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Example() {
  const router = useRouter();
  const slug = "nextjs";

  return (
    <>
      {/* Link: literal and dynamic */}
      <Link href="/about" />
      <Link href={`/blog/${slug}`} />
      <Link href={("/blog" + slug) as Route} />
      {/* TypeScript error if href is not a valid route */}
      <Link href="/aboot" />

      {/* Router: literal and dynamic strings are validated */}
      <button onClick={() => router.push("/about")}>Push About</button>
      <button onClick={() => router.replace(`/blog/${slug}`)}>
        Replace Blog
      </button>
      <button onClick={() => router.prefetch("/contact")}>
        Prefetch Contact
      </button>

      {/* For non-literal strings, cast to Route */}
      <button onClick={() => router.push(("/blog" + slug) as Route)}>
        Push Non-literal Blog
      </button>
    </>
  );
}
```

---

### Configuration as an Async Function

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js

Illustrates how to export an asynchronous function from `next.config.js` to handle Next.js configuration. This is useful for dynamic configuration loading or asynchronous operations during build time.

```javascript
// @ts-check

module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
  };
  return nextConfig;
};
```

---

### Configure CORS Headers in Next.js

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/headers

Sets Cross-Origin Resource Sharing (CORS) headers to control which external sites can access API endpoints. This example allows all origins and specifies allowed methods and headers.

```javascript
async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Set your origin
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  }
```

---

### Read Params in Next.js Client Components

Source: https://nextjs.org/docs/app/api-reference/file-conventions/layout

This example shows how to access dynamic route parameters within a Client Component in Next.js using React's `use` function to handle the promise returned by `params`.

```tsx
"use client";

import { use } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
}
```

```js
"use client";

import { use } from "react";

export default function Page({ params }) {
  const { slug } = use(params);
}
```

---

### Initialize NodeSDK for OpenTelemetry (TypeScript)

Source: https://nextjs.org/docs/app/guides/open-telemetry

Initializes the OpenTelemetry NodeSDK with an OTLP trace exporter and sets the service name. This configuration is intended for Node.js runtime environments.

```ts
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { Resource } from "@opentelemetry/resources";
import { NodeSDK } from "@opentelemetry/sdk-node";
import { SimpleSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { ATTR_SERVICE_NAME } from "@opentelemetry/semantic-conventions";

const sdk = new NodeSDK({
  resource: new Resource({
    [ATTR_SERVICE_NAME]: "next-app",
  }),
  spanProcessor: new SimpleSpanProcessor(new OTLPTraceExporter()),
});
sdk.start();
```

---

### Configure Redirect with Path Parameter Matching

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects

Demonstrates how to use path parameters in redirects. This example redirects from '/old-blog/:slug' to '/news/:slug', preserving the matched parameter in the destination URL. It uses a permanent redirect (308 status code).

```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: "/old-blog/:slug",
        destination: "/news/:slug",
        permanent: true,
      },
    ];
  },
};
```

---

### Cache API Responses with stale-while-revalidate in Next.js

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/headers

This example demonstrates how to use `Cache-Control` headers within `getServerSideProps` in Next.js to cache dynamic responses. It specifically implements the `stale-while-revalidate` strategy with `s-maxage` for efficient caching.

```typescript
import { GetServerSideProps, GetStaticProps, GetStaticPaths } from "next";

// This value is considered fresh for ten seconds (s-maxage=10).
// If a request is repeated within the next 10 seconds, the previously
// cached value will still be fresh. If the request is repeated before 59 seconds,
// the cached value will be stale but still render (stale-while-revalidate=59).
//
// In the background, a revalidation request will be made to populate the cache
// with a fresh value. If you refresh the page, you will see the new value.
export const getServerSideProps = (async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {},
  };
}) satisfies GetServerSideProps;
```

```javascript
// This value is considered fresh for ten seconds (s-maxage=10).
// If a request is repeated within the next 10 seconds, the previously
// cached value will still be fresh. If the request is repeated before 59 seconds,
// the cached value will be stale but still render (stale-while-revalidate=59).
//
// In the background, a revalidation request will be made to populate the cache
// with a fresh value. If you refresh the page, you will see the new value.
export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {},
  };
}
```

---

### Create Client Component for Page Content (JSX)

Source: https://nextjs.org/docs/app/guides/migrating/app-router-migration

This snippet shows how to create a Client Component in the `app` directory using JavaScript. It's similar to the TypeScript version, using the `'use client'` directive and rendering a list of posts passed as props.

```jsx
"use client";

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
export default function HomePage({ recentPosts }) {
  return (
    <div>
      {recentPosts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
```

---

### Tagging Fetch Calls with 'posts' (JavaScript)

Source: https://nextjs.org/docs/app/guides/incremental-static-regeneration

This example shows how to tag individual `fetch` calls with a specific tag, 'posts', using the `next.tags` option. This allows for more granular cache invalidation using `revalidateTag`.

```jsx
export default async function Page() {
  const data = await fetch("https://api.vercel.app/blog", {
    next: { tags: ["posts"] },
  });
  const posts = await data.json();
  // ...
}
```

---

### Import global CSS in Next.js layout (TypeScript)

Source: https://nextjs.org/docs/app/guides/tailwind-v3-css

Imports the global CSS file into the root layout component in a Next.js application using TypeScript, ensuring Tailwind styles are applied throughout the application.

```tsx
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

### Produce Response from Next.js Middleware (TypeScript)

Source: https://nextjs.org/docs/pages/api-reference/file-conventions/middleware

This TypeScript example shows how to directly return a `Response` or `NextResponse` from Next.js middleware. It includes an authentication check and returns a JSON error response with a 401 status code if authentication fails.

```ts
import type { NextRequest } from "next/server";
import { isAuthenticated } from "@lib/auth";

// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: "/api/:function*",
};

export function middleware(request: NextRequest) {
  // Call our authentication function to check the request
  if (!isAuthenticated(request)) {
    // Respond with JSON indicating an error message
    return Response.json(
      { success: false, message: "authentication failed" },
      { status: 401 }
    );
  }
}
```

---

### Render Markdown to HTML

Source: https://nextjs.org/docs/pages/guides/mdx

Demonstrates how Markdown syntax is converted into HTML, showing the use of bold text and links.

```md
I **love** using [Next.js](https://nextjs.org/)
```

```html
<p>I <strong>love</strong> using <a href="https://nextjs.org/">Next.js</a></p>
```

---

### Null Component for @auth Slot in Next.js

Source: https://nextjs.org/docs/app/api-reference/file-conventions/parallel-routes

Provides an example of a null component for the `@auth` slot in Next.js. This component is used to effectively close a modal when navigating away from a route that utilizes parallel routes.

```tsx
export default function Page() {
  return null;
}
```

```jsx
export default function Page() {
  return null;
}
```

---

### Configuring Next.js with MDX and remark-gfm Plugin (MJS)

Source: https://nextjs.org/docs/pages/guides/mdx

Configures a Next.js project to support MDX files and integrate the `remark-gfm` plugin for GitHub Flavored Markdown. This setup requires using `next.config.mjs` or `next.config.ts` due to the ESM nature of remark plugins.

```mjs
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow .mdx extensions for files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

// Combine MDX and Next.js config
export default withMDX(nextConfig);
```

---

### Load Script with Worker Strategy (TSX)

Source: https://nextjs.org/docs/app/guides/scripts

Example of using the `next/script` component with `strategy="worker"` in a page file (`pages/home.tsx`). This offloads the script execution to a web worker, improving main thread performance.

```tsx
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="https://example.com/script.js" strategy="worker" />
    </>
  );
}
```

---

### Set up NavigationBlockerProvider in Next.js Layout

Source: https://nextjs.org/docs/app/api-reference/components/link

This snippet shows how to wrap the application's children with the NavigationBlockerProvider in the root layout file. This is essential for enabling the navigation blocking functionality across the application.

```jsx
import { NavigationBlockerProvider } from "./contexts/navigation-blocker";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavigationBlockerProvider>{children}</NavigationBlockerProvider>
      </body>
    </html>
  );
}
```

```tsx
import { NavigationBlockerProvider } from "./contexts/navigation-blocker";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavigationBlockerProvider>{children}</NavigationBlockerProvider>
      </body>
    </html>
  );
}
```

---

### Set Page Title using Metadata Object (TSX)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/layout

This example shows how to define metadata for a page, specifically setting the page title to 'Next.js' using the `metadata` object in a root layout. It requires the `Metadata` type from 'next'.

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return "...";
}
```

---

### Stream LLM Responses in Next.js

Source: https://nextjs.org/docs/app/api-reference/file-conventions/route

Provides an example of streaming responses in Next.js Route Handlers, commonly used with Large Language Models. It utilizes the AI SDK to stream text generated by OpenAI's GPT-4 Turbo model.

```TypeScript
import { openai } from '@ai-sdk/openai'
import { StreamingTextResponse, streamText } from 'ai'

export async function POST(req: Request) {
  const { messages } = await req.json()
  const result = await streamText({
    model: openai('gpt-4-turbo'),
    messages,
  })

  return new StreamingTextResponse(result.toAIStream())
}
```

```JavaScript
import { openai } from '@ai-sdk/openai'
import { StreamingTextResponse, streamText } from 'ai'

export async function POST(req) {
  const { messages } = await req.json()
  const result = await streamText({
    model: openai('gpt-4-turbo'),
    messages,
  })

  return new StreamingTextResponse(result.toAIStream())
}
```

---

### Manually Copy Static Assets for Standalone Output

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/output

After enabling 'standalone' output and running `next build`, manually copy the `public` and `.next/static` directories into the `.next/standalone` folder. This ensures that static assets are available when using the minimal `server.js` file.

```bash
cp -r public .next/standalone/ && cp -r .next/static .next/standalone/.next/
```

---

### Integrate Theme Provider in Layout (JSX)

Source: https://nextjs.org/docs/app/getting-started/server-and-client-components

Shows how to import and render the 'ThemeProvider' Client Component within a Server Component layout (RootLayout) in JSX. This makes the theme context available throughout the application.

```jsx
import ThemeProvider from "./theme-provider";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

---

### Create a Snapshot Test for a Next.js Component

Source: https://nextjs.org/docs/pages/guides/testing/jest

Implement a snapshot test for a Next.js component to ensure its UI remains consistent. This test renders the component and compares its output against a stored snapshot.

```jsx
import { render } from "@testing-library/react";
import Home from "../pages/index";

it("renders homepage unchanged", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
```

---

### generateImageMetadata Returning Image Metadata (JSX)

Source: https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata

This JavaScript (JSX) example demonstrates the implementation of `generateImageMetadata` to return an array of image metadata. The metadata includes essential properties like `id`, `contentType`, and `size` for generating various image outputs.

```jsx
import { ImageResponse } from "next/og";

export function generateImageMetadata() {
  return [
    {
      contentType: "image/png",
      size: { width: 48, height: 48 },
      id: "small",
    },
    {
      contentType: "image/png",
      size: { width: 72, height: 72 },
      id: "medium",
    },
  ];
}

export default function Icon({ id }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 88,
          background: "#000",
          color: "#fafafa",
        }}
      >
        Icon {id}
      </div>
    )
  );
}
```

---

### Configure Apple Web App Settings in Next.js

Source: https://nextjs.org/docs/app/api-reference/functions/generate-metadata

Configures settings for Apple Web Apps, including iTunes app ID and arguments, title, status bar style, and startup images for different resolutions. This is done via the Next.js metadata export.

```jsx
export const metadata = {
  itunes: {
    appId: "myAppStoreID",
    appArgument: "myAppArgument",
  },
  appleWebApp: {
    title: "Apple Web App",
    statusBarStyle: "black-translucent",
    startupImage: [
      "/assets/startup/apple-touch-startup-image-768x1004.png",
      {
        url: "/assets/startup/apple-touch-startup-image-1536x2008.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
};
```

---

### Configure Redirect with Regex Path Matching

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/redirects

Utilizes regular expressions for path matching in redirects. This example redirects '/post/123' (numeric slugs) from '/post/:slug(\d{1,})' to '/news/:slug' with a temporary redirect (307 status code).

```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: "/post/:slug(d{1,})",
        destination: "/news/:slug",
        permanent: false,
      },
    ];
  },
};
```

---

### Nest Blog Layout in Next.js

Source: https://nextjs.org/docs/app/getting-started/layouts-and-pages

Demonstrates how to create a nested layout for the '/blog' route in Next.js. The layout wraps its children using the React 'children' prop, allowing for hierarchical layout structures.

```tsx
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
```

```jsx
export default function BlogLayout({ children }) {
  return <section>{children}</section>;
}
```

---

### Access Request Headers and Cookies in `app` Directory (JavaScript)

Source: https://nextjs.org/docs/app/guides/migrating/app-router-migration

Illustrates how to fetch request headers and cookies in the `app` directory of a Next.js application using JavaScript. This example uses the `headers()` and `cookies()` functions, which are designed for use within Server Components and data fetching contexts.

```jsx
// `app` directory
import { cookies, headers } from "next/headers";

async function getData() {
  const authHeader = (await headers()).get("authorization");

  return "...";
}

export default async function Page() {
  // You can use `cookies` or `headers` inside Server Components
  // directly or in your data fetching function
  const theme = (await cookies()).get("theme");
  const data = await getData();
  return "...";
}
```

---

### Set cache lifetime with cacheLife in app/page.tsx

Source: https://nextjs.org/docs/app/api-reference/functions/cacheLife

This example demonstrates how to import and use the `unstable_cacheLife` function within a React Server Component to set the cache lifetime to 'hours'. It requires the 'use cache' directive.

```tsx
"use cache";
import { unstable_cacheLife as cacheLife } from "next/cache";

export default async function Page() {
  cacheLife("hours");
  return <div>Page</div>;
}
```

---

### Strongly Typed Route Context

Source: https://nextjs.org/docs/app/api-reference/file-conventions/route

Explains how to use the `RouteContext` helper to get strongly typed dynamic route parameters directly from the route literal. This improves type safety when accessing parameters like 'id'.

```ts
import type { NextRequest } from "next/server";

export async function GET(_req: NextRequest, ctx: RouteContext<"/users/[id]">) {
  const { id } = await ctx.params;
  return Response.json({ id });
}
```

---

### Upgrade Next.js 13 to 14 with bun

Source: https://nextjs.org/docs/app/guides/upgrading/version-14

This command upgrades Next.js to version 14, React to version 18, React DOM to version 18, and installs the ESLint config for Next.js version 14 as a development dependency using bun.

```bash
bun add next@next-14 react@18 react-dom@18 && bun add eslint-config-next@next-14 -D
```

---

### Set cache lifetime with cacheLife in app/page.js

Source: https://nextjs.org/docs/app/api-reference/functions/cacheLife

This JavaScript example shows the usage of `unstable_cacheLife` in a Next.js application. It sets the cache lifetime to 'hours' within a component, assuming the 'use cache' directive is present.

```jsx
"use cache";
import { unstable_cacheLife as cacheLife } from "next/cache";

export default async function Page() {
  cacheLife("hours");
  return <div>Page</div>;
}
```

---

### Register OpenTelemetry with @vercel/otel (TypeScript)

Source: https://nextjs.org/docs/app/guides/open-telemetry

Sets up OpenTelemetry instrumentation in a Next.js application by registering the OpenTelemetry SDK with a specified service name using TypeScript.

```TypeScript
import { registerOTel } from '@vercel/otel'

export function register() {
  registerOTel({ serviceName: 'next-app' })
}
```

---

### styled-jsx Registry Setup (TypeScript)

Source: https://nextjs.org/docs/app/guides/css-in-js

This code snippet demonstrates how to set up a style registry for styled-jsx in a Next.js Client Component using TypeScript. It utilizes the `createStyleRegistry` function and the `useServerInsertedHTML` hook to manage and inject styles.

```tsx
"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { StyleRegistry, createStyleRegistry } from "styled-jsx";

export default function StyledJsxRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [jsxStyleRegistry] = useState(() => createStyleRegistry());

  useServerInsertedHTML(() => {
    const styles = jsxStyleRegistry.styles();
    jsxStyleRegistry.flush();
    return <>{styles}</>;
  });

  return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>;
}
```

---

### Enable Draft Mode in Route Handler (JS)

Source: https://nextjs.org/docs/app/api-reference/functions/draft-mode

This JavaScript example demonstrates enabling Draft Mode in a Next.js Route Handler. It uses the enable() method provided by the draftMode() function to set the necessary cookie.

```javascript
import { draftMode } from "next/headers";

export async function GET(request) {
  const draft = await draftMode();
  draft.enable();
  return new Response("Draft mode is enabled");
}
```

---

### Send GA Event with sendGAEvent Function (JSX)

Source: https://nextjs.org/docs/app/guides/third-party-libraries

Provides an example of using the `sendGAEvent` function to measure user interactions by sending custom events to Google Analytics. The GoogleAnalytics component must be present in the component tree.

```jsx
"use client";

import { sendGAEvent } from "@next/third-parties/google";

export function EventButton() {
  return (
    <div>
      <button
        onClick={() => sendGAEvent("event", "buttonClicked", { value: "xyz" })}
      >
        Send Event
      </button>
    </div>
  );
}
```

---

### Next.js Rewrites: External URL

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites

Rewrites the '/blog' route to an external URL 'https://example.com/blog'.

```javascript
module.exports = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://example.com/blog",
      },
    ];
  },
};
```

---

### Configure Cypress E2E Testing (JavaScript)

Source: https://nextjs.org/docs/app/guides/testing/cypress

Configures Cypress for End-to-End (E2E) testing in a Next.js project using JavaScript.

```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
```

---

### Revalidate Cache Tag via Route Handler (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/functions/revalidateTag

This JavaScript example demonstrates a Next.js Route Handler that takes a 'tag' from the URL's search parameters and uses revalidateTag to invalidate the cache.

```js
import { revalidateTag } from "next/cache";

export async function GET(request) {
  const tag = request.nextUrl.searchParams.get("tag");

  if (tag) {
    revalidateTag(tag);
    return Response.json({ revalidated: true, now: Date.now() });
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing tag to revalidate",
  });
}
```

---

### Vitest Configuration (TypeScript)

Source: https://nextjs.org/docs/pages/guides/testing/vitest

Configure Vitest for a Next.js project using TypeScript by creating a `vitest.config.mts` file with essential plugins and test environment settings.

```typescript
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
  },
});
```

---

### Revalidate Cache Tag via Route Handler (TypeScript)

Source: https://nextjs.org/docs/app/api-reference/functions/revalidateTag

This TypeScript example shows a Next.js Route Handler that accepts a 'tag' query parameter and uses revalidateTag to invalidate the corresponding cache tag.

```ts
import type { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");

  if (tag) {
    revalidateTag(tag);
    return Response.json({ revalidated: true, now: Date.now() });
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing tag to revalidate",
  });
}
```

---

### Navigate with useRouter in Next.js Client Component

Source: https://nextjs.org/docs/app/api-reference/functions/use-router

This example demonstrates how to use the useRouter hook to programmatically navigate to a different route when a button is clicked within a Next.js Client Component. It imports useRouter from 'next/navigation' and uses router.push to change the URL.

```tsx
"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push("/dashboard")}>
      Dashboard
    </button>
  );
}
```

```jsx
"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push("/dashboard")}>
      Dashboard
    </button>
  );
}
```

---

### Fetch Data in Next.js Server Component (JSX)

Source: https://nextjs.org/docs/app/api-reference/functions/fetch

Illustrates fetching data from an API and displaying it within a Next.js Server Component using JavaScript/JSX. This example mirrors the TSX version, showcasing the `fetch` API's usage.

```jsx
export default async function Page() {
  let data = await fetch("https://api.vercel.app/blog");
  let posts = await data.json();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

---

### Set Headers in Next.js Middleware (JavaScript)

Source: https://nextjs.org/docs/pages/api-reference/file-conventions/middleware

Provides a JavaScript example for setting custom headers in Next.js middleware. This includes modifying request headers by cloning and setting new values, and adding custom headers to the outgoing response.

```js
import { NextResponse } from "next/server";

export function middleware(request) {
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-hello-from-middleware1", "hello");

  // You can also set request headers in NextResponse.next
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  // Set a new response header `x-hello-from-middleware2`
  response.headers.set("x-hello-from-middleware2", "hello");
  return response;
}
```

---

### Configure Monorepo Tracing Root in Next.js

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/output

Sets the root directory for output file tracing in a monorepo setup. This allows Next.js to trace files located outside the immediate app directory by specifying a path relative to the project's base.

```javascript
const path = require("path");

module.exports = {
  // this includes files from the monorepo base two directories up
  outputFileTracingRoot: path.join(__dirname, "../../"),
};
```

---

### Tagging Fetch Calls with 'posts' (TypeScript)

Source: https://nextjs.org/docs/app/guides/incremental-static-regeneration

This example shows how to tag individual `fetch` calls with a specific tag, 'posts', using the `next.tags` option. This allows for more granular cache invalidation using `revalidateTag`.

```tsx
export default async function Page() {
  const data = await fetch("https://api.vercel.app/blog", {
    next: { tags: ["posts"] },
  });
  const posts = await data.json();
  // ...
}
```

---

### Render Blog Posts in Layout (TSX)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/layout

This server component fetches blog posts and renders a list of `NavLink` components for each post, allowing users to navigate to individual blog entries. It imports `NavLink` and a `getPosts` function.

```tsx
import { NavLink } from "./nav-link";
import getPosts from "./get-posts";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const featuredPosts = await getPosts();
  return (
    <div>
      {featuredPosts.map((post) => (
        <div key={post.id}>
          <NavLink slug={post.slug}>{post.title}</NavLink>
        </div>
      ))}
      <div>{children}</div>
    </div>
  );
}
```

---

### Migrate CRA index.html to Next.js Root Layout (JavaScript)

Source: https://nextjs.org/docs/app/guides/migrating/from-create-react-app

This JavaScript code example illustrates migrating a Create React App's index.html content into a Next.js root layout. It replicates the structure of index.html, including meta tags and the root div, to ensure compatibility.

```jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>React App</title>
        <meta name="description" content="Web site created..." />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
```

---

### Configure Supported Image Formats in Next.js

Source: https://nextjs.org/docs/app/api-reference/components/image

Specify the image formats to be used, such as WebP or AVIF. The order matters, as the first matching format in the Accept header is used. AVIF support can be enabled with fallback.

```javascript
module.exports = {
  images: {
    formats: ["image/webp"],
  },
};
```

```javascript
module.exports = {
  images: {
    formats: ["image/avif"],
  },
};
```

---

### Next.js Middleware: Rate Limiting Implementation

Source: https://nextjs.org/docs/app/guides/backend-for-frontend

This example shows how to implement rate limiting within Next.js middleware. It calls an external `checkRateLimit` function and returns a 429 Too Many Requests response if the limit is exceeded. This helps protect your API endpoints from abuse.

```TypeScript
import { NextResponse } from 'next/server'
import { checkRateLimit } from '@/lib/rate-limit'

export async function POST(request: Request) {
  const { rateLimited } = await checkRateLimit(request)

  if (rateLimited) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
  }

  return new Response(null, { status: 204 })
}
```

```JavaScript
import { NextResponse } from 'next/server'
import { checkRateLimit } from '@/lib/rate-limit'

export async function POST(request) {
  const { rateLimited } = await checkRateLimit(request)

  if (rateLimited) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
  }

  return new Response(null, { status: 204 })
}
```

---

### Consuming MDX Metadata in Next.js Page (TSX)

Source: https://nextjs.org/docs/pages/guides/mdx

Illustrates how to import an MDX file, including its exported metadata, into a Next.js page component written in TypeScript. The example shows accessing and logging the metadata, demonstrating its availability for use within the application.

```tsx
import BlogPost, { metadata } from "@/content/blog-post.mdx";

export default function Page() {
  console.log("metadata: ", metadata);
  //=> { author: 'John Doe' }
  return <BlogPost />;
}
```

---

### Route requests to different Next.js zones using rewrites

Source: https://nextjs.org/docs/app/guides/multi-zones

Implement routing for a Next.js application acting as a domain router using the `rewrites` configuration. This directs requests for specific paths and their static assets to the appropriate zone's domain.

```javascript
async rewrites() {
    return [
        {
            source: '/blog',
            destination: `${process.env.BLOG_DOMAIN}/blog`,
        },
        {
            source: '/blog/:path+',
            destination: `${process.env.BLOG_DOMAIN}/blog/:path+`,
        },
        {
            source: '/blog-static/:path+',
            destination: `${process.env.BLOG_DOMAIN}/blog-static/:path+`,
        }
    ];
}
```

---

### Next.js Link Component for Navigation

Source: https://nextjs.org/docs/pages/guides/production-checklist

Utilize the `<Link>` component for efficient client-side navigation and prefetching within your Next.js application. This component enhances user experience by making transitions between pages seamless.

```jsx
import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
}
```

---

### Configure Redirect with Regex Path Matching

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects

Utilizes regular expressions for path matching in redirects. This example redirects '/post/123' (numeric slugs) from '/post/:slug(\d{1,})' to '/news/:slug' with a temporary redirect (307 status code).

```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: "/post/:slug(d{1,})",
        destination: "/news/:slug",
        permanent: false,
      },
    ];
  },
};
```

---

### Next.js Upgrading to Version 13

Source: https://context7_llms

Instructions for upgrading your Next.js application to version 13. This major release introduced the App Router and other significant changes.

```bash
# Update Next.js dependency
npm install next@13

# Migrate to the App Router by creating app/ directory.
# Review the official Next.js v13 documentation for comprehensive migration guides.
```

---

### Next.js Headers with basePath Support (Next.js)

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/headers

Demonstrates how Next.js `basePath` configuration affects header sources. The first example shows a source automatically prefixed with basePath, while the second explicitly disables basePath prefixing for a source.

```javascript
module.exports = {
  basePath: "/docs",

  async headers() {
    return [
      {
        source: "/with-basePath", // becomes /docs/with-basePath
        headers: [
          {
            key: "x-hello",
            value: "world",
          },
        ],
      },
      {
        source: "/without-basePath", // is not modified since basePath: false is set
        headers: [
          {
            key: "x-hello",
            value: "world",
          },
        ],
        basePath: false,
      },
    ];
  },
};
```

---

### Configure Monorepo Tracing Root in Next.js

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/output

Sets the root directory for output file tracing in a monorepo setup. This allows Next.js to trace files located outside the immediate app directory by specifying a path relative to the project's base.

```javascript
const path = require("path");

module.exports = {
  // this includes files from the monorepo base two directories up
  outputFileTracingRoot: path.join(__dirname, "../../"),
};
```

---

### Next.js Middleware `waitUntil` for Background Tasks (TypeScript)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/middleware

Shows how to use the `waitUntil` method from `NextFetchEvent` in Next.js middleware (TypeScript) to perform background tasks. This example sends analytics data asynchronously without blocking the response.

```ts
import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

export function middleware(req: NextRequest, event: NextFetchEvent) {
  event.waitUntil(
    fetch("https://my-analytics-platform.com", {
      method: "POST",
      body: JSON.stringify({ pathname: req.nextUrl.pathname }),
    })
  );

  return NextResponse.next();
}
```

---

### Enable Detailed Fetch Logging in Next.js

Source: https://nextjs.org/docs/app/guides/local-development

Configure your `next.config.js` to enable detailed logging for fetch requests. This helps in understanding network activity during development by logging full URLs.

```javascript
module.exports = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};
```

---

### Use Google Font on a Single Page

Source: https://nextjs.org/docs/pages/api-reference/components/font

Apply a Google Font (like Inter) to a specific page in your Next.js application by importing and using it within that page's component. This example shows usage in `pages/index.js`.

```jsx
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <p>Hello World</p>
    </div>
  );
}
```

---

### Manually Copy Public and Static Folders

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/output

After building with the 'standalone' output enabled, manually copy the 'public' and '.next/static' directories into the '.next/standalone' folder. This ensures that static assets and build outputs are correctly served by the minimal server.js file.

```bash
cp -r public .next/standalone/ && cp -r .next/static .next/standalone/.next/
```

---

### Header Overriding Behavior in Next.js

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/headers

This example demonstrates how Next.js handles header overriding when multiple headers match the same path. The last header defined for a given key will take precedence. Here, the header for '/hello' overrides the more general '/:path\*' header.

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "x-hello",
            value: "there",
          },
        ],
      },
      {
        source: "/hello",
        headers: [
          {
            key: "x-hello",
            value: "world",
          },
        ],
      },
    ];
  },
};
```

---

### Displaying Static Image in Next.js

Source: https://nextjs.org/docs/pages/api-reference/file-conventions/public-folder

This snippet demonstrates how to use the Next.js Image component to display a static image located in the public folder. It references the image using a path starting from the base URL.

```jsx
import Image from "next/image";

export function Avatar({ id, alt }) {
  return <Image src={`/avatars/${id}.png`} alt={alt} width="64" height="64" />;
}

export function AvatarOfMe() {
  return <Avatar id="me" alt="A portrait of me" />;
}
```

---

### Next.js Middleware waitUntil for Background Tasks (TypeScript)

Source: https://nextjs.org/docs/pages/api-reference/file-conventions/middleware

Utilize the `waitUntil` method from `NextFetchEvent` in Next.js Middleware to extend the execution lifetime for background tasks. This example sends analytics data asynchronously without blocking the response.

```ts
import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

export function middleware(req: NextRequest, event: NextFetchEvent) {
  event.waitUntil(
    fetch("https://my-analytics-platform.com", {
      method: "POST",
      body: JSON.stringify({ pathname: req.nextUrl.pathname }),
    })
  );

  return NextResponse.next();
}
```

---

### Using Typed Links and Navigation in App Router

Source: https://nextjs.org/docs/app/api-reference/config/typescript

Demonstrates the usage of statically typed links with `next/link` and navigation methods like `push`, `replace`, and `prefetch` from `next/navigation`. It shows examples with literal and dynamic `href`s, including casting non-literal strings to `Route`.

```tsx
"use client";

import type { Route } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Example() {
  const router = useRouter();
  const slug = "nextjs";

  return (
    <>
      {/* Link: literal and dynamic */}
      <Link href="/about" />
      <Link href={`/blog/${slug}`} />
      <Link href={("/blog" + slug) as Route} />
      {/* TypeScript error if href is not a valid route */}
      <Link href="/aboot" />

      {/* Router: literal and dynamic strings are validated */}
      <button onClick={() => router.push("/about")}>Push About</button>
      <button onClick={() => router.replace(`/blog/${slug}`)}>
        Replace Blog
      </button>
      <button onClick={() => router.prefetch("/contact")}>
        Prefetch Contact
      </button>

      {/* For non-literal strings, cast to Route */}
      <button onClick={() => router.push(("/blog" + slug) as Route)}>
        Push Non-literal Blog
      </button>
    </>
  );
}
```

---

### Generate Metadata and Page Content with Memoized Data (JavaScript)

Source: https://nextjs.org/docs/app/getting-started/metadata-and-og-images

Demonstrates how to use the memoized `getPost` function to generate metadata (title, description) and render page content in a Next.js application. It fetches post data using the slug from the URL parameters.

```jsx
import { getPost } from "@/app/lib/data";

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function Page({ params }) {
  const post = await getPost(params.slug);
  return <div>{post.title}</div>;
}
```

---

### Access Pathname in Next.js Client Component (JSX)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/layout

Provides an example of using the `usePathname` hook in a JavaScript Client Component to retrieve and process the current URL pathname. This functionality is crucial for creating context-aware navigation components.

```jsx
"use client";

import { usePathname } from "next/navigation";

// Simplified breadcrumbs logic
export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/");

  return (
    <nav>
      {segments.map((segment, index) => (
        <span key={index}>
          {" > "}
          {segment}
        </span>
      ))}
    </nav>
  );
}
```

---

### Configure Cypress Component Testing (TypeScript)

Source: https://nextjs.org/docs/pages/guides/testing/cypress

This TypeScript configuration sets up Cypress for component testing with Next.js, specifying the framework and bundler.

```ts
import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
```

---

### generateImageMetadata Returning Image Metadata (TSX)

Source: https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata

This TypeScript (TSX) example illustrates how `generateImageMetadata` returns an array of image metadata objects. Each object includes an `id`, `contentType`, and `size`, which are used by Next.js to generate different image versions.

```tsx
import { ImageResponse } from "next/og";

export function generateImageMetadata() {
  return [
    {
      contentType: "image/png",
      size: { width: 48, height: 48 },
      id: "small",
    },
    {
      contentType: "image/png",
      size: { width: 72, height: 72 },
      id: "medium",
    },
  ];
}

export default function Icon({ id }: { id: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 88,
          background: "#000",
          color: "#fafafa",
        }}
      >
        Icon {id}
      </div>
    )
  );
}
```

---

### Integrate Tailwind Typography Plugin with MDX in Next.js

Source: https://nextjs.org/docs/app/guides/mdx

Shows how to use the `@tailwindcss/typography` plugin to apply Tailwind CSS styles to markdown content within MDX files. This requires installing the plugin and applying 'prose' classes to the layout.

```tsx
export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
      {children}
    </div>
  );
}
```

```jsx
export default function MdxLayout({ children }) {
  // Create any shared layout or styles here
  return (
    <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
      {children}
    </div>
  );
}
```

---

### Apply Specific Font Class (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/components/font

This example demonstrates applying a specific font (Roboto Mono) to an element within a Next.js page component using JavaScript. It imports the font from a local 'fonts' file.

```jsx
import { roboto_mono } from "./fonts";

export default function Page() {
  return (
    <>
      <h1 className={roboto_mono.className}>My page</h1>
    </>
  );
}
```

---

### Dynamic Route Icon Generation (TSX)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons

This example illustrates how to generate an icon for a dynamic route segment in Next.js using TSX. The `Icon` component receives `params` which can include dynamic route parameters like `slug`.

```tsx
export default function Icon({ params }: { params: { slug: string } }) {
  // ...
}
```

---

### Disabling Prefetching for Next.js Links

Source: https://nextjs.org/docs/app/guides/prefetching

This example provides a `NoPrefetchLink` component that disables prefetching for specific Next.js links. This is useful for maintaining consistent Link component usage while controlling resource consumption for elements like footer links.

```tsx
"use client";

import Link, { LinkProps } from "next/link";

function NoPrefetchLink({
  prefetch,
  ...rest
}: LinkProps & { children: React.ReactNode }) {
  return <Link {...rest} prefetch={false} />;
}
```

---

### Header Overriding Behavior in Next.js

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/headers

This example demonstrates how Next.js handles header overriding when multiple headers match the same path. The last header defined for a given key will take precedence. Here, the header for '/hello' overrides the more general '/:path\*' header.

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "x-hello",
            value: "there",
          },
        ],
      },
      {
        source: "/hello",
        headers: [
          {
            key: "x-hello",
            value: "world",
          },
        ],
      },
    ];
  },
};
```

---

### Custom App File (\_app.js/.jsx/.tsx)

Source: https://nextjs.org/docs/pages/getting-started/project-structure

The \_app.js, \_app.jsx, or \_app.tsx file is a special Next.js component used to initialize pages and allows for custom App components, like adding global CSS or layouts.

```javascript
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

```typescript
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

---

### Route requests to different Next.js zones using rewrites

Source: https://nextjs.org/docs/pages/guides/multi-zones

Implement routing for a Next.js application acting as a domain router using the `rewrites` configuration. This directs requests for specific paths and their static assets to the appropriate zone's domain.

```javascript
async rewrites() {
    return [
        {
            source: '/blog',
            destination: `${process.env.BLOG_DOMAIN}/blog`,
        },
        {
            source: '/blog/:path+',
            destination: `${process.env.BLOG_DOMAIN}/blog/:path+`,
        },
        {
            source: '/blog-static/:path+',
            destination: `${process.env.BLOG_DOMAIN}/blog-static/:path+`,
        }
    ];
}
```

---

### Next.js Headers with basePath Support (Next.js)

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/headers

Demonstrates how Next.js `basePath` configuration affects header sources. The first example shows a source automatically prefixed with basePath, while the second explicitly disables basePath prefixing for a source.

```javascript
module.exports = {
  basePath: "/docs",

  async headers() {
    return [
      {
        source: "/with-basePath", // becomes /docs/with-basePath
        headers: [
          {
            key: "x-hello",
            value: "world",
          },
        ],
      },
      {
        source: "/without-basePath", // is not modified since basePath: false is set
        headers: [
          {
            key: "x-hello",
            value: "world",
          },
        ],
        basePath: false,
      },
    ];
  },
};
```

---

### Next.js onLoad Script Strategy with Lodash

Source: https://nextjs.org/docs/app/api-reference/components/script

Demonstrates using the `onLoad` property with the `next/script` component to execute JavaScript code after a script has finished loading. This example shows calling a Lodash function after the Lodash library is loaded.

```tsx
"use client";

import Script from "next/script";

export default function Page() {
  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"
        onLoad={() => {
          console.log(_.sample([1, 2, 3, 4]));
        }}
      />
    </>
  );
}
```

```jsx
"use client";

import Script from "next/script";

export default function Page() {
  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"
        onLoad={() => {
          console.log(_.sample([1, 2, 3, 4]));
        }}
      />
    </>
  );
}
```

---

### Create a Client Component with 'use client'

Source: https://nextjs.org/docs/app/getting-started/server-and-client-components

Demonstrates how to create a basic Client Component in Next.js by adding the 'use client' directive at the top of the file. This component uses React's useState hook to manage a counter.

```tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count} likes</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

```jsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count} likes</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

---

### Next.js Middleware: Cookie Management (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/middleware

Demonstrates how to get, set, and delete cookies within Next.js middleware using the `RequestCookies` and `ResponseCookies` APIs. It shows how to access cookies from incoming requests and set them on outgoing responses.

```js
import { NextResponse } from "next/server";

export function middleware(request) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the `RequestCookies` API
  let cookie = request.cookies.get("nextjs");
  console.log(cookie); // => { name: 'nextjs', value: 'fast', Path: '/' }
  const allCookies = request.cookies.getAll();
  console.log(allCookies); // => [{ name: 'nextjs', value: 'fast' }]

  request.cookies.has("nextjs"); // => true
  request.cookies.delete("nextjs");
  request.cookies.has("nextjs"); // => false

  // Setting cookies on the response using the `ResponseCookies` API
  const response = NextResponse.next();
  response.cookies.set("vercel", "fast");
  response.cookies.set({
    name: "vercel",
    value: "fast",
    path: "/",
  });
  cookie = response.cookies.get("vercel");
  console.log(cookie); // => { name: 'vercel', value: 'fast', Path: '/' }
  // The outgoing response will have a `Set-Cookie:vercel=fast;path=/test` header.

  return response;
}
```

---

### Set Cache-Control for API Routes in Next.js

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/headers

This example shows how to set the `Cache-Control` header for an API route in Next.js using `res.setHeader`. It demonstrates setting a `s-maxage` value to control the caching duration for API responses.

```typescript
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.setHeader("Cache-Control", "s-maxage=86400");
  res.status(200).json({ message: "Hello from Next.js!" });
}
```

```javascript
export default function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=86400");
  res.status(200).json({ message: "Hello from Next.js!" });
}
```

---

### Parallel Data Fetching with Promise.all in Next.js

Source: https://nextjs.org/docs/app/getting-started/fetching-data

Shows how to perform parallel data fetching in Next.js by initiating multiple fetch requests and then awaiting their results simultaneously using Promise.all. This improves performance by overlapping network requests.

```tsx
import Albums from "./albums";

async function getArtist(username: string) {
  const res = await fetch(`https://api.example.com/artist/${username}`);
  return res.json();
}

async function getAlbums(username: string) {
  const res = await fetch(`https://api.example.com/artist/${username}/albums`);
  return res.json();
}

export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  // Initiate requests
  const artistData = getArtist(username);
  const albumsData = getAlbums(username);

  const [artist, albums] = await Promise.all([artistData, albumsData]);

  return (
    <>
      <h1>{artist.name}</h1>
      <Albums list={albums} />
    </>
  );
}
```

```jsx
import Albums from "./albums";

async function getArtist(username) {
  const res = await fetch(`https://api.example.com/artist/${username}`);
  return res.json();
}

async function getAlbums(username) {
  const res = await fetch(`https://api.example.com/artist/${username}/albums`);
  return res.json();
}

export default async function Page({ params }) {
  const { username } = await params;

  // Initiate requests
  const artistData = getArtist(username);
  const albumsData = getAlbums(username);

  const [artist, albums] = await Promise.all([artistData, albumsData]);

  return (
    <>
      <h1>{artist.name}</h1>
      <Albums list={albums} />
    </>
  );
}
```

---

### Client Component Prop Interface (Next.js)

Source: https://nextjs.org/docs/app/guides/data-security

Illustrates a potentially problematic prop interface for a Next.js Client Component. The example highlights how accepting a broad user object can lead to unnecessary data being passed down from Server Components, encouraging a more focused prop definition.

```tsx
"use client";

// BAD: This is a bad props interface because it accepts way more data than the
// Client Component needs and it encourages server components to pass all that
// data down. A better solution would be to accept a limited object with just
// the fields necessary for rendering the profile.
export default async function Profile({ user }: { user: User }) {
  return (
    <div>
      <h1>{user.name}</h1>
      ...
    </div>
  );
}
```

---

### Highlight Active NavLink with useSelectedLayoutSegment (TSX)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/layout

This client component demonstrates how to use `useSelectedLayoutSegment` to get the current route segment and conditionally apply bold styling to a `NavLink` to indicate if it's active. It requires the `next/navigation` module.

```tsx
"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavLink({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = slug === segment;

  return (
    <Link
      href={`/blog/${slug}`}
      // Change style depending on whether the link is active
      style={{ fontWeight: isActive ? "bold" : "normal" }}
    >
      {children}
    </Link>
  );
}
```

---

### Next.js Redirects with Regex Header Value Capture

Source: https://nextjs.org/docs/pages/api-reference/config/next-config-js/redirects

Configure redirects in Next.js where the header value is matched using a regular expression, capturing a specific part of the value for use in the destination URL. This example captures 'yes' or 'true' from the 'x-authorized' header.

```javascript
module.exports = {
  async redirects() {
    return [
      // if the header `x-authorized` is present and
      // contains a matching value, this redirect will be applied
      {
        source: "/",
        has: [
          {
            type: "header",
            key: "x-authorized",
            value: "(?<authorized>yes|true)",
          },
        ],
        permanent: false,
        destination: "/home?authorized=:authorized",
      },
    ];
  },
};
```

---

### Accessing Locale in Next.js Page Component (TypeScript)

Source: https://nextjs.org/docs/app/guides/internationalization

This TypeScript example demonstrates how to access the dynamically routed 'lang' parameter within a Next.js page component. This allows you to tailor content based on the user's selected locale.

```tsx
// You now have access to the current locale
// e.g. /en-US/products -> `lang` is "en-US"
export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  return ...
```

---

### Basic Next.js Image Usage

Source: https://nextjs.org/docs/pages/api-reference/components/image

Demonstrates the basic usage of the Next.js Image component with src, width, height, and alt attributes.

```jsx
import Image from "next/image";

export default function Page() {
  return (
    <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  );
}
```

---

### Disable Draft Mode in Route Handler (JS)

Source: https://nextjs.org/docs/app/api-reference/functions/draft-mode

This JavaScript example demonstrates how to disable Draft Mode in a Next.js Route Handler. It calls the disable() method on the draftMode() result to remove the relevant cookie.

```javascript
import { draftMode } from "next/headers";

export async function GET(request) {
  const draft = await draftMode();
  draft.disable();
  return new Response("Draft mode is disabled");
}
```

---

### Display Draft Mode Status in Server Component (JS)

Source: https://nextjs.org/docs/app/api-reference/functions/draft-mode

This JavaScript example provides a full Next.js Server Component that checks and displays the current Draft Mode status. It uses the draftMode() function and conditional rendering.

```javascript
import { draftMode } from "next/headers";

export default async function Page() {
  const { isEnabled } = await draftMode();
  return (
    <main>
      <h1>My Blog Post</h1>
      <p>Draft Mode is currently {isEnabled ? "Enabled" : "Disabled"}</p>
    </main>
  );
}
```

---

### Scoped CSS with styled-jsx in React

Source: https://nextjs.org/docs/pages/guides/css-in-js

This example demonstrates how to use styled-jsx for scoped CSS within a React component. It allows for CSS to be isolated to specific components, preventing style conflicts. It also shows how to apply global styles.

```jsx
function HelloWorld() {
  return (
    <div>
      Hello world
      <p>scoped!</p>
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          background: black;
        }
      `}</style>
    </div>
  );
}

export default HelloWorld;
```

---

### Next.js Rewrites: External URL with Path Parameters

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites

Rewrites '/blog/:slug' to 'https://example.com/blog/:slug', utilizing path parameters in the destination.

```javascript
module.exports = {
  async rewrites() {
    return [
      {
        source: "/blog/:slug",
        destination: "https://example.com/blog/:slug", // Matched parameters can be used in the destination
      },
    ];
  },
};
```

---

### Set CORS Headers in Next.js Route Handler

Source: https://nextjs.org/docs/app/api-reference/file-conventions/route

Illustrates how to set Cross-Origin Resource Sharing (CORS) headers for a specific Route Handler in Next.js. This example configures permissive CORS settings allowing requests from any origin.

```ts
export async function GET(request: Request) {
  return new Response("Hello, Next.js!", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
```

```js
export async function GET(request) {
  return new Response("Hello, Next.js!", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
```

---

### Apply Global Font Class (JavaScript)

Source: https://nextjs.org/docs/app/api-reference/components/font

This example demonstrates applying a globally imported font (Inter) to the root HTML element in a Next.js layout component using JavaScript. It imports the font from a local 'fonts' file.

```jsx
import { inter } from "./fonts";

export default function Layout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
```

---

### Enable Node.js Inspector for Memory Analysis

Source: https://nextjs.org/docs/app/guides/memory-usage

Start Next.js development or build processes with `NODE_OPTIONS=--inspect` to enable the Node.js inspector. This allows connecting tools like Chrome DevTools to analyze heap snapshots and identify memory retention issues.

```bash
NODE_OPTIONS=--inspect node_modules/next/dist/bin/next dev
```

```bash
NODE_OPTIONS=--inspect node_modules/next/dist/bin/next build
```

---

### Nesting Client Component in Server Component Page

Source: https://nextjs.org/docs/app/api-reference/directives/use-client

Shows how to integrate a client component ('Counter') within a server component ('Page'). This demonstrates the composition of server and client components for building performant and interactive applications.

```tsx
import Header from "./header";
import Counter from "./counter"; // This is a Client Component

export default function Page() {
  return (
    <div>
      <Header />
      <Counter />
    </div>
  );
}
```

```jsx
import Header from "./header";
import Counter from "./counter"; // This is a Client Component

export default function Page() {
  return (
    <div>
      <Header />
      <Counter />
    </div>
  );
}
```

---

### Next.js Configuration with Base Path

Source: https://nextjs.org/docs/app/guides/migrating/from-vite

Demonstrates how to configure the basePath in next.config.mjs using an environment variable for a Next.js project, including output and distDir settings.

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Outputs a Single-Page Application (SPA).
  distDir: "./dist", // Changes the build output directory to `./dist/`.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH, // Sets the base path to `/some-base-path`.
};

export default nextConfig;
```

---

### Client Component Form with useActionState (TypeScript)

Source: https://nextjs.org/docs/app/guides/forms

This client component example demonstrates how to use React's `useActionState` hook to manage form submission and display validation messages. It connects a form to a server action and conditionally renders error messages.

```tsx
"use client";

import { useActionState } from "react";
import { createUser } from "@/app/actions";

const initialState = {
  message: "",
};

export function Signup() {
  const [state, formAction, pending] = useActionState(createUser, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" required />
      {/* ... */}
      <p aria-live="polite">{state?.message}</p>
      <button disabled={pending}>Sign up</button>
    </form>
  );
}
```

---

### Caching Database Queries with unstable_cache (JavaScript)

Source: https://nextjs.org/docs/app/guides/incremental-static-regeneration

This example demonstrates using `unstable_cache` to cache database queries. It defines a `getCachedPosts` function that fetches posts from a database, applies caching with a 'posts' tag, and sets a revalidation time of 3600 seconds.

```jsx
import { unstable_cache } from "next/cache";
import { db, posts } from "@/lib/db";

const getCachedPosts = unstable_cache(
  async () => {
    return await db.select().from(posts);
  },
  ["posts"],
  { revalidate: 3600, tags: ["posts"] }
);

export default async function Page() {
  const posts = getCachedPosts();
  // ...
}
```

---

### Next.js Middleware: Cookie Management (TypeScript)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/middleware

Demonstrates how to get, set, and delete cookies within Next.js middleware using the `RequestCookies` and `ResponseCookies` APIs. It shows how to access cookies from incoming requests and set them on outgoing responses.

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the `RequestCookies` API
  let cookie = request.cookies.get("nextjs");
  console.log(cookie); // => { name: 'nextjs', value: 'fast', Path: '/' }
  const allCookies = request.cookies.getAll();
  console.log(allCookies); // => [{ name: 'nextjs', value: 'fast' }]

  request.cookies.has("nextjs"); // => true
  request.cookies.delete("nextjs");
  request.cookies.has("nextjs"); // => false

  // Setting cookies on the response using the `ResponseCookies` API
  const response = NextResponse.next();
  response.cookies.set("vercel", "fast");
  response.cookies.set({
    name: "vercel",
    value: "fast",
    path: "/",
  });
  cookie = response.cookies.get("vercel");
  console.log(cookie); // => { name: 'vercel', value: 'fast', Path: '/' }
  // The outgoing response will have a `Set-Cookie:vercel=fast;path=/` header.

  return response;
}
```

---

### Access Environment Variable in React Component

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/env

This example demonstrates how to access a configured environment variable (`customKey`) within a Next.js React component. The value is directly embedded into the component's JSX at build time.

```jsx
function Page() {
  return <h1>The value of customKey is: {process.env.customKey}</h1>;
}

export default Page;
```

---

### Read Nonce in Next.js Server Component (JSX)

Source: https://nextjs.org/docs/app/guides/content-security-policy

This example demonstrates reading a nonce from request headers in a Next.js Server Component using JavaScript (JSX). The extracted nonce is passed to the `nonce` prop of a `<Script>` component.

```jsx
import { headers } from "next/headers";
import Script from "next/script";

export default async function Page() {
  const nonce = (await headers()).get("x-nonce");

  return (
    <Script
      src="https://www.googletagmanager.com/gtag/js"
      strategy="afterInteractive"
      nonce={nonce}
    />
  );
}
```

---

### Create a Client Component Wrapper for Third-Party Carousel (JSX)

Source: https://nextjs.org/docs/app/getting-started/server-and-client-components

Illustrates creating a basic Client Component wrapper for the 'acme-carousel' package using JSX. This wrapper enables the carousel's integration into Next.js Server Components.

```jsx
"use client";

import { Carousel } from "acme-carousel";

export default Carousel;
```

---

### Accessing Tainted Data in Client Component (Error)

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/taint

This TypeScript code shows an example of a client component attempting to access a tainted value (`SERVICE_API_KEY`). This will result in a runtime error, preventing the sensitive data from being exposed.

```tsx
export async function Dashboard() {
  const systemConfig = await getSystemConfig();
  // Someone makes a mistake in a PR
  const version = systemConfig.SERVICE_API_KEY;

  return <ClientDashboard version={version} />;
}
```

---

### Migrate Dashboard Layout (Before)

Source: https://nextjs.org/docs/app/guides/migrating/app-router-migration

Illustrates the 'before' state of migrating a per-page layout pattern from the `pages` directory to the `app` directory. It shows a `DashboardLayout` component and how it was applied to a page using `getLayout`.

```jsx
export default function DashboardLayout({ children }) {
  return (
    <div>
      <h2>My Dashboard</h2>
      {children}
    </div>
  );
}
```

```jsx
import DashboardLayout from "../components/DashboardLayout";

export default function Page() {
  return <p>My Page</p>;
}

Page.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
```

---

### Next.js Redirects with Regex Header Value Capture

Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects

Configure redirects in Next.js where the header value is matched using a regular expression, capturing a specific part of the value for use in the destination URL. This example captures 'yes' or 'true' from the 'x-authorized' header.

```javascript
module.exports = {
  async redirects() {
    return [
      // if the header `x-authorized` is present and
      // contains a matching value, this redirect will be applied
      {
        source: "/",
        has: [
          {
            type: "header",
            key: "x-authorized",
            value: "(?<authorized>yes|true)",
          },
        ],
        permanent: false,
        destination: "/home?authorized=:authorized",
      },
    ];
  },
};
```

---

### Upgrade Next.js 13 to 14 with pnpm

Source: https://nextjs.org/docs/app/guides/upgrading/version-14

This command upgrades Next.js to version 14, React to version 18, React DOM to version 18, and installs the ESLint config for Next.js version 14 as a development dependency using pnpm.

```bash
pnpm i next@next-14 react@18 react-dom@18 && pnpm i eslint-config-next@next-14 -D
```

---

### Enable Draft Mode in Route Handler (TS)

Source: https://nextjs.org/docs/app/api-reference/functions/draft-mode

This example illustrates how to enable Draft Mode in a Next.js Route Handler using TypeScript. It calls the enable() method on the result of the draftMode() function, which sets a bypass cookie.

```tsx
import { draftMode } from "next/headers";

export async function GET(request: Request) {
  const draft = await draftMode();
  draft.enable();
  return new Response("Draft mode is enabled");
}
```

---

### Next.js .gitignore Configuration

Source: https://nextjs.org/docs/app/guides/migrating/from-vite

Specifies the necessary additions to the .gitignore file for a Next.js project, including build output and type definition files.

```txt
# ...
.next
next-env.d.ts
dist
```

---

### Next.js Standalone Output Configuration

Source: https://nextjs.org/docs/pages/guides/self-hosting

Configuration for Next.js standalone output mode, which is recommended over `runtimeConfig` for managing environment variables.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
};
```

---

### Upgrade Next.js 13 to 14 with npm

Source: https://nextjs.org/docs/app/guides/upgrading/version-14

This command upgrades Next.js to version 14, React to version 18, React DOM to version 18, and installs the ESLint config for Next.js version 14 as a development dependency using npm.

```bash
npm i next@next-14 react@18 react-dom@18 && npm i eslint-config-next@next-14 -D
```

---

### Access Pathname in Next.js Client Component (TSX)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/layout

Demonstrates how to use the `usePathname` hook in a Client Component to get the current URL pathname and split it into segments for display. This is useful for dynamic UI elements like breadcrumbs.

```tsx
"use client";

import { usePathname } from "next/navigation";

// Simplified breadcrumbs logic
export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/");

  return (
    <nav>
      {segments.map((segment, index) => (
        <span key={index}>
          {" > "}
          {segment}
        </span>
      ))}
    </nav>
  );
}
```

---

### Echo Pathname with Redirect/Rewrite (JavaScript)

Source: https://nextjs.org/docs/app/guides/backend-for-frontend

This JavaScript Route Handler showcases `NextRequest` and `NextResponse` functionality. It inspects 'redirect' and 'rewrite' search parameters. A 'redirect' parameter triggers a redirect to the root, while a 'rewrite' parameter initiates a rewrite to the root. If neither is found, it responds with the pathname in JSON.

```js
import { NextResponse } from "next/server";

export async function GET(request) {
  const nextUrl = request.nextUrl;

  if (nextUrl.searchParams.get("redirect")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (nextUrl.searchParams.get("rewrite")) {
    return NextResponse.rewrite(new URL("/", request.url));
  }

  return NextResponse.json({ pathname: nextUrl.pathname });
}
```

---

### Role-Based Access Control in Server Components (JavaScript)

Source: https://nextjs.org/docs/app/guides/authentication

This example shows how to implement role-based access control within Next.js Server Components using JavaScript. It fetches user session data using `verifySession` from a DAL and conditionally renders different dashboard components based on the user's role ('admin' or 'user'). Unauthorized users are redirected to the login page.

```jsx
import { verifySession } from "@/app/lib/dal";

export default async function Dashboard() {
  const session = await verifySession();
  const userRole = session?.user?.role; // Assuming 'role' is part of the session object

  if (userRole === "admin") {
    return <AdminDashboard />;
  } else if (userRole === "user") {
    return <UserDashboard />;
  } else {
    redirect("/login");
  }
}
```

---

### Next.js Configuration (next.config.js)

Source: https://nextjs.org/docs/pages/getting-started/project-structure

The next.config.js file is used for configuring Next.js applications. It allows customization of build, runtime, and routing behaviors.

```javascript
module.exports = {
  // Configuration options
};
```

---

### Create User Server Action (JSX)

Source: https://nextjs.org/docs/app/api-reference/directives/use-server

Defines a server-side function to create a user using a database client. Requires a database client import.

```jsx
"use server";
import { db } from "@/lib/db"; // Your database client

export async function createUser(data) {
  const user = await db.user.create({ data });
  return user;
}
```

---

### Respond to Route Changes with usePathname and useSearchParams (TSX)

Source: https://nextjs.org/docs/app/api-reference/functions/use-pathname

This example illustrates how to use both `usePathname` and `useSearchParams` hooks within a Next.js Client Component to trigger an effect when the route or search parameters change. It requires 'react' for `useEffect` and 'next/navigation' for the hooks.

```tsx
"use client";

import { usePathname, useSearchParams } from "next/navigation";

function ExampleClientComponent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    // Do something here...
  }, [pathname, searchParams]);
}
```

---

### Integrate WebVitals Component in Layout (JSX)

Source: https://nextjs.org/docs/app/api-reference/functions/use-report-web-vitals

This example shows how to import and render the `WebVitals` component within the main layout file (`app/layout.js`). This ensures that the Web Vitals reporting is active for the entire application. It assumes the `WebVitals` component is located in `app/_components/web-vitals.js`.

```jsx
import { WebVitals } from "./_components/web-vitals";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
```

---

### Configure OpenGraph Image Size (JSX)

Source: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image

This example shows how to export the 'size' configuration for an OpenGraph image route handler in Next.js using JavaScript. It specifies the width and height of the image, ensuring it meets design and platform requirements.

```jsx
export const size = { width: 1200, height: 630 };

export default function Image() {}
```

---

### Handle Uncaught Exceptions in getStaticProps (TypeScript)

Source: https://nextjs.org/docs/pages/guides/incremental-static-regeneration

This example demonstrates how to handle errors within `getStaticProps` in TypeScript. If an error occurs during data fetching, the existing cached page remains, and Next.js retries the fetch on the next request.

```typescript
import type { GetStaticProps } from "next";

interface Post {
  id: string;
  title: string;
  content: string;
}

interface Props {
  post: Post;
}

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}: {
  params: { id: string };
}) => {
  // If this request throws an uncaught error, Next.js will
  // not invalidate the currently shown page and
  // retry getStaticProps on the next request.
  const res = await fetch(`https://api.vercel.app/blog/${params.id}`);
  const post: Post = await res.json();

  if (!res.ok) {
    // If there is a server error, you might want to
    // throw an error instead of returning so that the cache is not updated
    // until the next successful request.
    throw new Error(`Failed to fetch posts, received status ${res.status}`);
  }

  return {
    props: { post },
    // Next.js will invalidate the cache when a
    // request comes in, at most once every 60 seconds.
    revalidate: 60,
  };
};
```

---

### Next.js JavaScript Configuration

Source: https://nextjs.org/docs/app/getting-started/project-structure

The `jsconfig.json` file is used to configure the JavaScript compiler for your Next.js project when not using TypeScript. It helps with features like path aliases and IntelliSense.

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.js", "**/*.jsx"],
  "exclude": ["node_modules"]
}
```

---

### Send Email with Form Data (POST)

Source: https://nextjs.org/docs/app/guides/backend-for-frontend

This example shows how to handle form data in a Next.js API route to send an email. It retrieves 'email' and 'contents' from the request's form data, validates the inputs, and then uses a `sendMail` function to send the email. Error handling is included for robustness.

```TypeScript
import { sendMail, validateInputs } from '@/lib/email-transporter'

export async function POST(request: Request) {
  const formData = await request.formData()
  const email = formData.get('email')
  const contents = formData.get('contents')

  try {
    await validateInputs({ email, contents })
    const info = await sendMail({ email, contents })

    return Response.json({ messageId: info.messageId })
  } catch (reason) {
    const message =
      reason instanceof Error ? reason.message : 'Unexpected exception'

    return new Response(message, { status: 500 })
  }
}
```

```JavaScript
import { sendMail, validateInputs } from '@/lib/email-transporter'

export async function POST(request) {
  const formData = await request.formData()
  const email = formData.get('email')
  const contents = formData.get('contents')

  try {
    await validateInputs({ email, contents })
    const info = await sendMail({ email, contents })

    return Response.json({ messageId: info.messageId })
  } catch (reason) {
    const message =
      reason instanceof Error ? reason.message : 'Unexpected exception'

    return new Response(message, { status: 500 })
  }
}
```

---

### Register OpenTelemetry with @vercel/otel (JavaScript)

Source: https://nextjs.org/docs/pages/guides/open-telemetry

Configures OpenTelemetry in a Next.js application by registering the OpenTelemetry SDK with a specified service name using JavaScript.

```JavaScript
import { registerOTel } from '@vercel/otel'

export function register() {
  registerOTel({ serviceName: 'next-app' })
}
```

---

### Using CSS Modules in a Page (JavaScript)

Source: https://nextjs.org/docs/app/getting-started/css

Imports and applies a CSS Module class ('styles.blog') to a main element in a Next.js page component using JavaScript.

```jsx
import styles from "./blog.module.css";

export default function Layout() {
  return <main className={styles.blog}></main>;
}
```
