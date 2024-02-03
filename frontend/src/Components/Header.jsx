import React from "react";
import LunchDiningIcon from "@mui/icons-material/LunchDining";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-navbar flex gap-2">
      <Link to={"/"} className="flex ml-2 rounded-full items-center p-2 gap-1 ">
        <button className="rounded-full text-pink  bg-logobg p-2 shadow-lg ">
          <LunchDiningIcon style={{ fontSize: 35 }} />
        </button>
        <button className="flex items-center font-bold rounded-full pl-1 pr-1 text-pink">
          {" "}
          Hunger-Eats
        </button>
      </Link>
      <button className="">Home</button>
      <button className="">About</button>
    </div>
  );
};

export default Header;
