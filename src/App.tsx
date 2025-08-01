import { Routes, Route, Outlet, Navigate } from "react-router";
import "./App.css";

// Authentication Pages
import { LoginPage } from "./pages/authentication/login";

// Main Application Components
// Layout Components
import { SidebarComponent } from "./pages/layout/sidebar";
import type { JSX } from "react";
// Main Pages
import { UsersPage } from "./pages/users";

// Auth guard component
function RequireAuth({ children }: { children: JSX.Element }) {
  const token = localStorage.getItem("access_token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

// Layout component that wraps the main content with sidebar
function Layout() {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100%" }}>
      <SidebarComponent />
      <div style={{ width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route index element={<div>داشبورد</div>} />
          <Route path="users" element={<UsersPage />} />
          <Route path="books" element={<div>Books Page</div>} />
          <Route path="categories" element={<div>Categories Page</div>} />
          <Route path="authors" element={<div>Authors Page</div>} />
          <Route path="comments" element={<div>Comments Page</div>} />
          <Route path="notifications" element={<div>Notifications Page</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
