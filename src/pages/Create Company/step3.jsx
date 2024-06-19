import React from 'react';
import { TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const Step3 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      label="Ad"
      variant="outlined"
      fullWidth
      id="ad"
      {...register("ad", { required: "Ad is required" })}
      error={!!errors.ad}
      helperText={errors.ad?.message}
      className="mb-4"
    />
  );
};

export default Step3;
