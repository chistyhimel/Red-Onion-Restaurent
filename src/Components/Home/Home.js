import React from "react";
import Banner from "./Banner";
import "./Home.css";
import FoodCardContainer from "./FoodCardContainer"
import Services from "./Services";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
    <FoodCardContainer></FoodCardContainer>
    <Services></Services>
    <Footer></Footer>
    </div>

  );
};

export default Home;
