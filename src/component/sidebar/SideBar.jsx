import React from "react";
import "./sideBar.css";

import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";

import { useStateContext } from "../../contexts/ContextProvider";

export const SideBar = () => {

  const { activeMenu } = useStateContext();

  return (
    <>
      <div className="container">
        {activeMenu ? (
            <div className="navigation-open">
              <ul>
                <li>
                  <a href="#">
                    <span>
                      <AiFillHome className="icon" />
                    </span>
                    <h1 className="main-title">Dashboard</h1>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <AiOutlineUser className="icon" />
                    </span>
                    <span className="title">Visitors</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <AiOutlineShopping className="icon" />
                    </span>
                    <span className="title">Products</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <BiMessageRoundedDots className="icon" />
                    </span>
                    <span className="title">Messages</span>
                  </a>
                </li>
              </ul>
            </div>
        ) : (
            <div className="navigation-closed">
              <ul>
                <li>
                  <a href="#">
                    <span>
                      <AiFillHome className="icon" />
                    </span>
                    <h1 className="main-title">Dashboard</h1>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <AiOutlineUser className="icon" />
                    </span>
                    <span className="title">Visitors</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <AiOutlineShopping className="icon" />
                    </span>
                    <span className="title">Products</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <BiMessageRoundedDots className="icon" />
                    </span>
                    <span className="title">Messages</span>
                  </a>
                </li>
              </ul>
            </div>
        )}
      </div>
    </>
  );
};
