import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../sidebar";
import LoginSignupModal from "../Modal";
import { WebsiteLogo } from "../../shared";

export const HeaderOne = () => {
  const [state, setState] = useState({
    isLoginModalOpen: false,
    isSidebarOpen: false,
    isHeaderVisible: true,
    isHeaderSticky: false,
    prevScrollPos: 0,
  });

  const handleOpen = () => {
    setState((prevState) => ({ ...prevState, isLoginModalOpen: true }));
  };

  const handleClose = () => {
    setState((prevState) => ({ ...prevState, isLoginModalOpen: false }));
  };

  const toggleSidebar = () => {
    setState((prevState) => ({ ...prevState, isSidebarOpen: !prevState.isSidebarOpen }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      const isHeaderShouldBeVisible =
        state.prevScrollPos > currentScrollPos ||
        currentScrollPos < state.prevScrollPos + 100;

      setState((prevState) => ({
        ...prevState,
        isHeaderVisible: isHeaderShouldBeVisible,
        isHeaderSticky: currentScrollPos > 0,
        prevScrollPos: currentScrollPos,
      }));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [state.prevScrollPos]);

  const { isLoginModalOpen, isSidebarOpen, isHeaderVisible, isHeaderSticky } = state;

  return (
    <div>
      <LoginSignupModal open={isLoginModalOpen} onClose={handleClose} />
      <header
        className={`fixed top-0 left-0 right-0 py-3 px-4 lg:px-24 flex justify-between items-center z-[99] transition-all duration-300 ${
          isHeaderVisible
            ? "translate-y-0 bg-transparent"
            : "-translate-y-full bg-transparent"
        } ${isHeaderSticky ? "bg-white text-black shadow-md" : "text-white"}`}
      >
        <WebsiteLogo
          width="150px"
          className={isHeaderSticky ? "text-black" : "text-white"}
        />
        <div className="flex gap-5 items-center">
          <button
            onClick={handleOpen}
            className={`py-2 px-4 border-2 tracking-wide font-bold text-lg rounded-lg hover:text-black hover:bg-white transition duration-75 ${
              isHeaderSticky
                ? "border-black text-black hover:bg-black hover:text-white"
                : "border-white text-white hover:bg-white hover:text-black"
            }`}
          >
            Sign Up
          </button>
          <MenuIcon
            sx={{
              color: isHeaderSticky ? "#000" : "#fff",
              fontSize: "24px",
              "@media (min-width: 768px)": {
                fontSize: "50px",
              },
            }}
            className="hover:cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};