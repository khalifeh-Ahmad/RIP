import React, { useState } from "react";
import WizardContainer from "../components/WizardContainer";
import Steps from "../components/Steps";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

// Keyframes for background pattern animation
const movePattern = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 100% 100%; }
`;

// Styled component for WizardContainer with creative background
const StyledWizardContainer = styled(WizardContainer)`
  background: url('/images/pattern.jpeg') repeat;
  animation: ${movePattern} 30s linear infinite;
  padding: 40px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Wizard = () => {
  const [step, setStep] = useState(1);
  const steps = [
    "Step 1",
    "Step 2",
    "Step 3",
    "Step 4",
    "Step 5",
    "Step 6",
    "Step 7",
    "Step 8",
    "Step 9",
  ];

  const [formData, setFormData] = useState({
    serviceType: "",
    budget: "",
    arrangement: "",
    insured: "",
    policyNumber: "",
    location: "",
    carService: false,
    carServiceBudget: "",
    carType: "",
    flowerService: false,
    flowerServiceBudget: "",
    flowerType: "",
    flowerColor: "",
    videoStreaming: false,
    videoStreamingBudget: "",
    counseling: false,
  });

  const [errors, setErrors] = useState({});

  const validateStep = () => {
    const validationErrors = {};
    if (step === 1) {
      if (!formData.serviceType) validationErrors.serviceType = "Please select a service type.";
      if (!formData.budget) validationErrors.budget = "Please enter your budget.";
    }
    if (step === 2 && !formData.arrangement) {
      validationErrors.arrangement = "Please select burial or cremation.";
    }
    if (step === 3 && !formData.insured) {
      validationErrors.insured = "Please select your insurance status.";
    }
    if (step === 4 && !formData.location) {
      validationErrors.location = "Please select a location.";
    }
    if (step === 5 && formData.carService) {
      if (!formData.carServiceBudget) validationErrors.carServiceBudget = "Please enter a car service budget.";
      if (!formData.carType) validationErrors.carType = "Please select a car type.";
    }
    if (step === 6 && formData.flowerService) {
      if (!formData.flowerServiceBudget) validationErrors.flowerServiceBudget = "Please enter a flower service budget.";
      if (!formData.flowerType) validationErrors.flowerType = "Please select a flower type.";
      if (!formData.flowerColor) validationErrors.flowerColor = "Please select a flower color.";
    }
    if (step === 7 && formData.videoStreaming) {
      if (!formData.videoStreamingBudget) validationErrors.videoStreamingBudget = "Please enter a video streaming budget.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0; // Return true if no errors
  };

  const nextStep = () => {
    if (validateStep()) setStep((prev) => Math.min(prev + 1, steps.length));
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
    setErrors({ ...errors, [input]: "" }); // Clear error when field is updated
  };

  const handleCheckboxChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.checked });
    setErrors({ ...errors, [input]: "" }); // Clear error when checkbox is updated
  };

  return (
    <WizardContainer
      currentStep={step}
      steps={steps}
      handleNext={nextStep}
      handlePrev={prevStep}
    >
      <Steps
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        errors={errors} // Pass errors to Steps for display
      />
    </WizardContainer>
  );
};

export default Wizard;
