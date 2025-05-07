import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { doSignOut } from "../../firebase/auth";
import {
  Container,
  LogInLink,
  LogOutButton,
  RegisterLink,
} from "./Header.styles";

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <Container>
      {userLoggedIn ? (
        <>
          <LogOutButton
            onClick={() => {
              doSignOut();
            }}
          >
            Logout
          </LogOutButton>
        </>
      ) : (
        <>
          <LogInLink to={"/login"}>Login</LogInLink>
          <RegisterLink to={"/register"}>Register New Account</RegisterLink>
        </>
      )}
    </Container>
  );
};

export default Header;
