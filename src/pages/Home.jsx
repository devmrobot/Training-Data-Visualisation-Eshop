import React from "react";
import "./home.css";
import { NavBar } from "../component/navbar/NavBar";

import { useStateContext } from "../contexts/ContextProvider";

export const Home = () => {

  const { activeMenu } = useStateContext();

  return (
    <>
    {activeMenu ? (
      <div className="main-open">
        <NavBar />
      </div>
    ) : (
      <div className="main-closed">
      <NavBar />
    </div> 
    )};
    </>
  );
};