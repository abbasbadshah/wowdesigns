import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Apartment,
  AccountCircle,
  MiscellaneousServices,
} from "@mui/icons-material";
import { Layout } from "../../components/layout";
import StepConnector from "@mui/material/StepConnector";
import { FormProvider, useForm } from "react-hook-form";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";

const ColorlibStepIcon = (props) => {
  const { active, completed, className } = props;

  const icons = {
    1: <Apartment />,
    2: <AccountCircle />,
    3: <MiscellaneousServices />,
  };

  return (
    <div
      className={`${
        active
          ? "bg-black shadow-lg"
          : "bg-gray-300"
      } w-12 h-12 flex items-center justify-center rounded-full text-white ${className}`}
    >
      {icons[String(props.icon)]}
    </div>
  );
};

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const steps = ["My Company", "Company Profile", "Services"];

export default function CreateCompany() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const methods = useForm();
  const { handleSubmit, setValue } = methods;
  const [formData, setFormData] = React.useState({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const isStepOptional = (step) => step === 1;

  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({});
    setValue("streams", "");
    setValue("companyProfile", "");
    setValue("services", "");
  };

  const onSubmit = (data) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    console.log({ ...formData, ...data });
    setIsSubmitted(true);
  };

  return (
    <Layout headerType={"header2"}>
      <div className="text-center text-5xl mt-5 font-bold italic">
        {" "}
        Create your company account{" "}
      </div>
      <div className="flex justify-center items-center my-20">
        <FormProvider {...methods}>
          <Box className="flex flex-col justify-between p-10 flex-grow max-w-[750px] border-[1px] border-black rounded-lg shadow-sm">
            {isSubmitted ? (
              <Typography className="my-4">
                Thank you for your submission! Your account was successfully
                registered and will be activated soon.
              </Typography>
            ) : (
              <div>
                <Stepper
                  alternativeLabel
                  activeStep={activeStep}
                  connector={<StepConnector />}
                  className="mb-8"
                >
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepLabel
                        StepIconComponent={ColorlibStepIcon}
                        icon={index + 1}
                      >
                        {label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Typography className="my-4">
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Box className="flex flex-row justify-end">
                      <Button onClick={handleReset}>Reset</Button>
                    </Box>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col flex-grow"
                    >
                      {activeStep === 0 && <Step1 />}
                      {activeStep === 1 && <Step2 />}
                      {activeStep === 2 && <Step3 />}
                      <Box className="flex flex-row justify-between mt-20 pt-10 border-t-[1px] border-gray-400">
                        <button
                          className="hover:bg-[#262626] bg-transparent rounded-lg border-2 border-black hover:shadow-lg hover:text-white text-[#262626] py-2 px-8 text-lg font-bold"
                          disabled={activeStep === 0}
                          onClick={handleBack}
                        >
                          Back
                        </button>
                        <div className="flex gap-5">
                        {isStepOptional(activeStep) && (
                          <button
                            className="bg-[#DC3545] hover:bg-transparent rounded-lg border-2 border-[#DC3545] hover:shadow-lg text-white hover:text-[#DC3545] py-2 px-8 text-lg font-bold"
                            onClick={handleSkip}
                          >
                            Skip
                          </button>
                        )}
                        <button
                          type="button"
                          className="bg-[#262626] hover:bg-transparent rounded-lg border-2 border-black hover:shadow-lg text-white hover:text-[#262626] py-2 px-8 text-lg font-bold"
                          onClick={
                            activeStep === steps.length - 1
                              ? handleSubmit(onSubmit)
                              : handleNext
                          }
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </button>
                        </div>
                      </Box>
                    </form>
                  </React.Fragment>
                )}
              </div>
            )}
          </Box>
        </FormProvider>
      </div>
    </Layout>
  );
}
