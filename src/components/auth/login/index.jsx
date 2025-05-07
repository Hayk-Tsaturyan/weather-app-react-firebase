import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../../firebase/auth";
import { useAuth } from "../../../contexts/authContext";
import { ReactComponent as GoogleIcon } from "../../../assets/google.svg";
import {
  CenteredText,
  Container,
  ErrorText,
  Form,
  GoogleSignInButton,
  Input,
  Label,
  StyledLink,
  SubmitButton,
  Title,
  Wrapper,
} from "./Login.styles";

const Login = () => {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch((err) => {
        setIsSigningIn(false);
      });
    }
  };

  return (
    <div>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}

      <Container>
        <Wrapper>
          <Title>Welcome Back</Title>
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
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            {errorMessage && <ErrorText>{errorMessage}</ErrorText>}

            <SubmitButton type="submit" disabled={isSigningIn}>
              {isSigningIn ? "Signing In..." : "Sign In"}
            </SubmitButton>
          </Form>
          <CenteredText>
            Don't have an account?{" "}
            <StyledLink to={"/register"}>Sign up</StyledLink>
          </CenteredText>
          <GoogleSignInButton
            disabled={isSigningIn}
            onClick={(e) => {
              onGoogleSignIn(e);
            }}
          >
            <GoogleIcon width={20} height={20} />
            {isSigningIn ? "Signing In..." : "Continue with Google"}
          </GoogleSignInButton>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Login;
