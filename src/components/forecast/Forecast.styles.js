import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 140px;
  background-color: rgb(120, 165, 236);
  width: 80px;
  padding: 0.5rem;
  border-radius: 0.5rem;
  justify-content: space-between;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.7rem;
  flex-wrap: wrap;

  @media (max-width: 500px) {
   gap: 0.3rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid rgb(2, 73, 253);
  width: 420px;
  justify-content: start;
  align-items: start;
  background-color: rgb(204, 218, 247);
  padding: 2rem;
  border-radius: 0.5rem;

  @media (max-width: 500px) {
    width: 300px;
    padding: 1rem;
  }
`;

export const Date = styled.div`
  font-size: 1rem;
`;

export const DateTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const Description = styled.label`
  display: flex;
  width: 100%;
  font-size: 1rem;
  align-items: start;
  word-break: break-word;
  justify-content: center;
  text-align: center;
  height: 36px;
`;

export const StyledButton = styled.button`
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  background-color: ${({ active }) =>
    active ? "rgb(17, 71, 248)" : "rgb(115, 147, 251)"};
  color: ${({ active }) => (active ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)")};

  &:hover {
    cursor: pointer;
    background-color: rgb(68, 109, 244);
  }
`;

export const Temperature = styled.div`
  font-size: 1.25rem;
`;

export const Time = styled.div`
  font-size: 1rem;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  color: rgb(2, 73, 253);
`;

export const WeatherIcon = styled.img`
  width: 50px;
  height: 50px;
`;
