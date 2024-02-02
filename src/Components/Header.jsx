import React from "react";
import LunchDiningIcon from '@mui/icons-material/LunchDining';
const Header = () => {
  return (
    <div className="bg-navbar h-12 flex gap-2">
      <div className="flex mt-1 mb-1 ml-2" >
      <button className="bg-white font-4xl rounded-full p-2 text-pink  "><LunchDiningIcon/></button>
        <button className=" mt-1 flex items-center ml-2  font-bold bg-white rounded-full p-2"> Hunger-Eats</button>
      </div>
      <button className=" mt-1">Home</button>
      <button className=" mt-1">About</button>
    </div>
  );
};

export default Header;
