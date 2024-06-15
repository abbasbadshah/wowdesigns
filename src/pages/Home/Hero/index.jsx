import React, { useState, useEffect } from "react";

import img1 from "../../../assets/images/Home/Hero/image1.jpg";
import img2 from "../../../assets/images/Home/Hero/image2.jpg";
import img3 from "../../../assets/images/Home/Hero/image3.jpg";

const HeroSlider = () => {
  const images = [img1, img2, img3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(true);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleTransitionEnd = () => {
    setCurrentImageIndex(nextImageIndex);
    setIsTransitioning(false);
  };

  return (
    <div
      className="relative flex items-center justify-center -mt-[4.5rem] lg:-mt-[5.70rem] transition-opacity duration-500"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <img
        src={images[nextImageIndex]}
        alt="Hero"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
        onTransitionEnd={handleTransitionEnd}
      />
      <img
        src={images[currentImageIndex]}
        alt="Hero"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Imaginative, beautiful, impeccable architecture
        </h1>
      </div>
    </div>
  );
};

export default HeroSlider;