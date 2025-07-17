import { AppBar, Toolbar, Button, Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MemoryIcon from "@mui/icons-material/Memory";
import { useAuth } from "../context/AuthContext";
import LogoutIcon from "@mui/icons-material/Logout";

export function Header() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton edge="start" color="inherit" onClick={() => navigate("/")}>
          <MemoryIcon fontSize="large" />
        </IconButton>
        <Box>
          <Button color="inherit" onClick={() => navigate("/")}>Início</Button>
          <Button color="inherit" onClick={() => navigate("/users")}>Usuários</Button>
          <Button color="inherit" startIcon={<LogoutIcon /> } onClick={handleLogout}/>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
