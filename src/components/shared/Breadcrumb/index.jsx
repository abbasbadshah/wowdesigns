import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Container = styled("div")`
  position: relative;
  background: #f5f5f4;
  padding: 50px 0;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: #fff;
  overflow: hidden;
`;

const Overlay = styled("div")`
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  filter: blur(50px);
`;

const Heading = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
  color: #000;
  z-index: 10;
`;

const BreadcrumbContainer = styled(Breadcrumbs)`
  z-index: 10;
  margin-top: 1rem;

  .MuiBreadcrumbs-separator {
    color: #000;
  }
`;

const BreadcrumbLink = styled(Link)`
  color: #000;
  font-weight: 500;
  transition: color 0.3s;
  text-decoration: none;

  &:hover {
    color: #000;
  }
`;

export const Breadcrumb = ({ heading, breadcrumbs }) => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <Container className="py-8">
      <Overlay />
      <Heading>{heading}</Heading>
      <BreadcrumbContainer
        separator={<NavigateNextIcon />}
        className="flex justify-center"
      >
        <BreadcrumbLink
          onClick={navigateToHome}
          className="flex items-center cursor-pointer"
        >
          <HomeIcon className="mr-1" />
          Home
        </BreadcrumbLink>
        {breadcrumbs.map((crumb, index) => (
          <BreadcrumbLink
            key={index}
            href={crumb.href}
            className={`flex items-center ${
              index === breadcrumbs.length - 1 ? "font-semibold" : ""
            }`}
          >
            {crumb.label}
          </BreadcrumbLink>
        ))}
      </BreadcrumbContainer>
    </Container>
  );
};
