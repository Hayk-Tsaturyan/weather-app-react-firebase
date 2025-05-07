import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const CenteredText = styled.p`
  text-align: center;
  font-size: 0.875rem;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const GoogleSignInButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.625rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.3s, box-shadow 0.3s;

  ${(props) =>
    props.disabled
      ? css`
          cursor: not-allowed;
        `
      : css`
          &:hover {
            background-color: #f3f4f6;
            cursor: pointer;
          }
          &:active {
            background-color: #f3f4f6;
          }
        `}
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem;
  color: #6b7280;
  background-color: transparent;
  outline: none;
  border: 1px solid #d1d5db;
  box-shadow: 0 1px 2px #0d0d0d;
  border-radius: 0.5rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #4f46e5;
  }
`;

export const Label = styled.label`
  font-size: 0.875rem;
  color: #4b5563;
  font-weight: 700;
`;

export const StyledLink = styled(Link)`
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  color: #ffffff;
  font-weight: 500;
  border-radius: 0.5rem;
  transition: background-color 0.3s, box-shadow 0.3s;

  ${(props) =>
    props.disabled
      ? css`
          background-color: #d1d5db;
          cursor: not-allowed;
        `
      : css`
          background-color: #4f46e5;

          &:hover {
            background-color: #4338ca;
            box-shadow: 0 10px 15px -3px #1a1a1a,
              0 4px 6px -2px #0d0d0d;
            cursor: pointer;
          }
        `}
`;

export const Title = styled.h1`
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;

  @media (min-width: 640px) {
    font-size: 1.5rem;
  }
`;

export const Wrapper = styled.div`
  width: 24rem;
  color: #4b5563;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
`;
