import React from "react";
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
const Header = () => {
  return (
  
  <div className="bg-navbar h-12 flex">
    <div className="bg-red-300 rounded-full text-4xl "> <LunchDiningOutlinedIcon/></div>
    <button className=" mt-1">Hunger-Eats</button>
    <button className=" mt-1">Home</button>
    <button className=" mt-1">About</button>
  </div>
  )
};

export default Header;
