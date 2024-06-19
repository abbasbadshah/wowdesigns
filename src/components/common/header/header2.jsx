import React, { useState } from "react";
import logo from "../../../assets/images/Header/arclogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../sidebar";
import LoginSignupModal from "../Modal";

export const HeaderTwo = () => {
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

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const { isLoginModalOpen } = state;

  return (
    <div>
      <LoginSignupModal open={isLoginModalOpen} onClose={handleClose} />
      <header className="relative py-3 px-4 bg-black lg:px-24 flex justify-between items-center z-[99]">
        <img src={logo} className="h-12 md:h-16" alt="logo" />
        <div className="flex gap-5 items-center">
          <button
            onClick={handleOpen}
            className="py-2 px-4 border-2 tracking-wide font-bold text-lg rounded-lg hover:text-black hover:bg-white transition duration-75 border-white text-white"
          >
            Sign Up
          </button>
          <MenuIcon
            sx={{
              color: "#fff",
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
