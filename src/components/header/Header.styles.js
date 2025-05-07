import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: 90%;
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  height: 3rem;
  justify-content: end;
  align-items: center;
`;

export const StyledButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  border-radius: 4px;
  background-color: rgb(76, 124, 245);
  font-size: 0.875rem;
  color: rgb(254, 254, 254);
  text-decoration: none;

  &:hover {
    background-color: rgb(2, 73, 253);
  }
`;
