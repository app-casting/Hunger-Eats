import React, { useState, useEffect } from "react";

const Crousel = () => {
  const [photoLink, setPhotoLink] = useState(
    "./public/Photographs/SliderPic.jpg"
  );
  const [currentFood, setCurrentFood] = useState(0);
  const food = ["burger", "pizza", "biryani", "momos", "coke"];
  const changePhoto = () => {
    const newIndex = (currentFood + 1) % food.length;
    setPhotoLink(
      `https://source.unsplash.com/random/1500x300/?${food[newIndex]}`
    );
    setCurrentFood(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(changePhoto, 5000); // Change photo every 5 seconds
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [currentFood]);
  return (
    <div>
      <div className="relative">
        <button
          onClick={changePhoto}
          className="absolute top-1/2 transform -translate-y-1/2 translate-x-1/2 p-4 flex justify-center items-center hover:shadow-lg hover:border hover:bg-gray-200 hover:opacity-50 hover:rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          onClick={changePhoto}
          className="absolute top-1/2  right-0 transform -translate-y-1/2 -translate-x-1/2 p-4 flex justify-center items-center hover:shadow-lg hover:border hover:bg-gray-200 hover:opacity-50 hover:rounded-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <div className="absolute flex bottom-0 transform -translate-y-2/3 -translate-x-1/2 left-1/2 items-center gap-2 w-150 opacity-50 w-[500px]  hover:opacity-100 ">
          <input
            type="text"
            placeholder="Search"
            className="align-middle bg-gray-200 opacity-80"
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 aspect-circle shadow-lg border-lg text-bold  bg-gray-200  rounded-full ">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        <img className="" src={photoLink} alt="" />
      </div>
    </div>
  );
};

export default Crousel;
