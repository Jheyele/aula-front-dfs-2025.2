import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserFormPage } from "./pages/UserFormPage";
import { LandingPage } from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/users" element={<Home />} />
        <Route path="/save-user" element={<UserFormPage />} />
        <Route path="/edit-user/:id" element={<UserFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
