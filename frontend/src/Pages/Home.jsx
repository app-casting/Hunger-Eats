import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Items from "../Components/Items";
import Crousel from "../Components/Crousel";
import { Route, Router } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex-grow">
      <Header />
      <Crousel/>
      <Items />
      <Footer/>
    </div>
  );
};

export default Home;
