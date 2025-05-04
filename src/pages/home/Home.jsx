import React from 'react';
import back from '../../assets/images/background.png';   // Right side image
import back2 from '../../assets/images/background2.png'; // Line-art background
import { Header } from '../../components/header/Header';
import { Carousel } from '../carousel/Carousel';
import { BestSelling } from '../bestSelling/BestSelling';
import Catering from '../catering/Catering';
import { About } from '../about/About';
import { WhyMira } from '../whyMira/WhyMira';

export const Home = () => {

  return (
    <>
    <Header/>
    <div className="bg-[#FAF6F2] w-full flex flex-col-reverse lg:flex-row items-center justify-between  gap-10 relative overflow-hidden">
      
      {/* Background line art image */}
      <img
        src={back2}
        alt="line art"
        className="absolute left-0 top-[-10] w-1/2 opacity-30 z-0"
      />

      {/* Text Content */}
      <div className="max-w-xl z-10 ml-15">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight opacity-70 z-0 text-[#2D1B0E]">
          Every Bite,<br />
          <span className="text-[#D8A75D]">A Moment of Bliss</span>
        </h1>
        <p className="text-[#7D7266] mt-6 text-lg">
          Baked fresh daily, our pastries are a blend of tradition and innovation,
          bringing you the best of both worlds.
        </p>
        <button className="mt-10 px-6 py-3 border border-[#D8A75D] text-[#D8A75D] hover:bg-[#D8A75D] hover:text-white transition rounded-md">
          Learn More
        </button>
      </div>

      {/* Right Image */}
      <div className="relative w-full max-w-xl z-10">
        <img src={back} alt="eclairs on a plate" className="rounded-lg " />
      </div>
    </div>
    <Carousel/>
    <About/>
    <BestSelling/>
    <Catering/>
    <WhyMira/>
    </>
  );
};
