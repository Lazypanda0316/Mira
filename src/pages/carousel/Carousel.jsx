import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import cake from '../../assets/images/caked.png';
import pastries from '../../assets/images/pastries.png';
import tart from '../../assets/images/tart.png';
import cake2 from '../../assets/images/cake.png';
import siders from '../../assets/images/cupcake.png';

export const Carousel = () => {
  const categories = [
    { title: 'Cakes', items: '12 Items', image: cake },
    { title: 'Pastries', items: '12 Items', image: pastries },
    { title: 'Tarts', items: '12 Items', image: tart },
    { title: 'Cakes', items: '12 Items', image: cake2 },
  ];

  const ITEMS_VISIBLE = 3;
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const visibleItems = [];
  for (let i = 0; i < ITEMS_VISIBLE; i++) {
    visibleItems.push(categories[(startIndex + i) % categories.length]);
  }

  return (
    <div className="bg-white py-16 relative overflow-hidden">
      {/* Background Decorations */}
      <img
        src={siders}
        alt="Cupcake background left"
        className="absolute left-0 top-1/4 transform -translate-y-1/2 opacity-10 h-50 w-8 hidden md:block"
      />
      <img
        src={siders}
        alt="Cupcake background right"
        className="absolute right-0 top-1/4 transform -translate-y-1/2 opacity-10 w-48 hidden md:block rotate-180"
      />

      {/* Headings */}
      <div className="text-center max-w-3xl mx-auto px-4 z-10 relative">
        <h4 className="text-tan font-bold text-sm uppercase tracking-widest mb-2">
          Shop By Categories
        </h4>
        <h3 className="text-soul font-bold text-3xl md:text-4xl">
          Explore Our Tempting Creations
        </h3>
        <p className="text-ash mt-4 text-base md:text-lg">
          From rich, chocolatey delights to light and fluffy pastries, explore a world of irresistible desserts baked just for you.
        </p>
      </div>

      {/* Carousel */}
      <div className="mt-12 flex justify-center items-center gap-6 relative px-8 z-10">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="text-[#D8A75D] hover:text-[#b88a47] text-2xl absolute left-2 lg:left-12 z-20"
        >
          <FaChevronLeft />
        </button>

        {/* Cards */}
        <div className="flex gap-6">
          {visibleItems.map((cat, index) => (
            <div
              key={index}
              className="w-[300px] h-[450px] rounded-lg overflow-hidden shadow-md relative group hover:scale-105 transition-transform duration-300"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 bg-white text-[#2D1B0E] text-center w-full py-4">
                <h4 className="text-lg font-semibold">{cat.title}</h4>
                <p className="text-sm">{cat.items}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="text-[#D8A75D] hover:text-[#b88a47] text-2xl absolute right-2 lg:right-12 z-20"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2 z-10 relative">
        {categories.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-4 rounded-full inline-block ${
              index === startIndex ? 'bg-[#D8A75D]' : 'bg-[#E6D9C1]'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};
