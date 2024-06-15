import React, { useState } from "react";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

export const Industry = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [selectedSubOptions, setSelectedSubOptions] = useState({});
  const [showSubOptions, setShowSubOptions] = useState({});

  const industryOptions = {
    Corporate: ["SubOption1", "SubOption2"],
    Cultural: ["SubOption1", "SubOption2"],
    Education: ["SubOption1", "SubOption2"],
    "Facility Management": ["SubOption1", "SubOption2"],
    "Healthcare & Wellbeing": ["SubOption1", "SubOption2"],
    Hospitality: ["SubOption1", "SubOption2"],
    Residential: ["SubOption1", "SubOption2"],
    Retail: ["SubOption1", "SubOption2"],
    "New Option": ["NewSubOption1", "NewSubOption2"],
  };

  const handleIndustryChange = (industry) => {
    setSelectedIndustry(industry);
    setShowSubOptions((prev) => ({
      ...prev,
      [industry]: !prev[industry],
    }));
  };

  const handleSubOptionChange = (industry, subOption) => {
    setSelectedSubOptions((prev) => ({
      ...prev,
      [industry]: prev[industry] ? [...prev[industry], subOption] : [subOption],
    }));
  };

  return (
    <div className="p-4 text-sm text-left leading-normal text-blue-gray-500/80">
      <div className="mb-4">
        {Object.keys(industryOptions).map((industry) => (
          <div key={industry}>
            <label className="flex items-center mt-2 cursor-pointer">
              <input
                type="checkbox"
                name="industry"
                value={industry}
                checked={selectedIndustry === industry}
                onChange={() => handleIndustryChange(industry)}
                className="mr-2"
              />
              {industry}
              {industryOptions[industry].length > 0 && (
                <span className="ml-2">
                  {showSubOptions[industry] ? (
                    <ExpandLess fontSize="small" />
                  ) : (
                    <ExpandMore fontSize="small" />
                  )}
                </span>
              )}
            </label>
            {showSubOptions[industry] && (
              <div className="ml-4 mt-2">
                {industryOptions[industry].map((subOption) => (
                  <label key={subOption} className="block mt-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name={`${industry}-suboption`}
                      value={subOption}
                      checked={(selectedSubOptions[industry] || []).includes(
                        subOption
                      )}
                      onChange={() =>
                        handleSubOptionChange(industry, subOption)
                      }
                      className="mr-2"
                    />
                    {subOption}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
