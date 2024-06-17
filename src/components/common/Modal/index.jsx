import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
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
  const [isLogin, setIsLogin] = useState(true);
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
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
    >
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
          <button className="grid grid-cols-4 border-[1px] border-gray-300 rounded-lg py-3 px-5">
            <div className="col-span-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
              >
                <title>MS-SymbolLockup</title>
                <rect x="1" y="1" width="9" height="9" fill="#f25022" />
                <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
                <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
                <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
              </svg>
            </div>
            <div className="col-span-3">
              <p className="text-lg text-black tracking-widest text-left">
                Microsoft
              </p>
            </div>
          </button>
          <button className="grid grid-cols-4 border-[1px] border-gray-300 rounded-lg py-3 px-5">
            <div className="col-span-1">
              <svg
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 533.5 544.3"
                width="21"
                height="21"
              >
                <g>
                  <path
                    fill="#4285F4"
                    d="M533.5,278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1,33.8-25.7,63.7-54.4,82.7v68h87.7   C503.9,431.2,533.5,361.2,533.5,278.4z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M272.1,544.3c73.4,0,135.3-24.1,180.4-65.7l-87.7-68c-24.4,16.6-55.9,26-92.6,26c-71,0-131.2-47.9-152.8-112.3   H28.9v70.1C75.1,486.3,169.2,544.3,272.1,544.3z"
                  ></path>
                  <path
                    fill="#FBBC04"
                    d="M119.3,324.3c-11.4-33.8-11.4-70.4,0-104.2V150H28.9c-38.6,76.9-38.6,167.5,0,244.4L119.3,324.3z"
                  ></path>
                  <path
                    fill="#EA4335"
                    d="M272.1,107.7c38.8-0.6,76.3,14,104.4,40.8l0,0l77.7-77.7C405,24.6,339.7-0.8,272.1,0C169.2,0,75.1,58,28.9,150   l90.4,70.1C140.8,155.6,201.1,107.7,272.1,107.7z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="col-span-3">
              <p className="text-lg text-black tracking-widest text-left">
                Google
              </p>
            </div>
          </button>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
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
                  onClick={() => setIsLogin(false)}
                  className="text-black"
                >
                  Join Wow Designs!
                </button>
              </div>
            ) : (
              <div>
                Already have an account?{" "}
                <button onClick={() => setIsLogin(true)} className="text-black">
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
