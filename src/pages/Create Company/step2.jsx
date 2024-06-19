import React from 'react';
import { TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const Step2 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      label="Ad Group"
      variant="outlined"
      fullWidth
      id="adGroup"
      {...register("adGroup", {
        required: "Ad Group is required",
      })}
      error={!!errors.adGroup}
      helperText={errors.adGroup?.message}
      className="mb-4"
    />
  );
};

export default Step2;
