# Task Management App

A simple task management application built with React, Vite, TypeScript, and Zustand for state management. This app allows users to manage their tasks with basic CRUD operations and completion tracking.

## Features

- **Authentication**
  - Sign Up - Create a new account
  - Sign In - Login to your account
  - User data stored in localStorage

- **Task Management**
  - **Create** - Add new tasks with title and description
  - **Read** - View all your tasks
  - **Update** - Edit existing tasks
  - **Delete** - Remove tasks
  - **Mark as Complete** - Toggle task completion status

## Tech Stack

- **React 19** - UI Library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Styled Components** - CSS-in-JS styling
- **Zustand** - State management with localStorage persistence
- **TanStack Router** - Type-safe routing
- **React Hook Form + Zod** - Form validation
- **Lucide React** - Icons

## Prerequisites

- **Node.js** v22
- **pnpm** package manager

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/vunky-himawan/react-vite-template.git
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

Open http://localhost:5173 in your browser to view the app.

4. Build for production:

```bash
pnpm build
```

Production files are generated in the dist folder.

5. Preview the production build:

```bash
pnpm preview
```

## Scripts

- `pnpm dev`: Start the development server.

- `pnpm build`: Build the app for production.

- `pnpm preview`: Preview the production build.

- `pnpm routes:generate`: Generate route files using TanStack Router.

- `pnpm prepare`: Run Husky hooks.

- `pnpm format`: Format code using Prettier.

- `pnpm lint`: Run ESLint to check code quality.

### 1. Install Node.js using NVM (recommended)

```bash
# Install or update to Node.js LTS
nvm install --lts
nvm use --lts
```

### 2. Enable Corepack for pnpm

```bash
corepack enable
```

### 3. Clone the repository

```bash
git clone <repository-url>
cd dot-technical-test
```

### 4. Install dependencies

```bash
pnpm install
```

### 5. Run the development server

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Production Build

### Build for production

```bash
pnpm build
```

### Preview production build locally

```bash
pnpm preview
```

The preview server will start at [http://localhost:4173](http://localhost:4173)

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm routes:generate` - Generate TanStack Router routes

## Project Structure

```
src/
├── app/               # Application setup (providers, routes, styles)
├── features/          # Feature modules (auth, task)
│   ├── auth/         # Authentication feature
│   └── task/         # Task management feature
├── shared/           # Shared components, hooks, utils
│   ├── components/   # Reusable UI components
│   ├── hooks/        # Custom React hooks
│   ├── stores/       # Zustand stores
│   └── utils/        # Utility functions
└── config/           # Configuration files
```

## How It Works

1. **Sign Up** - Create an account (stored in localStorage)
2. **Sign In** - Login with your credentials
3. **Dashboard** - View and manage your tasks
4. **Add Task** - Create new tasks with expandable form
5. **Edit Task** - Click task card to edit
6. **Complete Task** - Click checkbox to mark complete
7. **Delete Task** - Remove unwanted tasks

All data is persisted in browser localStorage, so your tasks remain even after refresh!
