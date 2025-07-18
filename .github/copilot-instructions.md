# Copilot Instructions for BookStoreAdminPanel

## Project Overview

- This is a React + TypeScript Admin Panel.
- UI components use [Flowbite React](https://flowbite-react.com/) and [Tailwind CSS](https://tailwindcss.com/).
- Main app code is in `src/`, with pages under `src/pages/` and shared assets in `src/assets/`.

## Key Architectural Patterns

- **Routing:**
  **React Router 7** is used for navigation.
  - Main routes are defined in `src/App.tsx` using `<Route>` components.
- **Styling:**
  - Tailwind CSS is the primary styling method. Use utility classes directly in `className` props.
  - Custom fonts and images are in `src/assets/fonts/` and `src/assets/images/`.

## Conventions & Patterns

- **Component Structure:**
  - Use function components and TypeScript throughout.
  - Group related pages under `src/pages/` (e.g., `authentication/login.tsx`).
- **Imports:**
  - Prefer absolute imports from `src/` for clarity.
- **UI Customization:**
  - Extend Flowbite components with Tailwind classes as needed.
- **Flowbite React** and **React Icons** and **Tailwind CSS** are used for UI.

If any conventions or workflows are unclear, please ask for clarification or examples from the codebase.
