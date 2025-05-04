import React from 'react';
import about from '../../assets/images/aboutcake.png'

export const About = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#fdf9f4] p-10 lg:p-20 items-center">
      {/* Left Section - Text */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-[#b07b30] font-semibold text-4xl tracking-wide mb-4">ABOUT MIRA</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3a2e1f] leading-snug">
          Crafting Sweet Memories, One Bite at a Time
        </h2>
        <p className="text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
          At Mira, we believe every dessert tells a story. From delicate pastries to indulgent chocolate creations, our handcrafted treats are made with the finest ingredients and a touch of love. Whether you're celebrating a special moment or simply satisfying a craving, we're here to make life sweeter—one bite at a time.
        </p>
        <button className="border border-[#b07b30] text-[#3a2e1f] py-2 px-6 rounded hover:bg-[#b07b30] hover:text-white transition">
          Learn More
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="lg:w-1/2 mt-10 lg:mt-7 flex justify-center">
        <img 
          src={about}
          alt="Dessert Display" 
          className="rounded-lg shadow-lg max-w-full h-auto border-[13px] border-[#fdf4e7]" 
        />
      </div>
    </div>
  );
};


