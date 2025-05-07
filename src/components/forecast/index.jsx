import React, { useEffect, useState } from "react";
import {
  ButtonsWrapper,
  Card,
  CardContainer,
  Container,
  Date,
  DateTime,
  Description,
  StyledButton,
  Temperature,
  Time,
  Title,
  WeatherIcon,
} from "./Forecast.styles";
import axios from "axios";

function getDaily(list) {
  return list.filter((item) => {
    return item.dt_txt.includes("12:00:00") || item.dt_txt.includes("00:00:00");
  });
}

function extractDayMonth(datetimeStr) {
  const datePart = datetimeStr.split(" ")[0];
  const [, month, day] = datePart.split("-");
  return `${day}.${month}`;
}

function extractTime(datetimeStr) {
  const timePart = datetimeStr.split(" ")[1];
  const [hours, minutes] = timePart.split(":");
  return `${hours}:${minutes}`;
}

function capitalize(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const Forecast = () => {
  const [period, setPeriod] = useState("hourly");
  const [coords, setCoords] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    if (coords) {
      const fetchForecast = async () => {
        try {
          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${API_KEY}`
          );
          setHourlyForecast(res.data.list.slice(0, 8));
          setDailyForecast(getDaily(res.data.list));
        } catch (error) {
          console.error("Error fetching forecast data:", error);
        }
      };
      fetchForecast();
    }
  }, [coords, API_KEY]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    }
  }, []);

  return (
    <Container>
      <Title>Weather Forecast</Title>
      <ButtonsWrapper>
        <StyledButton
          active={period === "hourly"}
          onClick={() => {
            setPeriod("hourly");
          }}
        >
          Hourly
        </StyledButton>
        <StyledButton
          active={period === "daily"}
          onClick={() => {
            setPeriod("daily");
          }}
        >
          Daily
        </StyledButton>
      </ButtonsWrapper>
      {hourlyForecast && dailyForecast ? (
        <>
          {period === "hourly" && (
            <CardContainer>
              {hourlyForecast.map((item, index) => (
                <Card key={index}>
                  <Time>{extractTime(item.dt_txt)}</Time>
                  <WeatherIcon
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                  />
                  <Temperature>{`${Math.round(
                    item.main.temp
                  )} °C`}</Temperature>
                  <Description>
                    {capitalize(item.weather[0].description)}
                  </Description>
                </Card>
              ))}
            </CardContainer>
          )}
          {period === "daily" && (
            <CardContainer>
              {dailyForecast.map((item, index) => (
                <Card key={index}>
                  <DateTime>
                    <Date>{extractDayMonth(item.dt_txt)}</Date>
                    <Time>{extractTime(item.dt_txt) === "12:00" ? "Day" : "Night"}</Time>
                  </DateTime>
                  <WeatherIcon
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                  />
                  <Temperature>{`${Math.round(
                    item.main.temp
                  )} °C`}</Temperature>
                </Card>
              ))}
            </CardContainer>
          )}
        </>
      ) : (
        <p>Loading</p>
      )}
    </Container>
  );
};

export default Forecast;
