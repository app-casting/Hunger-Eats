import React from "react";
import { Link } from "react-router-dom";

const Items = () => {

   
const quantity =[1,2,3,4,5]

  return (
    <div className="flex bg-gray-100 w-80 p-2 mt-4 ml-2 rounded-2xl border items-center justify-center">
      <div className="">
        <Link to={"/"} className="flex items-center justify-center">
          <div className="w-60 h-60 relative">
            <img
              className="rounded-2xl w-full h-full object-cover"
              src={"/public/Photographs/Pizza.avif"}
              alt="pizza"
            />
            <div className="absolute bottom-0 bg-white bg-opacity-75 w-full text-center ">
              <h2 className="font-bold">Margerita</h2>
              <select 
                name="quantity"
                className="w-16 border my-1 py-1 px-2 rounded-xl gap-1"
              >
                {quantity.map((count)=>(
                  <option key={"count"} value={count}>{count}</option>
                ))}
              </select>
              <span className="font-bold ml-2">Total Price $100</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Items;

