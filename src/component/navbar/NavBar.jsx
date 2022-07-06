import React from "react";
import { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import user from "../../assets/user.jpeg";

import { IoReorderThree } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoCalendarSharp } from "react-icons/io5";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";

import { useStateContext } from "../../contexts/ContextProvider";

export const NavBar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const [isClicked, setIsClicked] = useState(false);

  const handleActiveMenu = () => {
    setActiveMenu(!activeMenu);
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div className="navbar">
        <div className="nav">
          <div className="icon-burger" onClick={handleActiveMenu}>
            {isClicked ? <IoClose /> : <IoReorderThree />}
          </div>
          <NavLink to="#">
          <img className="logo" src={logo} alt={logo} />
          </NavLink>
        </div>
        <div className="wrapper-menu">
          <NavLink to="#" className="icon-nav">
            <IoCalendarSharp />
          </NavLink>
          <NavLink to="#" className="icon-nav">
            <IoDocumentAttachSharp />
          </NavLink>
          <NavLink to="#">
            <button className="user-profile">
              <img className="user-profile" src={user} alt="user-profile" />
              <p>Hi, Paul</p>
              <IoChevronDown />
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
