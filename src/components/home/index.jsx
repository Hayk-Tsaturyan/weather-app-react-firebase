import React from "react";
import Card from "../card/index";
import Forecast from "../forecast/index";
import { Wrapper } from "./Home.styles";

const Home = () => {
  return (
    <Wrapper>
      <Card />
      <Forecast />
    </Wrapper>
  );
};

export default Home;
