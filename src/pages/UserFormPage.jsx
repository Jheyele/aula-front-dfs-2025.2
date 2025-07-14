import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { UserForm } from "../components/UserForm";
import { Container } from "@mui/material";

export function UserFormPage() {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <UserForm />
      </Container>
      <Footer />
    </>
  );
}
