import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Header } from "../components/Header";
import { getTechs, linkUserTech } from "../api/serviceApi";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


export function TechUserPage() {
    const [techs, setTechs] = useState([]);
    const [selectedTech, setSelectedTech] = useState("");
    const { userId } = useAuth();
    const navigate = useNavigate();

    const findTechs = async () => {
        const { data } = await getTechs();
        setTechs(data);
    }

    useEffect(() => { findTechs() }, [])

    const handleLink = async () => {
        await linkUserTech({userId, techId: selectedTech})
        navigate("/");
    }

    return(
        <>
            <Header />
            <Container maxWidth="sm" sx={{ mt: 4}} >
                <Box sx={{ display:"flex", flexDirection: "column", gap:2 }}>
                    <FormControl>
                        <InputLabel>Tecnologia</InputLabel>
                        <Select
                            value={selectedTech}
                            onChange={(e) => setSelectedTech(e.target.value)}
                        >
                            {techs.map((tech) => (
                                <MenuItem key={tech.id} value={tech.id}>
                                 {tech.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button 
                        variant="contained"
                        onClick={handleLink}
                    >
                        Vincular
                    </Button>
                </Box>
            </Container>
        </>
    )
}