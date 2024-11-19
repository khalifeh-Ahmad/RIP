import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import About from "../pages/About";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const { t, i18n } = useTranslation();

  // Change Language Function
  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLanguage);
    console.log(`Language changed to: ${newLanguage}`);
  };

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
                      {t("navbar.about")}
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
                      {t("navbar.location")}
                      </Button>
                    </div>
                    <div className="topmenu-btns">
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          variant="link"
                          className="nav-icon text-white"
                        >
                          <FontAwesomeIcon icon={faGlobe} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={toggleLanguage}
                            style={{ color: "black" }}
                          >
                            {i18n.language === "en" ? "French" : "English"}
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

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
