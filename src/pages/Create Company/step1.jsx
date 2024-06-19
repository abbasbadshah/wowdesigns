import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Checkbox, FormControlLabel } from "@mui/material";

const Step1 = () => {
  const { register } = useFormContext();
  const [selectedStreams, setSelectedStreams] = useState([]);

  const streams = [
    "Architect",
    "PR Consultancy",
    "Sanitaryware Supplier",
    "Interior Designer",
    "Manufacturer",
    "Cellings Supplier",
    "Fit Out Contractor",
    "Furniture Supplier",
    "Finishes Supplier",
    "Design & Build Contractor",
    "Flooring Supplier",
    "Wall Covering Supplier",
    "Project Managers",
    "Acoustic Supplier",
    "Product Designer",
    "Photographer",
    "Lighting Supplier",
    "Landscaping Contractor",
    "Lighting Consultant",
    "Partition Supplier",
    "Joinery",
  ];

  const handleCheckboxChange = (event) => {
    const stream = event.target.value;
    if (selectedStreams.length < 2) {
      setSelectedStreams((prevStreams) =>
        event.target.checked
          ? [...prevStreams, stream]
          : prevStreams.filter((s) => s !== stream)
      );
    } else if (!event.target.checked) {
      setSelectedStreams((prevStreams) =>
        prevStreams.filter((s) => s !== stream)
      );
    }
  };

  return (
    <div className="text-left flex flex-wrap -mx-3">
      {streams.map((stream, index) => (
        <div key={index} className="w-1/3 px-3 mb-4">
          <FormControlLabel
            control={
              <Checkbox
                {...register("streams", { required: true })}
                value={stream}
                style={{ color: "black" }}
                checked={selectedStreams.includes(stream)}
                onChange={handleCheckboxChange}
                disabled={
                  selectedStreams.length >= 2 &&
                  !selectedStreams.includes(stream)
                }
              />
            }
            label={stream}
          />
        </div>
      ))}
    </div>
  );
};

export default Step1;
