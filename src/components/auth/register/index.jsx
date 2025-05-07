import React, { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/authContext";
import { doCreateUserWithEmailAndPassword } from "../../../firebase/auth";
import {
  CenteredText,
  Container,
  ErrorText,
  Form,
  Input,
  Label,
  StyledLink,
  SubmitButton,
  Title,
  Wrapper,
} from "./Register.styles";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { userLoggedIn } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      await doCreateUserWithEmailAndPassword(email, password);
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}

      <Container>
        <Wrapper>
          <Title>Create a New Account</Title>
          <Form onSubmit={onSubmit}>
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div>
              <Label>Password</Label>
              <Input
                disabled={isRegistering}
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div>
              <Label>Confirm Password</Label>
              <Input
                disabled={isRegistering}
                type="password"
                autoComplete="off"
                required
                value={confirmPassword}
                onChange={(e) => {
                  setconfirmPassword(e.target.value);
                }}
              />
            </div>

            {errorMessage && <ErrorText>{errorMessage}</ErrorText>}

            <SubmitButton type="submit" disabled={isRegistering}>
              {isRegistering ? "Signing Up..." : "Sign Up"}
            </SubmitButton>
            <CenteredText>
              Already have an account? {"   "}
              <StyledLink
                to={"/login"}
              >
                Continue
              </StyledLink>
            </CenteredText>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
