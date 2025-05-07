import styled from "styled-components";
import { Link} from "react-router-dom";


export const LogInLink = styled(Link)`
  font-size: 0.875rem;
  color: #3b82f6;
  text-decoration: underline;
`;

export const LogOutButton = styled.span`
  font-size: 0.875rem;
  color: #3b82f6;
  text-decoration: underline;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: 100%;
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  height: 3rem;
  border-bottom: 1px solid #d1d5db;
  justify-content: center;
  align-items: center;
  background-color: #e5e7eb;
`;

export const RegisterLink = styled(Link)`
  font-size: 0.875rem;
  color: #3b82f6;
  text-decoration: underline;
`;