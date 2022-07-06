import React, { useState, useEffect } from "react";
import "./home.css";
import axios from "axios";
import { NavBar } from "../component/navbar/NavBar";

import { BiDollarCircle } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { IoCalendarSharp } from "react-icons/io5";

import { useStateContext } from "../contexts/ContextProvider";

export const Home = () => {
  const { activeMenu } = useStateContext();
  const [globalsCa, setGlobalsCa] = useState([]);
  const [numbersOrder, setNumbersOrder] = useState([]);
  const [conversionsRate, setConversionsRate] = useState([]);
  const [averageTimes, setAverageTimes] = useState([]);
  const [caBrands, setCaBrands] = useState([]);
  const [caVisitors, setCaVisitors] = useState([]);
  const [articleByVisitors, setArticleByVisitors] = useState([]);

  //GLOBAL CA
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/products/global-ca-product`)
      .then((res) => res.data)
      .then((data) => setGlobalsCa(data));
  }, []);

  //ORDER NUMBERS
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/products/number-of-orders`)
      .then((res) => res.data)
      .then((data) => setNumbersOrder(data));
  }, []);

  //CONVERSIONS RATE
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/order-conversion-rate")
      .then((res) => res.data)
      .then((data) => setConversionsRate(data));
  }, []);

    //DURATION TIME
    useEffect(() => {
      axios
        .get("http://localhost:8000/api/visitors//average-consultation-duration")
        .then((res) => res.data)
        .then((data) => setAverageTimes(data));
    }, []);

  //CA BY BRAND
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/brand-article-ordered")
      .then((res) => res.data)
      .then((data) => setCaBrands(data));
  }, []);

  //CA BY VISITOR
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/visitors/ca-by-visitor")
      .then((res) => res.data)
      .then((data) => setCaVisitors(data));
  }, []);

  //ARTICLES BOUGHT BY VISITORS
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/visitors/article-bought-visitor")
      .then((res) => res.data)
      .then((data) => setArticleByVisitors(data));
  }, []);

  console.log("test1", globalsCa);
  console.log("test2", numbersOrder);
  console.log("test3", conversionsRate);
  console.log("test4", caBrands);
  console.log("test5", caVisitors);
  console.log("test6", articleByVisitors);
  console.log("test7", averageTimes);

  return (
    <>
      {activeMenu ? (
        <div className="main-open">
          <NavBar />
          <div className="container-home">
            <div className="charts-container">
              <div className="global-ca">
                <div className="icon-charts">
                  <BiDollarCircle />
                </div>
                <h3>CA Global : </h3>
                {globalsCa &&
                  globalsCa.map((globalCa) => (
                    <p key={globalCa.id}>{globalCa}</p>
                  ))}
              </div>
              <div className="orders-number">
                <h3>Total Orders: </h3>
                {numbersOrder &&
                  numbersOrder.map((numberOrder) => (
                    <p key={numberOrder.id}>{numberOrder}</p>
                  ))}
              </div>
              <div className="conversion-rate">
                <h3>Conversion Rate : </h3>
                {conversionsRate &&
                  conversionsRate.map((conversionRate) => (
                    <p key={conversionRate.id}>{conversionRate}</p>
                  ))}
              </div>
              <div className="ca-brand"></div>
              <div className="ca-visitor"></div>
              <div className="array"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="main-closed">
          <NavBar />
        </div>
      )}
      ;
    </>
  );
};
