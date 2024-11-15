import React, { useState } from "react";
import Hero_Banner from "../components/Hero_Banner";
import Steps from "../components/Steps";
import Categories from "../components/categories";
import ProductDisplay from "../components/ProductDisplay";
import FindUs from "../components/FindUs";
import Chefs from "../components/Chefs";



const Home = () => {
    const [category, setCategory] = useState('All')
    return(
        <>
            <Hero_Banner/>
            <Steps/>
            <Categories category={category} setCategory={setCategory}/>
            <ProductDisplay category={category}/>
            <FindUs/>
            <Chefs/>
        </>
    )
}
export default Home;