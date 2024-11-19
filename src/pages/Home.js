// Home.js
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HoverCard from "../components/HoverCard";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Img1 from "../assets/img/b1.png";
// import Img2 from "../assets/img/b2.png";
// import Img3 from "../assets/img/b3.png";
// import Img4 from "../assets/img/s4.jpg";
import Img1 from "../assets/img/s1.jpg";
import Img2 from "../assets/img/s2.jpg";
import Img3 from "../assets/img/s3.jpg";
import Img4 from "../assets/img/s4.jpg";
// Keyframes for animation

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const heroFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px) scale(0.95);
  }
  50% {
    opacity: 0.5;
    transform: translateY(10px) scale(1.02);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
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

const HomeContainer = styled(Box)`
  background: url("/images/p2.jpg");
  background-repeat: no-repeat;
  animation: ${gradientAnimation} 30s ease infinite;
  background-position: center;
  background-size: cover;
  color: #eeac0b;
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
  width: 100%;
  max-width: 1200px;
  animation: ${heroFadeIn} 1.8s ease-out;

  /* Adding more animated effects for a smooth entrance */
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #eeac0b;
    opacity: 0;
    animation: ${heroFadeIn} 2.2s ease forwards;
  }

  /* Hover effect */
  &:hover {
    animation: ${hoverEffect} 0.6s ease-in-out;
    transform: scale(1.02);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
    transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
  }
`;

const ParallaxSection = styled(motion(Box))`
  background-color: rgba(68, 68, 68, 0.8) !important;
  //background-color: gray !important;
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

  --c: #eeac0b;
  --b: 3px;
  --g: 10px;
  padding: calc(var(--g) + var(--b));
  --_g: #0000 25%, var(--c) 0;
  background: conic-gradient(
        from 180deg at top var(--b) right var(--b),
        var(--_g)
      )
      var(--_i, 200%) 0 /200% var(--_i, var(--b)) no-repeat,
    conic-gradient(at bottom var(--b) left var(--b), var(--_g)) 0
      var(--_i, 200%) / var(--_i, var(--b)) 200% no-repeat;
  transition: 0.3s, background-position 0.3s 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1) !important;
    cursor: pointer;
    --_i: 100%;
    transition: 0.5s, background-size 0.5s 0.5s;
  }
`;

const ParallaxImage = styled(motion.img)`
  width: 150px;
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
  const { t } = useTranslation();
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
              {t("slider.WelEterSrv")}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              {t("slider.ProvSupPln")}
            </Typography>
            <AnimatedButton
              variant="contained"
              color="primary"
              onClick={handleStartPlanning}
              sx={{
                backgroundColor: "#eeac0b",
                color: "#000",
                margin: "20px",
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
        <ParallaxImage src={Img1} />
        <Box onClick={handleStartPlanning}>
          <Typography variant="h4" gutterBottom>
            {t("home.fnPln")}
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
          src={Img2}
          alt="Legacy Planning"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        />
        <Box>
          <Typography variant="h4" gutterBottom>
            {t("home.legacyPlnSrv")}
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
          src={Img3}
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
          src={Img4}
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
