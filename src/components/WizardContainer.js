import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Container as MuiContainer,
  Snackbar,
  Alert,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled(MuiContainer)`
  width: 80%;
  margin: 50px auto;
  background-color: #333333;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  color: wheat;
  padding: 20px;
`;

const Stepper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 2px solid #444444;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 10px;
  }
`;

const Step = styled.div`
  flex: 1;
  text-align: center;
  position: relative;
  font-size: 16px;
  font-weight: bold;
  color: ${({ isActive }) => (isActive ? "#eeac0b" : "#666666")};
`;

const Content = styled(motion.div)`
  padding: 40px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
  }

  h2 {
    color: #eeac0b;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 30px;
    color: #cccccc;
    font-size: 18px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  padding: 20px;

  button {
    padding: 12px 25px;
    border: none;
    border-radius: 5px;
    background-color: #eeac0b;
    color: #000000;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: #ffffff;
      transform: scale(1.05);
    }

    &:disabled {
      background-color: #666666;
      color: #cccccc;
      cursor: not-allowed;
    }
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #444444;
  position: relative;
  border-radius: 5px;
  overflow: hidden;

  div {
    width: ${({ currentStep, totalSteps }) =>
      (currentStep / totalSteps) * 100}%;
    height: 100%;
    background-color: #eeac0b;
    transition: width 0.3s ease;
  }
`;

const WizardContainer = ({
  currentStep,
  steps,
  children,
  handleNext,
  handlePrev,
  formData,
  setFormData,
  errors,
  setErrors,
}) => {
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false); // State for tracking success

  const handleSubmit = () => {
    // Add your form validation and submission logic here
    // If validation passes, set the payment as successful
    setIsPaymentSuccessful(true);
  };

  return (
    <Container>
      <ProgressBar currentStep={currentStep} totalSteps={steps.length}>
        <div />
      </ProgressBar>
      <Stepper>
        {steps.map((step, index) => (
          <Step key={index} isActive={index + 1 === currentStep}>
            {step}
          </Step>
        ))}
      </Stepper>
      <Content
        key={currentStep}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </Content>
      <ButtonGroup>
        <button onClick={handlePrev} disabled={currentStep === 1}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
        {currentStep < steps.length ? (
          <button onClick={handleNext}>
            Next <FontAwesomeIcon icon={faArrowRight} />
          </button>
        ) : (
          <button onClick={handleSubmit}>
            <FontAwesomeIcon icon={faPaperPlane} /> Submit
          </button>
        )}
      </ButtonGroup>

      {/* Success Notification */}
      <Snackbar
        open={isPaymentSuccessful}
        autoHideDuration={6000}
        onClose={() => setIsPaymentSuccessful(false)}
      >
        <Alert
          onClose={() => setIsPaymentSuccessful(false)}
          severity="success"
          sx={{ width: "100%" }}
          variant="filled"
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          🎉 Payment successful! Thank you for completing your payment. 🎉
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default WizardContainer;
