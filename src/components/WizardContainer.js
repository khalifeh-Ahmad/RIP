// Enhanced version of WizardContainer.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AppBar, Toolbar, Typography, Button, Container as MuiContainer } from "@mui/material";

const Container = styled(MuiContainer)`
  width: 80%;
  margin: 50px auto;
  background-color: #333333;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  color: #cccccc;
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
  cursor: ${({ isActive }) => (isActive ? "default" : "pointer")};

  &:hover {
    color: ${({ isActive }) => (isActive ? "#eeac0b" : "#CCCCCC")};
  }

  &::after {
    content: "";
    position: absolute;
    width: ${({ isActive }) => (isActive ? "100%" : "50%")};
    height: 3px;
    background: ${({ isActive }) => (isActive ? "#eeac0b" : "#444444")};
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    font-size: 20px;
    &::after {
      width: 100%;
    }
  }
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
    width: ${({ currentStep, totalSteps }) => (currentStep / totalSteps) * 100}%;
    height: 100%;
    background-color: #eeac0b;
    transition: width 0.3s ease;
  }
`;

const WizardContainer = ({ currentStep, steps, children, handleNext, handlePrev }) => {
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
          <i className="fas fa-arrow-left"></i> Back
        </button>
        <button onClick={handleNext}>
          {currentStep === steps.length ? (
            <>
              <i className="fas fa-check"></i> Submit
            </>
          ) : (
            <>
              Next <i className="fas fa-arrow-right"></i>
            </>
          )}
        </button>
      </ButtonGroup>
    </Container>
  );
};

export default WizardContainer;
