import { Routes, Route } from "react-router";
import "./App.css";

import { LoginPage } from "./pages/authentication/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
