import React, { useContext } from "react";
import { myContext } from "../../contextApi/Authcontext";
import HomeCategoryByProduct from "./HomeCategoryByProduct/HomeCategoryByProduct";
import HomeProducts from "./HomeProducts/HomeProducts";

const Home = () => {
  const { test } = useContext(myContext);
  return (
    <div>
      <HomeProducts />
      <HomeCategoryByProduct />
    </div>
  );
};

export default Home;
