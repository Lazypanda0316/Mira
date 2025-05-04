import React from "react";
import big from "../../assets/images/big cake.png";
import choclate from "../../assets/images/choclate cake.png";
import mango from "../../assets/images/Mango cake.png";

const Catering = () => {
  return (
    <div className="bg-white py-16 px-4">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h4 className="text-yellow-600 font-bold uppercase tracking-widest mb-2">
          Catering
        </h4>
        <h3 className="text-gray-800 font-bold text-3xl md:text-4xl">
          Catering for Every Occasion
        </h3>
        <p className="text-gray-500 mt-4 text-base md:text-lg">
          From intimate gatherings to grand celebrations, our freshly baked treats make every event sweeter!
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-3 grid-rows-2 gap-2">
        {/* Left Block: Wedding Cakes */}
        <div className="col-span-2 row-span-2 flex items-center gap-8  overflow-hidden px-8 py-8 bg-skin ">
  {/* Image Section */}
  <div className="w-1/2">
    <img
      src={big}
      alt="Wedding Cakes and Desserts"
      className="w-[345px] h-[420px] rounded-xl object-cover"
    />
  </div>

  {/* Text Section */}
  <div className="w-1/2 pr-4 flex flex-col justify-center items-start">
    <h2 className="text-4xl font-bold text-soul mb-4">Wedding Cakes and Desserts</h2>
    <p className="text-lg text-soul mb-6">
      Elegant, handcrafted cakes and desserts tailored to make your special day unforgettable.
    </p>
    <button className="bg-soul hover:bg-soul-dark text-white font-semibold py-3 px-6  transition duration-300">
      Shop Now
    </button>
  </div>
</div>


       {/* Top Right Block */}
<div className="bg-skin flex items-center justify-between p-8 ">
  {/* Text Section */}
  <div className="w-1/2 pr-4">
    <h2 className="text-2xl font-semibold text-soul mb-2">Birthday & Celebration Package</h2>
    <p className="text-soul mb-2">From classic cakes to dessert platters, we bring the perfect sweetness to your celebrations.
    </p>
    <button className="bg-soul hover:bg-soul-dark text-white font-semibold py-3 px-6  transition duration-300">
      Shop Now
    </button>
  </div>
  {/* Image Section */}
  <div className="w-1/2">
    <img
      src={mango}
      alt="Golden Celebrations"
      className="w-full h-auto rounded-lg object-cover"
    />
  </div>
</div>

{/* Bottom Right Block */}
<div className="bg-skin flex items-center justify-between p-8">
  {/* Image Section First */}
  <div className="w-1/2 pr-4">
    <img
      src={choclate}
      alt="Sunlit Delights"
      className="w-full h-auto rounded-lg object-cover"
    />
  </div>
  {/* Text Section Second */}
  <div className="w-1/2 pl-4">
    <h3 className="text-2xl font-semibold text-soul mb-2"> Custom Orders for Special Occasions</h3>
    <p className="text-soul mb-2">
    Have a unique request? Let us create a custom dessert experience just for you!
    </p>
    <button className="bg-soul hover:bg-soul-dark text-white font-semibold py-3 px-6  transition duration-300">
      Shop Now
    </button>
  </div>
</div>

      </div>
    </div>
  );
};

export default Catering;
