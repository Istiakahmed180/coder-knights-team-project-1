<<<<<<< HEAD
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
};

export default Home;
