import React, { useState } from "react";
import { Breadcrumb, Accordion, Pagination } from "../../components/shared";
import { Year, Industry } from "./Filters";
import { Bookmark, Search } from "@mui/icons-material";
import newsImage1 from "../../assets/images/Home/News/main4.webp";
import { Layout } from "../../components/layout";

export const Projects = () => {
  const breadcrumbs = [{ label: "Projects", href: "/projects" }];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const projects = [
    {
      id: 1,
      categories: ["Bank", "Financial", "Investments"],
      title: "First Sentier Investors, Sydney",
      date: "16/4/24",
      image: newsImage1,
    },
    {
      id: 2,
      categories: ["Bank", "Financial", "Investments"],
      title: "First Sentier Investors, Sydney",
      date: "16/4/24",
      image: newsImage1,
    },
    {
      id: 3,
      categories: ["Bank", "Financial", "Investments"],
      title: "First Sentier Investors, Sydney",
      date: "16/4/24",
      image: newsImage1,
    },
    {
      id: 4,
      categories: ["Bank", "Financial", "Investments"],
      title: "First Sentier Investors, Sydney",
      date: "16/4/24",
      image: newsImage1,
    },
    {
      id: 5,
      categories: ["Bank", "Financial", "Investments"],
      title: "First Sentier Investors, Sydney",
      date: "16/4/24",
      image: newsImage1,
    },
    {
      id: 6,
      categories: ["Bank", "Financial", "Investments"],
      title: "First Sentier Investors, Sydney",
      date: "16/4/24",
      image: newsImage1,
    },
    {
      id: 7,
      categories: ["Bank", "Financial", "Investments"],
      title: "First Sentier Investors, Sydney",
      date: "16/4/24",
      image: newsImage1,
    },
    {
      id: 8,
      categories: ["Bank", "Financial", "Investments"],
      title: "First Sentier Investors, Sydney",
      date: "16/4/24",
      image: newsImage1,
    },
    {
      id: 9,
      categories: ["Bank", "Financial", "Investments"],
      title: "First Sentier Investors, Sydney",
      date: "16/4/24",
      image: newsImage1,
    },
    {
      id: 10,
      categories: ["Bank", "Financial", "Investments"],
      title: "First Sentier Investors, Sydney",
      date: "16/4/24",
      image: newsImage1,
    },
    {
      id: 11,
      categories: ["Bank", "Financial", "Investments"],
      title: "First Sentier Investors, Sydney",
      date: "16/4/24",
      image: newsImage1,
    },
    {
      id: 12,
      categories: ["Bank", "Financial", "Investments"],
      title: "First Sentier Investors, Sydney",
      date: "16/4/24",
      image: newsImage1,
    },
  ];

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Layout headerType="header2">
      <Breadcrumb heading="PROJECTS" breadcrumbs={breadcrumbs} />
      <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-12 my-16 px-4 lg:px-16 gap-10">
        <div className="lg:col-span-2 h-fit rounded-md shadow-2xl">
          <Accordion title="Industry" ContentComponent={Industry} index={0} />
          <Accordion title="Years" ContentComponent={Year} index={1} />
          <Accordion title="Brands" ContentComponent={Industry} index={2} />
        </div>
        <div className="lg:col-span-10">
          <form className="mt-10 lg:mt-0">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Search />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-[#F1F1F1] rounded-lg bg-[#F1F1F1]"
                placeholder="Search for project, category or city"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-black border-2 border-black hover:bg-transparent hover:text-black focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 "
              >
                Search
              </button>
            </div>
          </form>
          <div className="mt-4">
            <div className="grid lg:grid-cols-12 gap-5">
              {projects.slice(startIndex, endIndex).map((project) => (
                <div
                  className="flex flex-col lg:col-span-3 h-[350px] overflow-hidden transition duration-300 hover:scale-105 shadow-lg rounded-xl"
                  key={project.id}
                  id="project-card"
                >
                  <img
                    src={project.image}
                    className="w-full min-h-40 object-cover"
                    alt="newsimage"
                  />
                  <div className="p-4 text-left flex justify-between items-center bg-[#F5F5F4]">
                    <div>
                      <ul className="flex text-gray-400 text-sm">
                        {project.categories.map((category, index) => (
                          <li key={index}>{category}/</li>
                        ))}
                      </ul>
                      <h3 className="text-lg font-medium">{project.title}</h3>
                      <p className="text-sm text-gray-400">{project.date}</p>
                    </div>
                    <div className="w-5">
                      <Bookmark />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};
