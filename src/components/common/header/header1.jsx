import React, { useState } from "react";
import logo from "../../../assets/images/Header/arclogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../sidebar";
import LoginSignupModal from "../Modal";

export const HeaderOne = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <LoginSignupModal open={open} onClose={handleClose} />
      <header className="relative py-3 px-4 lg:px-24 flex justify-between items-center z-[99]">
        <img src={logo} className="h-12 md:h-16" alt="logo" />
        <div className="flex gap-5 items-center">
          <button
            onClick={handleOpen}
            className="py-2 px-4 border-2 border-white tracking-wide bg-transparent text-white font-bold text-lg rounded-lg hover:text-black hover:bg-white transition duration-75"
          >
            Sign in
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
