import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Items from "../Components/Items";
import { Route, Router } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <Items />
    </div>
  );
};

export default Home;
