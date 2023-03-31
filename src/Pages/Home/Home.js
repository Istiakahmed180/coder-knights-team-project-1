import React, { useContext } from 'react';
import { myContext } from '../../contextApi/Authcontext';
import TopSellingProduct from './TopSellingProduct/TopSellingProduct';

const Home = () => {
    const { test } = useContext(myContext)
    return (
        <div>
            <h2>Home Page {test} </h2>
            <TopSellingProduct></TopSellingProduct>
        </div>
    );
};

export default Home;