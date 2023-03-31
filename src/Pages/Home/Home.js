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
};

export default Home;