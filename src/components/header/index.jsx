import React from "react";
import { useAuth } from "../../contexts/authContext";
import { doSignOut } from "../../firebase/auth";
import { Container, StyledButton } from "./Header.styles";

const Header = () => {
  const { userLoggedIn } = useAuth();

  return (
    <Container>
      {userLoggedIn ? (
        <>
          <StyledButton
            onClick={() => {
              doSignOut();
            }}
          >
            Logout
          </StyledButton>
        </>
      ) : (
        <>
          <StyledButton to={"/login"}>Login</StyledButton>
          <StyledButton to={"/register"}>Register</StyledButton>
        </>
      )}
    </Container>
  );
};

export default Header;
