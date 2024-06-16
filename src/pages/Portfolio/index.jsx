import React, { useState } from "react";
import { Breadcrumb, Pagination } from "../../components/shared";
import { Search } from "@mui/icons-material";
import newsImage1 from "../../assets/images/Home/News/main4.webp";
import { Layout } from "../../components/layout";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";

export const Portfolios = () => {
  const breadcrumbs = [{ label: "Projects", href: "/projects" }];
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const navigate = useNavigate();
  const navigateToPortfolioDetailsPage = () => {
    navigate("/portfolios/portfolios-details");
  };

  const projects = [
    {
      id: 1,
      categories: ["REFURBISHMENTS & EXTENSIONS"],
      title: "First Sentier Investors, Sydney",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: newsImage1,
    },
    {
      id: 2,
      categories: ["COMMERCIAL PROPERTY"],
      title: "First Sentier Investors, Sydney",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: newsImage1,
    },
    {
      id: 3,
      categories: ["REFURBISHMENTS & EXTENSIONS"],
      title: "First Sentier Investors, Sydney",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: newsImage1,
    },
    {
      id: 4,
      categories: ["COMMERCIAL PROPERTY"],
      title: "First Sentier Investors, Sydney",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: newsImage1,
    },
    {
      id: 5,
      categories: ["REFURBISHMENTS & EXTENSIONS"],
      title: "First Sentier Investors, Sydney",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: newsImage1,
    },
    {
      id: 6,
      categories: ["COMMERCIAL PROPERTY"],
      title: "First Sentier Investors, Sydney",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: newsImage1,
    },
    {
      id: 7,
      categories: ["EDUCATION"],
      title: "First Sentier Investors, Sydney",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: newsImage1,
    },
    {
      id: 8,
      categories: ["COMMERCIAL PROPERTY"],
      title: "First Sentier Investors, Sydney",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: newsImage1,
    },
    {
      id: 9,
      categories: ["COMMERCIAL PROPERTY"],
      title: "First Sentier Investors, Sydney",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: newsImage1,
    },
    {
      id: 10,
      categories: ["EDUCATION"],
      title: "First Sentier Investors, Sydney",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: newsImage1,
    },
    {
      id: 11,
      categories: ["REFURBISHMENTS & EXTENSIONS"],
      title: "First Sentier Investors, Sydney",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: newsImage1,
    },
    {
      id: 12,
      categories: ["CONTEMPORARY HOMES", "TRADITIONAL HOMES"],
      title: "First Sentier Investors, Sydney",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: newsImage1,
    },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory)
        );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Layout headerType="header2">
      <Breadcrumb heading="PROJECTS" breadcrumbs={breadcrumbs} />
      <div className="flex flex-col lg:flex-row my-16 px-4 lg:px-16 gap-10">
        <div className="lg:w-1/4 h-fit sticky top-10">
          <ul className="p-4 space-y-2 font-light text-left tracking-widest">
            {[
              "ALL",
              "CONTEMPORARY HOMES",
              "TRADITIONAL HOMES",
              "REFURBISHMENTS & EXTENSIONS",
              "COMMERCIAL PROPERTY",
              "EDUCATION",
            ].map((category) => (
              <li
                key={category}
                className={`cursor-pointer ${
                  selectedCategory === category ? "font-bold" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-3/4">
          <form className="mb-6">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-[#F1F1F1] rounded-lg bg-[#F1F1F1]"
                placeholder="Search for project, category or city"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-black border-2 border-black hover:bg-transparent hover:text-black focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 "
              >
                Search
              </button>
            </div>
          </form>
          <TransitionGroup className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredProjects.slice(startIndex, endIndex).map((project) => (
              <CSSTransition key={project.id} timeout={500} classNames="fade">
                <div className="flex flex-col transform transition-transform duration-500 ease-in-out hover:scale-105">
                  <a onClick={navigateToPortfolioDetailsPage}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover h-96 w-full cursor-pointer"
                    />
                  </a>
                  <div className="py-4 px-2 bg-white text-left">
                    <h3 className="text-lg font-medium tracking-wide">
                      {project.title}
                    </h3>
                    <p className="text-base text-gray-500">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
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
