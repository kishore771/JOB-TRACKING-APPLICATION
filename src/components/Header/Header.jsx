import React from "react";
import "./Header.css";

const Header = ({ totalJobs }) => {
  return (
    <header className="header">
      <h1 className="header-title">Job Application Tracker</h1>
      <p className="header-count">
        Total Applications: <strong>{totalJobs}</strong>
      </p>
    </header>
  );
};

export default Header;
