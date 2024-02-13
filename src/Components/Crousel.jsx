import React, { useState,useEffect } from "react";

const Crousel = () => {
  const [photoLink, setPhotoLink] = useState(
    "https://source.unsplash.com/random/1500x300/?burger"
  );
  const [currentFood, setCurrentFood] = useState(0);
  const food = ["burger", "pizza", "biryani", "momos", "chicken"];
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
  }, [currentFood])
  return (
    <div>
      <div className="relative">
        <button
          onClick={changePhoto}
          className="absolute top-1/2 transform -translate-y-1/2 translate-x-1/2 p-4 flex justify-center items-center hover:shadow-lg hover:border hover:bg-gray-200 hover:opacity-50 hover:rounded-full ">
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

        <button onClick={changePhoto} className="absolute top-1/2  right-0 transform -translate-y-1/2 -translate-x-1/2 p-4 flex justify-center items-center hover:shadow-lg hover:border hover:bg-gray-200 hover:opacity-50 hover:rounded-full ">
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
        <img src={photoLink} alt="" />
      </div>
    </div>
  );
};

export default Crousel;
