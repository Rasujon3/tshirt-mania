import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h2>Welcome to TShirt Mania!!!</h2>
      <nav>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/orderreview">Order Review</CustomLink>
        <CustomLink to="/grandpa">Grand Pa</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
