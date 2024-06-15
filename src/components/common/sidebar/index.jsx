import { Close, Facebook, Instagram, LinkedIn, X } from "@mui/icons-material";
import logo from "../../../assets/images/Header/arclogoblack.png";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const navigateToAbout = () => {
    navigate("/about");
  };
  const navigateToProjects = () => {
    navigate("/projects");
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div>
      <div
        className={`fixed inset-y-0 flex flex-col justify-between overflow-scroll left-0 z-[999] w-full lg:w-[700px] bg-white text-gray-700 text-left transition-transform duration-300 transform pt-0 pb-16 px-4 lg:px-16  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <img src={logo} alt="logo" className="hidden lg:block h-14 lg:h-20" />
          <div className="lg:hidden flex justify-between items-center">
            <img src={logo} alt="logo" className="h-14 lg:h-20" />
            <Close onClick={toggleSidebar} />
          </div>
          <nav className="mt-10 lg:mt-40 text-lg tracking-widest">
            <ul className="cursor-pointer">
              <li className="mb-2">
                <a href="/" className="block px-3 py-2 rounded-md">
                  HOME
                </a>
              </li>
              <li className="mb-2">
                <a
                  onClick={navigateToAbout}
                  className="block px-3 py-2 rounded-md"
                >
                  ABOUT
                </a>
              </li>
              <li className="mb-2">
                <a
                  onClick={navigateToProjects}
                  className="block px-3 py-2 rounded-md"
                >
                  PROJECTS
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="block px-3 py-2 rounded-md">
                  PORTFOLIO
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="block px-3 py-2 rounded-md">
                  SERVICES
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="block px-3 py-2 rounded-md">
                  NEWS
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="block px-3 py-2 rounded-md">
                  ENQUIRE
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg tracking-widest font-bold">Get in touch</h1>
          <div className="flex flex-col">
            <a href="mailto:example@mail.com">example@mail.com</a>
            <a href="tel:999900000">+91 99999 00000</a>
          </div>
          <div>
            <ul className="mt-4 flex gap-3">
              <li>
                <a href="/" className="hover:underline hover:transition">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline hover:transition">
                  <Instagram />
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline hover:transition">
                  <LinkedIn />
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline hover:transition">
                  <X />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>
    </div>
  );
};

export default Sidebar;
