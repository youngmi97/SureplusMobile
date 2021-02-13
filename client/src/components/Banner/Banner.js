import React from "react";
import "./Banner.css";

const Banner = ({ children, ...rest }) => {
  return (
    <button className="banner" {...rest}>
      {children}
    </button>
  );
};

export default Banner;
