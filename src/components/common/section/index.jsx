import React from "react";
import { useInView } from "react-intersection-observer";

const Section = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="bg-white bg-opacity-50">{children}</div>
    </div>
  );
};

export default Section;
