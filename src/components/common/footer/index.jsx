import { Facebook, Instagram, LinkedIn, X } from "@mui/icons-material";
import React from "react";
import FooterImage from "../../../assets/images/Footer/footerimage.png";

export const Footer = () => {
  return (
    <footer className="grid grid-flow-row lg:grid-flow-col-12 text-white bg-[#262626] px-4 py-10 lg:px-24 lg:py-24 gap-3">
      {/* Section One */}
      <div className="text-left flex flex-col lg:col-span-3">
        <h1 className="tracking-widest text-lg "> CONTACT </h1>
        <p className="mt-4">
          <span className="font-bold">Oxfordshire office:</span>2nd Floor, 18a
          South Bar Street,
          <br />
          Banbury, Oxfordshire OX16 9AF
        </p>
        <div className="mt-2 flex flex-col">
          <a href="tel:0330 320 0665">0330 320 0665</a>
          <a href="mailto:example@mail.com">Email Oxfordshire office</a>
        </div>
        <p className="mt-2">
          <span className="font-bold">London office:</span>55 Whitfield Street
          <br />
          Fitzrovia, London W1T 4AHF
        </p>
        <div className="mt-2">
          <a href="tel:0330 320 0665">0330 320 0665</a>
          <a href="mailto:example@mail.com">Email Oxfordshire office</a>
        </div>
      </div>
      {/* Section Two */}
      <div className="mt-10 lg:mt-0 text-left flex flex-col lg:col-span-3">
        <h1 className="tracking-widest text-lg "> PORTFOLIO </h1>
        <ul className="mt-4 flex flex-col gap-1">
          <li>
            <a href="/" className="hover:underline hover:transition">
              Contemporary homes
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline hover:transition">
              Traditional homes
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline hover:transition">
              Refurbishments & extensions
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline hover:transition">
              Commercial property projects
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline hover:transition">
              Education projects
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline hover:transition">
              View all
            </a>
          </li>
        </ul>
      </div>
      {/* Section Three */}
      <div className="mt-10 lg:mt-0 text-left flex flex-col lg:col-span-3">
        <h1 className="tracking-widest text-lg "> INFORMATION </h1>
        <ul className="mt-4 flex flex-col gap-1">
          <li>
            <a href="/" className="hover:underline hover:transition">
              Studio
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline hover:transition">
              Services
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline hover:transition">
              News
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline hover:transition">
              Thoughts
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline hover:transition">
              Quality assurance
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline hover:transition">
              Current vacancies
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline hover:transition">
              Sustainability
            </a>
          </li>
        </ul>
      </div>
      {/* Section Four */}
      <div className="mt-10 lg:mt-0 text-left flex flex-col lg:col-span-3">
        <h1 className="tracking-widest text-lg "> FOLLOW US </h1>
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
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Accreditations</h3>
          <div className="flex items-center space-x-4">
            <img src={FooterImage} alt="ARB Logo" className="h-8" />
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center mx-auto mt-32 mb-16 pt-4 text-sm lg:col-span-12">
        <p className="mt-2">
          Privacy Policy | Cookie Policy | Cookie Preferences
        </p>
        <p className="mt-2">
          © William Green Architects 2024. Site by Groundnation.
        </p>
        <p className="mt-2">
          Contemporary and modern house architects | Listed building architects
          | Luxury residential architects | Buckinghamshire architects |
          Cotswolds architects | Gloucestershire architects | Northamptonshire
          architects | Oxfordshire architects
        </p>
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center space-x-4 mt-4">
          <span> Share on:</span>
          <div className="grid grid-cols-3 mt-2">
            <a href="/" className="text-white hover:text-gray-300 col-span-1">
              Facebook
            </a>
            <a href="/" className="text-white hover:text-gray-300 col-span-1">
              Twitter/X
            </a>
            <a href="/" className="text-white hover:text-gray-300 col-span-1">
              Instagram
            </a>
            <a href="/" className="text-white hover:text-gray-300 col-span-1">
              LinkedIn
            </a>
            <a href="/" className="text-white hover:text-gray-300 col-span-1">
              WhatsApp
            </a>
            <a href="/" className="text-white hover:text-gray-300 col-span-1">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
