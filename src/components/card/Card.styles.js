import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 420px;
  border: 1px solid #d1d5db;
  justify-content: start;
  align-items: start;
  background-color: rgb(178, 201, 248);
  padding: 2rem;
  border-radius: 0.5rem;
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
  font-size: 1.5rem;
`;

export const Temperature = styled.div`
  font-size: 3rem;
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

export const WeatherDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  justify-content: start;
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
