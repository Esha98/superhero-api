import React from "react";
import { Search, Title } from "../../components";
import background from "../../assets/background.jpeg";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <img
        className="w-full h-full object-cover"
        src={background}
        alt="Background"
      />
      <div className="absolute bg-gradient-to-r from-gray-900 top-0 w-full h-full flex flex-col justify-center text-center p-4">
        <div className="px-24 py-8">
          <Title />
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Hero;
