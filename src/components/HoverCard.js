import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
const CardContainer = styled(Box)`
  padding: 25px;
//   margin: 20px 0;
  border-radius: 20px;
  width: 35%;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  transition: all 1s ease;

  //   &:hover {
  //     transform: translateY(-10px); /* Add a slight upward movement */
  //   }

  //   &:hover .border-effect {
  //     border-color: #ffaa00; /* Change border color on hover */
  //   }
`;

const BorderEffect = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid transparent; /* Initially transparent */
  border-radius: 30px;
  transition: border-color 0.3s ease;
`;

const ParallaxImage = styled.img`
  //   width: 100%;
  //   height: 100%;
  //   object-fit: cover;
  // position: absolute;
  //   padding: 10px;

  //   top: 0;
  //   left: 0;
  z-index: 0;
  //   filter: brightness(50%); /* Make the image darker so text is more readable */
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

const CardContent = styled(Box)`
  position: absolute;
  //   z-index: 1;
  //   color: #ffffff;
  //   text-align: center;
  //   display: flex;
  //   flex-direction: column;
  align-items: center;
  //   justify-content: center;
  //   height: 100%;
  //   padding: 20px;
`;

const CardWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-top: 50px;
  flex-wrap: nowrap; /* Prevent wrapping, keeps cards in the same row */
  width: 100%;
  max-width: 1200px; /* Adjust width to ensure proper spacing */
`;

const HoverCard = ({ image, title }) => {
  return (
    <CardContainer>
      <BorderEffect className="border-effect" />
      <ParallaxImage src={image} alt="Card Background" />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
    </CardContainer>
  );
};

export default HoverCard;
