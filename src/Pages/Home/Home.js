import React, { useContext } from "react";
import { myContext } from "../../contextApi/Authcontext";
import Carousel from "../Carousel/Carousel";

const Home = () => {
  const { test } = useContext(myContext);
  return (
    <div>
      <Carousel></Carousel>
    </div>
  );
};

export default Home;
