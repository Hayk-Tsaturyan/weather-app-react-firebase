import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 1256px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    align-items: center;
  }
`;