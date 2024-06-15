import React from "react";
import mainImage1 from "../../../assets/images/Home/Main/main1.webp";
import mainImage2 from "../../../assets/images/Home/Main/main2.webp";
import mainImage3 from "../../../assets/images/Home/Main/main3.webp";
import { ArrowRightAlt } from "@mui/icons-material";

const HomeMainSectionOne = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 pt-16 md:pt-24 grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* First Image */}
      <div className="md:col-span-6 relative h-[320px] md:h-[448px]">
        <img
          src={mainImage1}
          alt="Image1"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay flex p-4 md:p-8">
          <div className="text-overlay text-left text-white">
            <h2 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
              Contemporary Architects Oxfordshire
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              William Green Architects is a RIBA Chartered Practice with offices
              in Oxfordshire and London working across the UK and beyond. We are
              a team of talented people who challenge, inspire and delight our
              clients. We believe architecture to be liberating and enriching.
            </p>
          </div>
        </div>
      </div>
      {/* Second Image */}
      <div className="md:col-span-3 h-[320px] md:h-[448px] relative">
        <img
          src={mainImage2}
          alt="Image2"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay flex p-4 md:p-8">
          <div className="text-overlay flex flex-col justify-between text-left text-white">
            <p className="mb-4 text-base md:text-lg leading-relaxed">
              Our services extend from architecture to interiors, landscapes and
              masterplanning. We tailor what we offer to individual clients and
              their projects.
            </p>
            <div className="flex items-center text-base md:text-xl tracking-wider group">
              <a href="/" className="text-white tracking-widest">
                Services
              </a>
              <ArrowRightAlt className="ml-2 transition-transform transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
      {/* Third Image */}
      <div className="md:col-span-3 h-[320px] md:h-[448px] relative">
        <img
          src={mainImage3}
          alt="Image3"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay flex items-end p-4 md:p-8 text-white tracking-widest group">
          <a href="/" className="text-overlay text-base md:text-xl">
            Portfolio
          </a>
          <ArrowRightAlt className="ml-2 transition-transform transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

export default HomeMainSectionOne;
