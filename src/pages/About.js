// About.js
import React from "react";
import { Box, Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

// Keyframes for animation
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const hoverEffect = keyframes`
  0% {
    transform: translateY(0);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  50% {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
  100% {
    transform: translateY(0);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AboutContainer = styled(Box)`
  background: url("/images/about-bg.jpg");
  background-repeat: no-repeat;
  animation: ${gradientAnimation} 30s ease infinite;
  background-position: center;
  background-size: cover;
  color: #ffd700;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow: hidden;
`;

const Section = styled(motion(Box))`
  background-color: rgba(68, 68, 68, 0.8);
  color: #ccc;
  padding: 40px;
  margin: 20px 0;
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1.5s ease;
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  transition: all 1s ease;
  &:hover {
    animation: ${hoverEffect} 0.6s ease-in-out;
    transform: scale(1.05) !important;
    cursor: pointer;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <section class="our-mv">
        <div class="our-m-bg"></div>
        <div class="vbg"></div>
        <div class="our-v-bg"></div>
        <div class="container">
          <div class="row justify-content-between mv-mobile">
            <div class="col-md-5 position-relative">
              <div class="our-m-bg-mobile"></div>
              <h2>OUR MISSION</h2>
              <p>
                We strive to simplify the process of funeral planning and
                memorialization, offering a range of digital and in-person
                services that bring families together during times of loss. Our
                mission is to create meaningful connections and memories through
                respectful and personalized services.
              </p>
            </div>
            <div class="col-md-5 position-relative">
              <div class="our-v-bg-mobile"></div>
              <h2 class="text-white">OUR Values</h2>
              <p class="text-white">
                Compassion, respect, and integrity are at the heart of
                everything we do. We believe in treating every individual and
                family with the utmost care, ensuring that every service we
                provide is both thoughtful and personalized.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="accr">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>
                <span>Accreditations</span>
                <br />
                That Set Us Apart
              </h2>
            </div>
          </div>
          <div class="row accr-cards-area">
            <div class="col-md-2">
              <div class="accr-card">
                <img src="assets/img/accr1.svg" />
              </div>
            </div>
            <div class="col-md-2">
              <div class="accr-card">
                <img src="assets/img/accr2.svg" />
              </div>
            </div>
            <div class="col-md-2">
              <div class="accr-card">
                <img src="assets/img/accr3.svg" />
              </div>
            </div>
            <div class="col-md-2">
              <div class="accr-card">
                <img src="assets/img/accr4.svg" />
              </div>
            </div>
            <div class="col-md-2">
              <div class="accr-card">
                <img src="assets/img/accr5.svg" />
              </div>
            </div>
            <div class="col-md-2">
              <div class="accr-card">
                <img src="assets/img/accr6.svg" />
              </div>
            </div>
            <div class="col-md-2">
              <div class="accr-card">
                <img src="assets/img/accr7.svg" />
              </div>
            </div>
            <div class="col-md-2">
              <div class="accr-card">
                <img src="assets/img/accr8.svg" />
              </div>
            </div>
            <div class="col-md-2">
              <div class="accr-card">
                <img src="assets/img/accr9.svg" />
              </div>
            </div>
            <div class="col-md-2">
              <div class="accr-card">
                <img src="assets/img/accr10.svg" />
              </div>
            </div>
            <div class="col-md-2">
              <div class="accr-card">
                <img src="assets/img/accr1.svg" />
              </div>
            </div>
            <div class="col-md-2">
              <div class="accr-card">
                <img src="assets/img/accr2.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Typography variant="h3" gutterBottom>
          About Eternal Farewell Services
        </Typography>
        <Typography variant="body1">
          At Eternal Farewell, we are dedicated to providing comprehensive and
          compassionate support to help you plan and celebrate the lives of
          loved ones. Our services are designed with empathy, care, and
          precision to honor and remember those who have left us.
        </Typography>
      </Section>

      <Section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        <Typography variant="h4" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1">
          We strive to simplify the process of funeral planning and
          memorialization, offering a range of digital and in-person services
          that bring families together during times of loss. Our mission is to
          create meaningful connections and memories through respectful and
          personalized services.
        </Typography>
      </Section>

      <Section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <Typography variant="h4" gutterBottom>
          Our Values
        </Typography>
        <Typography variant="body1">
          Compassion, respect, and integrity are at the heart of everything we
          do. We believe in treating every individual and family with the utmost
          care, ensuring that every service we provide is both thoughtful and
          personalized.
        </Typography>
      </Section>

      <Section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
      >
        <Typography variant="h4" gutterBottom>
          Why Choose Us?
        </Typography>
        <Typography variant="body1">
          From advanced planning tools to virtual memorialization, we offer a
          wide variety of options to meet your needs. Our team is here to guide
          you through each step, ensuring that you have the support you need
          during this challenging time.
        </Typography>
      </Section> */}
    </AboutContainer>
  );
};

export default About;
