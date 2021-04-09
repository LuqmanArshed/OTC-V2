import React from "react";

import logo from "../logo.svg";
import { useState, useEffect } from "react";

function Navbar() {
  const onThemeToggle = (event) => {
    event.preventDefault();

    window.toggleTheme();
  };

  return (
    <React.Fragment>
      <header className="border-bottom border-info navbar navbar-header navbar-header-fixed ">
        <a id="mainMenuOpen" className="burger-menu">
          <i data-feather="menu"></i>
        </a>
        <div className="navbar-brand mg-l-150 ">
          <a>
            <span className="tx-26 df-logo">
              <b>Version</b>
            </span>
          </a>
        </div>
        <div className="navbar-right">
          <a
            href="#"
            className="ml-auto"
            id="theme-toggler"
            value="click"
            onClick={onThemeToggle}
          ></a>

          <div className="dropdown dropdown-profile">
            <a
              className="dropdown-link"
              data-toggle="dropdown"
              data-display="static"
            >
              <div className="avatar avatar-sm avatar-online">
                <span className="avatar-initial rounded-circle">
                  <img src={logo} className="App-logo" alt="logo" />
                </span>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-right tx-13">
              <div className="avatar avatar-lg avatar-online mg-b-15">
                <span className="avatar-initial rounded-circle">
                  <img src={logo} className="App-logo" alt="logo" />
                </span>
              </div>
              <h6 className="tx-semibold mg-b-5"></h6>
              <p className="mg-b-25 tx-12 tx-color-03"></p>

              <div className="dropdown-divider"></div>
              <button className="dropdown-item">
                <i data-feather="log-out"></i>Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Navbar;
