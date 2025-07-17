import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserFormPage } from "./pages/UserFormPage";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { useAuth } from "./context/AuthContext";
import { TechUserPage } from "./pages/TechUserPage";

const AuthRoute = ({component: Component}) =>{
  const { userId } = useAuth();
  return userId ? <Component /> : <Navigate to="/login"/>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<AuthRoute component={LandingPage} />} />
        <Route path="/users" element={<AuthRoute component={Home} />} />
        <Route path="/save-user" element={<AuthRoute component={UserFormPage} />} />
        <Route path="/edit-user/:id" element={<AuthRoute component={UserFormPage} />} />
        <Route path="/tech-user" element={<AuthRoute component={TechUserPage} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
