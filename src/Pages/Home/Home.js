<<<<<<< HEAD
<<<<<<< HEAD
import React, { useContext } from "react";
import { myContext } from "../../contextApi/Authcontext";
<<<<<<< HEAD
import HomeCategoryByProduct from "./HomeCategoryByProduct/HomeCategoryByProduct";
import HomeProducts from "./HomeProducts/HomeProducts";
=======
import Carousel from "../Carousel/Carousel";
>>>>>>> 0917cabe784ab4ba71e0ecc1687d762c55b83091
=======
import React, { useContext } from "react";
import { myContext } from "../../contextApi/Authcontext";
import OfferFlashCard from "./flashCard/OfferFlashCard";
import HomeCategoryByProduct from "./HomeCategoryByProduct/HomeCategoryByProduct";
import HomeProducts from "./HomeProducts/HomeProducts";
>>>>>>> 157384599032fa55625dd6cce85419d8003ee2c2

const Home = () => {
  const { test } = useContext(myContext);
  return (
    <div>
<<<<<<< HEAD
<<<<<<< HEAD
      <HomeProducts />
      <HomeCategoryByProduct />
=======
      <Carousel></Carousel>
>>>>>>> 0917cabe784ab4ba71e0ecc1687d762c55b83091
    </div>
  );
=======
import React, { useContext } from 'react';
import { myContext } from '../../contextApi/Authcontext';
import TopSellingProduct from './TopSellingProduct/TopSellingProduct';
import GamingProduct from './GamingProduct/GamingProduct';

const Home = () => {
    const { test } = useContext(myContext)
    return (
        <div>
            <h2>Home Page {test} </h2>
            <TopSellingProduct></TopSellingProduct>
            <GamingProduct></GamingProduct>
        </div>
    );
>>>>>>> a9644ec8cb960f08610ffeeb884cd133d7d0a989
=======
      <h1>Hero section</h1>
      <HomeProducts />
      <HomeCategoryByProduct />
      <OfferFlashCard />
      {/* <h2>Home Page {test} </h2> */}
    </div>
  );
>>>>>>> 157384599032fa55625dd6cce85419d8003ee2c2
};

export default Home;
