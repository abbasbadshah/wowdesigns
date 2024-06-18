import React, { useState, useEffect } from "react";

import img1 from "../../../assets/images/Home/Hero/hero1.jpg";
import img2 from "../../../assets/images/Home/Hero/hero2.jpg";
import img3 from "../../../assets/images/Home/Hero/hero3.jpg";
import img4 from "../../../assets/images/Home/Hero/hero4.jpg";
import img5 from "../../../assets/images/Home/Hero/hero5.jpg";
import img6 from "../../../assets/images/Home/Hero/hero6.jpg";

const HeroSlider = () => {
  const images = [img1, img2, img3, img4, img5, img6];
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
      className="relative flex items-center justify-center transition-opacity duration-500"
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
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Imaginative, beautiful, impeccable architecture
        </h1>
      </div>
    </div>
  );
};

export default HeroSlider;
