import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Close } from "@mui/icons-material";

const LoginSignupModal = ({ open, onClose }) => {
  const [isLogin, setIsLogin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginSubmit = (data) => {
    console.log("Login Data:", data);
  };

  const handleSignupSubmit = (data) => {
    console.log("Signup Data:", data);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <div className="flex justify-between items-center">
        <DialogTitle sx={{ fontSize: "24px", fontWeight: "500" }}>
          {isLogin ? "Login" : "Signup"}
        </DialogTitle>
        <div className="flex-grow border-t border-black"></div>
        <DialogTitle>
          <Close className="cursor-pointer" onClick={onClose} />
        </DialogTitle>
      </div>
      <DialogContent>
        <div className="flex flex-col space-y-4">
          <form
            onSubmit={handleSubmit(
              isLogin ? handleLoginSubmit : handleSignupSubmit
            )}
            className="space-y-4"
          >
            {!isLogin && (
              <>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                />
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                />
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  {...register("email", { required: "Email is required" })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
                <FormControl fullWidth variant="outlined">
                  <InputLabel>I am a</InputLabel>
                  <Select
                    {...register("role", { required: "Role is required" })}
                    error={!!errors.role}
                    label="Role"
                  >
                    <MenuItem value="architecture">Architecture</MenuItem>
                    <MenuItem value="interior-designer">
                      Interior Designer
                    </MenuItem>
                    <MenuItem value="engineer">Engineer</MenuItem>
                    <MenuItem value="supplier">Supplier</MenuItem>
                    <MenuItem value="manufacturer">Manufacturer</MenuItem>
                    <MenuItem value="owner">Owner</MenuItem>
                  </Select>
                </FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      {...register("terms", {
                        required: "You must accept the terms and conditions",
                      })}
                      error={!!errors.terms}
                    />
                  }
                  label="I accept the terms and conditions"
                />
              </>
            )}
            {isLogin && (
              <>
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  {...register("email", { required: "Email is required" })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  {...register("password", {
                    required: "Password is required",
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              </>
            )}
            <button
              type="submit"
              className="w-full bg-black text-white border-[1px] border-gray-300 rounded-lg py-5 px-10"
            >
              {isLogin ? "Log In" : "Sign Up"}
            </button>
          </form>
          <div className="text-center">
            {isLogin ? (
              <div className="text-gray-800">
                Don't have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)} // Switch to Signup form
                  className="text-black"
                >
                  Join Wow Designs!
                </button>
              </div>
            ) : (
              <div>
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)} // Switch to Login form
                  className="text-black"
                >
                  Log In
                </button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginSignupModal;