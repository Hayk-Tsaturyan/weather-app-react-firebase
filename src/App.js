import Header from "./components/header/index";
import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import routesArray from "./routes/routes";
import { Container } from "./App.styles";

function App() {
  const routesElement = useRoutes(routesArray);

  return (
    <AuthProvider>
      <Header />
      <Container>{routesElement}</Container>
    </AuthProvider>
  );
}

export default App;
