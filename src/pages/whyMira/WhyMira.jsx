import React from 'react';
import vid from '../../assets/video/whymirapremium.mp4';
import steamBread from '../../assets/images/steamBread.png';
import leaf from '../../assets/images/Leaf.png';
import heart from '../../assets/images/2Heart.png';

export const WhyMira = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden group">
      
      {/* Centered Background Video */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out group-hover:w-screen group-hover:h-screen w-[80vw] h-[80vh]">
        <video
          className="w-full h-full object-cover"
          src={vid}
          type="video/mp4"
          autoPlay
          muted
          loop
        />
      </div>

      {/* Optional overlay */}
      <div className="absolute inset-0  opacity-50 z-10" />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full space-y-6 text-center">
        <h2 className="text-white text-4xl font-bold drop-shadow-lg mb-10">
          Know Why Mira is Premium
        </h2>
        
        {/* Flex container for images and text */}
        <div className="flex justify-center items-center space-x-12">
          {/* First Section */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src={steamBread}
              alt="Freshly Baked Steam Bread"
              className=" object-cover "
            />
            <h2 className="text-white text-xl font-semibold">Freshly Baked</h2>
            <h3 className="text-white text-lg font-light max-w-xs text-center">
              Every dessert is made from scratch for ultimate freshness.
            </h3>
          </div>

          {/* Second Section */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src={leaf}
              alt="Premium Ingredients"
              className=" object-cover "
            />
            <h2 className="text-white text-xl font-semibold">Premium Ingredients</h2>
            <h3 className="text-white text-lg font-light max-w-xs text-center">
              We use only the best ingredients for unforgettable treats.
            </h3>
          </div>

          {/* Third Section */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src={heart}
              alt="Made with Love"
              className=" object-cover "
            />
            <h2 className="text-white text-xl font-semibold">Made with Love</h2>
            <h3 className="text-white text-lg font-light max-w-xs text-center">
              Each dessert is made with care and a sprinkle of happiness.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
