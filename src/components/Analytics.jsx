import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTIC DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            nostrum saepe fugit deleniti a perspiciatis magni dolor magnam
            ducimus maiores odio laudantium, hic velit laboriosam ex cum dolores
            culpa deserunt!
          </p>
          <button className='sm:text-2xl text-[#00df9a] w-[200px] rounded-md font-medium mx-auto md:mx-0 my-6 py-3 bg-black'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
