import React, { useState } from "react";

export const Year = () => {
  const [selectedYears, setSelectedYears] = useState([]);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2005 }, (_, i) => 2006 + i);

  const handleYearChange = (year) => {
    setSelectedYears((prevSelectedYears) =>
      prevSelectedYears.includes(year)
        ? prevSelectedYears.filter((y) => y !== year)
        : [...prevSelectedYears, year]
    );
  };

  return (
    <div className="p-4 text-sm text-left leading-normal text-blue-gray-500/80">
      <div className="mb-4 h-64 overflow-scroll">
        {years.map((year) => (
          <div key={year}>
            <label className="flex items-center mt-2 cursor-pointer">
              <input
                type="checkbox"
                name="year"
                value={year}
                checked={selectedYears.includes(year)}
                onChange={() => handleYearChange(year)}
                className="mr-2"
              />
              {year}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
