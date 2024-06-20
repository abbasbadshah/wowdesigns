import React from "react";
import { useNavigate } from "react-router-dom";
import productsImage1 from "../../../assets/images/Projects/Project Details/projectimage3.webp";
import productsImage2 from "../../../assets/images/Projects/Project Details/projectimage4.webp";
import productsImage3 from "../../../assets/images/Projects/Project Details/projectimage5.webp";

const productsData = [
  {
    image: productsImage1,
    title: "First Sentier Investors, Sydney",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    path: "/projects/projects-details",
  },
  {
    image: productsImage2,
    title: "First Sentier Investors, Sydney",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    path: "/projects/projects-details",
  },
  {
    image: productsImage3,
    title: "First Sentier Investors, Sydney",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    path: "/projects/projects-details",
  },
  {
    image: productsImage2,
    title: "First Sentier Investors, Sydney",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    path: "/projects/projects-details",
  },
];

export const FeatureProducts = () => {
  const navigate = useNavigate();

  const navigateToPath = (path) => {
    navigate(path);
  };

  return (
    <div className="px-4 py-4 lg:px-24 lg:py-16">
      <div className="lg:flex lg:justify-between my-10">
        <h2 className="text-4xl font-medium text-center">
          Wow Designs Feature Projects
        </h2>
        <button className="hidden lg:block py-4 px-8 bg-black text-lg font-bold text-white rounded-md hover:bg-transparent hover:text-black border-2 border-black">
          View All products
        </button>
      </div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {productsData.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  className="w-full h-[400px] object-cover"
                  alt="product-images"
                />
              </div>
              <div className="p-4 relative">
                <div className="mb-2">
                  <i className="ti ti-star-filled text-yellow-300"></i>
                  <i className="ti ti-star-filled text-yellow-300"></i>
                  <i className="ti ti-star-filled text-yellow-300"></i>
                </div>
                <h2 className="text-xl text-left font-bold text-gray-900 mb-1">
                  {product.title}
                </h2>
                <p className="text-sm mb-3 text-left">{product.description}</p>
                <div className="absolute start-0 end-0 -bottom-20 group-hover:bottom-1 duration-500 m-2">
                  <div className="p-2">
                    <button
                      onClick={() => navigateToPath(product.path)}
                      className="py-2.5 w-full flex items-center justify-center text-white hover:text-black border-2 border-black bg-black hover:bg-white transition-all duration-500"
                    >
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
