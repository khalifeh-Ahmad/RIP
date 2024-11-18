import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import About from "../pages/About";

const NavBar = () => {
  return (
    <div>
      <div className="top-navbar">
        <div className="mainmenu">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-12 p-0">
                <div className="top-menu">
                  <div className="ls-menu">
                    <div>
                      <Button color="inherit" component={Link} to="/about">
                        About
                      </Button>
                    </div>
                    <div>
                      <Button color="inherit" component={Link} to="/clinets">
                        Clients
                      </Button>
                    </div>
                    <div>
                      <Button color="inherit" component={Link} to="/media">
                        Media
                      </Button>
                    </div>
                  </div>
                  <div className="logo">
                    <a href="/" className="p-0">
                      <img
                        src={require("../assets/img/logo1.png")}
                        width="100"
                        height="50"
                        alt="Logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </a>
                  </div>
                  <div className="rs-menu">
                    <div>
                      <Button color="inherit" component={Link} to="/contact">
                        Contact
                      </Button>
                    </div>
                    <div className="menu-inq-div">
                      <Button
                        className="menu-inq"
                        color="inherit"
                        component={Link}
                        to="/services"
                      >
                        Services
                      </Button>
                    </div>
                    <div>
                      <Button color="inherit" component={Link} to="/locations">
                        Locations
                      </Button>
                    </div>
                    <div className="topmenu-btns">
                      <div className="audio-btn">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 5.5V16.5"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.25 8.25V13.75"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.5 10.0833V11.9167"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5.5 10.0833V11.9167"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.75 6.41667V15.5833"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.0002 20.1667C16.0627 20.1667 20.1668 16.0626 20.1668 11C20.1668 5.93739 16.0627 1.83333 11.0002 1.83333C5.93755 1.83333 1.8335 5.93739 1.8335 11C1.8335 16.0626 5.93755 20.1667 11.0002 20.1667Z"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <a href="#d" className="lang-btn">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.6665 10C1.6665 14.6023 5.39746 18.3333 9.99984 18.3333C14.6022 18.3333 18.3332 14.6023 18.3332 10C18.3332 5.39763 14.6022 1.66667 9.99984 1.66667C5.39746 1.66667 1.6665 5.39763 1.6665 10Z"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.8335 1.70777C10.8335 1.70777 13.3335 4.99995 13.3335 9.99992C13.3335 14.9999 10.8335 18.2922 10.8335 18.2922"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.1665 18.2922C9.1665 18.2922 6.6665 14.9999 6.6665 9.99992C6.6665 4.99995 9.1665 1.70777 9.1665 1.70777"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2.19141 12.9167H17.8087"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2.19141 7.08333H17.8087"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        EN
                      </a>
                      <div className="menu-btn">
                        <div className="open-menu"></div>
                        <div className="close-menu"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
