import React from "react";
import fruit from "../../assets/images/fruitcake.png";
import cinnamon from "../../assets/images/cinnamon.png";
import strawberry from "../../assets/images/strawberry.png";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const BestSelling = () => {
  const categories = [
    { title: "Blueberry Cheesecake", image: fruit, price: "RS. 5000" },
    { title: "Cinnamon Roll", image: cinnamon, price: "RS. 5000" },
    { title: "Strawberry Cheesecake", image: strawberry, price: "RS. 5000" },
    { title: "Blueberry Cheese", image: fruit, price: "RS. 5000" },
    { title: "Cinnamon Roll", image: cinnamon, price: "RS. 5000" },
    { title: "Strawberry Cheesecake", image: strawberry, price: "RS. 5000" },
    { title: "Cinnamon Roll", image: cinnamon, price: "RS. 5000" },
    { title: "Strawberry Cheesecake", image: strawberry, price: "RS. 5000" },
  ];

  return (
    <div className="bg-white py-16 relative overflow-hidden">
      <div className="text-center max-w-3xl mx-auto px-4 z-10 relative">
        <h4 className="text-tan font-bold uppercase tracking-widest mb-2">
          BEST-SELLING
        </h4>
        <h3 className="text-soul font-bold text-3xl md:text-4xl">
          Mira’s Most-Loved Desserts
        </h3>
        <p className="text-ash mt-4 text-base md:text-lg">
          Taste the crowd-favorites that keep customers coming back for more.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-8 px-4">
        {categories.map((item, index) => (
          <div key={index} className="w-90 text-center text-tan group relative">
            <div className="overflow-hidden relative mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover shadow-md transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaRegEye
                  size={30}
                  className="text-white hover:text-tan transition"
                />
                <AiOutlineShopping
                  size={30}
                  className="text-white hover:text-tan transition"
                />
                <FaRegHeart
                  size={30}
                  className="text-white hover:text-tan transition"
                />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-tan">{item.title}</h4>
            <h5 className="text-xl font-bold text-tan">{item.price}</h5>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-7">
        <NavLink className="text-tan border border-tan px-15 py-3 rounded-sm hover:bg-tan hover:text-white transition-colors duration-300">
          Load more
        </NavLink>
      </div>
    </div>
  );
};
