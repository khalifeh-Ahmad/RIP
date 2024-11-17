// Home.js
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Keyframes for animation
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HomeContainer = styled(Box)`
  background: url("/images/p2.jpg");
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

const HeroSection = styled(motion(Box))`
  text-align: center;
  margin-bottom: 50px;
  animation: ${fadeIn} 1.5s ease;
  width: 100%;
  max-width: 1200px;
`;

const ParallaxSection = styled(motion(Box))`
  background-color: rgba(68, 68, 68, 0.8);
  color: #ccc;
  padding: 50px;
  margin: 20px 0;
  border-radius: 10px;
  width: 50%;
  display: flex;
  align-items: center;
  animation: ${fadeIn} 1.5s ease;
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  transition: all 1s ease;
  &:hover {
    transform: scale(1.1) !important;
    cursor: pointer;
  }
`;

const ParallaxImage = styled(motion.img)`
  width: 200px;
  height: auto;
  margin-right: 20px;
  border-radius: 50%;
  animation: ${fadeIn} 2s ease;
  transform: translateZ(0);
  transition: transform 0.5s ease;
  &:hover {
    transform: translateZ(30px) scale(1.05);
  }
`;

const AnimatedButton = styled(Button)`
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 15px rgba(255, 215, 0, 0.5);
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const handleStartPlanning = () => {
    navigate("/wizard");
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <HomeContainer>
      <HeroSection>
        <Slider {...sliderSettings}>
          <Box>
            <Typography
              variant="h3"
              gutterBottom
              component={motion.div}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              Welcome to Eternal Farewell Services
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              We provide compassionate support for your planning needs.
            </Typography>
            <AnimatedButton
              variant="contained"
              color="primary"
              onClick={handleStartPlanning}
              sx={{
                backgroundColor: "#FFD700",
                color: "#000",
                marginTop: "20px",
              }}
            >
              Start Planning Now
            </AnimatedButton>
          </Box>
          <Box>
            <Typography variant="h4" gutterBottom>
              Legacy Planning Services
            </Typography>
            <Typography variant="body1">
              Record meaningful messages and memories for your loved ones.
              Schedule future messages that will comfort your family in times of
              need.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" gutterBottom>
              Virtual Support Services
            </Typography>
            <Typography variant="body1">
              Access counseling, group support, and mindfulness tools. We are
              here to support you in your time of need.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" gutterBottom>
              Virtual Memorialization & Streaming
            </Typography>
            <Typography variant="body1">
              Create digital memory walls and stream funeral services for loved
              ones who can't attend in person. Our virtual tools help bring
              everyone together.
            </Typography>
          </Box>
        </Slider>
      </HeroSection>

      <ParallaxSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <ParallaxImage
          src="../../public/images/p1.jpg"
          alt="Funeral Planning"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        />
        <Box onClick={handleStartPlanning}>
          <Typography variant="h4" gutterBottom>
            Funeral Planning
          </Typography>
          <Typography variant="body1">
            Begin your personalized journey of planning a funeral service. Our
            step-by-step wizard will guide you through each decision with ease.
          </Typography>
        </Box>
      </ParallaxSection>

      <ParallaxSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <ParallaxImage
          src="../assets/img/p3.png"
          alt="Legacy Planning"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        />
        <Box>
          <Typography variant="h4" gutterBottom>
            Legacy Planning Services
          </Typography>
          <Typography variant="body1">
            Record meaningful messages and memories for your loved ones.
            Schedule future messages that will comfort your family in times of
            need.
          </Typography>
        </Box>
      </ParallaxSection>

      <ParallaxSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <ParallaxImage
          src="../../public/assets/img/banner1.png"
          alt="Virtual Support"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
        />
        <Box>
          <Typography variant="h4" gutterBottom>
            Virtual Support Services
          </Typography>
          <Typography variant="body1">
            Access counseling, group support, and mindfulness tools. We are here
            to support you in your time of need.
          </Typography>
        </Box>
      </ParallaxSection>

      <ParallaxSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <ParallaxImage
          src="../assets/img/p3.png"
          alt="Virtual Memorialization"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
        />
        <Box>
          <Typography variant="h4" gutterBottom>
            Virtual Memorialization & Streaming
          </Typography>
          <Typography variant="body1">
            Create digital memory walls and stream funeral services for loved
            ones who can't attend in person. Our virtual tools help bring
            everyone together.
          </Typography>
        </Box>
      </ParallaxSection>
    </HomeContainer>
  );
};

export default Home;
