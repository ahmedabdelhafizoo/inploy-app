import React from "react";

const AppHeader = () => {
  return (
    <header className="header text-center py-3">
      <a href="##">
          <img
            src={require("../../assets/images/logo.svg").default}
            alt="logo images"
            className="header__logo"
          />
      </a>
    </header>
  );
};

export default AppHeader;
