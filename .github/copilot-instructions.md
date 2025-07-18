# Copilot Instructions for BookStoreAdminPanel

## Project Overview

- This is a React + TypeScript admin panel for a bookstore, scaffolded with Vite.
- UI components use [Flowbite React](https://flowbite-react.com/) and [Tailwind CSS](https://tailwindcss.com/).
- Main app code is in `src/`, with pages under `src/pages/` and shared assets in `src/assets/`.

## Key Architectural Patterns

- **Sidebar Navigation:**
  - Implemented in `src/pages/layout/sidebar.tsx` using Flowbite's Sidebar components and React Icons.
  - Sidebar items are grouped with `SidebarItemGroup` and can be styled using Tailwind utility classes via the `className` prop.
  - To stick an item (e.g., logout) to the bottom, use `flex-col flex-1` on the sidebar container and `flex-1` on the main group.
- **Routing:**
  - Navigation is handled via `href` props on sidebar items. (No router setup is shown; add React Router if needed.)
- **Styling:**
  - Tailwind CSS is the primary styling method. Use utility classes directly in `className` props.
  - Custom fonts and images are in `src/assets/fonts/` and `src/assets/images/`.

## Developer Workflows

- **Development:**
  - Start the dev server: `npm run dev`
  - Main entry: `src/main.tsx`, root component: `src/App.tsx`
- **Build:**
  - Production build: `npm run build`
- **Linting:**
  - Lint: `npm run lint` (uses ESLint, see `eslint.config.js`)
  - Type-aware linting is recommended; see `README.md` for advanced ESLint setup.
- **Type Checking:**
  - Run `tsc --noEmit` or use `npm run type-check` if defined.

## Conventions & Patterns

- **Component Structure:**
  - Use function components and TypeScript throughout.
  - Group related pages under `src/pages/` (e.g., `authentication/login.tsx`).
- **Imports:**
  - Prefer absolute imports from `src/` for clarity.
- **UI Customization:**
  - Extend Flowbite components with Tailwind classes as needed.
  - Example: To make a sidebar item sticky, add `className="flex-1"` to its group.

## External Integrations

- **Flowbite React** and **React Icons** are used for UI.
- **Vite** is used for fast development and builds.

## Example: Sticky Sidebar Logout

```tsx
<Sidebar className="h-screen flex flex-col">
  <SidebarItems className="flex flex-col flex-1">
    <SidebarItemGroup className="flex-1"> ... </SidebarItemGroup>
    <SidebarItemGroup>
      <SidebarItem icon={IoIosLogOut}>خروج</SidebarItem>
    </SidebarItemGroup>
  </SidebarItems>
</Sidebar>
```

## References

- See `README.md` for ESLint and TypeScript config tips.
- Main UI: `src/pages/layout/sidebar.tsx`, `src/App.tsx`, `src/main.tsx`.

---

If any conventions or workflows are unclear, please ask for clarification or examples from the codebase.
