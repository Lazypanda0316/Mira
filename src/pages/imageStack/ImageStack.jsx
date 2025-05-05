import React from "react";
import { motion } from "framer-motion";

// Import images
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";

// Combine them into an array
const images = [img1, img2, img3, img4];

const ImageStack = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        className="relative w-[800px] h-[600px] overflow-hidden group"
        whileHover={{
          scale: 1.05, // Subtle zoom on the container
          transition: { duration: 0.3 },
        }}
      >
        {/* Stack of images */}
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Image ${index}`}
            className="absolute w-[800px] h-[600px] object-cover rounded-xl shadow-lg flex-shrink-0"
            initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
            }}
            whileHover={{
              x: `${index * 20}px`, // Horizontal spread on hover
              y: `${index * -10}px`, // Vertical lift for staggered feel
              scale: 1.1, // Slight zoom per image
              transition: { duration: 0.5, ease: "easeOut" },
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              type: "spring",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageStack;
