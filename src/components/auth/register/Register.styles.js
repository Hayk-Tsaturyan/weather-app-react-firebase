import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const CenteredText = styled.p`
  text-align: center;
  font-size: 0.875rem;
`;

export const Container = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormElement = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: transparent;
  outline: none;
  box-sizing: border-box;
  border: 1px solid rgb(187, 191, 197);
  border-radius: 0.5rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: rgb(2, 73, 253);
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

  &:active {
    color: rgb(2, 73, 253);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  color: rgb(255, 255, 255);
  font-weight: 500;
  border-radius: 0.5rem;
  background-color: rgb(76, 124, 245);
  border: none;

  ${() =>
    css`
      &:hover {
        background-color: rgb(2, 73, 253);
        cursor: pointer;
      }
    `}
`;

export const Title = styled.h1`
  color: rgb(2, 73, 253);
  font-size: 1.25rem;
  font-weight: 600;
`;

export const Wrapper = styled.div`
  width: 24rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;
  padding: 30px;
  border: 1px solid rgb(2, 73, 253);
  border-radius: 0.75rem;

  @media (max-width: 500px) {
    width: 300px;
    padding: 10px;
  }
`;
