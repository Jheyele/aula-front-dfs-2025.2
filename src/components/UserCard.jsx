import { Avatar, Box, Card, CardActions, CardContent, Grid, IconButton, Switch, TextField, Typography} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { getUsers, deleteUser } from "../api/serviceApi";
import { useAuth } from "../context/AuthContext";

export function UserCard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const { userId } = useAuth();
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Deseja realmente excluir o usuário?")) {
      await deleteUser(id);
      fetchUsers();
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    [user.name, user.email, user.phone].some((field) =>
      field?.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <>
      <Typography variant="h4" sx={{ mt: 2 }}>
        Usuários
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <IconButton color="primary" onClick={() => navigate("/save-user")}>
          <PersonAddIcon />
        </IconButton>
      </Box>
      <TextField
        label="Buscar..."
        size="small"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Grid container spacing={3}>
        {filteredUsers.map((user) => (
          <Grid key={user.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Avatar
                    alt={user.name}
                    src={"https://via.placeholder.com/150"}
                    sx={{ width: 48, height: 48, mr: 2 }}
                  />
                  <Typography variant="h6">{user.name}</Typography>
                </Box>
                <Typography variant="body2">{user.email}</Typography>
                <Typography variant="body2">{user.phone}</Typography>
                <Typography variant="body2">
                  Admin: <Switch checked={user.isAdmin} disabled />
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  disabled={userId != user.id}
                  color="primary"
                  onClick={() => navigate(`/edit-user/${user.id}`)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  disabled={userId != user.id}
                  color="error"
                  onClick={() => handleDelete(user.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
