import React from "react";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import { makeStyles } from "@mui/material";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-navbar flex md:gap-2 sm:gap-2">
      <Link
        to={"/"}
        className=" flex ml-2 rounded-full items-center p-2 gap-1 sm:ml-1 p-1 ">
        <button className="rounded-full text-pink  bg-logobg p-2 shadow-lg sm:p-1 ">
          <LunchDiningIcon style={{ fontSize: 35 }} />
        </button>
        <Link
          to={"/"}
          className="flex items-center font-bold rounded-full pl-1 pr-1 text-pink sm:text-sm font-semibold ">
          {" "}
          Hunger-Eats
        </Link>
      </Link>
      <div className="flex items-center gap-2">
        <Link to={"/"} className="items-center">
          Home
        </Link>
        <Link className="">About</Link>
        <div className="justify-end"></div>
      </div>
      <div className="flex  items-center justify-right">
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default Header;
