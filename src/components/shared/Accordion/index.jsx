import React, { useState, useEffect } from 'react';

export const Accordion = ({ title, ContentComponent, index = 0 }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  useEffect(() => {
    if (index === 0) {
      setIsOpen(true);
    }
  }, [index]);

  const toggleAccordion = () => {
    if (index !== 0) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="relative mb-3">
      <h6 className="mb-0">
        <button
          className={`relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500 ${
            isOpen ? 'rounded-b-none' : ''
          }`}
          onClick={toggleAccordion}
        >
          <span>{title}</span>
          <i
            className={`absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down ${
              isOpen ? 'rotate-180' : ''
            }`}
          ></i>
        </button>
      </h6>
      <div
        className={`${
          isOpen ? 'h-auto' : 'h-0 overflow-hidden'
        } transition-all duration-300 ease-in-out`}
      >
        {isOpen && <ContentComponent />}
      </div>
    </div>
  );
};