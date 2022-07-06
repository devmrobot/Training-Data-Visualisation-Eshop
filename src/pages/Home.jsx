import React from "react";
import logo from "../assets/logo.svg";
import "./home.css";
import { NavBar } from "../component/navbar/NavBar";

export const Home = () => {
  return (
    <>
      <div className="main">
        <NavBar />
        <h1>Home</h1>
        <link src={logo} alt={logo} className="logo" />
      </div>
    </>
  );
};
