// Enhanced version of Footer.js
// import React from "react";
import { Box, Typography } from "@mui/material";
// import styled from "styled-components";
import "../../App.css";
import "./animate.css";
import "./font-awesome.min.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p>
                Aoluptas sit aspernatur aut odit aut fugit, sed elits quias
                consequuntur magni dolores eos qui ratione volust luptatem sequi
                nesciunt. .
              </p>
              <ul className="personal-info">
                <li>
                  <i className="fa fa-map-marker"></i> 10th Floor,Washington
                  Square Park, NY, United States.
                </li>
                <li>
                  <i className="fa fa-envelope"></i> Support@domain.com
                </li>
                <li>
                  <i className="fa fa-phone"></i> (004)+ 124 45 78 678
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 className="">Service provided</h5>
              <ul className="links">
                <li>
                  <a href="#.">Funeral Planning</a>
                </li>
                <li>
                  <a href="#.">Enhanced Legacy Planning</a>
                </li>
                <li>
                  <a href="#.">Enhanced Virtual Support</a>
                </li>
                <li>
                  <a href="#.">Virtual Memorialization</a>
                </li>
                <li>
                  <a href="#.">Virtual Streaming</a>
                </li>
                <li>
                  <a href="#.">Grieving Counseling</a>
                </li>
                <li>
                  <a href="#.">Platform Dashboard</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6 className="follow">Follow us</h6>
              <ul className="social_icons pull-left margin-left-50 margin-top-10">
                <li>
                  <a href="#.">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>

                <li>
                  <a href="#.">
                    <i className="fa fa-behance"></i>
                  </a>
                </li>
              </ul>

              <div className="follow">
                <img
                  className="margin-bottom-30 logo-footer"
                  src="../../assets/img/logo.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rights">
        <div className="container">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Funeral Services. All rights
            reserved.
          </Typography>
        </div>
      </div>
    </div>
  );
};

// const FooterContainer = styled(Box)`
//   background-color: #333333;
//   color: #cccccc;
//   padding: 20px;
//   text-align: center;
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   z-index: 1000;
// `;

// const FooterLogo = styled.img`
//   height: 30px;
//   margin-bottom: 10px;
// `;

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <FooterLogo src="/path/to/logo.png" alt="Footer Logo" />
//       <Typography variant="body2">
//         &copy; {new Date().getFullYear()} Funeral Services. All rights reserved.
//       </Typography>
//     </FooterContainer>
//   );
// };

export default Footer;
