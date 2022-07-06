import React from "react";
import "./navbar.css";

import { GiHamburgerMenu } from 'react-icons/gi';

export const NavBar = () => {
  return (
  <>
    <div className="nav">
      <GiHamburgerMenu className="icon-burger"/>
    </div>
  </>
  )
};
