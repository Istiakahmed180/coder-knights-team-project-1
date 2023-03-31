import React, { useContext } from "react";
import { myContext } from "../../contextApi/Authcontext";
<<<<<<< HEAD
import HomeCategoryByProduct from "./HomeCategoryByProduct/HomeCategoryByProduct";
import HomeProducts from "./HomeProducts/HomeProducts";
=======
import Carousel from "../Carousel/Carousel";
>>>>>>> 0917cabe784ab4ba71e0ecc1687d762c55b83091

const Home = () => {
  const { test } = useContext(myContext);
  return (
    <div>
<<<<<<< HEAD
      <HomeProducts />
      <HomeCategoryByProduct />
=======
      <Carousel></Carousel>
>>>>>>> 0917cabe784ab4ba71e0ecc1687d762c55b83091
    </div>
  );
};

export default Home;
