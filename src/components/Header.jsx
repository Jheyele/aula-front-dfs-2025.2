import { AppBar, Toolbar, Button, Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MemoryIcon from "@mui/icons-material/Memory"; // ícone com cara de tecnologia

export function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton edge="start" color="inherit" onClick={() => navigate("/")}>
          <MemoryIcon fontSize="large" />
        </IconButton>
        <Box>
          <Button color="inherit" onClick={() => navigate("/")}>Início</Button>
          <Button color="inherit" onClick={() => navigate("/users")}>Usuários</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
