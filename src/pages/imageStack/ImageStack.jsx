import React from "react";
import "../../index.css"; // Make sure your animation keyframes are in this file

// Import local images from your assets
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";

// Combine them into an array
const images = [img1, img2, img3, img4];

const ImageStack = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="relative w-[400px] h-[200px] overflow-hidden">
        <div className="absolute inset-0 flex space-x-4 animate-slide">
          {images.concat(images).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index}`}
              className="w-[600px] h-[800px] object-cover rounded-xl shadow-lg flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageStack;
