import React from "react";
import { Link } from "react-router-dom";

const Items = () => {
  return (
    <div className="flex bg-gray-100 w-80 p-2 mt-4 ml-2 rounded-2xl border items-center justify-center  ">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-auto">
        {/* Iterate through items to create multiple links */}
        {/* Assuming you have an array of item data */}

        <Link to={"/"} className=" flex-col items-center  ">
          <div className="w-60 h-60 relative  items-center justify-center ">
            <img
              className="rounded-2xl w-full h-full object-cover"
              src={"/public/Photographs/Pizza.avif"}
              alt="pizza"
            />
            <div className="absolute bottom-0 bg-white bg-opacity-75 w-full text-center">
              <h2 className="font-bold">Margerita</h2>
              <select
                name="quantity"
                className="w-16 border my-1 py-1 px-2 rounded-xl gap-1">
                {""}
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5 ">5</option>
              </select>
              <span className="font-bold">$50</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Items;
