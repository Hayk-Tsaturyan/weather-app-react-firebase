import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 420px;
  border: 1px solid rgb(2, 73, 253);
  justify-content: start;
  align-items: center;
  background-color: rgb(204, 218, 247);
  padding: 2rem;
  border-radius: 0.5rem;

  @media (max-width: 500px) {
    width: 300px;
    padding: 1rem;
  }
`;

export const Description = styled.label`
  display: flex;
  width: 100%;
  font-size: 1rem;
  justify-content: center;
`;

export const FeelsLike = styled.label`
  font-size: 1rem;
`;

export const GeneralDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

export const Label = styled.div`
  font-size: 1rem;
`;

export const Location = styled.div`
  font-size: 2rem;
  color: rgb(214, 117, 20);
`;

export const Temperature = styled.div`
  font-size: 3rem;
  color: rgb(2, 73, 253);

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 10px;

  @media (max-width: 500px) {
    align-items: center;
  }
`;

export const WeatherDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  justify-content: start;

  @media (max-width: 500px) {
    gap: 0.75rem;
  }
`;

export const WeatherDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
