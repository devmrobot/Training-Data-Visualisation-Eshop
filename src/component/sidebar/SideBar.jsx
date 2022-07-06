import React from "react";
import "./sideBar.css"

import { AiFillHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShopping } from 'react-icons/ai';
import { BiMessageRoundedDots } from 'react-icons/bi';

export const SideBar = () => {
  return (
    <>
      <div className="container">
        <div className="navigation">
          <ul>
            <li>
              <a href="#">
                <span><AiFillHome className="icon"/></span>
                <span className="title">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span><AiOutlineUser className="icon"/></span>
                <span className="title">Visitors</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span ><AiOutlineShopping className="icon"/></span>
                <span className="title">Products</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span ><BiMessageRoundedDots className="icon"/></span>
                <span className="title">Messages</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
