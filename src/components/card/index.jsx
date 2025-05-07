import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  Container,
  Description,
  FeelsLike,
  GeneralDescription,
  Label,
  Location,
  Temperature,
  TemperatureWrapper,
  WeatherDescription,
  WeatherDetails,
  WeatherIcon,
  Wrapper,
} from "./Card.styles";
import {
  WiHumidity,
  WiBarometer,
  WiStrongWind,
  WiSunrise,
  WiSunset,
} from "react-icons/wi";
import axios from "axios";

function capitalize(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const Card = () => {
  const [coords, setCoords] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = "cb9fa564f05d954743e8a57040a52168";

  useEffect(() => {
    if (coords) {
      const fetchWeather = async () => {
        try {
          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${API_KEY}`
          );
          setWeatherData(res.data);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      };
      fetchWeather();
    }
  }, [coords]);

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
    <>
      {weatherData ? (
        <Container>
          <Location>{weatherData.name}</Location>
          <Wrapper>
            <WeatherDescription>
              <GeneralDescription>
                <WeatherIcon
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                />
                <Description>
                  {capitalize(weatherData.weather[0].description)}
                </Description>
              </GeneralDescription>
              <TemperatureWrapper>
                <Temperature>{`${Math.round(
                  weatherData.main.temp
                )} °C`}</Temperature>
                <FeelsLike>{`Feels like ${Math.round(
                  weatherData.main.feels_like
                )} °C`}</FeelsLike>
              </TemperatureWrapper>
            </WeatherDescription>
            <WeatherDescription>
              <WeatherDetails>
                <WiHumidity size={30} />
                <Label>Humidity: {weatherData.main.humidity}%</Label>
              </WeatherDetails>
              <WeatherDetails>
                <WiStrongWind size={30} />
                <Label>Wind: {weatherData.wind.speed} m/s</Label>
              </WeatherDetails>
              <WeatherDetails>
                <WiBarometer size={30} />
                <Label>Pressure: {weatherData.main.pressure} hPa</Label>
              </WeatherDetails>
              <WeatherDetails>
                <WiSunrise size={30} />
                <Label>
                  Sunrise:{" "}
                  {format(new Date(weatherData.sys.sunrise * 1000), "HH:mm")}
                </Label>
              </WeatherDetails>
              <WeatherDetails>
                <WiSunset size={30} />
                <Label>
                  Sunset:{" "}
                  {format(new Date(weatherData.sys.sunset * 1000), "HH:mm")}
                </Label>
              </WeatherDetails>
            </WeatherDescription>
          </Wrapper>
        </Container>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default Card;
