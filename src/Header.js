import React from "react";
import "./Header.scss";
import FastfoodTwoToneIcon from "@material-ui/icons/FastfoodTwoTone";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <FastfoodTwoToneIcon
          style={{ color: "white" }}
          fontSize="large"
          className="header__icon"
        />
      </IconButton>
      <img
        className="header_logo"
        src="https://image.flaticon.com/icons/png/512/184/184531.png"
        alt="logo"
      />
      <IconButton>
        <GitHubIcon style={{ color: "white" }} fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
