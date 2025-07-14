import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Container } from "@mui/material";
import { UserCard } from "../components/UserCard";

export function Home() {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <UserCard />
      </Container>
      <Footer />
    </>
  );
}

